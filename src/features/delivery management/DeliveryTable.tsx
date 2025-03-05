import { columns } from "./tableColumns"
import { DataTable } from "@/components/ui/data-table"

const data = [{
    id: "1",
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 5.0
},{
    id: "2",
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 5.0
},{
    id: "3",
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 5.0
},{
    id: "3",
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 5.0
},{
    id: "4",
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 5.0
},{
    id: "5",
    driverName: "Driver",
    pickupLocation: "Colombo",
    dropoffLocation: "Moratuwa",
    deliveryValue: 1950,
    status: "completed",
    rating: 5.0
}]



export default function DeliveryTable() {

  return (
      <DataTable columns={columns} data={data} />
  )
}
