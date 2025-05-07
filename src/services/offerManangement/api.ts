import api from "../../api/api";

export const postOfferService = async (data: any) => {
  const response = await api.post(
    "http://localhost:8080/offers/create-offer",
    data
  );
  return response;
};

export const deleteOfferService = async (id: number) => {
  const response = await api.delete(
    `http://localhost:8080/offers/delete-offer/${id}`
  );
  return response;
};

export const getOffersService = async () => {
  const response = await api.get("http://localhost:8080/offers/get-offers");
  return response;
};
