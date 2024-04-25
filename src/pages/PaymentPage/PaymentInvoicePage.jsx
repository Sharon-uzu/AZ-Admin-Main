import React from "react";
import { Button, List, ReactTable, Text } from "../../components";
import { transactionColumns } from "../../components/TableData/PaymentColumns";

const PaymentInvoicePage = () => {


  const transactionData = React.useMemo(() => [
      {
        role: "vendor",
        idInvoice: "45664",
        date: "Jun 1, 2020, 08:09am",
        recipient: "genesis",
        email: "genesisfoods@gmail.com",
        transactionType: "Payment",
        status: "completed",
        comment: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        role: "staff",
        idInvoice: "34543",
        date: "Jun 1, 2020, 08:09am",
        recipient: "ruth math",
        email: "genesisfoods@gmail.com",
        transactionType: "salary",
        status: "pending",
        comment: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        role: "rider",
        idInvoice: "45756",
        date: "Jun 1, 2020, 08:09am",
        recipient: "ada ehi",
        email: "genesisfoods@gmail.com",
        transactionType: "salary",
        status: "completed",
        comment: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        role: "rider",
        idInvoice: "87096",
        date: "Jun 1, 2020, 08:09am",
        recipient: "dresie lin",
        email: "genesisfoods@gmail.com",
        transactionType: "maintanance",
        status: "canceled",
        comment: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        role: "vendor",
        idInvoice: "45664",
        date: "Jun 1, 2020, 08:09am",
        recipient: "genesis",
        email: "genesisfoods@gmail.com",
        transactionType: "Payment",
        status: "completed",
        comment: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        role: "staff",
        idInvoice: "34543",
        date: "Jun 1, 2020, 08:09am",
        recipient: "ruth math",
        email: "genesisfoods@gmail.com",
        transactionType: "salary",
        status: "pending",
        comment: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        role: "rider",
        idInvoice: "45756",
        date: "Jun 1, 2020, 08:09am",
        recipient: "ada ehi",
        email: "genesisfoods@gmail.com",
        transactionType: "salary",
        status: "completed",
        comment: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        role: "rider",
        idInvoice: "87096",
        date: "Jun 1, 2020, 08:09am",
        recipient: "dresie lin",
        email: "genesisfoods@gmail.com",
        transactionType: "maintanance",
        status: "canceled",
        comment: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
    ],[]);

  const COLUMN = React.useMemo(() => transactionColumns, []);

  return (
    <>
      <div className=" font-opensans   w-full  max-h-[90vh] overflow-y-scroll">
        <div className="flex flex-col font-opensans gap-[20px] mt-[20px] md:w-[80%] w-full mr-auto ml-4 mb-4">
          <div className="flex md:flex-col flex-row gap-[45px] items-center justify-start w-[91%] md:w-full">
            <List
              className="flex-col md:flex-row gap-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-row gap-3 items-center justify-start sm:ml-[0] p-[5px] rounded-[20px] shadow-bs w-full">
                <Text
                  className="capitalize sm:flex-1 leading-[19.00px] ml-2.5 text-base text-gray-600 w-[35%] sm:w-full"
                  size="txtOpenSansRomanBold16Gray600"
                >
                  total invoice
                </Text>
                <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[67px] mr-[18px] py-1 rounded-[67px] shadow-bs8 md:text-4xl text-[41.1px] text-center text-red-500 min-w-[67px]">
                  56
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-row gap-3 items-center justify-center sm:ml-[0] p-[5px] rounded-[20px] shadow-bs w-full">
                <Text
                  className="capitalize sm:flex-1 leading-[19.00px] ml-2.5 text-base text-gray-600 w-[35%] sm:w-full"
                  size="txtOpenSansRomanBold16Gray600"
                >
                  paid invoice
                </Text>
                <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[67px] mr-[18px] py-1 rounded-[67px] shadow-bs8 md:text-4xl text-[41.1px] text-center text-red-500 min-w-[67px]">
                  09
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-row gap-3 items-center justify-center sm:ml-[0] p-[5px] rounded-[20px] shadow-bs w-full">
                <Text
                  className="capitalize sm:flex-1 leading-[19.00px] ml-2.5 text-base text-gray-600 w-[35%] sm:w-full"
                  size="txtOpenSansRomanBold16Gray600"
                >
                  unpaid invoice
                </Text>
                <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[67px] mr-[18px] py-1 rounded-[67px] shadow-bs8 md:text-4xl text-[41.1px] text-center text-red-500 min-w-[67px]">
                  10
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-row gap-3 items-center justify-center sm:ml-[0] p-[5px] rounded-[20px] shadow-bs w-full">
                <Text
                  className="capitalize sm:flex-1 leading-[19.00px] ml-2.5 text-base text-gray-600 w-[35%] sm:w-full"
                  size="txtOpenSansRomanBold16Gray600"
                >
                  total invoice sent
                </Text>
                <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[67px] mr-[18px] py-1 rounded-[67px] shadow-bs8 md:text-4xl text-[41.1px] text-center text-red-500 min-w-[67px]">
                  19
                </Button>
              </div>
            </List>
          </div>
          <Text
            className=" text-base text-gray-600 uppercase ml-3"
            size="txtOpenSansRomanBold16Gray600"
          >
            payment history
          </Text>
        </div>

        <div className="invoice-table">
          <ReactTable
            columns={COLUMN}
            data={transactionData}
            tableClass={"w-[98%] mx-auto"}
            headerClass={
              "bg-blue-700_96 w-full h-12 rounded-full  shadow-bs4 text-left"
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

export default PaymentInvoicePage;
