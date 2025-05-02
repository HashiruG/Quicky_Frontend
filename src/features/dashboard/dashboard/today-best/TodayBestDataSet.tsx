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
