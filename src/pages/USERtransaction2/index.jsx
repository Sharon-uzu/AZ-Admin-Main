import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, CheckBox, Img, ReactTable, Text } from "../../components";

const USERtransaction2Page = () => {
  const table9Data = React.useRef([
    {
      sn: "1",
      id: "UB3",
      vendorOne: "genesis",
      deliveryaddressOne: "2 avenue ...",
      item: "5",
      orderprice: "40000",
      deliveryprice: "n1500",
      language: "11:00 am",
      timedelivered: "11:00 am",
      languageOne: "completed",
      date: "15/03/22",
      receipt: "view all payments",
    },
    {
      sn: "1",
      id: "UB3",
      vendorOne: "denco",
      deliveryaddressOne: "2 avenue ...",
      item: "2 ",
      orderprice: "34222",
      deliveryprice: "n1500",
      language: "11:00 am",
      timedelivered: "11:00 am",
      languageOne: "cancelled",
      date: "15/03/22",
      receipt: "view all payments",
    },
    {
      sn: "1",
      id: "UB3",
      vendorOne: "repulic",
      deliveryaddressOne: "2 avenue ...",
      item: "1",
      orderprice: "233333",
      deliveryprice: "N1500",
      language: "11:00 am",
      timedelivered: "11:00 am",
      languageOne: "completed",
      date: "15/03/22",
      receipt: "view all payments",
    },
  ]);
  const table9Columns = React.useMemo(() => {
    const table9ColumnHelper = createColumnHelper();
    return [
      table9ColumnHelper.accessor("sn", {
        cell: (info) => (
          <Text
            className="capitalize pb-[18px] pl-2.5 pt-7 text-gray-600 text-xs"
            size="txtOpenSansRomanRegular12"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize h-11 min-w-[44px] pb-[13px] pl-2.5 pt-2.5 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            SN
          </Text>
        ),
      }),
      table9ColumnHelper.accessor("id", {
        cell: (info) => (
          <Text
            className="capitalize pb-[18px] pt-[27px] text-[13px] text-gray-600"
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
      table9ColumnHelper.accessor("vendorOne", {
        cell: (info) => (
          <Text
            className="capitalize pb-[18px] pt-[25px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[93px] pb-[13px] pt-2.5 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            vendor
          </Text>
        ),
      }),
      table9ColumnHelper.accessor("deliveryaddressOne", {
        cell: (info) => (
          <Text
            className="capitalize pb-[18px] pt-[26px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[152px] py-[11px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            delivery address
          </Text>
        ),
      }),
      table9ColumnHelper.accessor("item", {
        cell: (info) => (
          <Text
            className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[63px] py-[11px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            item
          </Text>
        ),
      }),
      table9ColumnHelper.accessor("orderprice", {
        cell: (info) => (
          <Text
            className="capitalize pb-[18px] pt-[26px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize sm:flex-1 leading-[12.00px] min-w-[85px] py-2.5 text-gray-100_01 text-sm sm:w-full"
            size="txtOpenSansRomanBold14"
          >
            order price
          </Text>
        ),
      }),
      table9ColumnHelper.accessor("deliveryprice", {
        cell: (info) => (
          <Text
            className="capitalize pb-[18px] pt-[26px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize sm:flex-1 leading-[12.00px] min-w-[90px] py-2.5 text-gray-100_01 text-sm sm:w-full"
            size="txtOpenSansRomanBold14"
          >
            delivery price
          </Text>
        ),
      }),
      table9ColumnHelper.accessor("language", {
        cell: (info) => (
          <Text
            className="capitalize pb-5 pt-6 text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize leading-[12.00px] min-w-[82px] py-2.5 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            <>
              time
              <br />
              recived{" "}
            </>
          </Text>
        ),
      }),
      table9ColumnHelper.accessor("timedelivered", {
        cell: (info) => (
          <Text
            className="capitalize pb-5 pt-6 text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize leading-[12.00px] min-w-[98px] py-2.5 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            <>
              time <br />
              delivered
            </>
          </Text>
        ),
      }),
      table9ColumnHelper.accessor("languageOne", {
        cell: (info) => (
          <Text
            className="capitalize pb-4 pt-[27px] text-green-A700 text-sm"
            size="txtOpenSansRomanBold14GreenA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize leading-[12.00px] min-w-[115px] py-2.5 text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            <>
              payment
              <br />
              status{" "}
            </>
          </Text>
        ),
      }),
      table9ColumnHelper.accessor("date", {
        cell: (info) => (
          <Text
            className="capitalize pb-[18px] pt-[26px] text-gray-600 text-sm"
            size="txtOpenSansRomanBold14Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[97px] py-[11px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            date
          </Text>
        ),
      }),
      table9ColumnHelper.accessor("receipt", {
        cell: (info) => (
          <Text
            className="capitalize pb-[19px] pt-[30px] text-[10px] text-gray-600"
            size="txtOpenSansRomanRegular10"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="capitalize min-w-[98px] py-[11px] text-gray-100_01 text-sm"
            size="txtOpenSansRomanBold14"
          >
            receipt
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
      <div className="bg-gray-50 flex flex-col font-opensans items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-7 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[158px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs top-[0]">
            <Img
              className="h-[983px] md:h-auto mb-[3px] object-cover rotate-[90deg] w-full"
              src="images/img_rectangle18.png"
              alt="rectangleEighteen"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  "flex-direction": "column",
                  color: "#697076",
                  "font-weight": 700,
                  "font-size": "16px",
                  "padding-left": "20px",
                  "padding-right": "20px",
                },
              }}
              className="flex flex-col items-center justify-start mb-[319px] mt-[141px] pr-5 w-[88%]"
            >
              <div className="flex flex-col gap-[43px] items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <Button className="bg-red-500 cursor-pointer font-bold min-w-[138px] mt-[25px] py-4 rounded-bl-[20px] rounded-br-[20px] shadow-bs text-base text-center text-gray-100_01">
                USER
              </Button>
              <div className="flex flex-col gap-[43px] items-center justify-start mt-[27px] w-full">
                {sideBarMenu1?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </Menu>
            <div className="flex flex-row gap-[15px] items-start justify-center mb-[52px] ml-[22px] mr-[43px] mt-[911px] w-[59%]">
              <Img
                className="h-[22px] md:h-auto object-cover w-[22px]"
                src="images/img_settings_30x30.png"
                alt="settings"
              />
              <Text
                className="mt-0.5 text-gray-600 text-sm"
                size="txtOpenSansRomanBold14Gray600"
              >
                settings
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-start justify-center mb-5 ml-5 mr-[54px] mt-[942px] w-[54%]">
              <Img
                className="h-[23px] w-[23px]"
                src="images/img_refresh_blue_gray_400_01.svg"
                alt="refresh"
              />
              <a href="javascript:" className="mt-[3px] text-gray-600 text-sm">
                <Text size="txtOpenSansRomanBold14Gray600">logout</Text>
              </a>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col font-manrope items-end justify-start md:mt-0 mt-[23px] w-full">
            <div className="flex flex-row gap-[15px] items-start justify-end w-[34%] md:w-full">
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
            <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start mt-[26px] w-[93%] md:w-full">
              <Button className="bg-gray-100_01 cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-600 uppercase">
                user list
              </Button>
              <Button className="bg-gray-100_01 cursor-pointer font-bold min-w-[159px] ml-11 md:ml-[0] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-600 uppercase">
                order list
              </Button>
              <Button className="bg-red-A700_af cursor-pointer font-bold min-w-[159px] ml-11 md:ml-[0] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-100_01 uppercase">
                transaction
              </Button>
              <Text
                className="capitalize md:ml-[0] ml-[324px] md:mt-0 mt-[11px] text-base text-indigo-600 underline"
                size="txtOpenSansRomanRegular16Indigo600"
              >
                + new admin
              </Text>
            </div>
            <div className="flex flex-col font-opensans items-start justify-start mt-[52px] w-full">
              <div className="flex md:flex-col flex-row gap-[23px] items-center justify-start w-[63%] md:w-full">
                <div className="bg-white-A700 flex flex-col gap-2 items-start justify-start p-[11px] rounded-[15px] shadow-bs1">
                  <Text
                    className="capitalize md:ml-[0] ml-[38px] text-base text-gray-600"
                    size="txtOpenSansRomanBold16Gray600"
                  >
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      customer name:{" "}
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-normal">
                      esther rho
                    </span>
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[38px] text-base text-gray-600"
                    size="txtOpenSansRomanBold16Gray600"
                  >
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      address:{" "}
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-normal">
                      a paradise avenue
                    </span>
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[38px] text-base text-gray-600"
                    size="txtOpenSansRomanBold16Gray600"
                  >
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      contact:{" "}
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-normal">
                      0809155090132
                    </span>
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[38px] text-base text-gray-600"
                    size="txtOpenSansRomanBold16Gray600"
                  >
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      ID :{" "}
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-normal">
                      uBC3222
                    </span>
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-end p-[11px] rounded-[15px] shadow-bs1">
                  <Text
                    className="capitalize md:ml-[0] ml-[69px] text-base text-gray-600"
                    size="txtOpenSansRomanBold16Gray600"
                  >
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      Accepted orders
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      :{" "}
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-normal">
                      4
                    </span>
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[69px] mt-1.5 text-base text-gray-600"
                    size="txtOpenSansRomanBold16Gray600"
                  >
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      declined orders
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      :{" "}
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-normal">
                      2
                    </span>
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[69px] mt-[9px] text-base text-gray-600"
                    size="txtOpenSansRomanBold16Gray600"
                  >
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      order inprogress
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      :{" "}
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-normal">
                      1
                    </span>
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[69px] mt-1.5 text-base text-gray-600"
                    size="txtOpenSansRomanBold16Gray600"
                  >
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      overall order
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-bold">
                      {" "}
                      :{" "}
                    </span>
                    <span className="text-gray-600 font-opensans text-left font-normal">
                      7
                    </span>
                  </Text>
                </div>
              </div>
              <div className="overflow-auto mt-9 w-full">
                <ReactTable
                  columns={table9Columns}
                  data={table9Data.current}
                  rowClass={""}
                  headerClass="bg-blue-700_96"
                />
              </div>
              <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[5px] p-2.5 rounded-[13px] shadow-bs4 w-full">
                <Text
                  className="capitalize text-gray-600 text-xs"
                  size="txtOpenSansRomanRegular12"
                >
                  1
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[29px] text-[13px] text-gray-600"
                  size="txtOpenSansRomanBold13"
                >
                  UB3
                </Text>
                <Text
                  className="capitalize mb-[18px] ml-8 sm:ml-[0] sm:mt-0 mt-[15px] text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  pizza hut
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[27px] sm:mt-0 my-4 text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  2 avenue ...
                </Text>
                <Text
                  className="capitalize mb-[18px] sm:ml-[0] ml-[72px] sm:mt-0 mt-[15px] text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  2{" "}
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[139px] sm:mt-0 my-[17px] text-gray-600 text-sm"
                  size="txtOpenSansRomanBold14Gray600"
                >
                  n1500
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[341px] sm:mt-0 my-[17px] text-gray-600 text-sm"
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

export default USERtransaction2Page;
