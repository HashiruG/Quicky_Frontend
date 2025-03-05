import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/features/dashboard/common/Header";
import SideBarComponent from "@/features/dashboard/common/SideBarComponent";

import { useEffect, useState } from "react";
import {
  DriverProfilesColumns,
  columns,
} from "@/features/dashboard/driver-management/driver-profiles/DriverProfilesColumns";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<DriverProfilesColumns[]> {
  return [
    {
      id: "1",
      name: "John",
      ami: 150000,
      status: "online",
      email: "john@example.com",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Jane",
      ami: 200000,
      status: "offline",
      email: "jane@example.com",
      rating: 3.8,
    },
    {
      id: "3",
      name: "Bob",
      ami: 75000,
      status: "online",
      email: "bob@example.com",
      rating: 4.2,
    },
    {
      id: "4",
      name: "Alice",
      ami: 120000,
      status: "online",
      email: "alice@example.com",
      rating: 4.7,
    },
    {
      id: "5",
      name: "Mike",
      ami: 95000,
      status: "offline",
      email: "mike@example.com",
      rating: 3.5,
    },
    {
      id: "6",
      name: "Emma",
      ami: 300000,
      status: "online",
      email: "emma@example.com",
      rating: 4.9,
    },
    {
      id: "7",
      name: "David",
      ami: 175000,
      status: "online",
      email: "david@example.com",
      rating: 4.1,
    },
    {
      id: "8",
      name: "Sarah",
      ami: 250000,
      status: "offline",
      email: "sarah@example.com",
      rating: 3.9,
    },
    {
      id: "9",
      name: "Ryan",
      ami: 50000,
      status: "online",
      email: "ryan@example.com",
      rating: 4.0,
    },
    {
      id: "10",
      name: "Linda",
      ami: 400000,
      status: "online",
      email: "linda@example.com",
      rating: 4.6,
    },
    {
      id: "11",
      name: "Kevin",
      ami: 220000,
      status: "offline",
      email: "kevin@example.com",
      rating: 3.7,
    },
    {
      id: "12",
      name: "Olivia",
      ami: 130000,
      status: "online",
      email: "olivia@example.com",
      rating: 4.8,
    },
    {
      id: "13",
      name: "Chris",
      ami: 90000,
      status: "online",
      email: "chris@example.com",
      rating: 4.4,
    },
    {
      id: "14",
      name: "Julia",
      ami: 80000,
      status: "offline",
      email: "julia@example.com",
      rating: 3.6,
    },
    {
      id: "15",
      name: "Mark",
      ami: 500000,
      status: "online",
      email: "mark@example.com",
      rating: 4.9,
    },
    {
      id: "16",
      name: "Nancy",
      ami: 210000,
      status: "online",
      email: "nancy@example.com",
      rating: 4.3,
    },
    {
      id: "17",
      name: "Tom",
      ami: 310000,
      status: "offline",
      email: "tom@example.com",
      rating: 3.8,
    },
    {
      id: "18",
      name: "Paul",
      ami: 140000,
      status: "online",
      email: "paul@example.com",
      rating: 4.2,
    },
    {
      id: "19",
      name: "Lisa",
      ami: 170000,
      status: "online",
      email: "lisa@example.com",
      rating: 4.5,
    },
    {
      id: "20",
      name: "Steve",
      ami: 450000,
      status: "offline",
      email: "steve@example.com",
      rating: 3.9,
    },
    {
      id: "21",
      name: "Anna",
      ami: 60000,
      status: "online",
      email: "anna@example.com",
      rating: 4.0,
    },
    {
      id: "22",
      name: "George",
      ami: 275000,
      status: "online",
      email: "george@example.com",
      rating: 4.7,
    },
    {
      id: "23",
      name: "Mary",
      ami: 320000,
      status: "offline",
      email: "mary@example.com",
      rating: 3.8,
    },
    {
      id: "24",
      name: "Robert",
      ami: 110000,
      status: "online",
      email: "robert@example.com",
      rating: 4.3,
    },
    {
      id: "25",
      name: "Jenny",
      ami: 230000,
      status: "online",
      email: "jenny@example.com",
      rating: 4.6,
    },
    {
      id: "26",
      name: "Harry",
      ami: 180000,
      status: "offline",
      email: "harry@example.com",
      rating: 3.7,
    },
    {
      id: "27",
      name: "Lucy",
      ami: 95000,
      status: "online",
      email: "lucy@example.com",
      rating: 4.5,
    },
    {
      id: "28",
      name: "Peter",
      ami: 275000,
      status: "online",
      email: "peter@example.com",
      rating: 4.8,
    },
    {
      id: "29",
      name: "Susan",
      ami: 360000,
      status: "offline",
      email: "susan@example.com",
      rating: 3.6,
    },
    {
      id: "30",
      name: "Charlie",
      ami: 125000,
      status: "online",
      email: "charlie@example.com",
      rating: 4.2,
    },
    {
      id: "31",
      name: "Tina",
      ami: 400000,
      status: "online",
      email: "tina@example.com",
      rating: 4.7,
    },
    {
      id: "32",
      name: "Henry",
      ami: 220000,
      status: "offline",
      email: "henry@example.com",
      rating: 3.8,
    },
    {
      id: "33",
      name: "Kelly",
      ami: 70000,
      status: "online",
      email: "kelly@example.com",
      rating: 4.3,
    },
    {
      id: "34",
      name: "Patrick",
      ami: 350000,
      status: "online",
      email: "patrick@example.com",
      rating: 4.9,
    },
    {
      id: "35",
      name: "Diana",
      ami: 140000,
      status: "offline",
      email: "diana@example.com",
      rating: 3.7,
    },
    {
      id: "36",
      name: "Will",
      ami: 90000,
      status: "online",
      email: "will@example.com",
      rating: 4.2,
    },
    {
      id: "37",
      name: "Rachel",
      ami: 160000,
      status: "online",
      email: "rachel@example.com",
      rating: 4.4,
    },
    {
      id: "38",
      name: "Matt",
      ami: 280000,
      status: "offline",
      email: "matt@example.com",
      rating: 3.9,
    },
    {
      id: "39",
      name: "Nathan",
      ami: 135000,
      status: "online",
      email: "nathan@example.com",
      rating: 4.1,
    },
    {
      id: "40",
      name: "Sophie",
      ami: 450000,
      status: "online",
      email: "sophie@example.com",
      rating: 4.6,
    },
    {
      id: "41",
      name: "Fred",
      ami: 100000,
      status: "offline",
      email: "fred@example.com",
      rating: 3.5,
    },
    {
      id: "42",
      name: "Zoe",
      ami: 120000,
      status: "online",
      email: "zoe@example.com",
      rating: 4.3,
    },
    {
      id: "43",
      name: "Jack",
      ami: 290000,
      status: "online",
      email: "jack@example.com",
      rating: 4.7,
    },
    {
      id: "44",
      name: "Megan",
      ami: 170000,
      status: "offline",
      email: "megan@example.com",
      rating: 3.8,
    },
    {
      id: "45",
      name: "Sam",
      ami: 115000,
      status: "online",
      email: "sam@example.com",
      rating: 4.2,
    },
    {
      id: "46",
      name: "Oliver",
      ami: 305000,
      status: "online",
      email: "oliver@example.com",
      rating: 4.5,
    },
    {
      id: "47",
      name: "Ella",
      ami: 240000,
      status: "offline",
      email: "ella@example.com",
      rating: 3.9,
    },
    {
      id: "48",
      name: "Brian",
      ami: 85000,
      status: "online",
      email: "brian@example.com",
      rating: 4.0,
    },
    {
      id: "49",
      name: "Victoria",
      ami: 360000,
      status: "online",
      email: "victoria@example.com",
      rating: 4.8,
    },
    {
      id: "50",
      name: "Gordon",
      ami: 155000,
      status: "offline",
      email: "gordon@example.com",
      rating: 3.6,
    },
  ];
}

export default function DriverProfiles() {
  const [data, setData] = useState<DriverProfilesColumns[]>([]);
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
