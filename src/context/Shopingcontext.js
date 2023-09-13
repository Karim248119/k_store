import React, { createContext, useEffect, useReducer, useContext } from "react"

const initState = localStorage.getItem( "product" ) ? JSON.parse( localStorage.getItem( "product" ) ) : []

export const GlobalContext = createContext()
export const ADD_TO_CART = "ADD_TO_CART"
const reducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case ADD_TO_CART: {
            return [ ...state, action.payload ]
        }
        default: {
            return state
        }
    }
}
export default function CartcontextProvider ( { Children } )
{
    const [ state, dispatch ] = useReducer( reducer, initState )
    useEffect( () =>
    {
        localStorage.setItem( "product", JSON.stringify( state ) )
    } )
    console.log( "initial:", initState )
    return (
        <GlobalContext.Provider value={ { Product: state, productDispatch: dispatch } }>
            { Children }
        </GlobalContext.Provider>
    )
}
export const useCartContext = () =>
{
    return useContext( GlobalContext )
}
