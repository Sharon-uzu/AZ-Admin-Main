import React from "react";
import { Button, CheckBox, Img, List, ReactTable, Text } from "../../components";
import { vendorTransactionColumns } from "../../components/TableData/PaymentColumns";

const PaymentvendorPage = () => {


  const data = React.useMemo(
    () => [
      {
        sn: "1",
        id: "45664",
        client: "genesis",
        paymentDate: "2018-02-23",
        expectedDate: "2018-02-23",
        amountReceived: "10,000",
        vendor: "10,000",
        delivery: "18,000",
        amountToPay: "18,000",
        status: "Completed",
        receipt: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        sn: "2",
        id: "34543",
        client: "osere denco",
        paymentDate: "2018-02-23",
        expectedDate: "2018-02-23",
        amountReceived: "10,000",
        vendor: "10,000",
        delivery: "19,000",
        amountToPay: "19,000",
        status: "Pending",
        receipt: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        sn: "3",
        id: "45756",
        client: "kilimanjaro",
        paymentDate: "2018-02-23",
        expectedDate: "2018-02-23",
        amountReceived: "10,000",
        vendor: "10,000",
        delivery: "1,000",
        amountToPay: "1,000",
        status: "Completed",
        receipt: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
      {
        sn: "4",
        id: "87096",
        client: "pizza hut",
        paymentDate: "2018-02-23",
        expectedDate: "2018-02-23",
        amountReceived: "10,000",
        vendor: "10,000",
        delivery: "19,000",
        amountToPay: "19,000",
        status: "Canceled",
        receipt: "/images/img_overflowmenu_blue_gray_900_01.svg",
      },
    ],
    []
  );
  const COLUMN = React.useMemo(() => vendorTransactionColumns, []);
  return (
    <>

      <div className=" font-opensans   w-full  max-h-[90vh] overflow-y-scroll">
        <div className="flex flex-col font-opensans gap-[20px] mt-[20px] md:w-[80%] w-full mr-auto ml-4 mb-6">
          <div className="flex md:flex-col flex-row gap-[45px] items-center justify-start w-[91%] md:w-full">
            <List
              className="flex-col md:flex-row gap-7 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] md:w-full "
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-row gap-3 items-center justify-start sm:ml-[0] p-[5px] rounded-[20px] shadow-bs w-full">
                <Text
                  className="capitalize sm:flex-1 leading-[19.00px] ml-2.5 text-base text-gray-600 w-[35%] sm:w-full"
                  size="txtOpenSansRomanBold16Gray600"
                >
                  total invoice
                </Text>
                <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[67px] py-1 rounded-[67px] shadow-bs8 md:text-4xl text-[41.1px] text-center text-red-500 min-w-[67px]">
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
        </div>
          <div className="flex justify-between items-center w-[97%] mb-4 mx-auto ">

          <div className="flex flex-col md:flex-row font-opensans md:gap-5 items-start justify-start  w-[75%] md:w-full">
            <div className="border-2 border-black-900_4c border-solid h-3.5 w-[2%]"></div>
            <Text
              className=" text-sm text-gray-600 uppercase "
              size="txtOpenSansRomanBold16Gray600"
            >
              show completed transaction
            </Text>
            <div className="border-2 border-black-900_4c border-solid h-3.5 w-[2%]"></div>
            <Text
              className=" text-sm text-gray-600 uppercase"
              size="txtOpenSansRomanBold16Gray600"
            >
              show incomplete transaction
            </Text> 
          </div>
            <Button
              className="bg-white-A700 cursor-pointer flex items-center justify-evenly min-w-[12%] h-10 rounded-[15px] shadow-bs1"
              rightIcon={
                <Img
                  className=" w-10 h-[7px] ml-2.5 my-px"
                  src="/images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
            >
              <div className="capitalize font-semibold text-left text-red-A200 text-sm">
                more
              </div>
            </Button>
          </div>

        <div className="invoice-table v-table">
          <ReactTable
            columns={COLUMN}
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

export default PaymentvendorPage;
