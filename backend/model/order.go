package model

import "gorm.io/gorm"

const (
	PendingStatus = iota + 1
	confirmedStatus
	receivedStatus
	doneStatus
	cancelStatus
)

type Order struct {
	gorm.Model
	TotalPrice    int32
	BuyerName     string
	ContactNumber string
	Status        int8
	Address1      string
	Address2      string
	PaymentMethod int8
}

func AddOrder(order Order) (uint, error) {
	result := defaultDB.Create(&order)
	return order.ID, result.Error
}

func GetOrder(id uint) (*Order, error) {
	resultOrder := &Order{}
	result := defaultDB.First(resultOrder, id)
	if result.Error != nil {
		return nil, result.Error
	}
	return resultOrder, nil
}

func GetOrders() ([]Order, error) {
	orders := []Order{}
	result := defaultDB.Find(&orders)
	if result.Error != nil {
		return nil, result.Error
	}
	return orders, nil
}

func ConfirmOrder(orderID uint) error {
	result := defaultDB.Model(&Order{}).Where("id = ?", orderID).Update("status", confirmedStatus)
	if result.Error != nil {
		return result.Error
	}
	return nil
}

func CancelOrder(orderID uint) error {
	result := defaultDB.Model(&Order{}).Where("id = ?", orderID).Update("status", cancelStatus)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
