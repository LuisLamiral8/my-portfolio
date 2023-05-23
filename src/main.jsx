import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPortfolio from "./pages/LandingPortfolio.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import "./styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import data from "./assets/texts.json";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/es/my" />} />
          <Route path="/es/my" element={<LandingPortfolio language={data.esp}/>} />
          <Route path="/en/my" element={<LandingPortfolio language={data.eng}/>} />
          <Route path="/br/my" element={<LandingPortfolio language={data.br}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
