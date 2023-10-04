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
import CartcontextProvider from "./context/Shopingcontext";
import HomePage from "./pages/Home/HomePage";
import LovePage from "./pages/love/LovePage";

const router = createBrowserRouter( [
  {
    path: "/",
    element: <HomePage />,
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
  ,
  {
    path: "/love",
    element: <LovePage />
  }

] );

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render(

  <React.StrictMode>

    {/* <App /> */ }
    < CartcontextProvider >
      <RouterProvider router={ router } />
    </CartcontextProvider>
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
