import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Text,Img } from "../../components";
import { useManagentContext } from "../../contextApi/ManagementContext";
const UserManagement = () => {

  const {userType,setUserType} = useManagentContext()

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };
const location = useLocation()
  return (
    <div className="w-[97%] flex flex-col gap-[3rem]">
        <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between mx-auto md:px-5 w-full">
            <div className="flex flex-col md:flex-row font-opensans md:gap-5 items-center justify-start mt-[26px] w-[94%] md:w-full">
              <NavLink
                to="admin"
                className={`${location.pathname === "/user_management/admin"? "bg-red-A700_af text-white-A700":""} bg-white text-gray-600 cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center  uppercase`}
              >
                admin
              </NavLink>
              <NavLink
                to="super_admin"
                className={`${location.pathname === "/user_management/super_admin"? "bg-red-A700_af text-white-A700":""} bg-white text-gray-600 cursor-pointer font-bold min-w-[159px] ml-11 md:ml-[0] py-3.5 rounded-[15px] shadow-bs1 text-base text-center  uppercase`}
              >
                super admin
              </NavLink>
              <div className="relative flex md:gap-10  w-[20%]">
                <label htmlFor="user">User</label>
                <input
                  className={`${
                    userType === "user" ? "hidden" : "capitalize md:ml-[0] ml-[5px] text-base absolute left-10"
                  }`}
                  id="user"
                  size="txtOpenSansRomanRegular16"
                  type="radio"
                  value="user"
                  name="userType"
                  checked={userType === "user"}
                  onChange={handleUserTypeChange} // added onChange event handler
                />

                {userType === "user" && (
                  <Img
                    className="h-4 w-4 absolute left-10"
                    src="/images/img_clock.svg"
                    alt="clock"
                  />
                )}
                <label htmlFor="vendor">Vendor</label>
                <input
                  className={` ${
                    userType === "vendor" ? "hidden" : "capitalize ml-1.5 md:ml-[0] text-base text-gray-600 absolute left-32"
                  }`}
                  size="txtOpenSansRomanRegular16"
                  type="radio"
                  value="vendor"
                  id="vendor"
                  name="userType"
                  checked={userType === "vendor"}
                  onChange={handleUserTypeChange}
                />
                {userType === "vendor" && (
                  <Img
                    className="h-4 w-4 absolute left-32"
                    src="/images/img_clock.svg"
                    alt="clock"
                  />
                )}
              </div>

              <Text
                className="capitalize   text-base text-indigo-600 underline ml-auto"
                size="txtOpenSansRomanRegular16Indigo600"
              >
                + new admin
              </Text>
            </div>
        </div>
        <Outlet />
    </div>
  );
};

export default UserManagement;
