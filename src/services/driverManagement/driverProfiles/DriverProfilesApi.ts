import api from "@/api/api";
import { DriverProfilesColumns } from "@/features/dashboard/driver-management/driver-profiles/DriverProfilesColumns";

export async function getData(): Promise<DriverProfilesColumns[]> {
  try {
    const response = await api.get<DriverProfilesColumns[]>(
      "/driver-profiles"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch driver details", error);
    return [];
  }
}

export async function blacklistDriver(userDetailsId: number, driver: DriverProfilesColumns) {
  try {
    const response = await api.post(`/driver-profiles/blacklist-driver/${userDetailsId}`, driver);

    return response.data;
  } catch (error) {
    console.error("Failed to blacklist driver", error);
    throw error;
  }
}
