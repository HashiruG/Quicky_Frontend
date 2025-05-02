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
