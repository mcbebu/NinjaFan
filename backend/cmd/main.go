package main

import (
	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/api"
	"github.com/mjosephan2/ninjafanbe/model"
)

func main() {
	model.Init()

	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.POST("/product/create", api.CreateProductHandler)
	r.GET("/product/get", api.GetProductDetailHandler)
	r.POST("/product/edit", api.EditProductDetailHandler)
	r.POST("/order/create", api.CreateOrderHandler)
	r.GET("/orders/get", api.GetOrdersHandler)
	r.GET("/order/detail", api.GetOrderDetailHandler)
	r.GET("/products/get", api.GetProducts)

	err := r.Run()
	if err != nil {
		panic(err)
	}
}
