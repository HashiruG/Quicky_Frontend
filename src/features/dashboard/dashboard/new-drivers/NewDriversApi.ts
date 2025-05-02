import axios from "axios";
import { NewDriversColumns } from "./NewDriversColumns";

export async function getData(): Promise<NewDriversColumns[]> {
  try {
    const response = await axios.get<NewDriversColumns[]>(
      "http://localhost:8080/driver-profiles/new-drivers"
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
    const response = await axios.get(
      "http://localhost:8080/driver-profiles/new-drivers/count-by-day"
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
