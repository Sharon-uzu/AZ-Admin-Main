import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, CheckBox, Img, ReactTable, Text } from "../../components";
import Sidebar4 from "../../components/Sidebar4";

const UsermanagemnetThreePage = () => {
  const table5Data = React.useRef([
    {
      name: "rdennar@gmail.com",
      admintype: "REP 200",
      repcode: "active",
      status: "12/11/2023 12:40:30",
      lastlogindate: "183.4567.776.90",
      loginip: "183.4567.776.90",
      action: "images/img_overflowmenu.svg",
    },
    {
      name: "rdennar@gmail.com",
      admintype: "contributor",
      repcode: "REP 340",
      status: "inactive",
      lastlogindate: "12/11/2023 12:40:30",
      loginip: "183.4567.776.90",
      action: "images/img_overflowmenu.svg",
    },
    {
      name: "rdennar@gmail.com",
      admintype: "general",
      repcode: "REP 345",
      status: "active",
      lastlogindate: "12/11/2023 12:40:30",
      loginip: "183.4567.776.90",
      action: "images/img_overflowmenu.svg",
    },
    {
      name: "rdennar@gmail.com",
      admintype: "super",
      repcode: "REP 341",
      status: "active",
      lastlogindate: "12/11/2023 12:40:30",
      loginip: "183.4567.776.90",
      action: "images/img_overflowmenu.svg",
    },
  ]);
  const table5Columns = React.useMemo(() => {
    const table5ColumnHelper = createColumnHelper();
    return [
      table5ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-start p-[13px]">
            <Text
              className="capitalize md:ml-[0] ml-[43px] text-base text-gray-600"
              size="txtOpenSansRomanBold16Gray600"
            >
              ruth dennar
            </Text>
            <Text
              className="capitalize md:ml-[0] ml-[43px] text-gray-600 text-xs"
              size="txtOpenSansRomanRegular12"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[199px] sm:px-5 px-[35px] py-2.5 text-base text-gray-100_01"
            size="txtOpenSansRomanBold16Gray10001"
          >
            name
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("admintype", {
        cell: (info) => (
          <Text
            className="capitalize pb-[19px] pt-[26px] text-base text-gray-600"
            size="txtOpenSansRomanBold16Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[120px] pb-[9px] pt-3 text-base text-gray-100_01"
            size="txtOpenSansRomanBold16Gray10001"
          >
            admin type
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("repcode", {
        cell: (info) => (
          <Text
            className="capitalize pb-5 pt-[25px] text-base text-light_green-500"
            size="txtOpenSansRomanBold16Lightgreen500"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[126px] pb-[9px] pt-3 text-base text-gray-100_01"
            size="txtOpenSansRomanBold16Gray10001"
          >
            rep code
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("status", {
        cell: (info) => (
          <Text
            className="capitalize pb-[19px] pt-[26px] text-base text-gray-600"
            size="txtOpenSansRomanBold16Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[110px] py-2.5 text-base text-gray-100_01"
            size="txtOpenSansRomanBold16Gray10001"
          >
            status
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("lastlogindate", {
        cell: (info) => (
          <Text
            className="capitalize pl-[-536px] text-base text-gray-600"
            size="txtOpenSansRomanBold16Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[180px] pb-[9px] pt-3 text-base text-gray-100_01"
            size="txtOpenSansRomanBold16Gray10001"
          >
            last login date
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("loginip", {
        cell: (info) => (
          <Text
            className="capitalize pl-[-536px] text-base text-gray-600"
            size="txtOpenSansRomanBold16Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[173px] pb-[9px] pt-3 text-base text-gray-100_01"
            size="txtOpenSansRomanBold16Gray10001"
          >
            login IP
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row gap-5 items-start justify-start">
            <Img
              className="h-6 mb-[18px] mt-6 w-6"
              src="images/img_link_gray_600.svg"
              alt="link"
            />
            <Img
              className="h-6 mb-[18px] mt-[23px] w-6"
              alt="overflowmenu"
              src="info?.getValue()"
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[105px] pl-0.5 py-2.5 text-base text-gray-100_01"
            size="txtOpenSansRomanBold16Gray10001"
          >
            action
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
    {
      label: "USER",
      href: "/user",
      active: window.location.pathname === "/user",
    },
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
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-opensans items-center justify-start mx-auto pb-[3px] pr-[3px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar4 className="!sticky !w-[158px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs top-[0]" />
          <div className="flex flex-1 flex-col font-manrope justify-start md:mt-0 mt-[23px] w-full">
            <div className="flex flex-row gap-[15px] items-start justify-end md:ml-[0] ml-[698px] w-[35%] md:w-full">
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
                  alt="refresh_Two"
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
            <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-center justify-start mt-[26px] w-[94%] md:w-full">
              <Button className="bg-gray-100_01 cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-600 uppercase">
                admin
              </Button>
              <Button className="bg-red-A700_af cursor-pointer font-bold min-w-[159px] ml-11 md:ml-[0] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-100_01 uppercase">
                sub admin
              </Button>
              <div className="flex flex-col h-6 items-center justify-start md:ml-[0] ml-[132px] w-6">
                <Img
                  className="h-6 w-6"
                  src="images/img_clock.svg"
                  alt="clock"
                />
              </div>
              <Text
                className="capitalize ml-2.5 md:ml-[0] text-base text-gray-600"
                size="txtOpenSansRomanRegular16"
              >
                user
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-start md:ml-[0] ml-[33px] p-[7px] w-6"
                style={{ backgroundImage: "url('images/img_group26.svg')" }}
              >
                <div className="bg-gray-50_03 h-[9px] w-2.5"></div>
              </div>
              <Text
                className="capitalize ml-2.5 md:ml-[0] text-base text-gray-600"
                size="txtOpenSansRomanRegular16"
              >
                vendor
              </Text>
              <Text
                className="capitalize md:ml-[0] ml-[201px] text-base text-indigo-600 underline"
                size="txtOpenSansRomanRegular16Indigo600"
              >
                + new admin
              </Text>
            </div>
            <div className="overflow-auto font-opensans ml-1.5 md:ml-[0] mr-11 mt-[71px] w-[96%]">
              <ReactTable
                columns={table5Columns}
                data={table5Data.current}
                rowClass={""}
                headerClass="bg-blue-700_96"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsermanagemnetThreePage;
