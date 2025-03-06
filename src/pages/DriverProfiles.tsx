import Layout from "@/features/dashboard/common/Layout";
import { useEffect, useState } from "react";
import {
  Payment,
  columns,
} from "@/features/dashboard/driver-management/driver-profiles/columns";
import { DataTable } from "@/features/dashboard/driver-management/driver-profiles/data-table";

async function getData(): Promise<Payment[]> {
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
   
   
  ];
}

export default function DriverProfiles() {
  const [data, setData] = useState<Payment[]>([]);
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
      <Layout title="Driver Profiles"><DataTable columns={columns} data={data} /></Layout>
  );
}
