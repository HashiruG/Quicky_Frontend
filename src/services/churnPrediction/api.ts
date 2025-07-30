import api from "../../api/api";

export const fetchChurnDriverService = async() =>{
    const response = await api.get('https://quickyadmin-cgencwhxg9hzaceq.southindia-01.azurewebsites.net/churn/churn-drivers')
    return response
}

