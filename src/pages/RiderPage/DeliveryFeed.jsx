import React from "react";

// import { Menu, MenuItem } from "react-pro-sidebar";

import {  ReactTable } from "../../components";
import { vendorListColumn } from "../../components/TableData/VendorColums";
// import { NavLink } from "react-router-dom";
import { deliveryFeedColumn } from "../../components/TableData/RiderColumns";

const ListOfRiders = () => {
    const deliveryList = React.useMemo(
        () => [
          {
            id: 1,
            name: "Genesis",
            location: "22 old aba road , market junction",
            bikenum: "4ABZ",
            status: "Open",
          },
          {
            id: 2,
            name: "kilimajaro",
            location: "rumuola road off aba xpress way",
            bikenum: "3SDA",
            status: "Closed",
          },
          {
            id: 3,
            name: "republic",
            location: "woji estate off alcon road elijiji",
            bikenum: "1ADD",
            status: "Open",
          },
          {
            id: 4,
            name: "pizza hut",
            location: "22 old aba road , market junction",
            bikenum: "4A33",
            status: "Open",
          },
        ], []);
  const COLUMNS = React.useMemo(() => deliveryFeedColumn, []);

  return (
    <>

    <div className="vendor-list-table delivery">
      {/* Vendor List */}
      <ReactTable
        columns={COLUMNS}
        data={deliveryList}
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