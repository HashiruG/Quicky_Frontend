import api from "../../api/api";

export const fetchChurnDriverService = async() =>{
    const response = await api.get('http://localhost:8080/churn/churn-drivers')
    return response
}

