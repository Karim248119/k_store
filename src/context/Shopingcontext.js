import React, { createContext, useEffect, useReducer, useContext, useState } from "react"
import { Reducer } from "./Reducer"

const initState = {
    product: localStorage.getItem( "products" ) ? JSON.parse( localStorage.getItem( "products" ) ) : [],
    favourites: localStorage.getItem( "favourite" ) ? JSON.parse( localStorage.getItem( "favourite" ) ) : []
};
export const GlobalContext = createContext()

export default function CartcontextProvider ( { children } )
{

    const [ state, dispatch ] = useReducer( Reducer, initState )
    useEffect( () =>
    {
        localStorage.setItem( "products", JSON.stringify( state.product ) )
        localStorage.setItem( "favourite", JSON.stringify( state.favourites ) )
    }, [ state ] )

    const getQuantity = ( id ) =>
    {
        return state.filter( item => item.id === id )?.length || 0
    }
    const getAllQuantity = state.product?.length || 0

    return (
        <GlobalContext.Provider value={ { product: state.product, favourites: state.favourites, productDispatch: dispatch, getQuantity, getAllQuantity } }>
            { children }
        </GlobalContext.Provider>
    )
}
export const useCartContext = () =>
{
    return useContext( GlobalContext )
}
