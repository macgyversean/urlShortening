import "./App.css";
import Layout from "./pages/Layout";
import Urls, { loader as urlsLoader } from "./routes/UrlShortner";
import Home from "./routes/Home";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserCreate, { action as addUserAction } from "./routes/Register";
import Login, { action as loginUserAction } from "./routes/Login";
import React from "react";
import AddLink, { action as addUrlUserAction } from "./routes/addUrl";
import { AuthProvider } from "./AuthContext";
import Logout from "./routes/Logout";
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: ErrorPage,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/urlshortner",
        element: <Urls />,
        loader: urlsLoader,
      },
      {
        path: "/register",
        element: <UserCreate />,
        action: addUserAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginUserAction,
      },
      {
        path: "/create/links",
        element: <AddLink />,
        action: addUrlUserAction,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
