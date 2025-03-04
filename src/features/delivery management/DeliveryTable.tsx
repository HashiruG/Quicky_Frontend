import { columns } from "./tableColumns"
import { DataTable } from "@/components/ui/data-table"

const data = [{
    id: "1",
    date: new Date(2025,2,18).toLocaleDateString(), 
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 5.0
},{
    id: "2",
    date: new Date(2025,5,10).toLocaleDateString(),
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 5.0
},{
    id: "3",
    date: new Date(2025,2,10).toLocaleDateString(),
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 5.0
},{
    id: "4",
    date: new Date(2025,4,10).toLocaleDateString(),
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 5.0
},{
    id: "5",
    date: new Date(2025,3,10).toLocaleDateString(),
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 3.0
},{
    id: "6",
    date: new Date(2025,2,10).toLocaleDateString(),
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 4.0
}]



export default function DeliveryTable() {

  return (
      <DataTable columns={columns} data={data} />
  )
}
