package api

import (
	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/model"
)

const (
	failedCancelOrder = "failed_to_cancel_order"
)

type CancelOrderRequest struct {
	OrderID uint `json:"order_id"`
}

type CancelOrderResponse struct {
	Error string `json:"error"`
}

func CancelOrderHandler(c *gin.Context) {
	cancelOrderRequest := &CancelOrderRequest{}
	err := c.ShouldBindJSON(cancelOrderRequest)
	if err != nil {
		c.JSON(400, errorResponse(failedToParseData))
		return
	}

	err = model.CancelOrder(cancelOrderRequest.OrderID)
	if err != nil {
		c.JSON(400, errorResponse(failedCancelOrder))
		return
	}

	c.JSON(200, CancelOrderResponse{})
}
