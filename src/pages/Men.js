import React from "react";
import ProductList from "./ProductList";
import StickyNavbar from "../components/Nav";
import { Footer } from "../components/Footer";

export default function Men() {
  return (
    <div>
      <StickyNavbar />
      <ProductList category="men's clothing" />
      <Footer />
    </div>
  );
}
