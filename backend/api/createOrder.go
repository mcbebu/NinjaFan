package api

import (
	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/model"
)

const (
	failedToAddOrder        = "failed_to_add_order"
	failedToAddOrderProduct = "failed_to_add_order_product"
)

type CreateOrderRequest struct {
	Products      []CreateOrderProductRequest `json:"products"`
	TotalPrice    int32                       `json:"total_price"`
	Address1      string                      `json:"address_1"`
	Address2      string                      `json:"address_2"`
	PaymentMethod int8                        `json:"payment_method"`
}
type CreateOrderProductRequest struct {
	ProductID uint `json:"product_id"`
	Quantity  uint `json:"quantity"`
}

type CreateOrderResponse struct {
	Error string                `json:"error"`
	Data  CreateOrderIDResponse `json:"data"`
}

type CreateOrderIDResponse struct {
	OrderID uint `json:"order_id"`
}

func CreateOrderHandler(c *gin.Context) {
	createOrderRequest := &CreateOrderRequest{}
	err := c.ShouldBindJSON(createOrderRequest)
	if err != nil {
		c.JSON(400, errorResponse(failedToParseData))
		return
	}

	// insert order
	orderID, err := model.AddOrder(model.Order{
		TotalPrice:    createOrderRequest.TotalPrice,
		Status:        model.PendingStatus,
		Address1:      createOrderRequest.Address1,
		Address2:      createOrderRequest.Address2,
		PaymentMethod: createOrderRequest.PaymentMethod,
	})

	if err != nil {
		c.JSON(400, errorResponse(failedToAddOrder))
		return
	}

	orderProducts := []model.OrderProduct{}
	for i := range createOrderRequest.Products {
		pID := createOrderRequest.Products[i].ProductID
		quant := createOrderRequest.Products[i].Quantity

		orderProducts = append(orderProducts, model.OrderProduct{
			OrderID:   orderID,
			ProductID: pID,
			Quantity:  quant,
		})
	}

	// insert mapping
	err = model.AddOrderProducts(orderProducts)
	if err != nil {
		c.JSON(400, errorResponse(failedToAddOrderProduct))
		return
	}

	c.JSON(200, CreateOrderResponse{Data: CreateOrderIDResponse{OrderID: orderID}})
}
