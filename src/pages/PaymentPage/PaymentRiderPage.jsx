import React from "react";
import { Button, CheckBox, Img, List, ReactTable, Text } from "../../components";
import { riderPaymentColumns } from "../../components/TableData/PaymentColumns";

const PaymentRiderPage = () => {
  // Define the column data
  const columns = React.useMemo(() => riderPaymentColumns, []);

  // Define the row data
  const data = React.useMemo(
    () => [
      {
        "S/N": "1",
        name: "45664",
        "bike number": "genesis",
        address: "woji",
        salary: "20,000",
        bonus: "1,000",
        status: "Completed",
        "pick Up no": "30",
        "delivery no": "30",
        date: "2018-02-23",
        reciept: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        "S/N": "2",
        name: "34543",
        "bike number": "osere denco",
        address: "onelga",
        salary: "18,000",
        bonus: "2,000",
        status: "pending",
        "pick Up no": "70",
        "delivery no": "50",
        date: "2018-02-23",
        reciept: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        "S/N": "3",
        name: "45756",
        "bike number": "kilimanjaro",
        address: "egbema",
        salary: "15,000",
        bonus: "1,000",
        status: "completed",
        "pick Up no": "16",
        "delivery no": "16",
        date: "2018-02-23",
        reciept: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        "S/N": "4",
        name: "87096",
        "bike number": "pizza hut",
        address: "obirikum",
        salary: "1500",
        bonus: "22",
        status: "completed",
        "pick Up no": "22",
        "delivery no": "22",
        date: "2018-02-23",
        reciept: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
    ],
    []
  );

  return (
    <>
      <div className=" font-opensans   w-full  max-h-[522px] overflow-y-hidden mt-8">
        <Button
          className="bg-white-A700 cursor-pointer flex items-center justify-evenly min-w-[12%] h-10 rounded-[15px] shadow-bs1 ml-auto my-4"
          rightIcon={
            <Img
              className=" w-10 h-[7px] ml-2.5 my-px"
              src="/images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
        >
          <div className="capitalize font-semibold text-left text-red-A200 text-sm">
            filter
          </div>
        </Button>

        <div className="invoice-table v-table">
          <ReactTable
            columns={columns}
            data={data}
            tableClass={"w-[98%] mx-auto"}
            headerClass={
              "bg-blue-700_96 w-full h-12 rounded-full  shadow-bs4 text-left text-sm"
            }
            rowClass={
              "shadow-md shadow-red-100  p-[15px] rounded-2xl  shadow-bs w-full h-14"
            }
            tableBodyClass={"w-full max-h-[200px]"}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentRiderPage;
