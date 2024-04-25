import React from "react";
import {
  Img,
  Input,
  ReactTable,
  Text,
} from "../../components";
import { vendorTransactionColumn } from "../../components/TableData/VendorColums";

const VendorTransactions = () => {
  const vendorTransactions = React.useMemo(
    () => [
      {
        sn: "1",
        date: "2018-02-23",
        id: "A23",
        name: "dennar",
        address: "worji",
        phoneNo: "20180223",
        orderPrice: "Completed",
        deliveryPrice: "2,500",
        discount: "00",
        receipt: "view",
        paymentMode: "completed",
        action: "print",
      },
      {
        sn: "2",
        date: "2018-02-23",
        id: "VE3",
        name: "sharon",
        address: "transamadi",
        phoneNo: "20180223",
        orderPrice: "pending",
        deliveryPrice: "2,500",
        discount: "00",
        receipt: "view",
        paymentMode: "refund",
        action: "track refund",
      },
      {
        sn: "3",
        date: "2018-02-23",
        id: "WS2",
        name: "traecy",
        address: "onelga",
        phoneNo: "20180223",
        orderPrice: "completed",
        deliveryPrice: "3,200",
        discount: "00",
        receipt: "view",
        paymentMode: "refund",
        action: "track refund",
      },
    ],
    []
  );

  const COLUMNS = React.useMemo(() => vendorTransactionColumn, []);

  return (
    <>
      <div>
        <div className="bg-white-A700 absolute top-[12%] right-0 flex  flex-row ml-auto justify-evenly p-[10px] rounded-[15px] shadow-bs1 w-[23%] ">
          <Text
            className="capitalize my-[9px] text-red-A200 text-sm"
            size="txtOpenSansRomanSemiBold14"
          >
            all
          </Text>
          <Text
            className="capitalize mb-[7px] ml-4 mt-[11px] text-gray-600 text-sm"
            size="txtOpenSansRomanSemiBold14Gray600"
          >
            today
          </Text>
          <Text
            className="capitalize ml-[15px] my-[9px] text-gray-600 text-sm"
            size="txtOpenSansRomanSemiBold14Gray600"
          >
            custom
          </Text>
          <Text
            className="capitalize ml-4 my-[9px] text-gray-600 text-sm"
            size="txtOpenSansRomanSemiBold14Gray600"
          >
            filter
          </Text>
          <Img
            className=" w-[15px]"
            src="/images/img_arrowdown.svg"
            alt="arrowdown"
          />
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Text
            className="capitalize ml-0.5 md:ml-[0] mt-[19px] text-gray-600 text-sm"
            size="txtOpenSansRomanRegular14Gray600"
          >
            select vendor
          </Text>
          <div className="grid grid-cols-4 md:gap-5 items-start justify-start w-[93%] md:w-full">
            <Input
              name="frame237"
              placeholder="genesis"
              className="font-bold p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm uppercase w-full"
              wrapClassName="bg-white-A700_af flex mb-[43px] md:mt-0 mt-0.5 px-[18px] py-[9px] rounded-[15px] shadow-bs1 md:w-[90%] sm:w-full"
              prefix={
                <Img
                  className="mr-1.5 rounded-[16px] my-auto w-10"
                  src="/images/img_ellipse_16_31x33.png"
                  alt="Ellipse 16"
                />
              }
              suffix={
                <Img
                  className="mt-2  w-6"
                  src="/images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
            ></Input>
            <div className="bg-white-A700 flex flex-col gap-1.5 items-center mb-0.5  py-[10px] rounded-[15px] shadow-bs2">
              <Text
                className="capitalize  sm:text-[18.57px] md:text-[20.57px] text-[22.57px] text-gray-600"
                size="txtOpenSansRomanBold2257"
              >
                Order payment
              </Text>
              <Text
                className="capitalize sm:text-[21px] md:text-[23px] mt-1 text-[25px] text-gray-600"
                size="txtOpenSansRomanBold25"
              >
                <span className="text-gray-600 font-opensans text-left font-bold line-through">
                  N
                </span>
                <span className="text-gray-600 font-opensans text-left font-bold">
                  25,000
                </span>
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col gap-1.5 items-center mb-0.5  py-[10px] rounded-[15px] shadow-bs2">
              <Text
                className="capitalize md:ml-[0]  sm:text-[18.57px] md:text-[20.57px] text-[22.57px] text-gray-600"
                size="txtOpenSansRomanBold2257"
              >
                delivery payment
              </Text>
              <Text
                className="capitalize text-center mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                size="txtOpenSansRomanBold25"
              >
                <span className="text-gray-600 font-opensans text-left font-bold line-through">
                  N
                </span>
                <span className="text-gray-600 font-opensans text-left font-bold">
                  7,000
                </span>
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col gap-1.5 items-center mb-0.5  py-[10px] rounded-[15px] shadow-bs2">
              <Text
                className="capitalize text-center sm:text-[18.57px] md:text-[20.57px] text-[22.57px] text-gray-600"
                size="txtOpenSansRomanBold2257"
              >
                total payment
              </Text>
              <Text
                className="capitalize text-center mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-gray-600"
                size="txtOpenSansRomanBold25"
              >
                <span className="text-gray-600 font-opensans text-center font-bold line-through">
                  n
                </span>
                <span className="text-gray-600 font-opensans text-center font-bold">
                  32,000
                </span>
              </Text>
            </div>
          </div>
        </div>

        <div className="vendor-activity-table">
          <ReactTable
            columns={COLUMNS}
            data={vendorTransactions}
            tableClass={"w-[99%] mx-auto "}
            headerClass={"bg-blue-700_96 w-full h-12 rounded-full shadow-bs4 text-left text-[13px] text-[#fff]"}
            rowClass={"shadow-md   p-[15px] rounded-2xl  shadow-bs w-full h-14 text-left"}
            tableBodyClass={"w-full "}
          />
        </div>
        
      </div>
    </>
  );
};

export default VendorTransactions;
