import React from "react";
// import TableData from "../../components/TableData/TableData.json";
// import { tableColumnVendor } from "../../components/TableData/RegisterColumns";

import { Button } from "../../components";
// import { createColumnHelper } from "@tanstack/react-table";
import { Outlet, Link,
   useLocation 
  } from "react-router-dom";

const Registration = () => {
  // const TableData = useRef([
  //   {
  //     brandname: "Osere Denco",
  //     address: "22 old aba road , market junction......",
  //     contact: "08109830911",
  //     status: "view",
  //   },
  //   {
  //     brandname: "genesis",
  //     address: "rumuola road off aba xpress way",
  //     contact: "090155900132",
  //     status: "view",
  //   },
  //   {
  //     brandname: "kilimanjaro",
  //     address: "woji estate off alcon road elijiji",
  //     contact: "08030679668",
  //     status: "view",
  //   },
  //   {
  //     brandname: "republic",
  //     address: "22 old aba road , market junction......",
  //     contact: "08039680942",
  //     status: "view",
  //   },
  //   {
  //     brandname: "Osere Denco",
  //     address: "22 old aba road , market junction......",
  //     contact: "08109830911",
  //     status: "view",
  //   },
  //   {
  //     brandname: "genesis",
  //     address: "rumuola road off aba xpress way",
  //     contact: "090155900132",
  //     status: "view",
  //   },
  //   {
  //     brandname: "kilimanjaro",
  //     address: "woji estate off alcon road elijiji",
  //     contact: "08030679668",
  //     status: "view",
  //   },
  //   {
  //     brandname: "republic",
  //     address: "22 old aba road , market junction......",
  //     contact: "08039680942",
  //     status: "view",
  //   },
  // ]).current;

  // // const data = useMemo(()=> TableData,[])

  // const COLUMNS = useMemo(() => {
  //   const tableColumnHelper = createColumnHelper();
  //   return tableColumnVendor(tableColumnHelper);
  // }, []);

  const currentPath = useLocation()

  return (
    <>
      <div className="reg-screen">
        <div className="reg-cards">
          <Link to="vendors">
            <Button className={`${currentPath.pathname === "/register/vendors"? " bg-red-500 text-[#fff]":"bg-[#fff] text-[#CE7C7C]"} reg-card`}>
              vendors
            </Button>
          </Link>
          <Link to="riders">
            <Button className={`${currentPath.pathname === "/register/riders"? "bg-red-500 text-[#fff]":"bg-[#fff] text-[#CE7C7C]"} reg-card`}>
              riders
            </Button>
          </Link>
          <Link to="users">
            <Button  className={`${currentPath.pathname === "/register/users"? "bg-red-500 text-[#fff]":"bg-[#fff] text-[#CE7C7C]"} reg-card`}>
              users
            </Button>
          </Link>
        </div>
          <Outlet />
      </div>
    </>
  );
};

export default Registration;
