import axios from 'axios';

const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST;

const customAxios = axios.create({
  baseURL: BACKEND_HOST,
});

export default customAxios;
