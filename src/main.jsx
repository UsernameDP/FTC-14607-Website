import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Initialize GA4
ReactGA.initialize("G-6QYHQ8S1HD");
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<App />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname
  });
};
