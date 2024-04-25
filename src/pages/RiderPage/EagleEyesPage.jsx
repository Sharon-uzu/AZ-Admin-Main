import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "../../components";

const EagleEyesPage = () => {


  return (
    <>
        <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start md:px-5 w-[96%] md:w-full ">
          <div className="flex flex-col md:flex-row gap-3.5 items-start justify-between w-full">
            <div className="max-h-[649px] relative w-[74%] md:w-full">
              <Img
                className="max-h-[70vh] m-auto object-cover w-full"
                src="/images/img_phmap1.png"
                alt="phmapOne"
              />
              {/* <div className=" max-h-[340px] inset-x-[0] mx-auto top-[19%] w-[45%]">
                <div className="bg-indigo-400_59 h-[260px] m-auto rounded-[171px] w-full"></div>
                <div className="absolute bg-indigo-400_59 h-[112px] inset-[0] justify-center m-auto rounded-[106px] w-[213px]"></div>
              </div> */}
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-1/4 md:w-full">
              <div className="grid  grid-rows-5 gap-y-5 w-[97%] md:w-ful  p-2">
                <div className="bg-white-A700 flex flex-row gap-[25px] items-center justify-end p-3 rounded-[12px] shadow-bs w-full">
                  <Text
                    className="capitalize sm:flex-1 leading-[31.00px] md:text-lg md:text-[22px] text-gray-600 text-xl w-[47%] sm:w-full"
                    size="txtOpenSansRomanBold24"
                  >
                    active riders
                  </Text>
                  <Button className="bg-red-200_16 capitalize cursor-pointer font-bold min-h-[61px] mr-[9px]  rounded-[35px] shadow-bs6 text-[39.87px] md:text-[40.87px] text-center text-red-500 w-max p-2">
                    11
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-row gap-[25px] items-center justify-end p-2.5 rounded-[12px] shadow-bs w-full">
                  <Text
                    className="capitalize sm:flex-1 leading-[31.00px] md:text-lg md:text-[22px] text-gray-600 text-xl w-[47%] sm:w-full"
                    size="txtOpenSansRomanBold24"
                  >
                    pending riders
                  </Text>
                  <Button className="bg-red-200_16 capitalize cursor-pointer font-bold min-h-[61px] mr-[9px]  rounded-[35px] shadow-bs6 text-[39.87px] md:text-[40.87px] text-center text-red-500 w-max p-2"> 
                    06
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-row gap-[20px] items-center justify-end p-2.5 rounded-[12px] shadow-bs w-full">
                  <Text
                    className="capitalize sm:flex-1 leading-[31.00px]  md:text-[16px] text-gray-600 text-xl  sm:w-full "
                    size="txtOpenSansRomanBold24"
                  >
                    riders in progress
                  </Text>
                  <Button className="bg-red-200_16 capitalize cursor-pointer font-bold min-h-[61px] mr-[9px]  rounded-[35px] shadow-bs6 text-[39.87px] md:text-[40.87px] text-center text-red-500 w-max p-2">         
                   05
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-row gap-[25px] items-center justify-end p-2.5 rounded-[12px] shadow-bs w-full">
                  <Text
                    className="capitalize sm:flex-1 leading-[31.00px] md:text-lg md:text-[22px] text-gray-600 text-xl w-[47%] sm:w-full"
                    size="txtOpenSansRomanBold24"
                  >
                    distress riders
                  </Text>
                  <Button className="bg-red-200_16 capitalize cursor-pointer font-bold min-h-[61px] mr-[9px]  rounded-[35px] shadow-bs6 text-[39.87px] md:text-[40.87px] text-center text-red-500 w-max p-2">             
                     00
                  </Button>
                </div>
              <div className="bg-white-A700 flex flex-row gap-[25px] items-center justify-end p-2.5 rounded-[12px] shadow-bs w-full">
                  <Text
                    className="capitalize sm:flex-1 leading-[31.00px] md:text-lg md:text-[22px] text-gray-600 text-xl w-[47%] sm:w-full"
                    size="txtOpenSansRomanBold24"
                  >
                    total riders
                  </Text>
                  <Button className="bg-red-200_16 capitalize cursor-pointer font-bold min-h-[61px] mr-[9px]  rounded-[35px] shadow-bs6 text-[39.87px] md:text-[40.87px] text-center text-red-500 w-max p-2">                    16
                  </Button>
                </div>
              </div>
            </div>
          </div>        
        </div>
    </>
  );
};

export default EagleEyesPage;
