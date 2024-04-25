import React from "react";
import { ReactTable } from "../../components";
import { userOrderColumns } from "../../components/TableData/UserColumns";

const UserOrderPage = () => {
  const table7Data = React.useMemo(()=>[
    {
      sn: "1",
      id: "dC3",
      vendorOne: "genesis",
      customer: "elis Noah",
      mode: "self",
      address: "onelga...",
      item: "5",
      order: "accepted",
      phonenumber: "08109830911",
      language: "completed",
      date: "15/03/22",
      time: "11:00 am",
      reciept: "view",
    },
    {
      sn: "2",
      id: "ED4",
      vendorOne: "denco",
      customer: "den math",
      mode: "friend",
      address: "ogba...",
      item: "2 ",
      order: "failed",
      phonenumber: "08109830911",
      language: "cancelled",
      date: "15/03/22",
      time: "11:00 am",
      reciept: "view",
    },
    {
      sn: "3",
      id: "FR4",
      vendorOne: "repulic",
      customer: "ada ehi",
      mode: "friend",
      address: "obiri...",
      item: "1",
      order: "declined",
      phonenumber: "08109830911",
      language: "completed",
      date: "15/03/22",
      time: "11:00 am",
      reciept: "view",
    },
  ],[]);

  const COLUMN  = React.useMemo(() => userOrderColumns,[]);
  
  return (
        <div className="order-table">
        <ReactTable
            columns={COLUMN}
            data={table7Data}
            tableClass={"w-[98%] mx-auto"}
            headerClass={"bg-blue-700_96 w-full h-12 rounded-full  shadow-bs4 text-left text-sm"}
            rowClass={"shadow-md shadow-red-100  p-[15px] rounded-2xl  shadow-bs w-full h-14"}
            tableBodyClass={"w-full "}
        />
       </div>
  );
};

export default UserOrderPage;
