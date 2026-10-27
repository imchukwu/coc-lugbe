package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"

	"coc-lugbe-backend/internal/config"
	"coc-lugbe-backend/internal/database"
	"coc-lugbe-backend/internal/handlers"
	"coc-lugbe-backend/internal/middleware"
)

func main() {
	cfg := config.Load()

	ctx := context.Background()

	// Initialize Store: Attempt Google Cloud Firestore first; fallback to MemoryStore
	var store database.Store
	firestoreStore, err := database.NewFirestoreStore(ctx, cfg.ProjectID)
	if err != nil {
		log.Printf("[NOTICE] Could not connect to Google Cloud Firestore (%v). Using fast in-memory store fallback.", err)
		store = database.NewMemoryStore()
	} else {
		log.Printf("[SUCCESS] Connected to Google Cloud Firestore (project: %s)", cfg.ProjectID)
		store = firestoreStore
	}

	h := handlers.New(cfg, store)

	router := gin.Default()
	router.Use(middleware.CORSMiddleware(cfg))

	// Ensure upload directory exists and serve static uploads
	_ = os.MkdirAll("uploads", 0755)
	router.Static("/uploads", "./uploads")

	// Health check
	router.GET("/api/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "ok",
			"project": cfg.ProjectID,
			"service": "coc-lugbe-api",
		})
	})

	// Auth
	router.POST("/api/auth/login", h.Login)

	// Public routes
	public := router.Group("/api")
	{
		public.GET("/teachings", h.ListTeachings)
		public.GET("/teachings/:id", h.GetTeaching)
		public.GET("/gallery", h.ListGallery)
		public.POST("/inquiries", h.CreateInquiry)
		public.GET("/settings", h.GetSettings)
	}

	// Protected Admin routes
	admin := router.Group("/api/admin")
	admin.Use(middleware.AuthRequired(cfg))
	{
		admin.GET("/me", h.Me)

		// Teachings CRUD
		admin.GET("/teachings", h.ListTeachings)
		admin.POST("/teachings", h.CreateTeaching)
		admin.PUT("/teachings/:id", h.UpdateTeaching)
		admin.DELETE("/teachings/:id", h.DeleteTeaching)

		// Gallery CRUD
		admin.GET("/gallery", h.ListGallery)
		admin.POST("/gallery", h.CreateGallery)
		admin.DELETE("/gallery/:id", h.DeleteGallery)

		// Members Directory CRUD
		admin.GET("/members", h.ListMembers)
		admin.POST("/members", h.CreateMember)
		admin.PUT("/members/:id", h.UpdateMember)
		admin.DELETE("/members/:id", h.DeleteMember)

		// Inquiries & Prayer requests
		admin.GET("/inquiries", h.ListInquiries)
		admin.PATCH("/inquiries/:id/status", h.UpdateInquiryStatus)
		admin.DELETE("/inquiries/:id", h.DeleteInquiry)

		// Website Settings
		admin.GET("/settings", h.GetSettings)
		admin.PUT("/settings", h.UpdateSettings)

		// File Upload
		admin.POST("/upload", h.UploadFile)
	}

	addr := fmt.Sprintf(":%s", cfg.Port)
	log.Printf("Church of Christ Lugbe API listening on http://localhost%s", addr)
	if err := router.Run(addr); err != nil {
		log.Fatalf("Server failed to run: %v", err)
	}
}
