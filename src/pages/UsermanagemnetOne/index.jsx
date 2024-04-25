import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, CheckBox, Img, List, Text } from "../../components";
import Sidebar4 from "../../components/Sidebar4";

const UsermanagemnetOnePage = () => {
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
      <div className="bg-gray-50 flex flex-col font-opensans items-center justify-start mx-auto pb-[3px] pr-[3px] w-[95%]">
        <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar4 className="!sticky !w-[158px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs top-[0]" />
          <div className="flex flex-1 flex-col font-manrope gap-[26px] justify-start md:mt-0 mt-[23px] w-full">
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
            <div className="flex flex-col font-opensans md:gap-10 gap-[71px] items-center justify-start mr-[45px] w-[96%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[98%] md:w-full">
                <Button className="bg-gray-100_01 cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-600 uppercase">
                  admin
                </Button>
                <Button className="bg-red-A700_af cursor-pointer font-bold min-w-[159px] ml-11 md:ml-[0] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-100_01 uppercase">
                  sub admin
                </Button>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-start md:ml-[0] ml-[135px] p-[7px] w-6"
                  style={{ backgroundImage: "url('images/img_group26.svg')" }}
                >
                  <div className="bg-gray-50_03 h-[9px] w-2.5"></div>
                </div>
                <Text
                  className="capitalize md:ml-[0] ml-[7px] text-base text-gray-600"
                  size="txtOpenSansRomanRegular16"
                >
                  user
                </Text>
                <div className="flex flex-col h-6 items-center justify-start md:ml-[0] ml-[37px] w-6">
                  <Img
                    className="h-6 w-6"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                </div>
                <Text
                  className="capitalize ml-1.5 md:ml-[0] text-base text-gray-600"
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
              <div className="bg-blue-700_96 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[9px] rounded-tl-[13px] rounded-tr-[13px] shadow-bs4 w-full">
                <Text
                  className="capitalize sm:ml-[0] ml-[47px] text-base text-gray-100_01"
                  size="txtOpenSansRomanBold16Gray10001"
                >
                  name
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[104px] text-base text-gray-100_01"
                  size="txtOpenSansRomanBold16Gray10001"
                >
                  admin Name
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[39px] text-base text-gray-100_01"
                  size="txtOpenSansRomanBold16Gray10001"
                >
                  status
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[69px] sm:mt-0 mt-[3px] text-base text-gray-100_01"
                  size="txtOpenSansRomanBold16Gray10001"
                >
                  last login date
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[89px] sm:mt-0 mt-[3px] text-base text-gray-100_01"
                  size="txtOpenSansRomanBold16Gray10001"
                >
                  login IP
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[141px] text-base text-gray-100_01"
                  size="txtOpenSansRomanBold16Gray10001"
                >
                  action
                </Text>
              </div>
              <List
                className="flex flex-col gap-[5px] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 p-[11px] rounded-bl-[13px] rounded-br-[13px] shadow-bs4 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mb-[7px] w-[93%] md:w-full">
                    <div className="flex flex-col items-center justify-start mb-[3px]">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        oscere denco
                      </Text>
                      <Text
                        className="capitalize mt-0.5 text-gray-600 text-xs"
                        size="txtOpenSansRomanRegular12"
                      >
                        denco@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[43px] md:mt-0 mt-1">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        ruth dennar
                      </Text>
                      <Text
                        className="capitalize text-gray-600 text-xs"
                        size="txtOpenSansRomanRegular12"
                      >
                        rdennar@gmail.com
                      </Text>
                    </div>
                    <Text
                      className="capitalize mb-[7px] ml-7 md:ml-[0] md:mt-0 mt-3.5 text-base text-light_green-500"
                      size="txtOpenSansRomanBold16Lightgreen500"
                    >
                      active
                    </Text>
                    <Text
                      className="capitalize mb-[7px] md:ml-[0] ml-[69px] md:mt-0 mt-[15px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      <span className="text-gray-600 font-opensans text-left font-bold">
                        12/11/2023{" "}
                      </span>
                      <span className="text-gray-600 font-opensans text-left text-xs font-normal">
                        12:40:30
                      </span>
                    </Text>
                    <Text
                      className="capitalize mb-[7px] md:ml-[0] ml-[74px] md:mt-0 mt-[15px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      183.4567.776.90
                    </Text>
                    <Img
                      className="h-6 mb-1.5 ml-20 md:ml-[0] md:mt-0 mt-[13px] w-6"
                      src="images/img_link_gray_600.svg"
                      alt="link"
                    />
                    <Img
                      className="h-6 mb-1.5 md:ml-[0] ml-[33px] md:mt-0 mt-[13px] w-6"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end my-0 p-3 rounded-[13px] shadow-bs4 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 w-[94%] md:w-full">
                    <div className="flex flex-col items-center justify-start mb-[5px]">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        genesis foods
                      </Text>
                      <Text
                        className="capitalize mt-0.5 text-gray-600 text-xs"
                        size="txtOpenSansRomanRegular12"
                      >
                        genesis@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-9 md:ml-[0] md:mt-0 mt-[5px]">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        ruth dennar
                      </Text>
                      <Text
                        className="capitalize mt-0.5 text-gray-600 text-xs"
                        size="txtOpenSansRomanRegular12"
                      >
                        rdennar@gmail.com
                      </Text>
                    </div>
                    <Text
                      className="capitalize ml-7 md:ml-[0] text-base text-red-A700_09"
                      size="txtOpenSansRomanBold16RedA70009"
                    >
                      inactive
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[55px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      <span className="text-gray-600 font-opensans text-left font-bold">
                        12/11/2023{" "}
                      </span>
                      <span className="text-gray-600 font-opensans text-left text-xs font-normal">
                        12:40:30
                      </span>
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[74px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      183.4567.776.90
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[79px] w-6"
                      src="images/img_link_gray_600.svg"
                      alt="link"
                    />
                    <Img
                      className="h-6 md:ml-[0] ml-[33px] w-6"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end my-0 p-3 rounded-[13px] shadow-bs4 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-1 w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        Kilimanjaro
                      </Text>
                      <Text
                        className="capitalize text-gray-600 text-xs"
                        size="txtOpenSansRomanRegular12"
                      >
                        kilimanjaro@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] md:mt-0 mt-[3px]">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        ruth dennar
                      </Text>
                      <Text
                        className="capitalize mt-0.5 text-gray-600 text-xs"
                        size="txtOpenSansRomanRegular12"
                      >
                        rdennar@gmail.com
                      </Text>
                    </div>
                    <Text
                      className="capitalize ml-7 md:ml-[0] text-base text-light_green-500"
                      size="txtOpenSansRomanBold16Lightgreen500"
                    >
                      active
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[69px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      <span className="text-gray-600 font-opensans text-left font-bold">
                        12/11/2023{" "}
                      </span>
                      <span className="text-gray-600 font-opensans text-left text-xs font-normal">
                        12:40:30
                      </span>
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[74px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      183.4567.776.90
                    </Text>
                    <Img
                      className="h-6 ml-20 md:ml-[0] w-6"
                      src="images/img_link_gray_600.svg"
                      alt="link"
                    />
                    <Img
                      className="h-6 md:ml-[0] ml-[33px] w-6"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end my-0 p-3 rounded-[13px] shadow-bs4 w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-0.5 w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start mb-[5px]">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        dominos
                      </Text>
                      <Text
                        className="capitalize mt-0.5 text-gray-600 text-xs"
                        size="txtOpenSansRomanRegular12"
                      >
                        dominos@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[30px] md:mt-0 mt-[5px]">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        ruth dennar
                      </Text>
                      <Text
                        className="capitalize mt-0.5 text-gray-600 text-xs"
                        size="txtOpenSansRomanRegular12"
                      >
                        rdennar@gmail.com
                      </Text>
                    </div>
                    <Text
                      className="capitalize ml-7 md:ml-[0] text-base text-light_green-500"
                      size="txtOpenSansRomanBold16Lightgreen500"
                    >
                      active
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[70px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      <span className="text-gray-600 font-opensans text-left font-bold">
                        12/11/2023{" "}
                      </span>
                      <span className="text-gray-600 font-opensans text-left text-xs font-normal">
                        12:40:30
                      </span>
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[74px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      183.4567.776.90
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[81px] w-6"
                      src="images/img_link_gray_600.svg"
                      alt="link"
                    />
                    <Img
                      className="h-6 md:ml-[0] ml-[33px] w-6"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsermanagemnetOnePage;
