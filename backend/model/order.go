package model

import "gorm.io/gorm"

type Order struct {
	gorm.Model
	ShipperID     uint
	ProductID     uint
	Quantity      int
	TotalPrice    int
	Status        int
	Address       string
	PaymentMethod int
}
