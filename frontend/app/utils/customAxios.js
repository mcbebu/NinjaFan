import axios from 'axios';

const BACKEND_URL = 'http://localhost:8080';

const customAxios = axios.create({
  baseURL: BACKEND_URL,
});

export default customAxios;
