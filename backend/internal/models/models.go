package models

import "time"

// Admin Credentials
type LoginRequest struct {
	Username string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type LoginResponse struct {
	Token     string    `json:"token"`
	Username  string    `json:"username"`
	ExpiresAt time.Time `json:"expires_at"`
}

// Teaching / Sermon Item
type Teaching struct {
	ID          string    `json:"id" firestore:"id"`
	Title       string    `json:"title" firestore:"title"`
	Speaker     string    `json:"speaker" firestore:"speaker"`
	Date        string    `json:"date" firestore:"date"`
	Series      string    `json:"series" firestore:"series"`
	Format      string    `json:"format" firestore:"format"` // "video", "audio", "slides", "short", "podcast", "article"
	Style       string    `json:"style" firestore:"style"`   // "sermon", "bible-class", "short-clip", "podcast", "article"
	Duration    string    `json:"duration,omitempty" firestore:"duration,omitempty"`
	ReadTime    string    `json:"readTime,omitempty" firestore:"readTime,omitempty"`
	Scripture   string    `json:"scripture" firestore:"scripture"`
	Summary     string    `json:"summary" firestore:"summary"`
	MediaURL    string    `json:"mediaUrl,omitempty" firestore:"mediaUrl,omitempty"`
	DownloadURL string    `json:"downloadUrl,omitempty" firestore:"downloadUrl,omitempty"`
	SlidesURL   string    `json:"slidesUrl,omitempty" firestore:"slidesUrl,omitempty"`
	Tag         string    `json:"tag" firestore:"tag"`
	CreatedAt   time.Time `json:"createdAt" firestore:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt" firestore:"updatedAt"`
}

// Gallery Item
type GalleryItem struct {
	ID        string    `json:"id" firestore:"id"`
	ImageURL  string    `json:"imageUrl" firestore:"imageUrl"`
	Tags      []string  `json:"tags" firestore:"tags"`
	Date      string    `json:"date,omitempty" firestore:"date,omitempty"`
	Order     int       `json:"order" firestore:"order"`
	CreatedAt time.Time `json:"createdAt" firestore:"createdAt"`
}

// Church Member
type Member struct {
	ID        string    `json:"id" firestore:"id"`
	FullName  string    `json:"fullName" firestore:"fullName"`
	Phone     string    `json:"phone" firestore:"phone"`
	Email     string    `json:"email" firestore:"email"`
	Address   string    `json:"address,omitempty" firestore:"address,omitempty"`
	Ministry  string    `json:"ministry,omitempty" firestore:"ministry,omitempty"`
	Role      string    `json:"role,omitempty" firestore:"role,omitempty"`
	Status    string    `json:"status" firestore:"status"` // "active", "inactive"
	JoinedDate string   `json:"joinedDate,omitempty" firestore:"joinedDate,omitempty"`
	Notes     string    `json:"notes,omitempty" firestore:"notes,omitempty"`
	CreatedAt time.Time `json:"createdAt" firestore:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt" firestore:"updatedAt"`
}

// Contact Inquiries & Prayer Requests
type Inquiry struct {
	ID          string     `json:"id" firestore:"id"`
	FullName    string     `json:"fullName" firestore:"fullName"`
	Email       string     `json:"email" firestore:"email"`
	Phone       string     `json:"phone,omitempty" firestore:"phone,omitempty"`
	Subject     string     `json:"subject" firestore:"subject"`
	Message     string     `json:"message" firestore:"message"`
	InquiryType string     `json:"inquiryType" firestore:"inquiryType"` // "General Question", "Prayer Request", "Bible Study Request", etc.
	Status      string     `json:"status" firestore:"status"`           // "new", "read", "responded", "archived"
	CreatedAt   time.Time  `json:"createdAt" firestore:"createdAt"`
	RespondedAt *time.Time `json:"respondedAt,omitempty" firestore:"respondedAt,omitempty"`
}

// Website Content & Settings
type SiteSettings struct {
	ID                      string    `json:"id" firestore:"id"`
	ChurchName              string    `json:"churchName" firestore:"churchName"`
	SundayServiceTime       string    `json:"sundayServiceTime" firestore:"sundayServiceTime"`
	WednesdayBibleClassTime string    `json:"wednesdayBibleClassTime" firestore:"wednesdayBibleClassTime"`
	Address                 string    `json:"address" firestore:"address"`
	Phone                   string    `json:"phone" firestore:"phone"`
	Email                   string    `json:"email" firestore:"email"`
	MinisterName            string    `json:"ministerName" firestore:"ministerName"`
	MinisterPhone           string    `json:"ministerPhone" firestore:"ministerPhone"`
	MinisterEmail           string    `json:"ministerEmail" firestore:"ministerEmail"`
	WelcomeTitle            string    `json:"welcomeTitle" firestore:"welcomeTitle"`
	WelcomeStory            string    `json:"welcomeStory" firestore:"welcomeStory"`
	AnnouncementActive      bool      `json:"announcementActive" firestore:"announcementActive"`
	AnnouncementMessage     string    `json:"announcementMessage" firestore:"announcementMessage"`
	UpdatedAt               time.Time `json:"updatedAt" firestore:"updatedAt"`
}
