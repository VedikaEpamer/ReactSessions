import React from "react";
import { CollegeNavBar } from "./CollegeNavBar";
import { Outlet } from "react-router";

const College = () => {
  return (
    <div>
      <CollegeNavBar />

      <br />
      <Outlet />
    </div>
  );
};

export default College;
