import React from "react";
import { userTransactionColumns } from "../../components/TableData/UserColumns";
import { ReactTable } from "../../components";

const UserTransactionPage = () => {
  const table8Data = React.useMemo(()=>[
    {
      sn: "1",
      id: "UB3",
      vendorOne: "genesis",
      customer: "elis Noah",
      address: "2 avenue ...",
      item: "5",
      orderprice: "n40,000",
      deliveryprice: "1500",
      language: "11:00 am",
      timecompleted: "11:00 am",
      languageOne: "completed",
      date: "15/03/22",
      action: "view all",
    },
    {
      sn: "2",
      id: "YY5",
      vendorOne: "denco",
      customer: "den math",
      address: "Onelga A...",
      item: "2 ",
      orderprice: "n34,222",
      deliveryprice: "1500",
      language: "11:00 am",
      timecompleted: "11:00 am",
      languageOne: "cancelled",
      date: "15/03/22",
      action: "view all ",
    },
    {
      sn: "3",
      id: "ER3",
      vendorOne: "repulic",
      customer: "ada ehi",
      address: "obirikom...",
      item: "1",
      orderprice: "n23,333",
      deliveryprice: "1500",
      language: "11:00 am",
      timecompleted: "11:00 am",
      languageOne: "completed",
      date: "15/03/22",
      action: "view all",
    },
  ],[]);
  

const COLUMN = React.useMemo(() => userTransactionColumns,[]);


  return (
    <div className="trans-table order-table">
    <ReactTable
        columns={COLUMN}
        data={table8Data}
        tableClass={"w-[98%] mx-auto"}
        headerClass={"bg-blue-700_96 w-full h-12 rounded-full  shadow-bs4 text-left text-sm"}
        rowClass={"shadow-md shadow-red-100  p-[15px] rounded-2xl  shadow-bs w-full h-14"}
        tableBodyClass={"w-full "}
    />
    </div>
  );
};

export default UserTransactionPage;
