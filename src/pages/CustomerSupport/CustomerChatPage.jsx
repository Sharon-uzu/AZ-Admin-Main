import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "../../components";

const CustomerChatPage = () => {


  return (
    <>
      <div className="w-[95%] mx-auto flex flex-col font-opensans  mr-auto  pr-4 pt-4">
        <div className="grid grid-cols-5 gap-4 w-full  min-h-[70vh]">


          {/* icon */}


          {/* 1 */}


          <div className="bg-white-A700 flex flex-col col-span-1 font-opensans gap-[25px]  p-[11px] rounded-[15px] shadow-bs1 ">
            <div className="flex flex-row items-start justify-end ml-7 md:ml-[0] md:w-[77%] w-full">
              <Text
                className="capitalize mt-0.5 text-base text-gray-600"
                size="txtManropeBold16"
              >
                inbox
              </Text>
              <Img
                className="h-6 ml-12 w-6"
                src="/images/img_download.svg"
                alt="download"
              />
              <Img
                className="h-5 ml-[11px] mt-0.5 w-5"
                src="/images/img_search2.svg"
                alt="searchTwo"
              />
            </div>
            <div className="flex flex-row items-start justify-between ml-4 md:ml-[0] w-4/5 md:w-full">
              <div className="flex flex-row items-center justify-evenly gap-3">
                <Img
                  className="h-[22px] w-[22px]"
                  src="/images/img_settings.svg"
                  alt="settings_Two"
                />
                <Text
                  className="capitalize text-red-A700_03 text-sm"
                  size="txtOpenSansRomanRegular14Gray600"
                >
                  Your inbox{" "}
                </Text>
              </div>
              <Text
                className="bg-red-A700_03 capitalize flex h-[19px] items-center justify-center rounded-[9px] text-[13px] text-center text-gray-100_01 text-shadow-ts3 w-[19px]"
                size="txtOpenSansRomanBold13Gray10001"
              >
                3
              </Text>
            </div>
            <div className="flex flex-row  gap-3 w-[53%] md:w-full">
              <Img
                className="h-[22px] md:h-auto object-cover w-[22px]"
                src="/images/img_atsign.png"
                alt="atsign"
              />
              
              <Text
                className="capitalize ml-[5px] text-gray-600 text-sm"
                size="txtOpenSansRomanRegular14Gray600"
              >
                mentions
              </Text>
            </div>
            <div className="flex flex-row  gap-3 md:w-full">
              <Img
                className="h-[22px] w-[22px]"
                src="/images/img_user_gray_600.svg"
                alt="user_Two"
              />
              <Text
                className="capitalize ml-[5px] text-gray-600 text-sm"
                size="txtOpenSansRomanRegular14Gray600"
              >
                all
              </Text>
            </div>
            <div className="flex flex-row items-start justify-between ml-4 md:ml-[0] w-4/5 md:w-full">
              <div className="flex flex-row items-center justify-evenly gap-3">
                <Img
                  className="h-[22px] w-[22px]"
                  src="/images/img_settings.svg"
                  alt="settings_Two"
                />
                <Text
                  className="capitalize text-gray-600 text-sm"
                  size="txtOpenSansRomanRegular14Gray600"
                >
                  tickets{" "}
                </Text>
              </div>
              <Text
                className="bg-red-A700_03 capitalize flex h-[19px] items-center justify-center rounded-[9px] text-[13px] text-center text-gray-100_01 text-shadow-ts3 w-[19px]"
                size="txtOpenSansRomanBold13Gray10001"
              >
                2
              </Text>
            </div>
            <div className="flex flex-row items-start justify-start ml-4 md:ml-[0] w-[61%] md:w-full gap-3">
              <Img
                className="h-[22px] w-[22px]"
                src="/images/img_user_gray_600_22x22.svg"
                alt="user_Three"
              />
              <Text
                className="capitalize ml-[5px] mt-0.5 text-gray-600 text-sm"
                size="txtOpenSansRomanRegular14Gray600"
              >
                unassigned{" "}
              </Text>
            </div>
          </div>



          {/* 2 */}

          <List
            className="bg-white-A700 flex flex-col font-opensans gap-[13px]   col-span-1 outline outline-[2px] outline-gray-200 w-full p-3"
            orientation="vertical"
          >
            <div className="bg-white-A700 flex flex-col items-center justify-end p-[5px] rounded-[15px] shadow-bs1 w-full ">
              <div className="flex flex-col justify-start mt-1 w-[96%] md:w-full ">
                <div className="flex flex-row gap-[9px] items-center justify-start w-1/2 md:w-full ">
                  <div className="h-7 relative w-7 ">
                    <Img
                      className="h-7 m-auto rounded-[50%] w-7"
                      src="/images/img_shutterstock640011838.png"
                      alt="shutterstock640"
                    />
                    <div className="absolute bg-green-700 bottom-[7%] h-[5px] right-[7%] rounded-sm w-[5px]"></div>
                  </div>
                  <Text
                    className="capitalize text-[10px] text-gray-600"
                    size="txtOpenSansRomanBold10"
                  >
                    Bruce lee
                  </Text>
                </div>
                <Text
                  className="lowercase ml-3.5 md:ml-[0] mr-[11px] mt-[7px] text-gray-600 text-xs w-[86%] sm:w-full"
                  size="txtOpenSansRomanRegular12"
                >
                  i want a refund for my last incomplete transaction...
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[125px] mt-3 text-[10px] text-red-A700_05"
                  size="txtOpenSansRomanLight10RedA70005"
                >
                  3 mins ago
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end p-[5px] rounded-[15px] shadow-bs1 w-full">
              <div className="flex flex-col justify-start mt-1 w-[96%] md:w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-[56%] md:w-full">
                  <div className="h-7 relative w-7">
                    <Img
                      className="h-7 m-auto rounded-[50%] w-7"
                      src="/images/img_shutterstock640011838_28x28.png"
                      alt="shutterstock640"
                    />
                    <div className="absolute bg-green-700 bottom-[7%] h-[5px] right-[7%] rounded-sm w-[5px]"></div>
                  </div>
                  <Text
                    className="capitalize text-[10px] text-gray-600"
                    size="txtOpenSansRomanBold10"
                  >
                    Racheal lin
                  </Text>
                </div>
                <Text
                  className="lowercase md:ml-[0] mt-[7px] mx-[9px] text-gray-600 text-xs w-[90%] sm:w-full"
                  size="txtOpenSansRomanRegular12"
                >
                  <>
                    what&#39;s the time range on delivery outside your
                    zone?
                  </>
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[125px] mt-3 text-[10px] text-red-A700_05"
                  size="txtOpenSansRomanLight10RedA70005"
                >
                  5 mins ago
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-end justify-end pl-[5px] py-[5px] rounded-[15px] shadow-bs1 w-full">
              <div className="flex flex-col justify-start mt-1 w-[98%] md:w-full">
                <div className="flex flex-row gap-3 items-center justify-start w-[63%] md:w-full">
                  <div className="h-7 relative w-7">
                    <Img
                      className="h-7 m-auto rounded-[50%] w-7"
                      src="/images/img_shutterstock640011838_1.png"
                      alt="shutterstock640"
                    />
                    <div className="absolute bg-green-700 bottom-[7%] h-[5px] right-[7%] rounded-sm w-[5px]"></div>
                  </div>
                  <Text
                    className="capitalize text-[10px] text-gray-600"
                    size="txtOpenSansRomanBold10"
                  >
                    Sharon thanos
                  </Text>
                </div>
                <Text
                  className="lowercase ml-2.5 md:ml-[0] mt-[7px] text-gray-600 text-xs w-[95%] sm:w-full"
                  size="txtOpenSansRomanRegular12"
                >
                  ive been a user for a year now ,how can i become a
                  vendor?
                </Text>
                <Text
                  className="capitalize md:ml-[0] ml-[125px] mt-3 text-[10px] text-red-A700_05"
                  size="txtOpenSansRomanLight10RedA70005"
                >
                  5 mins ago
                </Text>
              </div>
            </div>
          </List>

          {/* 3 */}

          <div className="bg-white-A700 col-span-2 flex flex-col gap-4  font-opensans  outline outline-[2px] outline-gray-200 p-4 ">
            <div className="bg-white-A700 flex flex-col  p-[11px] rounded-[15px] shadow-bs1">
              <Text
                className="capitalize ml-1 md:ml-[0] mt-0.5 text-[10px] text-gray-600"
                size="txtOpenSansRomanLight10"
              >
                <span className="text-gray-600 font-opensans text-left font-light">
                  Bruce lee{" "}
                </span>
                <span className="text-red-A700_04 font-opensans text-left font-light">
                  {" "}
                  3 mins ago
                </span>
              </Text>
              <Text
                className="lowercase ml-1 md:ml-[0] mt-1 text-gray-600 text-xs w-[98%] sm:w-full"
                size="txtOpenSansRomanRegular12"
              >
                <>
                  i want a refund for my last incomplete transaction
                  and delay by the dispatch rider, in wasn&#39;t
                  pleased at all.
                </>
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col  pl-2 py-2 rounded-[15px] shadow-bs1">
              <Text
                className="capitalize md:ml-[0] ml-[9px] text-[10px] text-gray-600"
                size="txtOpenSansRomanLight10"
              >
                <span className="text-gray-600 font-opensans text-left font-light">
                  nneeh david{" "}
                </span>
                <span className="text-red-A700_05 font-opensans text-left font-light">
                  {" "}
                  2 mins ago
                </span>
              </Text>
              <Text
                className="lowercase md:ml-[0] ml-[9px] mt-1 text-gray-600 text-xs w-[97%] sm:w-full"
                size="txtOpenSansRomanRegular12"
              >
                would you like to look into the matter or proceed?
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-row font-poppins items-center justify-end  outline outline-[1px] outline-gray-400_03 p-[11px] rounded-[26px] md:w-[94%] w-full mt-auto">
              <Text
                className="text-gray-400_04 text-xs tracking-[0.44px] mr-auto"
                size="txtPoppinsRegular12"
              >
                Start typing here
              </Text>
              <Img
                className="h-[23px] ml-[82px] w-[23px]"
                src="/images/img_link.svg"
                alt="link"
              />
              <Button className="bg-light_blue-A700 cursor-pointer font-bold min-w-[74px] ml-4 mr-1 py-1.5 rounded-[15px] text-center text-white-A700 text-xs tracking-[0.38px] uppercase">
                Send
              </Button>
            </div>
          </div>
          {/* <Line className="absolute bg-gray-200 h-0.5 inset-x-[0] mx-auto top-[10%] w-full" /> */}


          {/* 4 */}


          <div className="bg-white-A700 flex flex-col col-span-1  font-opensans gap-[13px] items-start  ">
            <Text
              className=" capitalize  text-base ml-3 text-gray-600 "
              size="txtManropeBold16"
            >
              details
            </Text>

            <div className="flex justify-evenly w-[90%]">

              <div className="h-9 relative w-9">
                <Img
                  className="h-9 m-auto rounded-[50%] w-9"
                  src="/images/img_shutterstock640011838_36x36.png"
                  alt="shutterstock640"
                />
                <div className="absolute bg-light_green-400 bottom-[8%] h-2.5 right-[0] rounded-[50%] w-2.5"></div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[3px]">
                <Text
                  className="capitalize text-gray-600_01 text-xs"
                  size="txtOpenSansRomanBold12"
                >
                  Agent nneeh david
                </Text>
                <Text
                  className="text-[10px] text-gray-600_01"
                  size="txtOpenSansRomanRegular10Gray60001"
                >
                  Online
                </Text>
                <Text
                  className="capitalize mt-2 text-gray-600_01 text-xs"
                  size="txtOpenSansRomanRegular12Gray60001"
                >
                  customer service
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerChatPage;
