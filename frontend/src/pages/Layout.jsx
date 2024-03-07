import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";
import React from "react";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "Url Shortner", url: "/UrlShortner" },
  { title: "Register", url: "/register" },
  { title: "Login", url: "/login" },
  { title: "Add Link", url: "/create/links" },
];

const Layout = () => {
  return (
    <>
      <Navigation navItems={primaryNav} />
      <Outlet />
    </>
  );
};

export default Layout;
