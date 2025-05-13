// import axios from "axios";
// import { NewRegistrationsColumns } from "../features/dashboard/driver-management/new-registrations/types";



// export async function acceptDriver(serialNumber: string, driver: NewRegistrationsColumns) {
//   try {
//     const response1 = await axios.post(
//       `http://localhost:8080/new-registrations/add-driver/${serialNumber}`,
//       driver
//     );

//     const response2 = await axios.delete(
//       `http://localhost:8080/new-registrations/reject-driver/${serialNumber}`
//     );

//     window.location.reload();

//     return { response1: response1.data, response2: response2.data };
//   } catch (error) {
//     console.error("Failed to accept driver", error);
//     throw error;
//   }
// }

// export async function rejectDriver(serialNumber: string) {
//   try {
//     const response = await axios.delete(
//       `http://localhost:8080/new-registrations/reject-driver/${serialNumber}`
//     );

//     window.location.reload();

//     return response.data;
//   } catch (error) {
//     console.error("Failed to reject driver", error);
//     throw error;
//   }
// }

// export async function getData(): Promise<NewRegistrationsColumns[]> {
//   try {
//     const response = await axios.get<NewRegistrationsColumns[]>(
//       "http://localhost:8080/new-registrations"
//     );
//     return response.data;
//   } catch (error) {
//     return [];
//   }
// }

import { NewRegistrationsColumns } from "@/features/dashboard/driver-management/new-registrations/types";
import api from "../../api/api";

/**
 * Accepts a new driver by adding to the system and then removing from the pending list.
 */
export async function acceptDriver(userDetailsId: number, driver: NewRegistrationsColumns) {
  try {
    const response1 = await api.post(`/new-registrations/add-driver/${userDetailsId}`, driver);

    const response2 = await api.delete(`/new-registrations/reject-driver/${userDetailsId}`);

    window.location.reload();

    return {
      response1: response1.data,
      response2: response2.data,
    };
  } catch (error) {
    console.error("Failed to accept driver", error);
    throw error;
  }
}

/**
 * Rejects a driver by serial number and removes them from the pending list.
 */
export async function rejectDriver(userDetailsId: number) {
  try {
    const response = await api.delete(`/new-registrations/reject-driver/${userDetailsId}`);

    window.location.reload();

    return response.data;
  } catch (error) {
    console.error("Failed to reject driver", error);
    throw error;
  }
}

/**
 * Fetches the list of new driver registrations. Okay
 */
export async function getData(): Promise<NewRegistrationsColumns[]> {
  try {
    const response = await api.get<NewRegistrationsColumns[]>("/new-registrations");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch registration data", error);
    return [];
  }
}
