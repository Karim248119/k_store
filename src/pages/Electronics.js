import React from "react";
import ProductList from "./ProductList";
import StickyNavbar from "../components/Nav";
import { Footer } from "../components/Footer";

export default function Electronics() {
  return (
    <div>
      <StickyNavbar />
      <ProductList category="electronics" />
      <Footer />
    </div>
  );
}
