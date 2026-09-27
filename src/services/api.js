import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUsers = async () => {
  const response = await api.get("/users");

  return response.data;
};

export const getTransactions = async () => {
  const response = await api.get("/posts");

  return response.data;
};

export default api;