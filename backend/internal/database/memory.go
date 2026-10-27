package database

import (
	"context"
	"fmt"
	"sync"
	"time"

	"coc-lugbe-backend/internal/models"
)

type MemoryStore struct {
	mu        sync.RWMutex
	teachings map[string]models.Teaching
	gallery   map[string]models.GalleryItem
	members   map[string]models.Member
	inquiries map[string]models.Inquiry
	settings  models.SiteSettings
}

func NewMemoryStore() *MemoryStore {
	store := &MemoryStore{
		teachings: make(map[string]models.Teaching),
		gallery:   make(map[string]models.GalleryItem),
		members:   make(map[string]models.Member),
		inquiries: make(map[string]models.Inquiry),
		settings:  DefaultSettings(),
	}

	for _, t := range DefaultTeachings() {
		store.teachings[t.ID] = t
	}
	for _, g := range DefaultGallery() {
		store.gallery[g.ID] = g
	}
	for _, m := range DefaultMembers() {
		store.members[m.ID] = m
	}

	return store
}

// Teachings
func (m *MemoryStore) ListTeachings(_ context.Context) ([]models.Teaching, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	var list []models.Teaching
	for _, item := range m.teachings {
		list = append(list, item)
	}
	return list, nil
}

func (m *MemoryStore) GetTeaching(_ context.Context, id string) (*models.Teaching, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	item, ok := m.teachings[id]
	if !ok {
		return nil, fmt.Errorf("teaching not found: %s", id)
	}
	return &item, nil
}

func (m *MemoryStore) CreateTeaching(_ context.Context, item *models.Teaching) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.teachings[item.ID] = *item
	return nil
}

func (m *MemoryStore) UpdateTeaching(_ context.Context, item *models.Teaching) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	item.UpdatedAt = time.Now()
	m.teachings[item.ID] = *item
	return nil
}

func (m *MemoryStore) DeleteTeaching(_ context.Context, id string) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	delete(m.teachings, id)
	return nil
}

// Gallery
func (m *MemoryStore) ListGallery(_ context.Context) ([]models.GalleryItem, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	var list []models.GalleryItem
	for _, item := range m.gallery {
		list = append(list, item)
	}
	return list, nil
}

func (m *MemoryStore) CreateGallery(_ context.Context, item *models.GalleryItem) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.gallery[item.ID] = *item
	return nil
}

func (m *MemoryStore) DeleteGallery(_ context.Context, id string) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	delete(m.gallery, id)
	return nil
}

// Members
func (m *MemoryStore) ListMembers(_ context.Context) ([]models.Member, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	var list []models.Member
	for _, item := range m.members {
		list = append(list, item)
	}
	return list, nil
}

func (m *MemoryStore) GetMember(_ context.Context, id string) (*models.Member, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	item, ok := m.members[id]
	if !ok {
		return nil, fmt.Errorf("member not found: %s", id)
	}
	return &item, nil
}

func (m *MemoryStore) CreateMember(_ context.Context, item *models.Member) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.members[item.ID] = *item
	return nil
}

func (m *MemoryStore) UpdateMember(_ context.Context, item *models.Member) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	item.UpdatedAt = time.Now()
	m.members[item.ID] = *item
	return nil
}

func (m *MemoryStore) DeleteMember(_ context.Context, id string) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	delete(m.members, id)
	return nil
}

// Inquiries
func (m *MemoryStore) ListInquiries(_ context.Context) ([]models.Inquiry, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	var list []models.Inquiry
	for _, item := range m.inquiries {
		list = append(list, item)
	}
	return list, nil
}

func (m *MemoryStore) CreateInquiry(_ context.Context, item *models.Inquiry) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	m.inquiries[item.ID] = *item
	return nil
}

func (m *MemoryStore) UpdateInquiryStatus(_ context.Context, id string, status string) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	item, ok := m.inquiries[id]
	if !ok {
		return fmt.Errorf("inquiry not found: %s", id)
	}
	item.Status = status
	if status == "responded" {
		now := time.Now()
		item.RespondedAt = &now
	}
	m.inquiries[id] = item
	return nil
}

func (m *MemoryStore) DeleteInquiry(_ context.Context, id string) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	delete(m.inquiries, id)
	return nil
}

// Settings
func (m *MemoryStore) GetSettings(_ context.Context) (*models.SiteSettings, error) {
	m.mu.RLock()
	defer m.mu.RUnlock()
	copied := m.settings
	return &copied, nil
}

func (m *MemoryStore) UpdateSettings(_ context.Context, item *models.SiteSettings) error {
	m.mu.Lock()
	defer m.mu.Unlock()
	item.ID = "current"
	item.UpdatedAt = time.Now()
	m.settings = *item
	return nil
}
