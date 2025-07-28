import api from "@/api/api";
import { BlacklistColumns } from "@/features/dashboard/driver-management/blacklist/BlacklistColumns";

export async function getData(): Promise<BlacklistColumns[]> {
  try {
    const response = await api.get<BlacklistColumns[]>(
      "/blacklist"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch driver details", error);
    return [];
  }
}

export async function blacklistDriver(userDetailsId: number, driver: BlacklistColumns) {
  try {
    const response = await api.post(`/driver-profiles/UnBlacklist/${userDetailsId}`, driver);

    return response.data;
  } catch (error) {
    console.error("Failed to unblacklist driver", error);
    throw error;
  }
}
