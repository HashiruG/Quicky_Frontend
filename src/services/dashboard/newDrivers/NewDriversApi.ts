import api from "@/api/api";
import { NewDriversColumns } from "../../../features/dashboard/dashboard/new-drivers/NewDriversColumns";

export async function getData(): Promise<NewDriversColumns[]> {
  try {
    const response = await api.get<NewDriversColumns[]>(
      "/driver-profiles/new-drivers"
    );
    return response.data;
  } catch (error) {
    return [];
  }
}

export type NewDriversData = {
  date: string;
  drivers: number;
};

export async function chartData(): Promise<NewDriversData[]> {
  try {
    const response = await api.get(
      "/driver-profiles/new-drivers/count-by-day"
    );

    return response.data.map((item: any) => ({
      date: item.registrationDate,
      drivers: item.driversCount,
    }));
  } catch (error) {
    console.error("Failed to fetch driver data:", error);
    return [];
  }
}
