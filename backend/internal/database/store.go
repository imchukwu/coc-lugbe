package database

import (
	"context"
	"time"

	"coc-lugbe-backend/internal/models"
)

type Store interface {
	// Teachings
	ListTeachings(ctx context.Context) ([]models.Teaching, error)
	GetTeaching(ctx context.Context, id string) (*models.Teaching, error)
	CreateTeaching(ctx context.Context, item *models.Teaching) error
	UpdateTeaching(ctx context.Context, item *models.Teaching) error
	DeleteTeaching(ctx context.Context, id string) error

	// Gallery
	ListGallery(ctx context.Context) ([]models.GalleryItem, error)
	CreateGallery(ctx context.Context, item *models.GalleryItem) error
	DeleteGallery(ctx context.Context, id string) error

	// Members
	ListMembers(ctx context.Context) ([]models.Member, error)
	GetMember(ctx context.Context, id string) (*models.Member, error)
	CreateMember(ctx context.Context, item *models.Member) error
	UpdateMember(ctx context.Context, item *models.Member) error
	DeleteMember(ctx context.Context, id string) error

	// Inquiries (from Contact / Visit Us form)
	ListInquiries(ctx context.Context) ([]models.Inquiry, error)
	CreateInquiry(ctx context.Context, item *models.Inquiry) error
	UpdateInquiryStatus(ctx context.Context, id string, status string) error
	DeleteInquiry(ctx context.Context, id string) error

	// Website Settings
	GetSettings(ctx context.Context) (*models.SiteSettings, error)
	UpdateSettings(ctx context.Context, item *models.SiteSettings) error
}

func DefaultSettings() models.SiteSettings {
	return models.SiteSettings{
		ID:                      "current",
		ChurchName:              "Church of Christ, Lugbe, Abuja",
		SundayServiceTime:       "8:00 AM",
		WednesdayBibleClassTime: "5:00 PM",
		Address:                 "By Berger Yard, Off Airport Road, Lugbe, Abuja, Nigeria",
		Phone:                   "+234 803 123 4567",
		Email:                   "hello@coclugbe.org",
		MinisterName:            "Evang. Rupert T. Kukwa",
		MinisterPhone:           "+234 803 123 4567",
		MinisterEmail:           "r.kukwa@coclugbe.org",
		WelcomeTitle:            "Where Truth Meets Love In The Heart Of Lugbe",
		WelcomeStory:            "The Church of Christ in Lugbe, Abuja, was planted by faithful disciples devoted to restoring New Testament Christianity. What began with prayer meetings has blossomed into a loving congregation upholding sound doctrine and Christ's supreme authority.",
		AnnouncementActive:      false,
		AnnouncementMessage:     "Welcome to Church of Christ Lugbe. Join us for Sunday Worship at 8:00 AM.",
		UpdatedAt:               time.Now(),
	}
}

func DefaultTeachings() []models.Teaching {
	now := time.Now()
	return []models.Teaching{
		{
			ID:        "1",
			Title:     "Walking by Faith in Perilous Times",
			Speaker:   "Evang. Rupert T. Kukwa",
			Date:      "May 03, 2026",
			Series:    "Faith & Perseverance",
			Format:    "video",
			Style:     "sermon",
			Duration:  "45 min",
			Scripture: "2 Corinthians 5:7, Hebrews 11:1-6",
			Summary:   "A powerful exposition on remaining steadfast when world circumstances shake our foundations, anchoring our conviction in God's promises.",
			Tag:       "Sunday Sermon",
			CreatedAt: now.Add(-24 * time.Hour),
			UpdatedAt: now.Add(-24 * time.Hour),
		},
		{
			ID:        "2",
			Title:     "The Plan of Salvation: Restoring the Biblical Pattern",
			Speaker:   "Evang. Rupert T. Kukwa",
			Date:      "Apr 29, 2026",
			Series:    "New Testament Doctrine",
			Format:    "slides",
			Style:     "bible-class",
			Duration:  "40 min",
			Scripture: "Acts 2:36-47, Romans 6:3-7",
			Summary:   "Exhaustive slide deck and exposition comparing man-made doctrines with the clear New Testament commands of hearing, believing, repentance, confession, and baptism.",
			SlidesURL: "#download-slides",
			Tag:       "Bible Class Slides",
			CreatedAt: now.Add(-48 * time.Hour),
			UpdatedAt: now.Add(-48 * time.Hour),
		},
		{
			ID:        "3",
			Title:     "60 Seconds of Truth: Why A Cappella Singing in the Church?",
			Speaker:   "Evang. Rupert T. Kukwa",
			Date:      "Apr 27, 2026",
			Series:    "Spiritual Bites",
			Format:    "short",
			Style:     "short-clip",
			Duration:  "1 min",
			Scripture: "Ephesians 5:19, Colossians 3:16",
			Summary:   "A crisp 60-second video explaining the apostolic mandate to sing and make melody with the human heart without mechanical instruments.",
			Tag:       "Short Video",
			CreatedAt: now.Add(-72 * time.Hour),
			UpdatedAt: now.Add(-72 * time.Hour),
		},
	}
}

