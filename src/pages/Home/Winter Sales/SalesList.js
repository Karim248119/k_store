import React, { useEffect, useState } from "react";
import SalesCard from "./Sales";
export default function SalestList ( props )
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
            product.category === `${ props.category }` && product.price > 50 && (
                <SalesCard key={ product.id } product={ product } />
            )
        );
    } );
    return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-4 gap-10">
            { productData }
        </div>
    );
}
