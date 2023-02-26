package api

import (
	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/model"
)

type EditProductRequest struct {
	ID          uint   `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	// unit of 1000
	Price     int    `json:"price"`
	Currency  string `json:"currency"`
	Stock     bool   `json:"stock"`
	ImageURL  string `json:"image_url"`
	Dimension string `json:"dimension"`
	// unit of 1000
	Weight     string `json:"weight"`
	WeightUnit string `json:"weight_unit"`
}

type EditProductResponse struct {
	Error string `json:"error"`
}

func EditProductDetailHandler(c *gin.Context) {
	product := &EditProductRequest{}
	err := c.ShouldBindJSON(product)
	if err != nil {
		c.JSON(400, errorResponse(failedToParseData))
		return
	}

	err = model.EditProduct(product.ID, model.Product{
		Name:        product.Name,
		Description: product.Description,
		Price:       product.Price,
		Currency:    product.Currency,
		Stock:       product.Stock,
		ImageURL:    product.ImageURL,
		Dimension:   product.Dimension,
		Weight:      product.Weight,
		WeightUnit:  product.WeightUnit,
	})
	c.JSON(200, EditProductResponse{})
}
