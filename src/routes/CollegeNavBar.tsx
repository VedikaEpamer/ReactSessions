import React from "react";
import { NavLink } from "react-router";

export const CollegeNavBar = () => {
  const isAdmin: boolean = false;
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <NavLink
        to="/college/student"
        style={({ isActive }) =>
          isActive ? { color: "green" } : { color: "red" }
        }
      >
        Student
      </NavLink>

      {/* <NavLink to="">Student</NavLink> */}
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "green" } : { color: "red" }
        }
        to="/college/department"
      >
        Department
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "notActive")}
        to="/college/course"
      >
        Course
      </NavLink>
    </div>
  );
};
