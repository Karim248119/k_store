import React from "react";
import ProductList from "./ProductList";
import StickyNavbar from "../components/Nav";
import { Footer } from "../components/Footer";

export default function Women() {
  return (
    <div>
      <StickyNavbar />
      <ProductList category="women's clothing" />
      <Footer />
    </div>
  );
}
