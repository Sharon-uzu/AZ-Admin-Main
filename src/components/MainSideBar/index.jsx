import React from "react";
import logo from "/images/20230525_150752.png"
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { FaTh, FaUserAlt, FaCommentAlt } from "react-icons/fa";
import '../../../App.css'
// import { SlSettings } from "react-icons/sl";
import { NavLink, useLocation } from "react-router-dom";
import { Img } from "../Img";

const MainSideBar = (props) => {

  const location = useLocation()

  const sideBarMenu = [
    {
      label: "REGISTRATION",
      href: "/register/vendors",
      active: location.pathname === "/register" || 
      location.pathname === "/register/vendors" || 
      location.pathname === "/register/riders" || 
      location.pathname === "/register/users" ,
      icon: <FaTh />,
    },
    {
      label: "VENDOR",
      href: "/vendors/vendors_list",
      active: location.pathname === "/vendors"
      || location.pathname === "/vendors/vendors_list"
      || location.pathname === "/vendors/vendors_activity_log"
      || location.pathname === "/vendors/vendors_transactions",
      icon: <FaTh />,
    },
    {
      label: "RIDER",
      href: "/riders/list_of_riders",
      active: location.pathname === "/riders"
      || location.pathname === "/riders/list_of_riders"
      || location.pathname === "/riders/delivery_feed"
      || location.pathname === "/riders/eagle_eyes",
      icon: <FaUserAlt />,
    },
    {
      label: "USER",
      href: "/users/users_list",
      active: location.pathname === "/users"
      || location.pathname === "/users/users_list"
      || location.pathname === "/users/users_order_list"
      || location.pathname === "/users/users_transactions",
      icon: <FaCommentAlt />,
    },
    {
      label: "PAYMENT",
      href: "/payment/invoice",
      active: location.pathname === "/payment"
      || location.pathname === "/payment/invoice"
      || location.pathname === "/payment/vendor"
      || location.pathname === "/payment/rider"
      || location.pathname === "/payment/expensis",
      icon: <FaCommentAlt />,
    },
    {
      label: "REPORT",
      href: "/report/invoice",
      active: location.pathname === "/report"
      || location.pathname === "/report/invoice"
      || location.pathname === "/report/vendor"
      || location.pathname === "/report/rider"
      || location.pathname === "/report/expensis",
      icon: <FaCommentAlt />,
    },
    {
      label: "CUSTOMER SUPPORT",
      href: "/customer_support/overview",
      active: location.pathname === "/customer_support"
      || location.pathname === "/customer_support/overview"
      || location.pathname === "/customer_support/analytics"
      || location.pathname === "/customer_support/chat"
      || location.pathname === "/customer_support/tickets"
      || location.pathname === "/customer_support/calls"
      ,
      icon: <FaCommentAlt />,
    },
    {
      label: "USER MANAGMENT",
      href: "/user_management/admin",
      active: location.pathname === "/user_management"
      || location.pathname === "/user_management/admin"
      || location.pathname === "/user_management/super_admin",
      icon: <FaCommentAlt />,
    },
    {
      label: "settings",
      href: "/settings",
      active: location.pathname === "/settings",
      icon: "/images/img_settings_30x30.png",
    },
    {
      label: "logout",
      href: "/logout",
      active: location.pathname === "/logout",
      icon: "/images/img_refresh_blue_gray_400_01.svg",
    },
  ];
  console.log(location.pathname,"path")
  return (
    <>

      {/* SideBar */}
      <Sidebar style={{width:"100%", backgroundColor:"F7F7F8"}} className="side">
        <div
          className='side'
          style={{backgroundColor:"#fff"}}
        >
          {/* Logo */}
          <div className="flex justify-center item-center flex-col h-24">
            <div className=" w-40 h-40 flex justify-center item-center  ">
              <Img src={logo} alt="admin" className="w-full h-full object-fill" />
            </div>
          </div>

          {/* Links and Lists */}

          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                width: '90%',
                margin:"auto",
                
                // "padding-bottom": "20px",
                // "flex-direction": "column",
                // color: "#697076",
                // "font-weight": 700,
                // "font-size": "16px",
                // "font-family": "Open Sans",
                // "padding-left": "20px",
                // "padding-right": "20px",
              },
            }}
          >
            <div className="flex flex-col item-center  w-full h-[80vh]">
              {/* Admin sideBar */}
              {sideBarMenu?.map((menu, i) => (
                <>
                  <MenuItem
                    key={i}
                    className={`side-li 
                    ${ menu.label === "settings" ? "mt-auto" : ""}
                    ${ menu.active ? "bg-red-500 rounded-r-full shadow-sm ":""}
                    `}
                    component={<NavLink to={menu.href}  />}
                  >                  
                    <ul className={`flex w-full mx-auto    ${ menu.active ? " text-[#fff]":"text-[#697077]"}`} key={`sideBarMenuItem${i}`}>
                      {
                        typeof menu.icon === "string"? (
                          <Img src={menu.icon} alt={menu.label} className=" w-4 mr-4" />
                        ):(
                          // <span className="mr-4 text-sm ">{menu.icon}</span> 
                          null
                        )
                      }
                      <span className="text-sm md:min-w-[120px] text-left font-bold word-wrap text-[14px]">{menu.label}</span>
                    </ul>
                  </MenuItem>
                </>
              ))}
            </div>
          </Menu>
        </div>
        {/* Contents i.e MainHeaderBar and MainContens */}
        <main className={`ml-auto  ${location.pathname === "/report"? "h-screen" : "mt-[1.3rem] "}`}
           style={{ 
            width: `calc(100% - 13%)`,
          }}
        >{props.children}</main>

      </Sidebar>
    </> 
  );
};

// MainSideBar.defaultProps = {};

export { MainSideBar };
