import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LandingPorfolio from "./pages/LandingPortfolio.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import "./styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/myself"}/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/myself",
    element: <LandingPorfolio/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
