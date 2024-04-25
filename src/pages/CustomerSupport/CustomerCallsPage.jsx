import React from "react";


import { Button, CheckBox, Img, List, Text } from "../../components";

const CustomersCallsPage = () => {
 

  return (
    <>
      <div className=" flex flex-col font-opensans items-center justify-start mx-auto w-[96%]">
        <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col font-manrope gap-[26px] justify-start md:mt-0 mt-[23px] w-full">

            <div className="flex flex-col font-opensans items-start justify-start mr-[29px] w-[98%] md:w-full">

              <div className="flex flex-col md:flex-row gap-[29px] items-center justify-start mt-[35px] md:w-[71%] w-full ">
                  <div className="flex flex-row gap-[29px] items-center justify-between w-1/2 sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[41%]">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        total calls
                      </Text>
                      <Text
                        className="capitalize sm:text-[20.67px] md:text-[22.67px] text-[24.67px] text-blue-800"
                        size="txtOpenSansRomanBold2467"
                      >
                        9
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center w-[48%]">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        missed calls
                      </Text>
                      <Text
                        className="capitalize sm:text-[20.67px] md:text-[22.67px] text-[24.67px] text-light_green-300"
                        size="txtOpenSansRomanBold2467Lightgreen300"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-end w-[45%] sm:w-full">
                    <div className="flex flex-col items-center justify-start mb-1 mt-[7px]">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        average calling duration
                      </Text>
                    </div>
                    <Text
                      className="capitalize sm:text-[20.67px] md:text-[22.67px] text-[24.67px] text-pink-800"
                      size="txtOpenSansRomanBold2467Pink800"
                    >
                      5s
                    </Text>
                  </div>
                <div className="flex flex-row gap-3 items-end w-[28%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-1 mt-[7px]">
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanRegular16"
                    >
                      average waiting time
                    </Text>
                  </div>
                  <Text
                    className="capitalize sm:text-[20.67px] md:text-[22.67px] text-[24.67px] text-teal-A400"
                    size="txtOpenSansRomanBold2467TealA400"
                  >
                    5s
                  </Text>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[29px] mt-[43px] w-[98%] md:w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start w-[28%] md:w-full">
                  <div className="bg-white-A700 flex flex-col items-start justify-end p-[11px] rounded-[15px] shadow-bs1 w-full">
                    <div className="flex flex-col gap-3 justify-start md:ml-[0] ml-[17px] mt-2 w-4/5 ">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        recent
                      </Text>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[31px] w-[85%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="capitalize text-base text-gray-600"
                            size="txtOpenSansRomanRegular16"
                          >
                            incoming calls
                          </Text>
                          <Text
                            className="bg-red-A700_03 capitalize flex h-[19px] items-center justify-center mb-[3px] rounded-[9px] text-[13px] text-center text-gray-100_01 text-shadow-ts3 w-[19px]"
                            size="txtOpenSansRomanBold13Gray10001"
                          >
                            3
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between mt-[11px] w-full">
                          <Text
                            className="capitalize text-base text-gray-600"
                            size="txtOpenSansRomanRegular16"
                          >
                            outgoing calls
                          </Text>
                          <Text
                            className="bg-red-A700_03 capitalize flex h-[19px] items-center justify-center mb-[3px] rounded-[9px] text-[13px] text-center text-gray-100_01 text-shadow-ts3 w-[19px]"
                            size="txtOpenSansRomanBold13Gray10001"
                          >
                            2
                          </Text>
                        </div>
                        <Text
                          className="capitalize mt-3.5 text-base text-blue-700 underline"
                          size="txtOpenSansRomanRegular16Blue700"
                        >
                          call log
                        </Text>
                        <Text
                          className="capitalize mt-2 text-base text-blue-700 underline"
                          size="txtOpenSansRomanRegular16Blue700"
                        >
                          recordings
                        </Text>
                        <Text
                          className="capitalize mt-2 text-base text-blue-700 underline"
                          size="txtOpenSansRomanRegular16Blue700"
                        >
                          call history
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[26px] items-start justify-start p-[13px] rounded-[15px] shadow-bs1 w-full">
                    <Text
                      className="capitalize md:ml-[0] ml-[11px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      incoming
                    </Text>
                    <List
                      className="flex flex-col gap-[5px] items-center mb-[34px] md:ml-[0] ml-[9px] w-[93%]"
                      orientation="vertical"
                    >
                      <div className="bg-white-A700 flex flex-row gap-[17px] items-center justify-evenly p-[7px] rounded-[15px] shadow-bs1 w-full">
                        <div className="flex my-[3px] relative w-[61%]">
                          <Img
                            className="h-[33px] my-auto object-cover w-[33px]"
                            src="/images/img_call.png"
                            alt="call"
                          />
                          <Text
                            className="capitalize ml-[-0.03px] my-auto text-base text-gray-600 z-[1]"
                            size="txtOpenSansRomanRegular16"
                          >
                            08109830911
                          </Text>
                        </div>
                        
                        <Text
                          className="capitalize text-blue-700 text-xs"
                          size="txtOpenSansRomanRegular12Blue700"
                        >
                          missed
                        </Text>
                      </div>

                      <div className="bg-white-A700 flex flex-row gap-[17px] items-center justify-evenly p-[7px] rounded-[15px] shadow-bs1 w-full">
                        <div className="flex my-[3px] relative w-[61%]">
                          <Img
                            className="h-[33px] my-auto object-cover w-[33px]"
                            src="/images/img_call.png"
                            alt="call"
                          />
                          <Text
                            className="capitalize ml-[-0.03px] my-auto text-base text-gray-600 z-[1]"
                            size="txtOpenSansRomanRegular16"
                          >
                            08109830911
                          </Text>
                        </div>
                        
                        <Text
                          className="capitalize text-red-700 text-xs"
                          size="txtOpenSansRomanRegular12Blue700"
                        >
                          Declined
                        </Text>
                      </div>

                      <div className="bg-white-A700 flex flex-row gap-[17px] items-center justify-evenly p-[7px] rounded-[15px] shadow-bs1 w-full">
                        <div className="flex my-[3px] relative w-[61%]">
                          <Img
                            className="h-[33px] my-auto object-cover w-[33px]"
                            src="/images/img_call.png"
                            alt="call"
                          />
                          <Text
                            className="capitalize ml-[-0.03px] my-auto text-base text-gray-600 z-[1]"
                            size="txtOpenSansRomanRegular16"
                          >
                            08109830911
                          </Text>
                        </div>
                        
                        <Text
                          className="capitalize text-blue-700 text-xs"
                          size="txtOpenSansRomanRegular12Blue700"
                        >
                          missed
                        </Text>
                      </div>
                      
                      
                    </List>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col font-bentonsansregular items-center justify-start mb-[124px] p-[25px] sm:px-5 rounded-[12px] shadow-bs10 w-[29%] md:w-full">
                  <div className="flex flex-col gap-[43px] items-center justify-start mb-[25px] w-full">
                    <div className="bg-white-A700 flex flex-col gap-7 items-center justify-start p-[49px] md:px-10 sm:px-5 rounded-[12px] shadow-bs10 w-full">
                      <div className="flex flex-col h-[62px] items-center justify-start w-[62px]">
                        <div className="h-[62px] relative w-[62px]">
                          <Img
                            className="h-[62px] m-auto rounded-[50%] w-[62px]"
                            src="/images/img_shutterstock640011838_62x62.png"
                            alt="shutterstock640"
                          />
                          <div className="absolute bg-green-700 bottom-[6%] h-[11px] right-[6%] rounded-[5px] w-[11px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mb-[9px]">
                        <Text
                          className="text-[14.43px] text-gray-800_75 tracking-[0.38px]"
                          size="txtBentonSansRegular1443"
                        >
                          15.23 Min
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[76%] md:w-full">
                      <Button className="bg-gradient  flex h-[59px] items-center justify-center p-[18px] rounded-[29px] w-[59px]">
                        <Img
                          className="h-[22px]"
                          src="/images/img_iconlybulkvolume.svg"
                          alt="iconlybulkvolum"
                        />
                      </Button>
                      <Button className="bg-red-A200 flex h-[59px] items-center justify-center p-[22px] sm:px-5 rounded-[29px] w-[59px]">
                        <Img
                          className="h-[15px]"
                          src="/images/img_close.svg"
                          alt="close"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col font-opensans gap-[9px] items-center justify-center mb-[124px] p-[19px] rounded-[15px] shadow-bs1 w-[41%] md:w-full">
                  <List
                    className="flex flex-col gap-3.5 items-center mt-[11px] w-[99%]"
                    orientation="vertical"
                  >
                    <div className="bg-blue-700_96 hover:cursor-pointer flex flex-row items-center justify-start p-2 rounded-[13px] hover:shadow-bs4 shadow-bs4 w-full">
                      <Text
                        className="text-base text-gray-100_01 uppercase"
                        size="txtOpenSansRomanBold16Gray10001"
                      >
                        sn
                      </Text>
                      <Text
                        className="capitalize ml-[18px] text-base text-gray-100_01"
                        size="txtOpenSansRomanBold16Gray10001"
                      >
                        contact
                      </Text>
                      <Text
                        className="capitalize ml-12 mt-1 text-base text-gray-100_01"
                        size="txtOpenSansRomanBold16Gray10001"
                      >
                        agent
                      </Text>
                      <Text
                        className="capitalize ml-[62px] my-0.5 text-base text-gray-100_01"
                        size="txtOpenSansRomanBold16Gray10001"
                      >
                        duration
                      </Text>
                    </div>
                    <div className="bg-white-700_96 hover:cursor-pointer flex flex-row items-center justify-between p-2.5 rounded-[13px] hover:shadow-bs4 shadow-bs4 w-full">
                      <Text
                        className="text-base text-gray-600 uppercase"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        1
                      </Text>
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        0810930911
                      </Text>
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        Nneeh david
                      </Text>
                      <Text
                        className="capitalize mr-[17px] text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        2h:02:15
                      </Text>
                    </div>
                  </List>
                  <Text
                    className="bg-white-A700 h-11 justify-center pl-[11px] sm:pr-5 pr-[35px] py-2.5 rounded-[15px] text-base text-gray-600 text-shadow-ts1 uppercase w-[364px]"
                    size="txtOpenSansRomanBold16Gray600"
                  >
                    2
                  </Text>
                  <Text
                    className="bg-white-A700 h-11 justify-center mb-[132px] pl-[11px] sm:pr-5 pr-[35px] py-2.5 rounded-[15px] text-base text-gray-600 text-shadow-ts1 uppercase w-[364px]"
                    size="txtOpenSansRomanBold16Gray600"
                  >
                    3
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersCallsPage;
