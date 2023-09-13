import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Slider from "./pages/slider";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Accessories from "./pages/Accessories";
import Electronics from "./pages/Electronics";
import Details from "./pages/Details";
import ShoppingCart from "./components/ShoppingCart";

const router = createBrowserRouter( [
  {
    path: "/",
    element: <Slider />,
  },
  {
    path: "/Men",
    element: <Men />,
  },
  {
    path: "/Women",
    element: <Women />,
  },
  {
    path: "/Accessories",
    element: <Accessories />,
  },
  {
    path: "/Electronics",
    element: <Electronics />,
  },
  {
    path: "product/:productId",
    element: <Details />,
  },
  {
    path: "/Cart",
    element: <ShoppingCart />
  }
] );

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render(
  <React.StrictMode>
    {/* <App /> */ }
    <RouterProvider router={ router } />
  </React.StrictMode>
);
