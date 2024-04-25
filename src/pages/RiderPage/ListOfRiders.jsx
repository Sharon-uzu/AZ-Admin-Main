import React from "react";

// import { Menu, MenuItem } from "react-pro-sidebar";

import {  ReactTable, } from "../../components";
import { vendorListColumn } from "../../components/TableData/VendorColums";
import { NavLink } from "react-router-dom";

const ListOfRiders = () => {
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

      {/* Vendor List */}
      <div className="vendor-list-table">
        <ReactTable
          columns={COLUMNS}
          data={vendorList}
          tableClass={"w-[98%] mx-auto"}
          headerClass={"bg-blue-700_96 w-full h-12 rounded-full  shadow-bs4 text-left"}
          rowClass={"shadow-md shadow-red-100  p-[15px] rounded-2xl  shadow-bs w-full h-14"}
          tableBodyClass={"w-full "}
        />
      </div>
      
    </>
  );
};

export default ListOfRiders;