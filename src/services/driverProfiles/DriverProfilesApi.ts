import { DriverProfilesColumns } from "../../features/dashboard/driver-management/driver-profiles/DriverProfilesColumns";
import api from "@/api/api";

export async function getData(): Promise<DriverProfilesColumns[]> {
  try {
    const response = await api.get<DriverProfilesColumns[]>(
      "/driver-profiles"
    );
    return response.data;
  } catch (error) {
    return [];
  }
}
