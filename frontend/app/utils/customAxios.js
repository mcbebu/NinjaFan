import axios from 'axios';

const customAxios = axios.create({
  baseURL: BACKEND_URL,
});

export default customAxios;
