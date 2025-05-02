import api from "../../api/api";

export const churnPredictionService = async() =>{
    const response = await api.get('http://localhost:8080/churn-drivers')
    return response
}