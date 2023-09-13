import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import "./details.css";
import StickyNavbar from "../components/Nav";

export default function Details() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <div>
      <div
        href="#"
        className="center  flex flex-col items-center bg-white md:border md:border-gray-200 md:rounded-lg md:shadow md:flex-row md:w-4xl md:dark:border-gray-700 md:dark:bg-gray-800 md:dark:hover:bg-gray-700 md:p-12 md:w-[1000px] w-full max-h-[600px]"
      >
        <img
          className="  md:rounded-t-lg w-52 max-h-96 md:h-auto md:w-80 md:rounded-none md:rounded-l-lg m-5 md:m-16"
          src={product.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2  md:text-2xl font-bold tracking-tight text-blue-950 dark:text-white">
            {product.title}
          </h5>
          <p className="mb-3 font-normal md:text-lg text-xs text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
