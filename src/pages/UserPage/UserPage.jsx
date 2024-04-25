import React from "react";

// import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, List, ReactTable, Text } from "../../components";
import { NavLink, Outlet, useLocation } from "react-router-dom";
// import MainSideBar from "components/MainSideBar";

const UserPage = () => {

  const currentPath = useLocation()

  return (
    <>
        {/* Naviagation section */}
          <div className="w-[95%] mx-auto">

        
            <div className="flex flex-col md:flex-row justify-between md:w-[50%]  mt-2 lg:px-4 mb-6">
              <NavLink to="users_list"
                className={ ` ${currentPath.pathname === "/users/users_list"? "bg-red-700 text-white-A700":"bg-white-A700 text-gray-600"} cursor-pointer font-bold min-w-[159px] py-[.9em] grid place-items-center rounded-[15px] shadow-bs1 text-sm text-center uppercase`}
              >
                user list
              </NavLink>
              <NavLink to="users_order_list"
                
              className={` ${currentPath.pathname === "/users/users_order_list"? "bg-red-700 text-white-A700":"bg-white-A700 text-gray-600"} cursor-pointer font-bold min-w-[159px] py-[.9em] grid place-items-center rounded-[15px] shadow-bs1 text-sm text-center uppercase`}>
                order list
              </NavLink>
              <NavLink to="users_transactions"
              className={ ` ${currentPath.pathname === "/users/users_transactions" ? "bg-red-700 text-white-A700":"bg-white-A700 text-gray-600"} cursor-pointer font-bold min-w-[159px] py-[.9em] grid place-items-center rounded-[15px] shadow-bs1 text-sm text-center uppercase`}>
                transactions
              </NavLink>
            </div>

            </div>
        <Outlet/>
    </>
  );
};

export default UserPage;
