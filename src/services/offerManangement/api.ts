import api from "../../api/api";

export const postOfferService = async (data: any) => {
  const response = await api.post(
    "https://quickyadmin-cgencwhxg9hzaceq.southindia-01.azurewebsites.net/offers/create-offer",
    data
  );
  return response;
};

export const deleteOfferService = async (id: number) => {
  const response = await api.delete(
    `https://quickyadmin-cgencwhxg9hzaceq.southindia-01.azurewebsites.net/offers/delete-offer/${id}`
  );
  return response;
};

export const getOffersService = async () => {
  const response = await api.get("https://quickyadmin-cgencwhxg9hzaceq.southindia-01.azurewebsites.net/offers/get-offers");
  return response;
};
