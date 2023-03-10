package api

import (
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/model"
)

const (
	productIDKey = "product_id"

	// error
	missingProductID   = "missing_product_id"
	failedToGetProduct = "failed_to_get_product"
)

type GetProductResponse struct {
	Error string                  `json:"error"`
	Data  GetProductsLinkResponse `json:"data"`
}

func GetProductDetailHandler(c *gin.Context) {
	ID, ok := c.GetQuery(productIDKey)
	if !ok {
		c.JSON(400, errorResponse(missingProductID))
		return
	}
	// parse
	productID, err := strconv.Atoi(ID)
	if err != nil {
		c.JSON(400, errorResponse(missingProductID))
		return
	}
	product, err := model.GetProduct(uint(productID))
	if err != nil {
		c.JSON(500, errorResponse(failedToGetProduct))
		return
	}

	links, err := model.GetLinks(uint(productID))
	if err != nil {
		c.JSON(500, errorResponse(failedToGetLinks))
		return
	}
	linksResponse := []GetProductLinksResponse{}

	for j := range links {
		linksResponse = append(linksResponse, GetProductLinksResponse{
			Name: links[j].Media,
			Text: links[j].URL,
		})
	}

	c.JSON(200, GetProductResponse{
		Error: "",
		Data: GetProductsLinkResponse{
			Product: *product,
			Links:   linksResponse,
		},
	})
}
