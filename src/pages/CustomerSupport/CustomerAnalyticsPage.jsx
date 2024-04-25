import React from "react";

// import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

// import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  List,
  RatingBar,
  ReactTable,
  Text,
} from "../../components";

const CustomerAnalyticsPage = () => {


  const table2Data = React.useRef([
    {
      name: "ruth",
      role: "chat rep",
      status: "available",
      perfomancerankiOne: "5",
    },
    {
      name: "favour",
      role: "call rep",
      status: "available",
      perfomancerankiOne: "3",
    },
    {
      name: "dennis",
      role: "chat rep",
      status: "available",
      perfomancerankiOne: "2",
    },
    {
      name: "anga",
      role: "chat rep",
      status: "unavalable",
      perfomancerankiOne: "4",
    },
  ]);

  const table2Columns = React.useMemo(() => [
    {
      Header: 'Mode',
      accessor: 'mode',
      Cell: ({ cell: { value } }) => (
        <div className="flex flex-row items-center justify-center ">
          <div className="bg-green-A700 h-[13px]  rounded-md shadow-bs9 w-[13px]"></div>
        </div>
      ),
    },
    {
      Header: 'Name',
      accessor: 'name',
      Cell: ({ cell: { value } }) => (
        <Text
          className="capitalize  text-base text-gray-600"
          size="txtOpenSansRomanBold16Gray600"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: 'Role',
      accessor: 'role',
      Cell: ({ cell: { value } }) => (
        <Text
          className="capitalize  text-base text-gray-600"
          size="txtOpenSansRomanBold16Gray600"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ cell: { value } }) => (
        <Text
          className="capitalize  text-base text-gray-600"
          size="txtOpenSansRomanBold16Gray600"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: 'Performance Ranking',
      accessor: 'perfomancerankiOne',
      Cell: ({ cell: { value } }) => (
        <div className="flex flex-row items-center justify-center ">
          <RatingBar
            className="flex justify-between  w-[131px]"
            value={value}
            starCount={5}
            activeColor="#ffc000"
            size={17}
          ></RatingBar>
        </div>
      ),
    },
  ], []);


  return (
    <>
      <div className="w-[95%] mx-auto flex flex-col font-opensans items-center justify-start">
 
          <div className="flex flex-1 flex-col font-manrope gap-[26px] justify-start w-full">

            <div className="flex flex-col font-opensans items-start justify-start mr-[72px] w-[94%] md:w-full">

              <List
                className="flex-col md:flex-row gap-3.5 grid grid-cols-1 md:grid-cols-2 mt-[41px] mb-4 w-[55%]"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col items-center justify-start p-3.5 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-3.5 justify-start my-0.5 w-[99%] md:w-full">
                    <Text
                      className="capitalize md:ml-[0] ml-[7px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      median first response time
                    </Text>
                    <div className="flex flex-row items-center justify-start w-[88%] md:w-full">
                      <Button className="bg-white-A700 capitalize cursor-pointer min-w-[102px] py-[13px] rounded-[15px] shadow-bs1 text-base text-center text-gray-600">
                        27m: 28s
                      </Button>
                      <Img
                        className="h-[12px] ml-[13px] w-[12px]"
                        src="/images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <Text
                        className="capitalize ml-1.5 text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        01h: 19s
                      </Text>
                    </div>
                  </div>
                </div>

                <div className="bg-white-A700 flex flex-col items-center justify-start p-3.5 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-3.5 justify-start my-0.5 w-[99%] md:w-full">
                    <Text
                      className="capitalize md:ml-[0] ml-[7px] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      Median Time Close
                    </Text>
                    <div className="flex flex-row items-center justify-start w-[88%] md:w-full">
                      <Button className="bg-white-A700 capitalize cursor-pointer min-w-[102px] py-[13px] rounded-[15px] shadow-bs1 text-base text-center text-gray-600">
                      02h: 02m
                      </Button>
                      <Img
                        className="h-[12px] ml-[13px] w-[12px]"
                        src="/images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <Text
                        className="capitalize ml-1.5 text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        03h: 50s
                      </Text>
                    </div>
                  </div>
                </div>


                
              </List>


              <div className="flex flex-col md:flex-row font-manrope gap-2.5  justify-between mt-3 w-full">
                <div className="flex  flex-col gap-3.5 items-center justify-start md:w-[38%] w-full ">
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-2.5 rounded-[13px] shadow-bs4 w-full ">
                    <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                        <Text
                          className="capitalize text-base text-gray-600"
                          size="txtManropeBold16"
                        >
                          inbound conversations
                        </Text>
                        <Text
                          className="capitalize mt-1 text-[12px] text-gray-600"
                          size="txtManropeMedium1098"
                        >
                          vendor
                        </Text>
                        <Text
                          className="capitalize mt-1 text-[12px] text-gray-600"
                          size="txtManropeMedium1098"
                        >
                          rider
                        </Text>
                        {/* <Img
                          className="h-2 mt-2 w-2"
                          src="images/img_checkmark_gray_600.svg"
                          alt="checkmark"
                        /> */}
                        <Text
                          className="capitalize mt-1 text-[12px] text-gray-600"
                          size="txtManropeMedium1098"
                        >
                          user
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                          <div className="flex flex-col gap-[29px] items-start justify-start">
                            <Text
                              className="text-[10.98px] text-gray-600"
                              size="txtManropeMedium1098"
                            >
                              1000
                            </Text>
                            <Text
                              className="text-[10.98px] text-gray-600"
                              size="txtManropeMedium1098"
                            >
                              800
                            </Text>
                            <Text
                              className="text-[10.98px] text-gray-600"
                              size="txtManropeMedium1098"
                            >
                              600
                            </Text>
                            <Text
                              className="text-[10.98px] text-gray-600"
                              size="txtManropeMedium1098"
                            >
                              400
                            </Text>
                            <Text
                              className="text-[10.98px] text-gray-600"
                              size="txtManropeMedium1098"
                            >
                              200
                            </Text>
                            <Text
                              className="text-[10.98px] text-gray-600"
                              size="txtManropeMedium1098"
                            >
                              0
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-[22px] w-[90%] ">
                            <div className="flex flex-col gap-[17px] items-center justify-end w-full">
                              <div className="flex flex-row items-end justify-between w-[99%] md:w-full">
                                {/* map */}
                              </div>
                              <div className="flex flex-row items-center justify-between w-full">
                                <Text
                                  className="text-[10.98px] text-gray-600"
                                  size="txtManropeMedium1098"
                                >
                                  jun 6
                                </Text>
                                <Text
                                  className="text-[10.98px] text-gray-600"
                                  size="txtManropeMedium1098"
                                >
                                  jun 7
                                </Text>
                                <Text
                                  className="text-[10.98px] text-gray-600"
                                  size="txtManropeMedium1098"
                                >
                                  jun 8
                                </Text>
                                <Text
                                  className="text-[10.98px] text-gray-600"
                                  size="txtManropeMedium1098"
                                >
                                  jun 9
                                </Text>
                                <Text
                                  className="text-[10.98px] text-gray-600"
                                  size="txtManropeMedium1098"
                                >
                                  jun 10
                                </Text>
                                <Text
                                  className="text-[10.98px] text-gray-600"
                                  size="txtManropeMedium1098"
                                >
                                  jun 11
                                </Text>
                                <Text
                                  className="text-[10.98px] text-gray-600"
                                  size="txtManropeMedium1098"
                                >
                                  jun 12
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-6 justify-end p-3 rounded-[13px] shadow-bs4 w-full">
                    <Text
                      className="capitalize md:ml-[0] ml-[5px] mr-[155px] mt-1 text-base text-gray-600"
                      size="txtManropeBold16"
                    >
                      conversation replied to
                    </Text>
                    <div className="flex flex-col items-center justify-start mx-auto w-[88%] md:w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-between w-full h-[100px]">
                             {/* map*/}
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-[10.98px] text-blue_gray-900_02"
                            size="txtManropeMedium1098Bluegray90002"
                          >
                            Mon
                          </Text>
                          <Text
                            className="text-[10.98px] text-blue_gray-900_02"
                            size="txtManropeMedium1098Bluegray90002"
                          >
                            Tues
                          </Text>
                          <Text
                            className="text-[10.98px] text-blue_gray-900_02"
                            size="txtManropeMedium1098Bluegray90002"
                          >
                            Wed
                          </Text>
                          <Text
                            className="text-[10.98px] text-blue_gray-900_02"
                            size="txtManropeMedium1098Bluegray90002"
                          >
                            Thurs
                          </Text>
                          <Text
                            className="text-[10.98px] text-blue_gray-900_02"
                            size="txtManropeMedium1098Bluegray90002"
                          >
                            Fri
                          </Text>
                          <Text
                            className="text-[10.98px] text-blue_gray-900_02"
                            size="txtManropeMedium1098Bluegray90002"
                          >
                            Sat
                          </Text>
                          <Text
                            className="text-[10.98px] text-blue_gray-900_02"
                            size="txtManropeMedium1098Bluegray90002"
                          >
                            Sun
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  flex-col font-opensans gap-7 items-center justify-start md:w-[62%] w-full ">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-[18px] rounded-[13px] shadow-bs4 md:w-[97%] w-full">
                    <div className="flex flex-col items-start justify-start mb-6 w-[94%] md:w-full">
                      <div className="flex flex-col md:flex-row sm:gap-5 items-end justify-start w-[87%] md:w-full">
                        
                        <div className="flex  justify-between w-[95%] mx-auto">
                          <Text
                            className="capitalize text-base text-gray-600"
                            size="txtOpenSansRomanBold16Gray600"
                          >
                            agent log
                          </Text>


                          <div>

                        
                            <div className="flex mb-3">

                              <div className="bg-green-A700 h-[13px] sm:mt-0 my-1 rounded-md shadow-bs9 w-[13px] mr-2 "></div>
                                <Text
                                  className="capitalize mb-0.5 sm:ml-[0] sm:mt-0 mt-[5px] text-[13px] text-gray-600"
                                  size="txtOpenSansRomanRegular10"
                                >
                                  logged in
                                </Text>

                              </div>
                            
                          
                              <div className="flex">
                                <div className="bg-red-800_01 h-[13px] rounded-md shadow-bs9 w-[13px] mr-2"></div>
                                <Text
                                  className="capitalize text-[13px] text-gray-600"
                                  size="txtOpenSansRomanRegular10"
                                >
                                  logged out
                                </Text>
                              </div>
                          </div>


                        </div>
                        


                          

                      </div>
                      <div className="agent-table overflow-auto mt-[38px] w-full">
                        <ReactTable
                          columns={table2Columns}
                          data={table2Data.current}
                          tableClass={"w-[100%] mx-auto "}
                          headerClass={"bg-blue-700_96 w-full h-12 rounded-full  shadow-bs4 text-left"}
                          rowClass={"shadow-md shadow-red-100  p-[15px] rounded-2xl  shadow-bs w-full h-14"}
                          tableBodyClass={"w-full "}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-2 rounded-[15px] shadow-bs1 md:w-[97%] w-full ">
                    <div className="flex flex-col gap-[13px]  md:w-[99%] w-full ">
                      <Text
                        className="capitalize ml-2 md:ml-[0] text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        conversation rating
                      </Text>
                      <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                        <Img
                          className="h-[52px] rounded-full shadow-lg"
                          src="/images/img_frame249.svg"
                          alt="frame249"
                        />
                        <div className="flex flex-col md:flex-row gap-5 items-center justify-between w-full">
                          <Text
                            className="capitalize h-[17px] text-gray-600 text-xs"
                            size="txtOpenSansRomanRegular12"
                          >
                            0%
                          </Text>
                          <Text
                            className="capitalize sm:ml-[0] ml-[71px] text-gray-600 text-xs"
                            size="txtOpenSansRomanRegular12"
                          >
                            20%
                          </Text>
                          <Text
                            className="capitalize ml-24 sm:ml-[0] text-gray-600 text-xs"
                            size="txtOpenSansRomanRegular12"
                          >
                            40%
                          </Text>
                          <Text
                            className="capitalize ml-24 sm:ml-[0] text-gray-600 text-xs"
                            size="txtOpenSansRomanRegular12"
                          >
                            60%
                          </Text>
                          <Text
                            className="capitalize ml-24 sm:ml-[0] text-gray-600 text-xs"
                            size="txtOpenSansRomanRegular12"
                          >
                            80%
                          </Text>
                          <Text
                            className="capitalize sm:ml-[0] ml-[58px] text-gray-600 text-xs"
                            size="txtOpenSansRomanRegular12"
                          >
                            100%
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default CustomerAnalyticsPage;
