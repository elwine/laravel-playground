import axios from 'axios';

const BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000/api';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers like authorization token here
  },
});

