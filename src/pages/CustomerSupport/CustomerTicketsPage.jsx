import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, List, Text } from "../../components";

const CustomerTicketsPage = () => {
  const navigate = useNavigate();



  return (
    <>
      <div className=" flex flex-col font-opensans items-center justify-start mx-auto w-[94%] mb-5">
        <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between mx-auto  w-full">
          <div className="flex flex-1 flex-col font-manrope justify-start w-full">
         
            <div className="flex flex-col font-opensans gap-[26px] items-start justify-start ml-6 md:ml-[0]  mt-[97px] w-[92%] md:w-full">
              <div className="flex flex-col md:flex-row gap-[27px] items-center justify-start w-[79%] md:w-full">
                <Text
                  className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-gray-600"
                  size="txtOpenSansRomanBold40"
                >
                  no access to the system #F2456
                </Text>
                <div className="flex flex-col gap-[5px] items-start justify-start">
                  <Text
                    className="capitalize text-[10px] text-red-A700_05"
                    size="txtOpenSansRomanLight10RedA70005"
                  >
                    URGENT
                  </Text>
                  <Text
                    className="capitalize text-[10px] text-red-A700_05"
                    size="txtOpenSansRomanLight10RedA70005"
                  >
                    OPEN
                  </Text>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[29px] justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[19px] rounded-[15px] shadow-bs1 w-[55%] md:w-full">
                  <div className="flex flex-col justify-start mt-[7px] w-[98%] md:w-full">
                    <div className="flex flex-row gap-[15px] items-start justify-start w-[76%] md:w-full">
                      <div className="flex flex-col h-7 items-center justify-start w-7">
                        <div className="h-7 relative w-7">
                          <Img
                            className="h-7 m-auto rounded-[50%] w-7"
                            src="/images/img_shutterstock640011838.png"
                            alt="shutterstock640"
                          />
                          <div className="absolute bg-green-700 bottom-[7%] h-[5px] right-[7%] rounded-sm w-[5px]"></div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-start justify-end p-[11px] rounded-[15px] shadow-bs1">
                        <Text
                          className="capitalize ml-1 md:ml-[0] mt-0.5 text-[10px] text-gray-600"
                          size="txtOpenSansRomanLight10"
                        >
                          <span className="text-gray-600 font-opensans text-left font-light">
                            Bruce lee{" "}
                          </span>
                          <span className="text-red-A700_04 font-opensans text-left font-light">
                            {" "}
                            1 hr ago
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
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-end md:ml-[0] ml-[201px] mt-7 w-[59%] md:w-full">
                      <div className="bg-white-A700 flex flex-col items-start justify-end pl-2 py-2 rounded-[15px] shadow-bs1">
                        <Text
                          className="capitalize md:ml-[0] ml-[9px] text-[10px] text-gray-600"
                          size="txtOpenSansRomanLight10"
                        >
                          <span className="text-gray-600 font-opensans text-left font-light">
                            nneeh david{" "}
                          </span>
                          <span className="text-red-A700_05 font-opensans text-left font-light">
                            {" "}
                            56 mins ago
                          </span>
                        </Text>
                        <Text
                          className="lowercase md:ml-[0] ml-[9px] mt-1 text-gray-600 text-xs w-[97%] sm:w-full"
                          size="txtOpenSansRomanRegular12"
                        >
                          would you like to look into the matter or proceed?
                        </Text>
                      </div>
                      <div className="flex flex-col h-7 items-center justify-start w-7">
                        <div className="flex flex-col h-7 items-center justify-start w-7">
                          <div className="h-7 relative w-7">
                            <Img
                              className="h-7 m-auto rounded-[50%] w-7"
                              src="/images/img_shutterstock640011838_2.png"
                              alt="shutterstock640_One"
                            />
                            <div className="absolute bg-light_green-400 bottom-[7%] h-[7px] right-[0] rounded-[3px] w-[7px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start mt-7 w-[76%] md:w-full">
                      <div className="flex flex-col h-7 items-center justify-start w-7">
                        <div className="h-7 relative w-7">
                          <Img
                            className="h-7 m-auto rounded-[50%] w-7"
                            src="/images/img_shutterstock640011838_3.png"
                            alt="shutterstock640_Two"
                          />
                          <div className="absolute bg-green-700 bottom-[7%] h-[5px] right-[7%] rounded-sm w-[5px]"></div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-[5px] items-start justify-start p-[13px] rounded-[15px] shadow-bs1">
                        <Text
                          className="capitalize text-[10px] text-gray-600"
                          size="txtOpenSansRomanLight10"
                        >
                          <span className="text-gray-600 font-opensans text-left font-light">
                            Bruce lee{" "}
                          </span>
                          <span className="text-red-A700_04 font-opensans text-left font-light">
                            {" "}
                            48 mins ago
                          </span>
                        </Text>
                        <Text
                          className="lowercase mb-[27px] text-gray-600 text-xs"
                          size="txtOpenSansRomanRegular12"
                        >
                          lets proceed to refund.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-end md:ml-[0] ml-[119px] mt-7 w-[76%] md:w-full">
                      <div className="bg-white-A700 w-[50%] flex flex-col items-start justify-start p-[13px] rounded-[15px] shadow-bs1">
                        <Text
                          className="capitalize text-[10px] text-gray-600"
                          size="txtOpenSansRomanLight10"
                        >
                          <span className="text-gray-600 font-opensans text-left font-light">
                            Bruce lee{" "}
                          </span>
                          <span className="text-red-A700_04 font-opensans text-left font-light">
                            {" "}
                            30 mins ago
                          </span>
                        </Text>
                        <Text
                          className="lowercase mb-[13px] mt-1 text-gray-600 text-xs  sm:w-full"
                          size="txtOpenSansRomanRegular12"
                        >
                          <span className="text-gray-600 font-opensans text-left font-normal">
                            okay sir , were sorry for any inconvenience this may
                            have caused .{" "}
                          </span>
                          <span className="text-light_blue-A700_01 font-opensans text-left font-normal">
                            @dennis lahm{" "}
                          </span>
                          <span className="text-gray-600 font-opensans text-left font-normal">
                            follow this up
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col h-7 items-center justify-start w-7">
                        <div className="flex flex-col h-7 items-center justify-start w-7">
                          <div className="h-7 relative w-7">
                            <Img
                              className="h-7 m-auto rounded-[50%] w-7"
                              src="/images/img_shutterstock640011838_2.png"
                              alt="shutterstock640_Three"
                            />
                            <div className="absolute bg-light_green-400 bottom-[7%] h-[7px] right-[0] rounded-[3px] w-[7px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 px-2 flex sm:flex-col flex-row font-poppins sm:gap-5 items-start justify-start mt-[65px] mx-auto outline outline-[1px] outline-gray-400_03 p-[11px] rounded-[55px] w-[90%] md:w-full">
                      <input
                        className="ml-4 sm:mt-0 mt-[7px] text-gray-400_04 text-xs tracking-[0.44px]"
                        size="txtPoppinsRegular12"
                        placeholder="Start typing here"
                      />
                        
                      <div className="w-[96%] flex items-end justify-end">
                        <Img
                          className="h-[23px] sm:mt-0 mt-[62px] w-[23px] mr-3"
                          src="/images/img_link.svg"
                          alt="link"
                        />
                        <Button className="bg-light_blue-A700 cursor-pointer font-bold min-w-[74px] ml-4 sm:ml-[0] sm:mt-0 mt-[59px] py-1.5 rounded-[15px] text-center text-white-A700 text-xs tracking-[0.38px] uppercase">
                          Send
                        </Button>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-4 rounded-[15px] shadow-bs1 w-[43%] md:w-full">
                  <div className="flex flex-col justify-start mb-[2px] w-[99%] md:w-full">
                    <Text
                      className="capitalize ml-1.5 md:ml-[0] text-base text-gray-600"
                      size="txtOpenSansRomanBold16Gray600"
                    >
                      agents
                    </Text>
                    <div className="bg-white-A700_af flex flex-col items-start justify-start mt-2.5 p-[29px] sm:px-5 rounded-[15px] shadow-bs1 w-full">
                      <div className="flex flex-col gap-4 items-center justify-start mb-[26px] mt-3 w-[93%] md:w-full">
                        <div className="flex flex-col gap-[9px] items-start justify-between w-full">
                          {/* <Img
                            className="h-6 w-6"
                            src="/images/img_file.svg"
                            alt="file"
                          />
                          <div className="flex relative w-[89%] sm:w-full">
                            <CheckBox
                              className="capitalize my-auto sm:pr-5 text-base text-gray-600 text-left"
                              inputClassName="mr-[5px] z-[1]"
                              name="favyamah"
                              id="favyamah"
                              label="favy amah"
                            ></CheckBox>
                            <CheckBox
                              className="capitalize ml-[-24px] my-auto text-base text-gray-600 text-left z-[1]"
                              inputClassName="mr-[5px] z-[1]"
                              name="dennislahm"
                              id="dennislahm"
                              label="dennis lahm"
                            ></CheckBox>
                          </div> */}

                          <div className="flex w-[55%] justify-between mb-4">
                            <span className="flex items-center w-[45%]">
                              <input type="checkbox" name="" id="" className="mr-3"/>
                              <span className="text-gray-600 text-[16px]">Favy Amah</span>
                              
                            </span>

                            <span className="flex items-center w-[45%]"> 
                              <input type="checkbox" name="" id="" className="mr-3"/>
                              <span className="text-gray-600 text-[16px]">Denis Lahm</span>
                            </span>
                          </div>

                          <div className="flex w-[55%] justify-between mb-4">
                            <span className="flex items-center w-[45%]">
                              <input type="checkbox" name="" id="" className="mr-3"/>
                              <span className="text-gray-600 text-[16px]">Oluchi facry</span>
                              
                            </span>

                            <span className="flex items-center w-[45%]"> 
                              <input type="checkbox" name="" id="" className="mr-3"/>
                              <span className="text-gray-600 text-[16px]">Eddy Daniel</span>
                            </span>
                          </div>


                          <div className="flex w-[55%] justify-between mb-4">
                            <span className="flex items-center w-[45%]">
                              <input type="checkbox" name="" id="" className="mr-3"/>
                              <span className="text-gray-600 text-[16px]">Zentih omar</span>
                              
                            </span>

                            <span className="flex items-center w-[45%]"> 
                              <input type="checkbox" name="" id="" className="mr-3"/>
                              <span className="text-gray-600 text-[16px]">Treacy chi</span>
                            </span>
                          </div>

                          <div className="flex w-[55%] justify-between mb-4">
                            <span className="flex items-center w-[45%]">
                              <input type="checkbox" name="" id="" className="mr-3"/>
                              <span className="text-gray-600 text-[16px]">Ruth daniel</span>
                              
                            </span>

                            <span className="flex items-center w-[45%]"> 
                              <input type="checkbox" name="" id="" className="mr-3"/>
                              <span className="text-gray-600 text-[16px]">Anga tim</span>
                            </span>
                          </div>



                        </div>


                      </div>
                    </div>
                    <div className="flex flex-row gap-[27px] items-start   mt-[38px] w-[86%] md:w-full">
                      <div className="flex flex-col h-[82px]  justify-start w-[82px]">
                        <div className="h-[82px] relative w-[82px]">
                          <Img
                            className="h-[82px] m-auto rounded-[50%] w-[82px]"
                            src="/images/img_shutterstock640011838_82x82.png"
                            alt="shutterstock640_Four"
                          />
                          <div className="absolute bg-green-700 bottom-[6%] h-3.5 right-[6%] rounded-[50%] w-3.5"></div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[66%]">
                        <div className="flex flex-row gap-[7px] items-end justify-between w-full">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                            size="txtOpenSansRomanBold24"
                          >
                            bruce lee <span className="font-medium">(customer)</span>
                          </Text>
                          <Text
                            className="capitalize mb-[3px] mt-1.5 text-base text-gray-600"
                            size="txtOpenSansRomanRegular16"
                          >
                            
                          </Text>
                        </div>
                        <Text
                          className="capitalize text-base text-gray-600"
                          size="txtOpenSansRomanRegular16"
                        >
                          ID 22292
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start ml-3.5 md:ml-[0] mt-[18px]">
                      <Text
                        className="capitalize text-base text-gray-600"
                        size="txtOpenSansRomanBold16Gray600"
                      >
                        contact details
                      </Text>
                      <Text
                        className="capitalize mt-[13px] text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        phone number: +234 906 7772 7167
                      </Text>
                      <Text
                        className="lowercase mt-3.5 text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        email address: brucelee@yahoo.com
                      </Text>
                      <Text
                        className="lowercase mt-2.5 text-base text-gray-600"
                        size="txtOpenSansRomanRegular16"
                      >
                        location: 2 ahoda road omoku
                      </Text>
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

export default CustomerTicketsPage;
