import React from "react";

// import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, List, ReactTable, Text } from "../../components";
import { NavLink, Outlet, useLocation } from "react-router-dom";
// import MainSideBar from "components/MainSideBar";

const PaymentPage = () => {
  const currentPath = useLocation();

  return (
    <>
      <div className="w-[96%] mx-auto">
        <div className="flex flex-col md:flex-row  items-start justify-evenly w-[full]">
          {/* Naviagation section */}
          <div className="flex  flex-col md:flex-row flex-wrap items-center justify-between md:w-[70%] w-full ">
            <NavLink
              to="invoice"
              className={` ${
                currentPath.pathname === "/payment/invoice"
                  ? "bg-red-700 text-white-A700"
                  : "bg-white-A700 text-gray-600"
              } cursor-pointer font-bold min-w-[159px] py-[.9em] grid place-items-center rounded-[15px] shadow-bs1 text-sm text-center uppercase`}
            >
              invoice
            </NavLink>
            <NavLink
              to="vendor"
              className={` ${
                currentPath.pathname === "/payment/vendor"
                  ? "bg-red-700 text-white-A700"
                  : "bg-white-A700 text-gray-600"
              } cursor-pointer font-bold min-w-[159px] py-[.9em] grid place-items-center rounded-[15px] shadow-bs1 text-sm text-center uppercase`}
            >
              vendor
            </NavLink>
            <NavLink
              to="rider"
              className={` ${
                currentPath.pathname === "/payment/rider"
                  ? "bg-red-700 text-white-A700"
                  : "bg-white-A700 text-gray-600"
              } cursor-pointer font-bold min-w-[159px] py-[.9em] grid place-items-center rounded-[15px] shadow-bs1 text-sm text-center uppercase`}
            >
              rider
            </NavLink>
            <NavLink
              to="expensis"
              className={` ${
                currentPath.pathname === "/payment/expensis"
                  ? "bg-red-700 text-white-A700"
                  : "bg-white-A700 text-gray-600"
              } cursor-pointer font-bold min-w-[159px] py-[.9em] grid place-items-center rounded-[15px] shadow-bs1 text-sm text-center uppercase`}
            >
              expensis
            </NavLink>
          </div>
          <div className="bg-white-A700 flex  md:flex-row items-start justify-between p-[15px] rounded-[15px] shadow-bs1 md:w-[20%] w-full">
            <Text
              className="capitalize my-1 text-red-A200 text-sm"
              size="txtOpenSansRomanSemiBold14"
            >
              all
            </Text>
            <Text
              className="capitalize mb-0.5 mt-1.5 text-gray-600 text-sm"
              size="txtOpenSansRomanSemiBold14Gray600"
            >
              today
            </Text>
            <Text
              className="capitalize my-1 text-gray-600 text-sm"
              size="txtOpenSansRomanSemiBold14Gray600"
            >
              custom
            </Text>
            <Img
              className="h-[18px] mr-[3px] mt-[7px] w-[18px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default PaymentPage;
