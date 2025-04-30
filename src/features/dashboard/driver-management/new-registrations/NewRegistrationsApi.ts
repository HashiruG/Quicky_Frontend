import axios from "axios";
import { NewRegistrationsColumns } from "./types";

export async function acceptDriver(serialNumber: string, driver: NewRegistrationsColumns) {
  try {
    const response = await axios.post(
      `http://localhost:8080/new-registrations/add-driver/${serialNumber}`,
      driver
    );
    return response.data;
  } catch (error) {
    console.error("Failed to accept driver", error);
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
