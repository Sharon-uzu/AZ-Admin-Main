import React from "react";

// import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, Button, List, ReactTable, Text } from "../../components";
import { vendorActivityColumn } from "../../components/TableData/VendorColums";

const VendorActivityLog = () => {

  const vendorActivityLog = React.useMemo(() => [
    {
      sn: '1',
      date: '2018-02-23',
      id: 'A23',
      name: 'dennar',
      address: 'worji',
      phoneNo: '20180223',
      paymentStatus: 'received',
      orderStatus: 'Completed',
      customerResponds: 'proceed',
      deliveryStatus: 'pending',
      rider: 'jud oke',
      orderNo: '20180223',
      time: '11:00 am',
    },
    {
      sn: '2',
      date: '2018-02-23',
      id: 'VE3',
      name: 'sharon',
      address: 'transamadi',
      phoneNo: '20180223',
      paymentStatus: 'received',
      orderStatus: 'pending',
      customerResponds: 'awaiting',
      deliveryStatus: 'in progress',
      rider: 'jude oke',
      orderNo: '20180223',
      time: '11:00 am',
    },
    {
      sn: '3',
      date: '2018-02-23',
      id: 'WS2',
      name: 'traecy',
      address: 'onelga',
      phoneNo: '20180223',
      paymentStatus: 'received',
      orderStatus: 'completed',
      customerResponds: 'refund',
      deliveryStatus: 'pending',
      rider: '20180223',
      orderNo: '20180223',
      time: '11:00 am',
    },
    {
      sn: '4',
      date: '2018-02-23',
      id: 'WS2',
      name: 'dennis',
      address: 'Egbema',
      phoneNo: '20180223',
      paymentStatus: 'received',
      orderStatus: 'onhold',
      customerResponds: 'pending',
      deliveryStatus: '20180223',
      rider: '20180223',
      orderNo: '20180223',
      time: '11:00 am',
    },
  ],[]);
  

  const COLUMNS = React.useMemo(() => vendorActivityColumn, []);

  return (
    <>

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

    
    
      <div className="w-full flex flex-col font-opensans items-center justify-start">
        <div className="flex md:flex-col flex-row items-start w-full">
            <List
              className="list-card-con mt-[39px]"
              orientation="horizontal"
            >
            <div className="list-card1 bg-white-A700 flex justify-center items-center p-4 rounded-[15px] shadow-bs2">
            <Text
              className="v-text capitalize text-gray-600"
              size="txtOpenSansRomanBold2257"
            >
              Accepted <br /> Orders
            </Text>
            <Button className="v-button bg-red-200_16 capitalize cursor-pointer font-bold shadow-bs3 text-center text-red-500 ">
              178
            </Button>
          </div>
          <div className="list-card1 bg-white-A700 flex  items-center p-4 rounded-[15px] shadow-bs2">
            <Text
              className="v-text capitalize text-gray-600"
              size="txtOpenSansRomanBold2257"
            >
              Declined <br /> Orders
            </Text>
            <Button className="v-button bg-red-200_16 capitalize cursor-pointer font-bold shadow-bs3 text-center text-red-500 ">
              110
            </Button>
          </div>
          <div className="list-card1 bg-white-A700 flex  items-center p-4 rounded-[15px] shadow-bs2">
            <Text
              className="v-text capitalize text-gray-600"
              size="txtOpenSansRomanBold2257"
            >
              Processing <br /> Orders
            </Text>
            <Button className="v-button bg-red-200_16 capitalize cursor-pointer font-bold shadow-bs3 text-center text-red-500 ">
              11
            </Button>
          </div>
          <div className="list-card1 bg-white-A700 flex  items-center p-4 rounded-[15px] shadow-bs2">
            <Text
              className="v-text capitalize text-gray-600"
              size="txtOpenSansRomanBold2257"
            >
              Completed <br /> Orders
            </Text>
            <Button className="v-button bg-red-200_16 capitalize cursor-pointer font-bold shadow-bs3 text-center text-red-500 ">
              150
            </Button>
          </div>
          <div className="list-card1 bg-white-A700 flex  items-center p-4 rounded-[15px] shadow-bs2">
            <Text
              className="v-text capitalize text-gray-600"
              size="txtOpenSansRomanBold2257"
            >
              All <br /> Orders
            </Text>
            <Button className="v-button bg-red-200_16 capitalize cursor-pointer font-bold shadow-bs3 text-center text-red-500 ">
              60
            </Button>
          </div>
        
            </List>
            <div className="flex flex-col font-opensans items-start justify-start mr-3 mt-[9px] w-[99%] md:w-full">
              <Text
                className="v-text capitalize text-gray-600"
                size="txtOpenSansRomanBold2257"
              >
                select vendor
              </Text>
          </div>
        </div>
      </div>

      <div className="vendor-activity-table">
        <ReactTable
            columns={COLUMNS}
            data={vendorActivityLog}
            tableClass={"w-[98%] mx-auto mt-6"}
            headerClass={"bg-blue-700_96 w-full h-14 rounded-full  shadow-bs4 text-left text-[13px] text-[#fff]"}
            rowClass={"shadow-md shadow-red-100  rounded-2xl shadow-bs w-full h-14 "}
            tableBodyClass={"w-full "}
          />
      </div>
      
    </>
  );
};

export default VendorActivityLog;
