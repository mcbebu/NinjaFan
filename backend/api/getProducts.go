package api

import (
	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/model"
)

const (
	failedToGetProducts = "failed_to_get_list_of_products"
	failedToGetLinks    = "failed_to_get_links"
)

type GetProductsResponse struct {
	Error string                 `json:"error"`
	Data  []ProductsLinkResponse `json:"data"`
}

type ProductsLinkResponse struct {
	model.Product
	Links []LinksResponse `json:"links"`
}

type LinksResponse struct {
	name string
	text string
}

func GetProducts(c *gin.Context) {
	products, err := model.GetProducts()
	if err != nil {
		c.JSON(500, errorResponse(failedToGetProducts))
		return
	}
	productLinksResponse := []ProductsLinkResponse{}
	for i := range products {
		links, err := model.GetLinks(products[i].ID)
		if err != nil {
			c.JSON(500, errorResponse(failedToGetLinks))
		}
		linksResponse := []LinksResponse{}
		for i := range links {
			linksResponse = append(linksResponse, LinksResponse{
				name: links[i].Media,
				text: links[i].URL,
			})
		}

		productLinksResponse = append(productLinksResponse, ProductsLinkResponse{
			Product: products[i],
			Links:   linksResponse,
		})
	}
	c.JSON(200, products)
}
