import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, List, Text } from "../../components";

const UserPage = () => {


  return (
    <>
      <div className="bg-gray-50 flex flex-col font-opensans items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[34px] items-start justify-start md:px-5 w-[96%] md:w-full">
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
              className="flex flex-col items-center justify-start mt-36 pr-5 w-[88%]"
            >
              <div className="flex flex-col gap-[43px] items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <Button className="bg-red-500 cursor-pointer font-bold min-w-[138px] mt-7 py-3.5 rounded-bl-[20px] rounded-br-[20px] shadow-bs text-base text-center text-gray-100_01">
                USER
              </Button>
              <div className="flex flex-col gap-[43px] items-center justify-start mt-[29px] w-full">
                {sideBarMenu1?.map((menu, i) => (
                  <MenuItem key={`sideBarMenu1Item${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </Menu>
            <div className="flex flex-row gap-[15px] items-start justify-center md:ml-[0] ml-[22px] mr-[43px] mt-[73px] w-[59%]">
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
            <div className="flex flex-row gap-4 items-start justify-center mb-[13px] ml-5 md:ml-[0] mr-[54px] mt-2 w-[54%]">
              <Img
                className="h-[23px] w-[23px]"
                src="images/img_refresh_blue_gray_400_01.svg"
                alt="refresh"
              />
              <a href="javascript:" className="mt-[3px] text-gray-600 text-sm">
                <Text size="txtOpenSansRomanBold14Gray600">logout</Text>
              </a>
            </div>
          <Sidebar/>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900"
                size="txtOpenSansBold40"
              >
                AZgreyExpress
              </Text>
              <div className="flex md:flex-1 flex-row font-manrope gap-[18px] items-start justify-center md:ml-[0] ml-[502px] md:mt-0 mt-[5px] w-[12%] md:w-full">
                <Img
                  className="h-[26px] w-[26px]"
                  src="images/img_search1.svg"
                  alt="searchOne"
                />
                <Text
                  className="text-[18.2px] text-gray-400"
                  size="txtManropeMedium182"
                >
                  Search...
                </Text>
              </div>
              <Img
                className="h-[30px] md:ml-[0] ml-[37px] md:mt-0 mt-1.5 w-[30px]"
                src="images/img_refresh.svg"
                alt="refresh_One"
              />
              <Img
                className="h-[30px] md:ml-[0] ml-[18px] md:mt-0 mt-1.5 w-[30px]"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </div>
            <div className="bg-gray-100 border border-gray-400_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[39px] p-3.5 rounded-[15px] w-full">
              <Text
                className="ml-4 sm:ml-[0] text-[19px] text-blue_gray-900"
                size="txtOpenSansRegular19"
              >
                ID
              </Text>
              <Text
                className="sm:ml-[0] ml-[84px] text-[19px] text-blue_gray-900"
                size="txtOpenSansRegular19"
              >
                NAME
              </Text>
              <Text
                className="sm:ml-[0] ml-[95px] text-[19px] text-blue_gray-900 uppercase"
                size="txtOpenSansRegular19"
              >
                item
              </Text>
              <Text
                className="sm:ml-[0] ml-[119px] text-[19px] text-blue_gray-900 uppercase"
                size="txtOpenSansRegular19"
              >
                item
              </Text>
              <Text
                className="sm:ml-[0] ml-[113px] text-[19px] text-blue_gray-900"
                size="txtOpenSansRegular19"
              >
                STATUS
              </Text>
              <Text
                className="sm:ml-[0] ml-[73px] text-[19px] text-blue_gray-900 uppercase"
                size="txtOpenSansRegular19"
              >
                payment
              </Text>
            </div>
            <List
              className="flex flex-col gap-3.5 items-center mt-[11px] w-full"
              orientation="vertical"
            >
              <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs w-full">
                <Text
                  className="sm:mt-0 my-[13px] text-[19px] text-blue_gray-900"
                  size="txtOpenSansRomanBold19Bluegray900"
                >
                  102
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[72px] sm:mt-0 my-[13px] text-[19px] text-black-900"
                  size="txtOpenSansRomanRegular19"
                >
                  rhonda
                </Text>
                <Text
                  className="mb-3 sm:ml-[0] ml-[84px] sm:mt-0 mt-[15px] text-[19px] text-blue_gray-900"
                  size="txtOpenSansRegular19"
                >
                  fried rice an...
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[42px] sm:mt-0 my-[13px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  apr 11
                </Text>
                <Text
                  className="capitalize mb-3 sm:ml-[0] ml-[94px] sm:mt-0 mt-[15px] text-[19px] text-green-800"
                  size="txtOpenSansRegular19Green800"
                >
                  delivered
                </Text>
                <Text
                  className="capitalize mb-[9px] sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  completed
                </Text>
                <Text
                  className="capitalize mb-3 sm:ml-[0] ml-[50px] sm:mt-0 mt-[15px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  call
                </Text>
                <Text
                  className="capitalize mb-[11px] sm:ml-[0] ml-[34px] sm:mt-0 mt-4 text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  view
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs w-full">
                <Text
                  className="sm:mt-0 my-[13px] text-[19px] text-blue_gray-900"
                  size="txtOpenSansRomanBold19Bluegray900"
                >
                  211
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[75px] sm:mt-0 my-[13px] text-[19px] text-black-900"
                  size="txtOpenSansRomanRegular19"
                >
                  dennis
                </Text>
                <Text
                  className="mb-3 sm:ml-[0] ml-[91px] sm:mt-0 mt-[15px] text-[19px] text-blue_gray-900"
                  size="txtOpenSansRegular19"
                >
                  sharwama an...
                </Text>
                <Text
                  className="capitalize ml-7 sm:ml-[0] sm:mt-0 my-[13px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  apr 20
                </Text>
                <Text
                  className="capitalize mb-[9px] sm:ml-[0] ml-[91px] sm:mt-0 mt-[18px] text-[19px] text-red-A700"
                  size="txtOpenSansRegular19RedA700"
                >
                  pending
                </Text>
                <Text
                  className="capitalize mb-3 sm:ml-[0] ml-[79px] sm:mt-0 mt-[15px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  declined
                </Text>
                <Text
                  className="capitalize mb-3 sm:ml-[0] ml-[71px] sm:mt-0 mt-[15px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  call
                </Text>
                <Text
                  className="capitalize mb-[11px] sm:ml-[0] ml-[34px] sm:mt-0 mt-4 text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  view
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs w-full">
                <Text
                  className="sm:mt-0 my-[13px] text-[19px] text-blue_gray-900"
                  size="txtOpenSansRomanBold19Bluegray900"
                >
                  132
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[72px] sm:mt-0 my-[13px] text-[19px] text-black-900"
                  size="txtOpenSansRomanRegular19"
                >
                  sharon{" "}
                </Text>
                <Text
                  className="mb-3 sm:ml-[0] ml-[89px] sm:mt-0 mt-[15px] text-[19px] text-blue_gray-900"
                  size="txtOpenSansRegular19"
                >
                  ice cream cak...
                </Text>
                <Text
                  className="capitalize ml-7 sm:ml-[0] sm:mt-0 my-[13px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  apr 30
                </Text>
                <Text
                  className="capitalize mb-3 sm:ml-[0] ml-[91px] sm:mt-0 mt-[15px] text-[19px] text-green-800"
                  size="txtOpenSansRegular19Green800"
                >
                  delivered
                </Text>
                <Text
                  className="capitalize mb-[9px] sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  completed
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[50px] sm:mt-0 my-[13px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  call
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[34px] sm:mt-0 my-[13px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  view
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-end p-[22px] sm:px-5 rounded-[12px] shadow-bs w-full">
                <Text
                  className="sm:mt-0 my-[13px] text-[19px] text-blue_gray-900"
                  size="txtOpenSansRomanBold19Bluegray900"
                >
                  100
                </Text>
                <Text
                  className="capitalize mb-[11px] sm:ml-[0] ml-[72px] sm:mt-0 mt-4 text-[19px] text-black-900"
                  size="txtOpenSansRomanRegular19"
                >
                  victory
                </Text>
                <Text
                  className="mb-[9px] sm:ml-[0] ml-[92px] sm:mt-0 mt-[18px] text-[19px] text-blue_gray-900"
                  size="txtOpenSansRegular19"
                >
                  pizza con e...
                </Text>
                <Text
                  className="capitalize mb-4 sm:ml-[0] ml-[50px] sm:mt-0 mt-[11px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  may 2
                </Text>
                <Text
                  className="capitalize mb-3 sm:ml-[0] ml-[97px] sm:mt-0 mt-[15px] text-[19px] text-green-800"
                  size="txtOpenSansRegular19Green800"
                >
                  delivered
                </Text>
                <Text
                  className="capitalize mb-[11px] sm:ml-[0] ml-[67px] sm:mt-0 mt-4 text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  pending
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[75px] sm:mt-0 my-[13px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  call
                </Text>
                <Text
                  className="capitalize sm:ml-[0] ml-[34px] sm:mt-0 my-[13px] text-[19px] text-gray-600"
                  size="txtOpenSansRegular19Gray600"
                >
                  view
                </Text>
              </div>
            </List>
            <Button className="bg-red-800 capitalize cursor-pointer font-bold min-w-[188px] md:ml-[0] ml-[840px] mt-[38px] py-[13px] rounded-[20px] text-2xl md:text-[22px] text-center text-gray-50_02 sm:text-xl">
              create new
            </Button>
          </div>
        </div>
        </div>
    </>
  );
};

export default UserPage;
