import api from "../../api/api";

export const postCommissionRateService = async (data: any) => {
  const response = await api.post(
    "http://localhost:8080/commission/change-commission-rate",
    data
  );
  return response;
};



export const getCommissionRateService = async () => {
  const response = await api.get("http://localhost:8080/commission/get-commission-rate");
  return response;
};