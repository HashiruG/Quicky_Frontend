import axios from "axios";
import { NewRegistrationsColumns } from "./types";

export async function acceptDriver(serialNumber: string, driver: NewRegistrationsColumns) {
  try {
    const response1 = await axios.post(
      `http://localhost:8080/new-registrations/add-driver/${serialNumber}`,
      driver
    );

    const response2 = await axios.delete(
      `http://localhost:8080/new-registrations/reject-driver/${serialNumber}`
    );

    return { response1: response1.data, response2: response2.data };
  } catch (error) {
    console.error("Failed to accept driver", error);
    throw error;
  }
}

export async function rejectDriver(serialNumber: string) {
  try {
    const response = await axios.delete(
      `http://localhost:8080/new-registrations/reject-driver/${serialNumber}`
    );

    return response.data;
  } catch (error) {
    console.error("Failed to reject driver", error);
    throw error;
  }
}

export async function getData(): Promise<NewRegistrationsColumns[]> {
  try {
    const response = await axios.get<NewRegistrationsColumns[]>(
      "http://localhost:8080/new-registrations"
    );
    return response.data;
  } catch (error) {
    return [];
  }
}
