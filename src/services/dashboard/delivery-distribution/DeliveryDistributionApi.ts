import api from "@/api/api";
import { DeliveryDistributionColumns } from "@/features/dashboard/dashboard/delivery-distribution/DeliveryDistributionColumns";

export async function getData(): Promise<DeliveryDistributionColumns[]> {
  try {
    const response = await api.get<DeliveryDistributionColumns[]>(
      "/delivery_records/today"
    );
    return response.data;
  } catch (error) {
    return [];
  }
}

export type DeliveryDistributionData = {
  date: string;
  count: number;
};

export async function chartData(): Promise<DeliveryDistributionData[]> {
  try {
    const response = await api.get("/deliveries_count");

    return response.data.map((item: any) => ({
      date: item.deliveryDate,
      count: item.deliveriesCount,
    }));
  } catch (error) {
    console.error("Failed to fetch earning data:", error);
    return [];
  }
}
