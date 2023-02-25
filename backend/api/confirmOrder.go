package api

import (
	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/model"
)

const (
	failedConfirmOrder = "failed_to_confirm_order"
)

type ConfirmOrderRequest struct {
	OrderID uint `json:"order_id"`
}

type ConfirmOrderResponse struct {
	Error string `json:"error"`
}

func ConfirmOrderHandler(c *gin.Context) {
	confirmOrderRequest := &ConfirmOrderRequest{}
	err := c.ShouldBindJSON(confirmOrderRequest)
	if err != nil {
		c.JSON(400, errorResponse(failedToParseData))
		return
	}

	err = model.ConfirmOrder(confirmOrderRequest.OrderID)
	if err != nil {
		c.JSON(400, errorResponse(failedConfirmOrder))
		return
	}

	c.JSON(200, CancelOrderResponse{})
}
