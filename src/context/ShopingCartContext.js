import React, { createContext, useContext, useState } from "react";

const ShopingCartContext = createContext( {} );

export default function ShopingCartProvider ( { Children } )
{
    const [ cartproducts, setCartproducts ] = useState( [] );
    const getproductsQuantity = ( id ) =>
    {
        return cartproducts.find( ( product ) => product.id === id )?.quantity || 0;
    };
    const increaseCartQuantity = ( id ) =>
    {
        setCartproducts( ( currentproducts ) =>
        {
            if ( currentproducts.find( ( product ) => product.id === id ) == null )
            {
                return [ ...currentproducts, { id, quantity: 1 } ];
            } else
            {
                return currentproducts.map( ( product ) =>
                {
                    if ( product.id === id )
                    {
                        return { ...product, quantity: product.quantity + 1 };
                    } else
                    {
                        return product;
                    }
                } );
            }
        } );
    };
    const decreaseCartQuantity = ( id ) =>
    {
        setCartproducts( ( currentproducts ) =>
        {
            if ( currentproducts.find( ( product ) => product.id === id ) == null )
            {
                return currentproducts.filter( ( product ) => product.id !== id );
            } else
            {
                return currentproducts.map( ( product ) =>
                {
                    if ( product.id === id )
                    {
                        return { ...product, quantity: product.quantity - 1 };
                    } else
                    {
                        return product;
                    }
                } );
            }
        } );
    };

    const removeproduct = ( id ) =>
    {
        setCartproducts( ( currentproducts ) =>
            currentproducts.filter( ( product ) => product.id !== id )
        );
    };

    return (
        <ShopingCartContext.Provider
            value={ {
                cartproducts,
                getproductsQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeproduct,
            } }
        >
            { Children }
        </ShopingCartContext.Provider>
    );
}
export const useShoppingCart = () =>
{
    return useContext( ShopingCartContext );
};
