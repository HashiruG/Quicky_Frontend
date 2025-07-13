import api from "@/api/api";
import { InactiveDriversColumns } from "@/features/dashboard/dashboard/inactive-drivers/InactiveDriversColumns";


export async function getData(): Promise<InactiveDriversColumns[]> {
  try {
    const response = await api.get<InactiveDriversColumns[]>(
      "/driver-profiles/inactive-drivers"
    );
    return response.data;
  } catch (error) {
    return [];
  }
}

export type InactiveDriversData = {
  inactiveDriversCount: number;
  activeDriversCount: number;
};

export async function chartData(): Promise<InactiveDriversData[]> {
  try {
    const response = await api.get(
      "/driver-profiles/inactive-drivers/count-by-availability"
    );

    return response.data.map((item: any) => ({
      inactiveDriversCount: item.inactiveDriversCount,
      activeDriversCount: item.activeDriversCount,
    }));
  } catch (error) {
    console.error("Failed to fetch driver data:", error);
    return [];
  }
}
