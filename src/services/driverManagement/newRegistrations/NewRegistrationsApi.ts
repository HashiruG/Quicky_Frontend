import api from "@/api/api";
import { NewRegistrationsColumns } from "@/features/dashboard/driver-management/new-registrations/types";

export async function acceptDriver(userDetailsId: number, driver: NewRegistrationsColumns) {
  try {
    const response = await api.post(`/new-registrations/add-driver/${userDetailsId}`, driver);

    return response.data;
  } catch (error) {
    console.error("Failed to accept driver", error);
    throw error;
  }
}

export async function rejectDriver(userDetailsId: number) {
  try {
    const response = await api.post(`/new-registrations/reject-driver/${userDetailsId}`);

    return response.data;
  } catch (error) {
    console.error("Failed to reject driver", error);
    throw error;
  }
}

export async function getData(): Promise<NewRegistrationsColumns[]> {
  try {
    const response = await api.get<NewRegistrationsColumns[]>("/new-registrations");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch registration data", error);
    return [];
  }
}
