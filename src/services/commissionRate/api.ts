import api from "../../api/api";

export const postCommissionRateService = async (data: any) => {
  const response = await api.post(
    "https://quickyadmin-cgencwhxg9hzaceq.southindia-01.azurewebsites.net/commission/change-commission-rate",
    data
  );
  return response;
};



export const getCommissionRateService = async () => {
  const response = await api.get("https://quickyadmin-cgencwhxg9hzaceq.southindia-01.azurewebsites.net/commission/get-commission-rate");
  return response;
};