import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "Url Shortner", url: "/UrlShortner" },
  { title: "Register", url: "/register" },
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
