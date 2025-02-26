import axios from "axios";

const API_URL = "http://localhost:8080/auth"; 


export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("token", response.data); 
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response.data);

  }
};


