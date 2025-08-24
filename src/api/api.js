/* eslint-disable no-unused-vars */
import axios from "axios";

const baseURL = 'https://api-helcris.pcds.edu.ph';
// ==================================================
// Axios Instance
// ==================================================
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-APP-KEY": "zStyDjwIXspS1C",
    "X-APP-RECEIVER": "dfe0990ngc@gmail.com",
  },
  withCredentials: true, // send cookies (XSRF-TOKEN, laravel_session)
});

// ==================================================
// Request Interceptor to Add Auth Token
// ==================================================
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage, cookie, or wherever you store it
    const token = localStorage.getItem('token') || getCookieValue('access_token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ==================================================
// Helper function to get cookie value
// ==================================================
function getCookieValue(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// ==================================================
// Generic HTTP Methods
// ==================================================
export const get = (url, config = {}) => api.get(url, config);
export const post = (url, data = {}, config = {}) => api.post(url, data, config);
export const put = (url, data = {}, config = {}) => api.put(url, data, config);
export const del = (url, config = {}) => api.delete(url, config);

// ==================================================
// File Upload Method
// ==================================================
export const postFormData = (url, formData, config = {}) => {
  return api.post(url, formData, {
    ...config,
    headers: {
      ...config.headers,
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const putFormData = (url, formData, config = {}) => {
  return api.put(url, formData, {
    ...config,
    headers: {
      ...config.headers,
      'Content-Type': 'multipart/form-data',
    },
  });
};

// ==================================================
// Get CSRF cookie before making authenticated requests
// ==================================================
export const getCsrfCookie = () => get("/sanctum/csrf-cookie");

// Hotel info
export const sendEmail = async (data) => { return post(`/api/send-email`,data); }