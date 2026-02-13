import React from "react";
import { Link } from "react-router";
import "./navbarstyles.css";

export const CustomNavbar = () => {
  return (
    <div className="header">
      <div>Logo</div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/college">College</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/login">Login </Link>
          </li>
          <li>
            <Link to="/lazy">Lazy Load</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
