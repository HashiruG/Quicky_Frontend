import { columns } from "./tableColumns";
import { DataTable } from "./data-table";

const data = [
  {
    id: "1",
    driverId: "d0124",
    driverName: "John",
    mobileNumber: "0718521364",
    earnings: 1890,
    status: "rewarded",
  },
  {
    id: "2",
    driverId: "d0124",
    driverName: "John",
    mobileNumber: "0718521364",
    earnings: 3990,
    status: "rewarded",
  },
  {
    id: "3",
    driverId: "d0124",
    driverName: "John",
    mobileNumber: "0718521364",
    earnings: 1890,
    status: "rewarded",
  },
];

const ChurnPredictionTable = () => {
  return <DataTable columns={columns} data={data} />;
};

export default ChurnPredictionTable;
