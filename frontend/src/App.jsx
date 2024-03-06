import "./App.css";
import Layout from "./pages/Layout";
import Urls, { loader as urlsLoader } from "./routes/UrlShortner";
import Home from "./routes/Home";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserCreate, { action as addUserAction } from "./routes/addUser";
import Login, { action as loginUserAction } from "./routes/Login";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
