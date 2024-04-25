import React from "react";

// import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, List, ReactTable, Text } from "../../components";
import { vendorListColumn } from "../../components/TableData/VendorColums";
import { NavLink } from "react-router-dom";
// import MainSideBar from "components/MainSideBar";

const VendorList = () => {
  const vendorList = React.useMemo(
    () => [
      {
        id: 1,
        code: "4ABZ",
        logo: "/images/img_ellipse16.png",
        name: "Genesis",
        address: "22 old aba road , market junction",
        phone: "090155900132",
        status: "Open",
        passwordAction: "change password",
        enableAction: "disable",
      },
      {
        id: 2,
        code: "3SDA",
        logo: "/images/img_ellipse16_50x51.png",
        name: "kilimajaro",
        address: "rumuola road off aba xpress way",
        phone: "090155900132",
        status: "Closed",
        passwordAction: "change password",
        enableAction: "enable",
      },
      {
        id: 3,
        code: "1ADD",
        logo: "/images/img_ellipse16_1.png",
        name: "republic",
        address: "woji estate off alcon road elijiji",
        phone: "090155900132",
        status: "Open",
        passwordAction: "change password",
        enableAction: "disable",
      },
      {
        id: 4,
        code: "4A33",
        logo: "/images/img_ellipse16_37x39.png",
        name: "pizza hut",
        address: "22 old aba road , market junction",
        phone: "090155900132",
        status: "Open",
        passwordAction: "change password",
        enableAction: "disable",
      },
    ],
    []
  );

  const COLUMNS = React.useMemo(() => vendorListColumn, []);

  return (
    <>
      <div className="lg:px-1 w-full">
        {/* Header page */}
        <div className=" list-card-con  mt-[39px]">
          <div className="list-card bg-white-A700 flex  items-center p-4 rounded-[15px] shadow-bs2 ">
            <Text
              className="v-text capitalize text-gray-600"
              size="txtOpenSansRomanBold2257"
            >
              All <br /> Vendor
            </Text>
            <Button className="v-button bg-red-200_16 capitalize cursor-pointer font-bold shadow-bs3 text-center text-red-500 ">
              110
            </Button>
          </div>
          <div className="list-card bg-white-A700 flex  items-center p-4 rounded-[15px] shadow-bs2">
            <Text
              className="v-text capitalize text-gray-600"
              size="txtOpenSansRomanBold2257"
            >
              open <br /> restaurant
            </Text>
            <Button className="v-button bg-red-200_16 capitalize cursor-pointer font-bold shadow-bs3 text-center text-red-500 ">
              700
            </Button>
          </div>
          <div className="list-card bg-white-A700 flex  items-center p-4 rounded-[15px] shadow-bs2">
            <Text
              className="v-text capitalize text-gray-600"
              size="txtOpenSansRomanBold2257"
            >
              closed <br /> restaurant
            </Text>
            <Button className="v-button bg-red-200_16 capitalize cursor-pointer font-bold shadow-bs3 text-center text-red-500">
              06
            </Button>
          </div>
        </div>
      </div>

      <div className="vendor-list-table">
        <ReactTable 
          columns={COLUMNS}
          data={vendorList}
          tableClass={"w-[98%] mx-auto mt-6"}
          headerClass={"bg-blue-700_96 w-full h-12 rounded-full shadow-bs4 text-left text-[13px] text-[#fff]"}
          rowClass={"shadow-md   p-[15px] rounded-2xl  shadow-bs w-full h-14 text-left"}
          tableBodyClass={"w-full "}
        />
      </div>
      
      {/* Vendor List */}
    </>
  );
};

export default VendorList;
