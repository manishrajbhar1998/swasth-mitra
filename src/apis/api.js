// src/apis/api.js
import axios from 'axios';
import { API_PATH } from '../constant/config';

// 🔹 Public API instance (no token needed)
const api = axios.create({
    baseURL: API_PATH,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

// 🔹 Authenticated API instance (token automatically added)
const authApi = axios.create({
    baseURL: API_PATH,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});

// Automatically attach token before each request
authApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Export both instances
export { api, authApi };


