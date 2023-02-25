package api

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/model"
)

const (
	failedToGetProducts = "failed_to_get_list_of_products"
	failedToGetLinks    = "failed_to_get_links"
)

type GetProductsResponse struct {
	Error string                    `json:"error"`
	Data  []GetProductsLinkResponse `json:"data"`
}

type GetProductsLinkResponse struct {
	model.Product
	Links []GetProductLinksResponse `json:"links"`
}

type GetProductLinksResponse struct {
	Name string `json:"name"`
	Text string `json:"text"`
}

func GetProducts(c *gin.Context) {
	products, err := model.GetProducts()
	if err != nil {
		c.JSON(500, errorResponse(failedToGetProducts))
		return
	}
	productLinksResponse := []GetProductsLinkResponse{}
	for i := range products {
		links, err := model.GetLinks(products[i].ID)
		if err != nil {
			c.JSON(500, errorResponse(failedToGetLinks))
			return
		}
		linksResponse := []GetProductLinksResponse{}

		log.Println(links)
		for j := range links {
			linksResponse = append(linksResponse, GetProductLinksResponse{
				Name: links[j].Media,
				Text: links[j].URL,
			})
		}

		productLinksResponse = append(productLinksResponse, GetProductsLinkResponse{
			Product: products[i],
			Links:   linksResponse,
		})
	}
	c.JSON(200, &GetProductsResponse{Data: productLinksResponse})
}