func DefaultGallery() []models.GalleryItem {
	now := time.Now()
	return []models.GalleryItem{
		{ID: "1", ImageURL: "/src/assets/gallery/gallery-1.jpg", Tags: []string{"Sunday Worship", "A Cappella"}, Order: 1, CreatedAt: now},
		{ID: "2", ImageURL: "/src/assets/gallery/gallery-2.jpg", Tags: []string{"Lord's Supper", "Communion"}, Order: 2, CreatedAt: now},
		{ID: "3", ImageURL: "/src/assets/gallery/gallery-3.jpg", Tags: []string{"Evangelism", "Outreach"}, Order: 3, CreatedAt: now},
		{ID: "4", ImageURL: "/src/assets/gallery/gallery-4.jpg", Tags: []string{"Bible Class", "Midweek"}, Order: 4, CreatedAt: now},
		{ID: "5", ImageURL: "/src/assets/gallery/gallery-5.jpg", Tags: []string{"Fellowship", "Youth"}, Order: 5, CreatedAt: now},
		{ID: "6", ImageURL: "/src/assets/gallery/gallery-6.jpg", Tags: []string{"Seminars", "Lectureship"}, Order: 6, CreatedAt: now},
	}
}

func DefaultMembers() []models.Member {
	now := time.Now()
	return []models.Member{
		{
			ID:         "m-1",
			FullName:   "Evang. Rupert T. Kukwa",
			Phone:      "+234 803 123 4567",
			Email:      "r.kukwa@coclugbe.org",
			Address:    "Lugbe Central, Abuja",
			Ministry:   "Leadership & Pulpit",
			Role:       "Congregational Evangelist",
			Status:     "active",
			JoinedDate: "2015-01-10",
			Notes:      "Minister and teacher",
			CreatedAt:  now,
			UpdatedAt:  now,
		},
		{
			ID:         "m-2",
			FullName:   "Bro. Peter O. Danladi",
			Phone:      "+234 802 987 6543",
			Email:      "peter.danladi@coclugbe.org",
			Address:    "Airport Road Zone 4, Lugbe",
			Ministry:   "Teaching & Song Leading",
			Role:       "Song Leader & Teacher",
			Status:     "active",
			JoinedDate: "2017-06-15",
			Notes:      "Directs praise sessions and youth bible classes",
			CreatedAt:  now,
			UpdatedAt:  now,
		},
		{
			ID:         "m-3",
			FullName:   "Sis. Grace Adekunle",
			Phone:      "+234 805 456 7890",
			Email:      "grace.ade@coclugbe.org",
			Address:    "FHA Phase 1, Lugbe",
			Ministry:   "Sisters Fellowship & Welfare",
			Role:       "Welfare Coordinator",
			Status:     "active",
			JoinedDate: "2018-03-22",
			Notes:      "Coordinates community visitation and benevolence",
			CreatedAt:  now,
			UpdatedAt:  now,
		},
	}
}
