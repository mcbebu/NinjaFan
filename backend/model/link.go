package model

import (
	"gorm.io/gorm"
)

const (
	tiktok    = "Tiktok"
	instagram = "Instagram"
	whatsapp  = "Whatsapp"
)

type Link struct {
	gorm.Model
	ProductID uint   `json:"product_id"`
	URL       string `json:"url"`
	Media     string `json:"media"`
	// TODO for statistic next implementation
	ClickCount uint `json:"click_count"`
	BuyCount   uint `json:"buy_count"`
}

func GetLinks(productID uint) ([]Link, error) {
	var links []Link
	result := defaultDB.Where("product_id = ?", productID).Find(&links)
	if result.Error != nil {
		return nil, result.Error
	}
	return links, result.Error
}

func AddLinks(links []Link) error {
	result := defaultDB.Create(links)
	return result.Error
}
