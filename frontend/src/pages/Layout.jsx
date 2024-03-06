import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";

const primaryNav = [
  { title: "Home", url: "/", href: "#", current: true },
  { title: "Url Shortner", url: "/UrlShortner" },
  { title: "Register", url: "/register" },
  { title: "Login", url: "/login" },
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
