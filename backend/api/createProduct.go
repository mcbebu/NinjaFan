package api

import (
	"github.com/mjosephan2/ninjafanbe/model"

	"github.com/gin-gonic/gin"
)

const (
	failedToCreateProduct = "failed_to_create_product"
)

type CreateProductRequest struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	// unit of 1000
	Price     int    `json:"price"`
	Currency  string `json:"currency"`
	Stock     bool   `json:"stock"`
	ImageURL  string `json:"image_url"`
	Dimension string `json:"dimension"`
	// unit of 1000
	Weight     uint `json:"weight"`
	WeightUnit uint `json:"weight_unit"`
}

type CreateProductResponse struct {
	Error string    `json:"error"`
	Data  ProductID `json:"data"`
}

type ProductID struct {
	ID uint `json:"id"`
}

func CreateProductHandler(c *gin.Context) {
	product := &CreateProductRequest{}
	err := c.ShouldBindJSON(product)
	if err != nil {
		c.JSON(400, errorResponse(failedToParseData))
		return
	}

	id, err := model.CreateProduct(&model.Product{
		Name:        product.Name,
		Description: product.Description,
		Price:       product.Price,
		Stock:       product.Stock,
		ImageURL:    product.ImageURL,
		Dimension:   product.Dimension,
		Weight:      product.Weight,
		WeightUnit:  product.WeightUnit,
	})

	if err != nil {
		c.JSON(500, errorResponse(failedToCreateProduct))
		return
	}
	c.JSON(200, &CreateProductResponse{
		Error: "",
		Data:  ProductID{id},
	})
}
