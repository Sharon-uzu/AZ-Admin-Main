import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const loc = useLocation()
  return (
    <div>
      <h1 style={{color:"black",fontSize:"20px",height:"20px",padding:"20px"}}>404 page {loc.pathname} not found</h1>
    </div>
  );
};

export default NotFound;
