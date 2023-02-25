package model

import (
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Name        string `json:"name"`
	Description string `json:"description"`
	// unit of 1000
	Price     int    `json:"price"`
	Currency  string `json:"currency"`
	Stock     bool   `json:"stock"`
	ImageURL  string `json:"image_url"`
	Dimension string `json:"dimension"`
	// unit of 1000
	Weight     uint   `json:"weight"`
	WeightUnit string `json:"weight_unit"`
}

func CreateProduct(product *Product) (uint, error) {
	result := defaultDB.Create(product)
	return product.ID, result.Error
}

func GetProduct(id uint) (*Product, error) {
	resultProduct := &Product{}
	result := defaultDB.First(resultProduct, id)
	if result.Error != nil {
		return nil, result.Error
	}
	return resultProduct, nil
}

func GetProducts() ([]Product, error) {
	var products []Product
	result := defaultDB.Find(&products)
	if result.Error != nil {
		return nil, result.Error
	}
	return products, nil
}

func GetProductByIDs() {

}
func EditProduct(id uint, product Product) error {
	currentProduct := &Product{}
	currentResult := defaultDB.First(currentProduct, id)
	if currentResult.Error != nil {
		return currentResult.Error
	}
	result := defaultDB.Model(currentProduct).Updates(product)
	return result.Error
}
