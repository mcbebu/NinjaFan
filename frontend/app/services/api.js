import customAxios from "../utils/customAxios";

export async function createProduct(postBody) {
  const response = await customAxios.post('/product/create', postBody);
  return response;
}

export async function getProducts() {
  const response = await customAxios.get('/products/get')
  return response;
}
