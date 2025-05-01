import axios from "axios";
import { DriverProfilesColumns } from "./DriverProfilesColumns";

export async function getData(): Promise<DriverProfilesColumns[]> {
  try {
    const response = await axios.get<DriverProfilesColumns[]>(
      "http://localhost:8080/driver-profiles"
    );
    return response.data;
  } catch (error) {
    return [];
  }
}
