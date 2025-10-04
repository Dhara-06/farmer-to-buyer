// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// Attach token to every request if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Smart pricing suggest API
export const suggestPrice = async (cropName, location, quantity) => {
  const { data } = await API.post("/pricing/suggest", {
    cropName,
    location,
    quantity,
  });
  // backend returns: { basePrice, suggestedPrice, method, breakdown }
  return data;
};

export default API;
