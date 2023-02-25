package api

import (
	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/model"
)

const (
	failedGetOrders = "failed_get_orders"
)

type GetOrderResponse struct {
	Error string        `json:"error"`
	Data  []model.Order `json:"data"`
}

func GetOrdersHandler(c *gin.Context) {
	orders, err := model.GetOrders()
	if err != nil {
		c.JSON(400, errorResponse(failedGetOrders))
		return
	}

	c.JSON(200, GetOrderResponse{Data: orders})
}
