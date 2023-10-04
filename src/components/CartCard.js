import React, { useEffect, useState } from 'react'
import { useCartContext } from '../context/Shopingcontext'
import * as actions from "../context/Actions";
import { Payment } from './Payment/Payment';
export default function CartCard ( { product } )
{
    const [ quantity, setQuantity ] = useState( 1 )
    const cartCotext = useCartContext()
    useEffect( () =>
    {
        localStorage.setItem( "num", JSON.stringify( quantity ) )
    }, [ quantity ] )
    const total = product.price * quantity
    const rounded = total.toFixed( 2 )

    return (
        <div className=' text-sm'>
            <div className=' grid md:grid-cols-12 grid-cols-10 p-5 md:gap-5  items-center md:border-t-2 border-t border-blue-gray-300 md:mb-5 gap-5 '>
                <div className=' md:col-span-2 col-span-3 place-items-center bg-white w-full h-full flex justify-center items-center p-3 rounded-xl'>
                    <img src={ product.image } width={ 100 }></img>
                </div>
                <div className=' col-span-3 text-start hidden md:block'>{ product.title }</div>
                <div className=' col-span-2   m-auto place-items-center -ml-2 md:ml-auto'>
                    <div className="flex ">
                        <button
                            onClick={ () =>
                            {
                                setQuantity( quantity + 1 )
                            } }
                            className=" self-start px-2 py-[2px] md:px-4 text-[7px] md:text-lg font-medium text-center  bg-blue-gray-900 text-white rounded-lg hover:bg-light-blue-500 hover:text-blue-gray-900"
                        >
                            +
                        </button>
                        <span className="text-[7px] md:text-lg font-medium text-center  text-black my-auto mx-1 md:mx-3">
                            { quantity }
                        </span>
                        <button
                            onClick={ () =>
                            {
                                if ( quantity > 0 )
                                {
                                    setQuantity( quantity - 1 )
                                }
                                if ( quantity === 1 )
                                {
                                    cartCotext.productDispatch(
                                        {
                                            type: actions.RMOVE_FROM_CART,
                                            payload: product
                                        }
                                    )
                                }

                            } }
                            className=" justify-self-end px-2 py-[2px] md:px-4 text-[7px] md:text-lg font-medium text-center  bg-blue-gray-900 text-white rounded-lg hover:bg-light-blue-500 hover:text-blue-gray-900"
                        >
                            -
                        </button>
                    </div>
                </div>
                <div className=' col-span-1 place-items-center md:text-base text-[7px] text-center'>{ product.price }$</div>
                <div className=' col-span-2 place-items-center md:text-base text-[7px] text-center'>{ rounded }$</div>
                <div className=' col-span-1 flex justify-center items-center'> <Payment price={ rounded } /></div>
                <button className='  text-[7px] md:text-sm col-span-1 place-items-center cursor-pointer text-red-500'
                    onClick={ () =>
                    {

                        cartCotext.productDispatch(

                            {
                                type: actions.RMOVE_FROM_CART,
                                payload: product
                            }
                        )
                    } }>
                    <i class="fa-regular fa-xl fa-circle-xmark"></i></button>

            </div>
        </div>
    )
}
