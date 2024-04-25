import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MainSideBar,MainHeaderBar  } from "../components";
const Home = () => {
  const location = useLocation();
  return (
    <div className="dhiwise-navigation w-full">
      <MainSideBar>
        {location.pathname === "/report" ? null : (
          <MainHeaderBar headTitle="Welcome to the Admin Dashboard" />
        )}
        <Outlet />
      </MainSideBar>
    </div>
  );
};
export default Home;
