import axios from "axios";
import { TodayBestColumns } from "./TodayBestColumns";

export async function getData(): Promise<TodayBestColumns[]> {
  try {
    const response = await axios.get<TodayBestColumns[]>(
      "http://localhost:8080/driver-profiles/earnings/today"
    );
    return response.data;
  } catch (error) {
    return [];
  }
}

export type DriversEarningsData = {
  date: string;
  amount: number;
};

export async function chartData(): Promise<DriversEarningsData[]> {
  try {
    const response = await axios.get("http://localhost:8080/earnings");

    return response.data.map((item: any) => ({
      date: item.earningDate,
      amount: item.amount,
    }));
  } catch (error) {
    console.error("Failed to fetch earning data:", error);
    return [];
  }
}
