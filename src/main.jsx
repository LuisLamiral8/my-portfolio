import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import LandingPortfolio from "./pages/LandingPortfolio.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import "./styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to={"/myself"}/>,
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: "/myself",
//     element: <LandingPorfolio/>
//   }
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/myself" />} />
        <Route path="/myself" element={<LandingPortfolio />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
