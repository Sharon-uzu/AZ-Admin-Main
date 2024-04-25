import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, CheckBox, Img, Line, List, Text } from "../../components";

import "react-circular-progressbar/dist/styles.css";
import { Link, Outlet, useLocation } from "react-router-dom";

const Customer = () => {

    const location = useLocation()

    return (
        <>
        <div className="flex flex-col  w-[95%]mx-auto ">
            <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-5 items-center justify-start md:w-[92%] mb-4">
                <Link to="overview"  className={`${location.pathname === "/customer_support/overview"? "bg-[#f53636] text-white-A700":"bg-white-A700 text-gray-600"} cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center uppercase`}>
                    overview
                </Link>
                <Link to="analytics" className={`${location.pathname === "/customer_support/analytics"? "bg-[#f53636]  text-white-A700":"bg-white-A700 text-gray-600"} cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center uppercase`}>
                    analytics
                </Link>
                <Link to="chat" className={`${location.pathname === "/customer_support/chat"? "bg-[#f53636]  text-white-A700":"bg-white-A700 text-gray-600"} cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center uppercase`}>
                    chat
                </Link>
                <Link to="tickets" className={`${location.pathname === "/customer_support/tickets"? "bg-[#f53636]  text-white-A700":"bg-white-A700 text-gray-600"} cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center uppercase`}>
                    tickets
                </Link>
                <Link to="calls" className={`${location.pathname === "/customer_support/calls"? "bg-[#f53636] text-white-A700":"bg-white-A700 text-gray-600"} cursor-pointer font-bold min-w-[159px] py-3.5 rounded-[15px] shadow-bs1 text-base text-center uppercase`}>
                    calls
                </Link>
            </div>
        </div>
        <Outlet/>
        </>
    );
};

export default Customer;