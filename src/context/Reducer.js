import { useState } from "react"
import * as actions from "./Actions"
import { useCartContext } from "./Shopingcontext"

export const Reducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case actions.ADD_TO_CART: {
            if ( state.product.find( ( product ) => product.id === action.payload.id ) )
            {
                return state
            }
            else
                return {
                    ...state,
                    product: [ action.payload, ...state.product ]
                }
        }
        case actions.RMOVE_FROM_CART: {
            return {
                ...state,
                product: state.product.filter( ( product ) => product.id !== action.payload.id )
            }
        }
        case actions.TOGGLE_FAVOURITE: {
            if ( state.favourites.find( ( product ) => product.id === action.payload.id ) )
            {
                return {
                    ...state,
                    favourites: state.favourites.filter( ( product ) => product.id !== action.payload.id )
                }
            }
            else
                return {
                    ...state,
                    favourites: [ action.payload, ...state.favourites ]
                }
        }
        case actions.RMOVE_FROM_FAVOURITE: {
            return {
                ...state,
                favourites: state.favourites.filter( ( product ) => product.id !== action.payload.id )
            }
        }
        default: {
            return state
        }
    }
}