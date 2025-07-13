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
  date: string;
  drivers: number;
};

// export async function chartData(): Promise<InactiveDriversData[]> {
//   try {
//     const response = await api.get(
//       "/driver-profiles/new-drivers/count-by-day"
//     );

//     return response.data.map((item: any) => ({
//       date: item.registrationDate,
//       drivers: item.driversCount,
//     }));
//   } catch (error) {
//     console.error("Failed to fetch driver data:", error);
//     return [];
//   }
// }
