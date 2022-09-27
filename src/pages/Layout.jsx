import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/NavBar/navbar";

const Layout = () => {
  return (
    <>
      <Navbar Classname="position:fixed;top:0p;" />
      <Outlet />
    </>
  );
};

export default Layout;