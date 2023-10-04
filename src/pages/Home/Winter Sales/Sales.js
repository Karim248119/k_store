
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import * as actions from "../.././../context/Actions"
import { useCartContext } from "../../../context/Shopingcontext";

export default function SalesCard ( { product } )
{


    const cartCotext = useCartContext()
    const storedFavourites = cartCotext.favourites.find( ( e ) => e.id === product.id )
    const storedProduct = cartCotext.product.find( ( e ) => e.id === product.id )
    return (
        <div className="   w-[200px] h-[250px] md:w-[400px] md:h-[500px]  mx-auto ">
            <div className="  h-full w-full flex-col flex  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

                <img
                    className=" md:max-h-56 h-2/5 w-[70%] mx-auto p-4 rounded-3xl object-fill"
                    src={ product.image }
                    alt=""
                />

                <div className="p-5 h-2/2 realtive">

                    <h5 className="mb-2 md:text-xl self-start font-bold tracking-tight text-gray-900 dark:text-white  md:h-28 text-[10px]">
                        { product.title }
                    </h5>


                    <div className=" flex gap-2 absolute md:bottom-16 bottom-10">
                        <p className="mb-3 text-[10px] md:text-[20px]  font-bold dark:text-gray-400 line-through">
                            { product.price }$
                        </p>
                        <p className="mb-3 text-[10px] md:text-[20px] text-red-700  font-bold dark:text-gray-400">
                            { product.price * 0.5 }$
                        </p>


                        {/* //////////////////////////////////////////////////button ////////////////////////////////////////////////////////////*/ }

                    </div>
                    <div className="flex justify-center gap-4 absolute md:bottom-7 bottom-4 left-1/2 -translate-x-1/2 text-blue-gray-900">
                        <button onClick={ () =>
                        {
                            // increaseCartQuantity(product.id);

                            cartCotext.productDispatch(

                                {
                                    type: actions.TOGGLE_FAVOURITE,
                                    payload: product
                                }
                            )
                        } }

                        > { storedFavourites ? <i class="fa-regular fa-solid fa-lg fa-heart blue"></i> : <i class="fa-regular fa-lg fa-heart"></i> }</button>
                        <button onClick={ () =>
                        {
                            // increaseCartQuantity(product.id);

                            cartCotext.productDispatch(

                                {
                                    type: actions.ADD_TO_CART,
                                    payload: product
                                }
                            )
                        } }

                        >{ storedProduct ? <i class="fa-solid fa-lg fa-cart-shopping blue"></i> : <i class="fa-solid fa-lg fa-cart-shopping"></i> }</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
