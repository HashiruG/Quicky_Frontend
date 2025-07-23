import api from "@/api/api";
import { DeliveryColumns } from "@/features/delivery management/DeliveryManagementColumns";

export async function getData(): Promise<DeliveryColumns[]> {
  try {
    const response = await api.get<DeliveryColumns[]>(
      "/delivery_records"
    );
    return response.data;
  } catch (error) {
    return [];
  }
}
