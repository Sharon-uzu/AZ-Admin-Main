import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";


const VendorPage = () => {

  const currentPath = useLocation()

  return (
    <>
      <div className=" w-[95%] mx-auto ">
        <div className="  lg:px-4 w-full">
            {/* Naviagation section */}
            <div className="flex flex-col md:flex-row justify-between md:w-[50%]  mt-2 ">
              <NavLink to="vendors_list"
                className={ ` ${currentPath.pathname === "/vendors/vendors_list"? "bg-red-700 text-white-A700":"bg-white-A700 text-[gray-600]"} cursor-pointer font-bold min-w-[159px] py-[.9em] grid place-items-center rounded-[15px] shadow-bs1 text-sm text-center uppercase`}
              >
                vendor list
              </NavLink>
              <NavLink to="vendors_activity_log"
                
              className={` ${currentPath.pathname === "/vendors/vendors_activity_log"? "bg-red-700 text-white-A700":"bg-white-A700 text-gray-600"} cursor-pointer font-bold min-w-[159px] py-[.9em] grid place-items-center rounded-[15px] shadow-bs1 text-sm text-center uppercase`}>
                activity log
              </NavLink>
              <NavLink to="vendors_transactions"
              className={ ` ${currentPath.pathname === "/vendors/vendors_transactions" ? "bg-red-700 text-white-A700":"bg-white-A700 text-gray-600"} cursor-pointer font-bold min-w-[159px] py-[.9em] grid place-items-center rounded-[15px] shadow-bs1 text-sm text-center uppercase`}>
                transactions
              </NavLink>
            </div>
            <Outlet/>
            </div>
      </div>
    </>
  );
};

export default VendorPage;
