import React from "react";
import { Button } from "../../components";
import { Outlet, Link,
   useLocation 
  } from "react-router-dom";

  const RiderPage = () => {
    const currentPath = useLocation()
  
    return (
      <>
      <div className="w-[95%] mx-auto">
        <div className="flex flex-col gap-[27px] items-center justify-center w-[100%] sticky top-0">
          <div className="flex flex-col md:flex-row  items-center justify-around  w-[80%] mx-auto mb-10 ">
            <Link to="list_of_riders">
              <Button className={`${currentPath.pathname === "/riders/list_of_riders"? "bg-red-500 text-white-A700":"bg-white text-red-200"} cursor-pointer font-bold min-w-[280px] py-[34px] rounded-[12px] shadow-bs text-2xl md:text-[22px] text-center  sm:text-xl uppercase`}>
                list of riders
              </Button>
            </Link>
            <Link to="delivery_feed">
              <Button className={`${currentPath.pathname === "/riders/delivery_feed"? "bg-red-500 text-white-A700":"bg-white text-red-200"} cursor-pointer font-bold min-w-[280px] py-[34px] rounded-[12px] shadow-bs text-2xl md:text-[22px] text-center  sm:text-xl uppercase`}>
                delivery feed
              </Button>
            </Link>
            <Link to="eagle_eyes">
              <Button  className={`${currentPath.pathname === "/riders/eagle_eyes" ? "bg-red-500 text-white-A700":"bg-white text-red-200"} cursor-pointer font-bold min-w-[280px] py-[34px] rounded-[12px] shadow-bs text-2xl md:text-[22px] text-center  sm:text-xl uppercase`}>
                eagle eyes
              </Button>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
      </>
    );
  };
  
export default RiderPage;