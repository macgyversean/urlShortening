import "./App.css";
import Layout from "./pages/Layout";
import URLS from "./routes/UrlShortner";
import Home from "./routes/Home";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        element: <URLS />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
