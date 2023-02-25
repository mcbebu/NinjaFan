package model

import (
	"log"

	"gorm.io/gorm"
)

type OrderProduct struct {
	gorm.Model
	OrderID   uint
	ProductID uint
	Quantity  uint
}

type OrderProductDetail struct {
	Product
	Quantity uint
}

func AddOrderProducts(orderProducts []OrderProduct) error {
	result := defaultDB.Create(orderProducts)
	return result.Error
}

func GetOrderProductsJoin(orderID uint) ([]OrderProductDetail, error) {
	res := []OrderProductDetail{}
	result := defaultDB.Model(&OrderProduct{}).Where("order_products.order_id = ?", orderID).Select("products.id, products.name, products.description, products.price, products.currency, products.stock, products.image_url, products.dimension, products.weight, products.weight_unit, order_products.quantity").
		Joins("inner join products on products.id = order_products.product_id").Find(&res)

	log.Println(res)
	if result.Error != nil {
		return nil, result.Error
	}

	return res, nil
}
