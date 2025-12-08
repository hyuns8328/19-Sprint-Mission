import axios from 'axios';

const api = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err),
);

export default api;