import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, CheckBox, Img, ReactTable, Text } from "../../components";
import Sidebar5 from "../../components/Sidebar5";

const USERorderlistPage = () => {
  const table7Data = React.useRef([
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
      sn: "1",
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
      sn: "1",
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
  ]);
  const table7Columns = React.useMemo(() => {
    const table7ColumnHelper = createColumnHelper();
    return [
      table7ColumnHelper.accessor("sn", {
        cell: (info) => (
          <Text
            className="capitalize pb-[15px] pl-4 pt-[34px] text-gray-600 text-xs"
            size="txtOpenSansRomanBold12Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[58px] pl-4 sm:pr-5 pr-[23px] py-[11px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            SN
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("id", {
        cell: (info) => (
          <Text
            className="capitalize pb-[15px] pt-[33px] text-[13px] text-gray-600"
            size="txtOpenSansRomanBold13"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[59px] py-3 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            ID
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("vendorOne", {
        cell: (info) => (
          <Text
            className="capitalize pb-3.5 pt-[31px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[94px] py-[11px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            vendor
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("customer", {
        cell: (info) => (
          <Text
            className="capitalize pb-3.5 pt-[31px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[88px] py-[11px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            customer
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("mode", {
        cell: (info) => (
          <Text
            className="capitalize pb-3.5 pt-[31px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[76px] py-[11px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            mode
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("address", {
        cell: (info) => (
          <Text
            className="capitalize pb-3.5 pt-8 text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[95px] pb-[13px] pt-2.5 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            address
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("item", {
        cell: (info) => (
          <Text
            className="capitalize pb-[15px] pl-[13px] pt-[31px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[68px] py-[11px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            item
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("order", {
        cell: (info) => (
          <Text
            className="capitalize pb-3.5 pt-8 text-green-A700 text-sm"
            size="txtOpenSansRomanBold14GreenA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[97px] pb-[13px] pt-2.5 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            order
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("phonenumber", {
        cell: (info) => (
          <Text
            className="capitalize pb-[15px] pt-[31px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[129px] pb-[13px] pt-2.5 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            phone number
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("language", {
        cell: (info) => (
          <Text
            className="capitalize pb-3.5 pt-8 text-green-A700 text-sm"
            size="txtOpenSansRomanBold14GreenA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize leading-[15.00px] min-w-[104px] pb-[5px] pt-[9px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            <>
              payment <br />
              status{" "}
            </>
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("date", {
        cell: (info) => (
          <Text
            className="capitalize pb-[15px] pt-[31px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[93px] pb-[7px] pt-4 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            date
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("time", {
        cell: (info) => (
          <Text
            className="capitalize pb-[17px] pt-[29px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[71px] pb-[13px] pt-2.5 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            Time
          </Text>
        ),
      }),
      table7ColumnHelper.accessor("reciept", {
        cell: (info) => (
          <Text
            className="capitalize pb-4 pt-[29px] text-gray-600 text-sm"
            size="txtOpenSansRomanRegular14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[62px] py-[11px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            reciept
          </Text>
        ),
      }),
    ];
  }, []);

  const sideBarMenu = [
    {
      label: "REGISTRATION",
      href: "/registration",
      active: window.location.pathname === "/registration",
    },
    {
      label: "VENDOR",
      href: "/adminforvendor",
      active: window.location.pathname === "/adminforvendor",
    },
    {
      label: "RIDER",
      href: "/paymentrider",
      active: window.location.pathname === "/paymentrider",
    },
  ];
  const sideBarMenu1 = [
    {
      label: "PAYMENT",
      href: "/paymentinvoice",
      active: window.location.pathname === "/paymentinvoice",
    },
    {
      label: "REPORT",
      href: "/report",
      active: window.location.pathname === "/report",
    },
    { label: "<>customer <br />support</>" },
    {
      label: "<>user <br />management</>",
      href: "/user",
      active: window.location.pathname === "/user",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-opensans items-center justify-start mx-auto pb-[3px] pr-[3px] w-full">
        <div className="flex md:flex-col flex-row gap-[18px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar5 className="!sticky !w-[158px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs top-[0]" />
          <div className="flex flex-1 flex-col font-manrope items-end justify-start md:mt-0 mt-[23px] w-full">
            <div className="flex flex-row gap-4 items-start justify-end w-[34%] md:w-full">
              <div className="flex flex-row gap-3.5 items-center justify-start mt-[5px] w-[26%]">
                <Img
                  className="h-5 w-5"
                  src="images/img_search1.svg"
                  alt="searchOne"
                />
                <Text
                  className="text-[14.41px] text-gray-400"
                  size="txtManropeMedium1441"
                >
                  Search...
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-start justify-between w-[70%]">
                <Img
                  className="h-[23px] mt-1 w-[23px]"
                  src="images/img_refresh_blue_gray_400_01_23x23.svg"
                  alt="refresh_One"
                />
                <div className="h-[34px] relative w-[86%]">
                  <CheckBox
                    className="capitalize font-medium leading-[normal] m-auto md:pl-10 sm:pl-5 text-[14.41px] text-gray-400 text-left"
                    inputClassName="absolute mr-[5px]"
                    name="judeabelcustome_One"
                    id="judeabelcustome_One"
                    label="jude abel
(customer service manager)"
                  ></CheckBox>
                  <Img
                    className="absolute h-6 left-[16%] top-[12%] w-6"
                    src="images/img_user.svg"
                    alt="user_One"
                  />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row font-opensans gap-[47px] items-center justify-start mt-[26px] w-[53%] md:w-full">
              <Button className="bg-gray-100_01 cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-600 uppercase">
                user list
              </Button>
              <Button className="bg-red-A700_af cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-100_01 uppercase">
                order list
              </Button>
              <Button className="bg-gray-100_01 cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-600 uppercase">
                transaction
              </Button>
            </div>
            <div className="flex flex-col font-opensans items-center justify-start mt-[78px] w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table7Columns}
                  data={table7Data.current}
                  rowClass={""}
                  headerClass="bg-blue-700_96"
                />
              </div>
              <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[5px] p-4 rounded-[13px] shadow-bs4 w-full">
                <Text
                  className="capitalize text-gray-600 text-xs"
                  size="txtOpenSansRomanBold12Gray600"
                >
                  1
                </Text>
                <Text
                  className="capitalize ml-9 sm:ml-[0] text-[13px] text-gray-600"
                  size="txtOpenSansRomanBold13"
                >
                  TY5
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[35px] sm:mt-0 my-2.5 text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  pizza hut
                </Text>
                <Text
                  className="capitalize ml-7 sm:ml-[0] sm:mt-0 my-2.5 text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  dresie lin
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[18px] sm:mt-0 my-2.5 text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  friend
                </Text>
                <Text
                  className="capitalize ml-8 sm:ml-[0] sm:mt-0 my-2.5 text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  trans...
                </Text>
                <Text
                  className="capitalize mb-3 sm:ml-[0] ml-[55px] sm:mt-0 mt-[9px] text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  2{" "}
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[143px] sm:mt-0 my-[11px] text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  08109830911
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[146px] sm:mt-0 my-[11px] text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  15/03/22
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default USERorderlistPage;
