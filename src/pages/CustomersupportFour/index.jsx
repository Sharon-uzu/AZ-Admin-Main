import React from "react";

// import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, CheckBox, Img, List, Text } from "../../components";


const CustomersupportFourPage = () => {
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
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-opensans items-center justify-start mx-auto pb-[3px] pr-[3px] w-full">
        <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between mx-auto md:px-5 w-full">
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
            <div className="flex flex-col font-opensans gap-[42px] items-start justify-start mr-[122px] w-[89%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Button className="bg-white-A700_af cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-600 uppercase">
                  overview
                </Button>
                <Button className="bg-white-A700 cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-600 uppercase">
                  analytics
                </Button>
                <Button className="bg-white-A700 cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-600 uppercase">
                  chat
                </Button>
                <Button className="bg-red-A700_af cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-100_01 uppercase">
                  Tickets
                </Button>
                <Button className="bg-white-A700 cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center text-gray-600 uppercase">
                  calls
                </Button>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[64%] md:w-full">
                <div className="flex flex-row gap-2.5 items-end justify-between w-[16%] sm:w-full">
                  <Text
                    className="capitalize mb-1 mt-[7px] text-base text-gray-600"
                    size="txtOpenSansRomanRegular16"
                  >
                    assigned
                  </Text>
                  <Text
                    className="capitalize sm:text-[20.67px] md:text-[22.67px] text-[24.67px] text-blue-800"
                    size="txtOpenSansRomanBold2467"
                  >
                    9
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-end justify-center sm:ml-[0] ml-[82px] w-[24%] sm:w-full">
                  <Text
                    className="capitalize mb-1 mt-[7px] text-base text-gray-600"
                    size="txtOpenSansRomanRegular16"
                  >
                    assigned to me
                  </Text>
                  <Text
                    className="capitalize sm:text-[20.67px] md:text-[22.67px] text-[24.67px] text-light_green-300"
                    size="txtOpenSansRomanBold2467Lightgreen300"
                  >
                    0
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[85px]">
                  <Text
                    className="capitalize text-base text-gray-600"
                    size="txtOpenSansRomanRegular16"
                  >
                    all tickets
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[52px]">
                  <Text
                    className="capitalize text-base text-gray-600"
                    size="txtOpenSansRomanRegular16"
                  >
                    filter
                  </Text>
                </div>
                <Img
                  className="h-6 ml-1.5 sm:ml-[0] w-6"
                  src="images/img_settings_gray_600.svg"
                  alt="settings_Two"
                />
              </div>
              <List
                className="flex flex-col gap-5 items-center ml-0.5 md:ml-[0] w-[98%]"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[13px] rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start mt-1 w-[96%] md:w-full">
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      access failure
                    </Text>
                    <Text
                      className="capitalize leading-[37.00px] mt-[7px] text-base text-gray-600 w-[95%] sm:w-full"
                      size="txtOpenSansRomanRegular16"
                    >
                      having some difficulty accessing my account as it says
                      incorrect password , i certain i put the rigth passwords
                    </Text>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-2.5 w-full">
                      <Text
                        className="capitalize text-base text-red-A700_06"
                        size="txtOpenSansRomanBold16RedA70006"
                      >
                        <span className="text-red-A700_06 font-opensans text-left font-bold">
                          urgent{" "}
                        </span>
                        <span className="text-gray-600 font-opensans text-left font-bold">
                          #F2456
                        </span>
                      </Text>
                      <Text
                        className="capitalize mt-[3px] text-[10px] text-red-A700_05"
                        size="txtOpenSansRomanLight10RedA70005"
                      >
                        3 mins ago
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[13px] rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col items-start justify-start mt-1 w-[95%] md:w-full">
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      Refund
                    </Text>
                    <Text
                      className="lowercase mt-4 text-base text-gray-600"
                      size="txtOpenSansRomanRegular16"
                    >
                      had a transaction error on my order on the 2nd june 2023
                      id like arefund on that particular purchase
                    </Text>
                    <div className="flex flex-row sm:gap-10 items-start justify-between mt-[52px] w-full">
                      <Text
                        className="capitalize text-base text-red-A700_06"
                        size="txtOpenSansRomanBold16RedA70006"
                      >
                        <span className="text-red-A700_06 font-opensans text-left font-bold">
                          urgent{" "}
                        </span>
                        <span className="text-gray-600 font-opensans text-left font-bold">
                          #22456
                        </span>
                      </Text>
                      <Text
                        className="capitalize mt-[3px] text-[10px] text-red-A700_05"
                        size="txtOpenSansRomanLight10RedA70005"
                      >
                        2 hrs ago
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-4 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col md:gap-10 gap-[87px] items-start justify-start mt-[3px] w-[96%] md:w-full">
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      enquiry
                    </Text>
                    <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                      <Text
                        className="capitalize text-base text-red-A700_06"
                        size="txtOpenSansRomanBold16RedA70006"
                      >
                        <span className="text-red-A700_06 font-opensans text-left font-bold">
                          medium{" "}
                        </span>
                        <span className="text-gray-600 font-opensans text-left font-bold">
                          #22456
                        </span>
                      </Text>
                      <Text
                        className="capitalize mb-0.5 mt-[5px] text-[10px] text-red-A700_05"
                        size="txtOpenSansRomanLight10RedA70005"
                      >
                        3 hrs ago
                      </Text>
                    </div>
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

export default CustomersupportFourPage;
