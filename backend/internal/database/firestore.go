package database

import (
	"context"
	"fmt"
	"log"
	"time"

	"cloud.google.com/go/firestore"
	"google.golang.org/api/iterator"

	"coc-lugbe-backend/internal/models"
)

type FirestoreStore struct {
	client *firestore.Client
}

func NewFirestoreStore(ctx context.Context, projectID string) (*FirestoreStore, error) {
	client, err := firestore.NewClient(ctx, projectID)
	if err != nil {
		return nil, fmt.Errorf("failed to create firestore client: %w", err)
	}

	store := &FirestoreStore{client: client}
	// Seed initial settings if absent
	if err := store.seedDefaults(ctx); err != nil {
		log.Printf("Notice: seed check returned: %v", err)
	}

	return store, nil
}

func (s *FirestoreStore) seedDefaults(ctx context.Context) error {
	docRef := s.client.Collection("settings").Doc("current")
	doc, err := docRef.Get(ctx)
	if err != nil || !doc.Exists() {
		def := DefaultSettings()
		_, _ = docRef.Set(ctx, def)
	}

	// Seed teachings if empty
	teachingsIter := s.client.Collection("teachings").Limit(1).Documents(ctx)
	_, err = teachingsIter.Next()
	if err == iterator.Done {
		for _, item := range DefaultTeachings() {
			_, _ = s.client.Collection("teachings").Doc(item.ID).Set(ctx, item)
		}
	}

	// Seed gallery if empty
	galleryIter := s.client.Collection("gallery").Limit(1).Documents(ctx)
	_, err = galleryIter.Next()
	if err == iterator.Done {
		for _, item := range DefaultGallery() {
			_, _ = s.client.Collection("gallery").Doc(item.ID).Set(ctx, item)
		}
	}

	// Seed members if empty
	membersIter := s.client.Collection("members").Limit(1).Documents(ctx)
	_, err = membersIter.Next()
	if err == iterator.Done {
		for _, item := range DefaultMembers() {
			_, _ = s.client.Collection("members").Doc(item.ID).Set(ctx, item)
		}
	}

	return nil
}

// Teachings
func (s *FirestoreStore) ListTeachings(ctx context.Context) ([]models.Teaching, error) {
	iter := s.client.Collection("teachings").OrderBy("createdAt", firestore.Desc).Documents(ctx)
	var list []models.Teaching
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, err
		}
		var item models.Teaching
		if err := doc.DataTo(&item); err != nil {
			continue
		}
		list = append(list, item)
	}
	return list, nil
}

func (s *FirestoreStore) GetTeaching(ctx context.Context, id string) (*models.Teaching, error) {
	doc, err := s.client.Collection("teachings").Doc(id).Get(ctx)
	if err != nil {
		return nil, err
	}
	var item models.Teaching
	if err := doc.DataTo(&item); err != nil {
		return nil, err
	}
	return &item, nil
}

func (s *FirestoreStore) CreateTeaching(ctx context.Context, item *models.Teaching) error {
	_, err := s.client.Collection("teachings").Doc(item.ID).Set(ctx, item)
	return err
}

func (s *FirestoreStore) UpdateTeaching(ctx context.Context, item *models.Teaching) error {
	item.UpdatedAt = time.Now()
	_, err := s.client.Collection("teachings").Doc(item.ID).Set(ctx, item)
	return err
}

func (s *FirestoreStore) DeleteTeaching(ctx context.Context, id string) error {
	_, err := s.client.Collection("teachings").Doc(id).Delete(ctx)
	return err
}

// Gallery
func (s *FirestoreStore) ListGallery(ctx context.Context) ([]models.GalleryItem, error) {
	iter := s.client.Collection("gallery").OrderBy("order", firestore.Asc).Documents(ctx)
	var list []models.GalleryItem
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, err
		}
		var item models.GalleryItem
		if err := doc.DataTo(&item); err != nil {
			continue
		}
		list = append(list, item)
	}
	return list, nil
}

func (s *FirestoreStore) CreateGallery(ctx context.Context, item *models.GalleryItem) error {
	_, err := s.client.Collection("gallery").Doc(item.ID).Set(ctx, item)
	return err
}

func (s *FirestoreStore) DeleteGallery(ctx context.Context, id string) error {
	_, err := s.client.Collection("gallery").Doc(id).Delete(ctx)
	return err
}

// Members
func (s *FirestoreStore) ListMembers(ctx context.Context) ([]models.Member, error) {
	iter := s.client.Collection("members").OrderBy("fullName", firestore.Asc).Documents(ctx)
	var list []models.Member
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, err
		}
		var item models.Member
		if err := doc.DataTo(&item); err != nil {
			continue
		}
		list = append(list, item)
	}
	return list, nil
}

func (s *FirestoreStore) GetMember(ctx context.Context, id string) (*models.Member, error) {
	doc, err := s.client.Collection("members").Doc(id).Get(ctx)
	if err != nil {
		return nil, err
	}
	var item models.Member
	if err := doc.DataTo(&item); err != nil {
		return nil, err
	}
	return &item, nil
}

func (s *FirestoreStore) CreateMember(ctx context.Context, item *models.Member) error {
	_, err := s.client.Collection("members").Doc(item.ID).Set(ctx, item)
	return err
}

func (s *FirestoreStore) UpdateMember(ctx context.Context, item *models.Member) error {
	item.UpdatedAt = time.Now()
	_, err := s.client.Collection("members").Doc(item.ID).Set(ctx, item)
	return err
}

func (s *FirestoreStore) DeleteMember(ctx context.Context, id string) error {
	_, err := s.client.Collection("members").Doc(id).Delete(ctx)
	return err
}

// Inquiries
func (s *FirestoreStore) ListInquiries(ctx context.Context) ([]models.Inquiry, error) {
	iter := s.client.Collection("inquiries").OrderBy("createdAt", firestore.Desc).Documents(ctx)
	var list []models.Inquiry
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return nil, err
		}
		var item models.Inquiry
		if err := doc.DataTo(&item); err != nil {
			continue
		}
		list = append(list, item)
	}
	return list, nil
}

func (s *FirestoreStore) CreateInquiry(ctx context.Context, item *models.Inquiry) error {
	_, err := s.client.Collection("inquiries").Doc(item.ID).Set(ctx, item)
	return err
}

func (s *FirestoreStore) UpdateInquiryStatus(ctx context.Context, id string, status string) error {
	now := time.Now()
	updates := []firestore.Update{
		{Path: "status", Value: status},
	}
	if status == "responded" {
		updates = append(updates, firestore.Update{Path: "respondedAt", Value: now})
	}
	_, err := s.client.Collection("inquiries").Doc(id).Update(ctx, updates)
	return err
}

func (s *FirestoreStore) DeleteInquiry(ctx context.Context, id string) error {
	_, err := s.client.Collection("inquiries").Doc(id).Delete(ctx)
	return err
}

// Settings
func (s *FirestoreStore) GetSettings(ctx context.Context) (*models.SiteSettings, error) {
	doc, err := s.client.Collection("settings").Doc("current").Get(ctx)
	if err != nil {
		def := DefaultSettings()
		return &def, nil
	}
	var item models.SiteSettings
	if err := doc.DataTo(&item); err != nil {
		def := DefaultSettings()
		return &def, nil
	}
	return &item, nil
}

func (s *FirestoreStore) UpdateSettings(ctx context.Context, item *models.SiteSettings) error {
	item.ID = "current"
	item.UpdatedAt = time.Now()
	_, err := s.client.Collection("settings").Doc("current").Set(ctx, item)
	return err
}
