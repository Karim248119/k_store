import React from "react";
import ProductList from "./ProductList";
import StickyNavbar from "../components/Nav";
import { Footer } from "../components/Footer";

export default function Accessories() {
  return (
    <div>
      <StickyNavbar />
      <ProductList category="jewelery" />
      <Footer />
    </div>
  );
}
