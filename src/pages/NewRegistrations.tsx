import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/features/dashboard/common/Header";
import SideBarComponent from "@/features/dashboard/common/SideBarComponent";

import { useEffect, useState } from "react";
import {
  NewRegistrationsColumns,
  columns,
} from "@/features/dashboard/driver-management/new-registrations/NewRegistrationsColumns";
import { DataTable } from "@/components/ui//data-table";

async function getData(): Promise<NewRegistrationsColumns[]> {
  return [
    { serialNumber: "1", name: "Ethan", email: "ethan@example.com" },
    { serialNumber: "2", name: "Sophia", email: "sophia@example.com" },
    { serialNumber: "3", name: "Liam", email: "liam@example.com" },
    { serialNumber: "4", name: "Isabella", email: "isabella@example.com" },
    { serialNumber: "5", name: "Mason", email: "mason@example.com" },
    { serialNumber: "6", name: "Ava", email: "ava@example.com" },
    { serialNumber: "7", name: "Noah", email: "noah@example.com" },
    { serialNumber: "8", name: "Emma", email: "emma@example.com" },
    { serialNumber: "9", name: "Lucas", email: "lucas@example.com" },
    { serialNumber: "10", name: "Mia", email: "mia@example.com" },
    { serialNumber: "11", name: "Elijah", email: "elijah@example.com" },
    { serialNumber: "12", name: "Amelia", email: "amelia@example.com" },
    { serialNumber: "13", name: "James", email: "james@example.com" },
    { serialNumber: "14", name: "Charlotte", email: "charlotte@example.com" },
    { serialNumber: "15", name: "Benjamin", email: "benjamin@example.com" },
    { serialNumber: "16", name: "Harper", email: "harper@example.com" },
    { serialNumber: "17", name: "Alexander", email: "alexander@example.com" },
    { serialNumber: "18", name: "Ella", email: "ella@example.com" },
    { serialNumber: "19", name: "William", email: "william@example.com" },
    { serialNumber: "20", name: "Scarlett", email: "scarlett@example.com" },
    { serialNumber: "21", name: "Daniel", email: "daniel@example.com" },
    { serialNumber: "22", name: "Grace", email: "grace@example.com" },
    { serialNumber: "23", name: "Matthew", email: "matthew@example.com" },
    { serialNumber: "24", name: "Hannah", email: "hannah@example.com" },
    { serialNumber: "25", name: "David", email: "david@example.com" },
    { serialNumber: "26", name: "Lily", email: "lily@example.com" },
    { serialNumber: "27", name: "Joseph", email: "joseph@example.com" },
    { serialNumber: "28", name: "Chloe", email: "chloe@example.com" },
    { serialNumber: "29", name: "Samuel", email: "samuel@example.com" },
    { serialNumber: "30", name: "Victoria", email: "victoria@example.com" },
    { serialNumber: "31", name: "Henry", email: "henry@example.com" },
    { serialNumber: "32", name: "Sophie", email: "sophie@example.com" },
    { serialNumber: "33", name: "Sebastian", email: "sebastian@example.com" },
    { serialNumber: "34", name: "Zoe", email: "zoe@example.com" },
    { serialNumber: "35", name: "Jack", email: "jack@example.com" },
    { serialNumber: "36", name: "Natalie", email: "natalie@example.com" },
    { serialNumber: "37", name: "Andrew", email: "andrew@example.com" },
    { serialNumber: "38", name: "Eva", email: "eva@example.com" },
    { serialNumber: "39", name: "Ryan", email: "ryan@example.com" },
    { serialNumber: "40", name: "Leah", email: "leah@example.com" },
    { serialNumber: "41", name: "Luke", email: "luke@example.com" },
    { serialNumber: "42", name: "Audrey", email: "audrey@example.com" },
    { serialNumber: "43", name: "Dylan", email: "dylan@example.com" },
    { serialNumber: "44", name: "Aubrey", email: "aubrey@example.com" },
    { serialNumber: "45", name: "Nathan", email: "nathan@example.com" },
    { serialNumber: "46", name: "Claire", email: "claire@example.com" },
    { serialNumber: "47", name: "Caleb", email: "caleb@example.com" },
    { serialNumber: "48", name: "Lydia", email: "lydia@example.com" },
    { serialNumber: "49", name: "Joshua", email: "joshua@example.com" },
    { serialNumber: "50", name: "Madeline", email: "madeline@example.com" },
  ];
}

export default function NewRegistrations() {
  const [data, setData] = useState<NewRegistrationsColumns[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div>
          <SidebarProvider>
            <SideBarComponent />
            <SidebarTrigger className="p-5 md:hidden" />
          </SidebarProvider>
        </div>

        <div className="flex flex-col mt-16 flex-1">
          <div className="flex flex-wrap justify-start gap-10 w-full">
            <div className="w-full px-6 py-10">
              <h1 className="text-2xl font-bold mb-4">Driver Profiles</h1>
              <div className="w-full overflow-auto rounded-lg shadow-md bg-white p-6">
                {loading ? (
                  <p className="text-gray-500 text-center">Loading...</p>
                ) : (
                  <DataTable columns={columns} data={data} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
