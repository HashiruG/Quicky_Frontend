import api from "@/api/api";

export async function searchDriverLocation(driverId: number) {
  try {
    const response = await api.get(`/search-driver-location/${driverId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch driver location", error);
    throw error;
  }
}
