import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
  withCredentials: true,
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const getExpenseById = (id) => {
  return api.get(`/api/expenses/${id}`);
};

export const updatedExpense = (id, updatedExpense) => {
  return api.put(`/api/expenses/${id}`, updatedExpense);
};

export const deletedExpense = (id) => {
  return api.delete(`/api/expenses/${id}`);
};

export default api;
