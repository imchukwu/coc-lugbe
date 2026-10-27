package config

import (
	"os"
)

type Config struct {
	Port          string
	ProjectID     string
	AdminUsername string
	AdminPassword string
	JWTSecret     string
	CORSOrigin    string
}

func Load() *Config {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	projectID := os.Getenv("GCP_PROJECT_ID")
	if projectID == "" {
		projectID = "coc-lugbe"
	}

	adminUser := os.Getenv("ADMIN_USERNAME")
	if adminUser == "" {
		adminUser = "admin"
	}

	adminPass := os.Getenv("ADMIN_PASSWORD")
	if adminPass == "" {
		adminPass = "coc-lugbe-admin-2026"
	}

	jwtSecret := os.Getenv("JWT_SECRET")
	if jwtSecret == "" {
		jwtSecret = "coc-lugbe-super-secret-jwt-key-2026"
	}

	corsOrigin := os.Getenv("CORS_ORIGIN")
	if corsOrigin == "" {
		corsOrigin = "*"
	}

	return &Config{
		Port:          port,
		ProjectID:     projectID,
		AdminUsername: adminUser,
		AdminPassword: adminPass,
		JWTSecret:     jwtSecret,
		CORSOrigin:    corsOrigin,
	}
}
