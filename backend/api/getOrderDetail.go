package api

import (
	"encoding/json"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/mjosephan2/ninjafanbe/model"
)

const (
	orderIDKey = "order_id"

	missingOrderID   = "missing_order_id"
	failedToGetOrder = "failed_to_get_order"
	failedUnmarshal  = "failed_to_unmarshal"
)

type GetOrderDetailResponse struct {
	Error string                      `json:"error"`
	Data  GetOrderDetailModelResponse `json:"data"`
}

type GetOrderDetailModelResponse struct {
	TotalPrice    int32                           `json:"total_price"`
	Status        int8                            `json:"status"`
	Address1      string                          `json:"address_1"`
	Address2      string                          `json:"address_2"`
	PaymentMethod int8                            `json:"payment_method"`
	Products      []GetOrderDetailProductResponse `json:"products"`
}

type GetOrderDetailProductResponse struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	// unit of 1000
	Price     int    `json:"price"`
	Currency  string `json:"currency"`
	Stock     bool   `json:"stock"`
	ImageURL  string `json:"image_url"`
	Dimension string `json:"dimension"`
	// unit of 1000
	Weight     uint   `json:"weight"`
	WeightUnit string `json:"weight_unit"`

	Quantity uint `json:"quantity"`
}

func GetOrderDetailHandler(c *gin.Context) {
	ID, ok := c.GetQuery(orderIDKey)
	if !ok {
		c.JSON(400, errorResponse(missingOrderID))
		return
	}
	// parse
	orderID, err := strconv.Atoi(ID)
	if err != nil {
		c.JSON(400, errorResponse(missingOrderID))
		return
	}
	order, err := model.GetOrder(uint(orderID))
	if err != nil {
		c.JSON(400, errorResponse(failedToGetOrder))
		return
	}

	// get products
	orderProducts, err := model.GetOrderProductsJoin(uint(orderID))
	if err != nil {
		c.JSON(400, errorResponse(failedToGetProducts))
		return
	}

	getOrderDetailProductsResponse := []GetOrderDetailProductResponse{}
	for i := range orderProducts {
		getOrderDetailProductResponse := GetOrderDetailProductResponse{}
		err = transferModel(&orderProducts[i], &getOrderDetailProductResponse)
		if err != nil {
			c.JSON(400, errorResponse(failedUnmarshal))
			return
		}
		getOrderDetailProductsResponse = append(getOrderDetailProductsResponse, getOrderDetailProductResponse)
	}
	getOrderDetailModelResponse := GetOrderDetailModelResponse{
		TotalPrice:    order.TotalPrice,
		Status:        order.Status,
		Address1:      order.Address1,
		Address2:      order.Address2,
		PaymentMethod: order.PaymentMethod,
		Products:      getOrderDetailProductsResponse,
	}
	c.JSON(200, GetOrderDetailResponse{
		Error: "",
		Data:  getOrderDetailModelResponse,
	})
}

func transferModel(v1 interface{}, v2 interface{}) error {
	b, err := json.Marshal(v1)
	if err != nil {
		return err
	}

	err = json.Unmarshal(b, v2)
	if err != nil {
		return err
	}
	return nil
}
