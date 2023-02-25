package main

import (
	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/api"
	"github.com/mjosephan2/ninjafanbe/model"
)

func main() {
	model.Init()

	r := gin.Default()
	r.Use(CORSMiddleware())
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

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Header("Access-Control-Allow-Methods", "POST,HEAD,PATCH, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
