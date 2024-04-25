import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, CheckBox, Img, Line, List, Text } from "../../components";

import "react-circular-progressbar/dist/styles.css";
import '../../../App.css'
import Charts from "../../components/Charts/Charts";
import ChartA from "../../components/Charts/ChartA";



const CustomerOverviewPage = () => {
 

  return (
    <>
      <div className="flex flex-col font-opensans items-center justify-start mx-auto pb-[3px] pr-[3px] w-[92%]">
        <div className="flex flex-col font-opensans items-start justify-start mr-4 w-[99%] md:w-full"> 


              <div className="flex flex-col md:flex-row gap-[45px] items-center justify-between mt-8   w-[75%] ">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[31%] sm:w-full">
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="/images/img_chat.png"
                      alt="chat_One"
                    />
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanRegular16"
                    >
                      total chats
                    </Text>
                    <Text
                      className="capitalize sm:text-[20.67px] md:text-[22.67px] text-[24.67px] text-blue-800"
                      size="txtOpenSansRomanBold2467"
                    >
                      189
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[31%] sm:w-full">
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="/images/img_chat_32x32.png"
                      alt="chat_Two"
                    />
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanRegular16"
                    >
                      answered chats
                    </Text>
                    <Text
                      className="capitalize sm:text-[20.67px] md:text-[22.67px] text-[24.67px] text-light_green-300"
                      size="txtOpenSansRomanBold2467Lightgreen300"
                    >
                      189
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-[31%] sm:w-full">
                  <Img
                    className="h-8 md:h-auto object-cover w-8"
                    src="/images/img_chat_1.png"
                    alt="chat_Three"
                  />
                  <Text
                    className="capitalize text-base text-gray-600"
                    size="txtOpenSansRomanRegular16"
                  >
                    unattended chats
                  </Text>
                  <Text
                    className="capitalize sm:text-[20.67px] md:text-[22.67px] text-[24.67px] text-red-600"
                    size="txtOpenSansRomanBold2467Red600"
                  >
                    189
                  </Text>
                </div>
              </div>

              <div className="flex flex-col md:flex-row  items-center justify-between mt-[45px] w-full ">
                <div className="bg-white-A700 flex  flex-col md:flex-row  items-center justify-between p-3 rounded-[15px] shadow-bs1 md:w-[75%] w-full ">
                  <div className="flex flex-row gap-2.5 items-end justify-start  md:w-full ">
                    <Text
                      className="capitalize   text-base text-gray-600"
                      size="txtOpenSansRomanRegular16"
                    >
                      customer support
                    </Text>
                    <Text
                      className="capitalize  md:text-[18.67px] lg:text-[20.67px] text-gray-600"
                      size="txtOpenSansRomanBold2467Gray600"
                    >
                      200
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-center md:w-full">
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanRegular16"
                    >
                      ratings
                    </Text>
                    <Text
                      className="capitalize  md:text-[18.67px] lg:text-[20.67px] text-gray-600"
                      size="txtOpenSansRomanBold2467Gray600"
                    >
                      8.9
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-center w-[21%] md:w-full">
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanRegular16"
                    >
                      feedback sent
                    </Text>
                    <Text
                      className="capitalize  md:text-[18.67px] lg:text-[20.67px] text-gray-600"
                      size="txtOpenSansRomanBold2467Gray600"
                    >
                      189
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-center mr-[3px] w-[26%] md:w-full">
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanRegular16"
                    >
                      feedback received
                    </Text>
                    <Text
                      className="capitalize  md:text-[18.67px] lg:text-[20.67px] text-gray-600"
                      size="txtOpenSansRomanBold2467Gray600"
                    >
                      109
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-row items-center justify-center p-3 rounded-[15px] shadow-bs1 md:w-[20%] w-full ">
                  <Text
                    className="capitalize ml-0.5 text-red-A200 text-sm"
                    size="txtOpenSansRomanLight14"
                  >
                    all
                  </Text>
                  <Text
                    className="capitalize ml-[23px] mt-[3px] text-gray-600 text-sm"
                    size="txtOpenSansRomanLight14Gray600"
                  >
                    today
                  </Text>
                  <Text
                    className="capitalize ml-[23px] text-gray-600 text-sm"
                    size="txtOpenSansRomanLight14Gray600"
                  >
                    custom
                  </Text>
                  <Img
                    className="h-[18px] ml-[11px] mr-[3px] w-[18px]"
                    src="/images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>

              <div className="flex  flex-col md:flex-row gap-8 items-stretch flex-wrap justify-between mt-[27px] w-full">
                <div className="bg-white-A700 rounded-xl">

                    <Charts/>
                    
                    
                </div>
                <div className="bg-white-A700 rounded-xl">

                  <ChartA/>

                </div>
                
                <div className="bg-white-A700 flex flex-col  items-start justify-between p-[7px] rounded-[20px] shadow-bs w-[5%] md:w-full flex-1 ">
                  <div className="flex h-[80%]  flex-col items-start justify-between mt-[5px] w-full">
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      live agent dashboard
                    </Text>
                    <div className="flex flex-row items-start justify-start mt-[9px] w-full">
                      <Text
                        className=" agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanSemiBold10"
                      >
                        agent
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanSemiBold10"
                      >
                        chat type
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanSemiBold10"
                      >
                        chat status
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanSemiBold10"
                      >
                        priority
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanSemiBold10"
                      >
                        average chat time
                      </Text>
                    </div>


                    <div className="flex flex-row items-start justify-start mt-[9px] w-full">
                      <Text
                        className=" agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                       mike
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        refund
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        in progress
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        low
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        3:00:02
                      </Text>
                    </div>

                    <div className="flex flex-row items-start justify-start mt-[9px] w-full">
                      <Text
                        className=" agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                       rhoda
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        payment
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        closed
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        high
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        1:56:09
                      </Text>
                    </div>



                    <div className="flex flex-row items-start justify-start mt-[9px] w-full">
                      <Text
                        className=" agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                       treacy
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        report
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        pending
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        high
                      </Text>
                      <Text
                        className="agent-h capitalize text-[10px] text-gray-600"
                        size="txtOpenSansRomanLight10"
                      >
                        2:03:03
                      </Text>
                    </div>


                  
                    
                      <a
                        href="javascript:"
                        className="capitalize mt-3.5 text-[10px] text-red-A200 underline"
                      >
                        <Text size="txtOpenSansRomanLight10RedA200">
                          see more
                        </Text>
                      </a>
                    
                  </div>
                </div>
              </div>

              {/* <Charts/> */}

              <div className="flex flex-col md:flex-row gap-3 items-end justify-between mt-3.5 w-full mb-6">
                <List
                  className="  gap-[13px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   md:w-[67%] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col gap-3 items-center justify-end py-4 rounded-[20px] shadow-bs w-full">
                    
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      total calls
                    </Text>
                    <div className="h-[108px] md:h-[147px] relative w-[86%]">
                      <div className="h-[108px] md:h-[147px] m-auto w-full">
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={9}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(90deg)",
                                stroke: "#ff0303",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={12}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(16deg)",
                                stroke: "#fff400",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={10}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(53deg)",
                                stroke: "#ffc300",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={11}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(209deg)",
                                stroke: "#8ac53e",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                      </div>
                      <div className="absolute bottom-[3%] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto w-1/5">
                        <Line className="bg-blue-A100 h-11 rotate-[86deg] w-[3px]" />
                        <Text
                          className="capitalize text-base text-gray-600"
                          size="txtOpenSansRomanBold16Gray600"
                        >
                          120
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-center justify-end py-4 rounded-[20px] shadow-bs w-full">
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      unanswered calls
                    </Text>
                    <div className="h-[108px] md:h-[147px] relative w-[86%]">
                      <div className="h-[108px] md:h-[147px] m-auto w-full">
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={9}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(90deg)",
                                stroke: "#ff0303",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={12}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(16deg)",
                                stroke: "#fff400",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={10}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(53deg)",
                                stroke: "#ffc300",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={11}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(209deg)",
                                stroke: "#8ac53e",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                      </div>
                      <div className="absolute bottom-[3%] flex flex-col gap-[11px] justify-start left-[24%] w-[33%]">
                        <Img
                          className="h-[18px] mr-2.5"
                          src="/images/img_airplane.svg"
                          alt="airplane"
                        />
                        <Text
                          className="capitalize ml-7 md:ml-[0] text-base text-gray-600"
                          size="txtOpenSansRomanBold16Gray600"
                        >
                          20
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-3 items-center justify-end py-4 rounded-[20px] shadow-bs w-full">
                    <Text
                      className="capitalize text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      answered calls
                    </Text>
                    <div className="h-[108px] md:h-[147px] relative w-[86%]">
                      <div className="h-[108px] md:h-[147px] m-auto w-full">
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={9}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(90deg)",
                                stroke: "#ff0303",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={12}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(16deg)",
                                stroke: "#fff400",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={10}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(53deg)",
                                stroke: "#ffc300",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute border-solid bottom-[0] h-[147px] inset-x-[0] mx-auto overflow-visible"
                            value={11}
                            counterClockwise
                            strokeWidth={12}
                            styles={{
                              trail: { strokeWidth: 12, stroke: "#292d32af" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(209deg)",
                                stroke: "#8ac53e",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                      </div>
                      <div className="absolute bottom-[3%] flex flex-col gap-[11px] inset-x-[0] items-center justify-start mx-auto w-1/5">
                        <Img
                          className="h-[37px]"
                          src="/images/img_share.svg"
                          alt="share"
                        />
                        <Text
                          className="capitalize text-base text-gray-600"
                          size="txtOpenSansRomanBold16Gray600"
                        >
                          100
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 flex  flex-col items-start justify-start  p-2 py-5 rounded-[20px] shadow-bs md:w-[37%] w-full">
                  <div className="flex flex-col items-center justify-start md:w-[97%] w-full">
                    <div className="flex flex-row items-center justify-between md:w-4/5 w-full">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanSemiBold16"
                      >
                        customer interactions
                      </Text>
                      <div className="flex flex-col items-center justify-start">
                        <Button className="bg-amber-A400_01 capitalize cursor-pointer font-bold py-2 rounded-[10px] text-[10px] text-center text-gray-100_01 w-[59px]">
                          pending
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-[7px] items-start justify-end mt-[17px] p-1 rounded-[20px] shadow-bs md:w-[95%] w-full">
                      <div className="bg-white-A700 border-2 border-amber-A400_01 border-solid flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                        <Img
                          className="md:h-8 h-auto rounded-[50%] w-8"
                          src="/images/img_image50.png"
                          alt="imageFifty"
                        />
                      </div>
                      <div className="h-[23px] md:h-[29px] mr-6 mt-[5px] relative w-4/5">
                        <Text
                          className="absolute inset-x-[0] lowercase mx-auto text-[13px] text-gray-600 top-[0] w-max"
                          size="txtOpenSansRomanRegular13"
                        >
                          <>
                            {" "}
                            i didn&#39;t receive any feed back for my repo....{" "}
                          </>
                        </Text>
                        <Text
                          className="absolute bottom-[0] left-[0] lowercase text-[10px] text-gray-600"
                          size="txtOpenSansRomanLight10"
                        >
                          20:00 am
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-row gap-[7px] items-start justify-end mt-[17px] p-1 rounded-[20px] shadow-bs md:w-[95%] w-full">
                      <div className="bg-white-A700 border-2 border-amber-A400_01 border-solid flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                        <Img
                          className="md:h-8 h-auto rounded-[50%] w-8"
                          src="/images/img_image50.png"
                          alt="imageFifty"
                        />
                      </div>
                      <div className="h-[23px] md:h-[29px] mr-6 mt-[5px] relative w-4/5">
                        <Text
                          className="absolute inset-x-[0] lowercase mx-auto text-[13px] text-gray-600 top-[0] w-max"
                          size="txtOpenSansRomanRegular13"
                        >
                          <>
                            {" "}
                            i didn&#39;t receive any feed back for my repo....{" "}
                          </>
                        </Text>
                        <Text
                          className="absolute bottom-[0] left-[0] lowercase text-[10px] text-gray-600"
                          size="txtOpenSansRomanLight10"
                        >
                          20:00 am
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10 items-start justify-between  w-full ">
                <div className="bg-white-A700 flex  flex-col items-center justify-start mb-8 p-4 rounded-[20px] shadow-bs md:w-[33%] w-full">
                  <div className="flex flex-row items-center justify-start md:w-[88%] w-full ">
                    <div className="h-[147px] relative w-[54%]">
                      <div className="!w-full h-[147px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-full h-[147px] m-auto overflow-visible"
                          value={68}
                          counterClockwise
                          strokeWidth={12}
                          styles={{
                            trail: { strokeWidth: 12, stroke: "#ffd042" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(90deg)",
                              stroke: "#ff0505",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <div className="!w-full absolute h-[147px] inset-[0] justify-center m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-full absolute h-[147px] inset-[0] justify-center m-auto overflow-visible"
                          value={48}
                          counterClockwise
                          strokeWidth={12}
                          styles={{
                            trail: { strokeWidth: 12, stroke: "#ffd042" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(90deg)",
                              stroke: "#142023",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px] items-center justify-start ml-9 w-[4%]">
                      <div className="bg-gray-900 h-[9px] w-[9px]"></div>
                      <div className="bg-amber-A200 h-[9px] w-[9px]"></div>
                      <div className="bg-red-A700_01 h-[9px] w-[9px]"></div>
                    </div>
                    <Text
                      className="capitalize h-[70px] leading-[19.00px] ml-[9px] text-[12.93px] text-gray-600"
                      size="txtOpenSansRomanRegular1293"
                    >
                      <>
                        in bound
                        <br />
                        out bound
                        <br />
                        call back
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex  p-5 items-center justify-center  rounded-[20px] shadow-bs md:w-[17%] w-full ">
                  <ul className="flex flex-col w-full  gap-2">
                    <li className="flex flex-row items-center justify-between  w-full ">
                    <Text
                      className="capitalize leading-[19.00px] text-[12.93px] text-gray-600"
                      size="txtOpenSansRomanRegular1293"
                    >
                        logged in 
                    </Text>
                    <Text
                        className="bg-blue_gray-100 capitalize h-[15px] justify-center px-[3px] rounded-lg text-[8px] text-black-900 w-4"
                        size="txtOpenSansRomanRegular8"
                      >
                        10
                      </Text>
                    </li>
                    <li className="flex flex-row items-center justify-between  w-full ">
                    <Text
                      className="capitalize leading-[19.00px] text-[12.93px] text-gray-600"
                      size="txtOpenSansRomanRegular1293"
                    >
                        logged in 
                    </Text>
                    <Text
                        className="bg-blue_gray-100 capitalize h-[15px] justify-center px-[3px] rounded-lg text-[8px] text-black-900 w-4"
                        size="txtOpenSansRomanRegular8"
                      >
                        10
                      </Text>
                    </li>
                    <li className="flex flex-row items-center justify-between  w-full ">
                    <Text
                      className="capitalize leading-[19.00px] text-[12.93px] text-gray-600"
                      size="txtOpenSansRomanRegular1293"
                    >
                        logged in 
                    </Text>
                    <Text
                        className="bg-blue_gray-100 capitalize h-[15px] justify-center px-[3px] rounded-lg text-[8px] text-black-900 w-4"
                        size="txtOpenSansRomanRegular8"
                      >
                        10
                      </Text>
                    </li>
                    <li className="flex flex-row items-center justify-between  w-full">
                    <Text
                      className="capitalize leading-[19.00px] text-[12.93px] text-gray-600"
                      size="txtOpenSansRomanRegular1293"
                    >
                        logged in 
                    </Text>
                    <Text
                        className="bg-blue_gray-100 capitalize h-[15px] justify-center px-[3px] rounded-lg text-[8px] text-black-900 w-4"
                        size="txtOpenSansRomanRegular8"
                      >
                        10
                      </Text>
                    </li>
                    <li className="flex flex-row items-center justify-between  w-full ">
                    <Text
                      className="capitalize leading-[19.00px] text-[12.93px] text-gray-600"
                      size="txtOpenSansRomanRegular1293"
                    >
                        logged in 
                    </Text>
                    <Text
                        className="bg-blue_gray-100 capitalize h-[15px] justify-center px-[3px] rounded-lg text-[8px] text-black-900 w-4"
                        size="txtOpenSansRomanRegular8"
                      >
                        10
                      </Text>
                    </li>
                    <li className="flex flex-row items-center justify-between  w-full ">
                    <Text
                      className="capitalize leading-[19.00px] text-[12.93px] text-gray-600"
                      size="txtOpenSansRomanRegular1293"
                    >
                        logged in 
                    </Text>
                    <Text
                        className="bg-blue_gray-100 capitalize h-[15px] justify-center px-[3px] rounded-lg text-[8px] text-black-900 w-4"
                        size="txtOpenSansRomanRegular8"
                      >
                        10
                      </Text>
                    </li>
                  </ul>
                </div>
                <div className="bg-white-A700 flex  flex-col items-center justify-end  mt-3 py-4 rounded-[20px] shadow-bs md:w-[48%] w-full">
                  <List
                    className="flex flex-col gap-[22px] items-center mt-[3px] w-[77%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[21px] items-center justify-between w-full">
                      <div className="flex flex-row items-center justify-evenly w-[47%]">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="/images/img_callmale.png"
                          alt="callmale"
                        />
                        <Text
                          className="capitalize leading-[19.00px] text-gray-600 text-xs"
                          size="txtOpenSansRomanRegular12"
                        >
                          <>
                            average waiting time
                            <br />
                            00:00:13
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-evenly w-[48%]">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="/images/img_callmale.png"
                          alt="callmale_One"
                        />
                        <Text
                          className="capitalize leading-[19.00px] text-gray-600 text-xs"
                          size="txtOpenSansRomanRegular12"
                        >
                          <>
                            average answer speed
                            <br />
                            00:00:13
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-[94%] md:w-full">
                      <div className="flex flex-row items-center justify-evenly w-1/2">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="/images/img_callmale.png"
                          alt="callmale"
                        />
                        <Text
                          className="capitalize leading-[19.00px] text-gray-600 text-xs"
                          size="txtOpenSansRomanRegular12"
                        >
                          <>
                            average call duration
                            <br />
                            00:00:13
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-evenly w-[45%]">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="/images/img_callmale.png"
                          alt="callmale_One"
                        />
                        <Text
                          className="capitalize leading-[19.00px] text-gray-600 text-xs"
                          size="txtOpenSansRomanRegular12"
                        >
                          <>
                            average hold time
                            <br />
                            00:00:13
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[35px] items-center justify-start w-[94%] md:w-full">
                      <div className="flex flex-row items-center justify-evenly w-[46%]">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="/images/img_callmale.png"
                          alt="callmale"
                        />
                        <Text
                          className="capitalize leading-[19.00px] text-gray-600 text-xs"
                          size="txtOpenSansRomanRegular12"
                        >
                          <>
                            longest call queue
                            <br />
                            00:00:13
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-evenly w-[45%]">
                        <Img
                          className="h-8 md:h-auto object-cover w-8"
                          src="/images/img_callmale.png"
                          alt="callmale_One"
                        />
                        <Text
                          className="capitalize leading-[19.00px] text-gray-600 text-xs"
                          size="txtOpenSansRomanRegular12"
                        >
                          <>
                            total call duration
                            <br />
                            00:00:13
                          </>
                        </Text>
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

export default CustomerOverviewPage;
