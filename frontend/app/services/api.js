import customAxios from "../utils/customAxios";

export async function createProduct(postBody) {
  const response = await customAxios.post('/product/create', postBody);
  return response;
}

export async function getProducts() {
  const response = await customAxios.get('/products/get');
  return response;
}

export async function getProductDetail(productId) {
  const response = await customAxios.get(`/product/get?product_id=${productId}`);
  return response;
}

export async function createOrder(postBody) {
  const response = await customAxios.post('/order/create', postBody);
  return response;
}

export async function getOrders() {
  const response = await customAxios.get('/orders/get');
  return response;
}

export async function cancelOrder(postBody) {
  const response = await customAxios.post('/order/cancel', postBody);
  return response;
}
