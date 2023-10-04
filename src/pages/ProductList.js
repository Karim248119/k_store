import React, { useEffect, useState } from "react";
import Product from "./Product";
export default function ProductList ( props )
{
  const api_url = "https://fakestoreapi.com/products";
  const [ products, setProducts ] = useState( [] );
  useEffect( () =>
  {
    fetch( api_url ).then( ( res ) => res.json() ).then( ( data ) => setProducts( data ) );
  }, [] );
  const productData = products.map( ( product ) =>
  {
    return (
      product.category === `${ props.category }` && (
        <Product key={ product.id } product={ product } />
      )
    );
  } );
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-4 gap-10">
      { productData }
    </div>
  );
}
