import React, { useState } from "react";
import Details from "./info";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useShoppingCart } from "../context/ShopingCartContext";
import { ADD_TO_CART, useCartContext } from "../context/Shopingcontext";

export default function Product ( { product } )
{

  const {
    getproductsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeproduct,
  } = useShoppingCart();
  const [ quantity, setQuantity ] = useState( 0 )
  const cartCotext = useCartContext()
  console.log( cartCotext )
  return (
    <div className="product rounded-lg ">
      <div className="h-full flex-col justify-between flex max-w-lg bg-white text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700c product ">
        <Link to={ `/product/${ product.id }` }>
          <img
            className=" md:max-h-56 max-h-52 w-56 m-auto p-4 rounded-3xl "
            src={ product.image }
            alt=""
          />
        </Link>
        <div className="p-5">
          <div>
            <h5 className="mb-2 md:text-xl self-start font-bold tracking-tight text-gray-900 dark:text-white  md:h-28 h-10 text-xs">
              { product.title }
            </h5>
          </div>
          <div className="flex flex-col ">
            <p className="mb-3 text-[10px] md:text-[20px] text-green-700 font-bold dark:text-gray-400">
              { product.price }$
            </p>

            <div class="flex items-center md:pb-3 pb-1">
              <svg
                class="w-4 h-4 text-yellow-300 md:mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p class="ml-2 text-[10px] md:text-lg  font-bold text-gray-900 dark:text-white">
                { product.rating.rate }
              </p>
              <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <div class=" font-medium text-[7px] md:text-sm text-gray-900 underline hover:no-underline dark:text-white">
                { product.rating.count } reviews
              </div>
            </div>

            {/* //////////////////////////////////////////////////button ////////////////////////////////////////////////////////////*/ }
            <div className="mx-auto">
              { quantity === 0 ? (
                <button
                  onClick={ () =>
                  {
                    // increaseCartQuantity(product.id);
                    // console.log(product.quantity);
                    setQuantity( ( x ) => x + 1 )
                  } }
                  className=" self-center flex items-center px-3 py-2 text-[10px] md:text-lg font-medium text-center  bg-blue-gray-900 text-white rounded-lg hover:bg-light-blue-500 hover:text-blue-gray-900"
                >
                  Add To Cart
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              ) : (
                <div className="flex flex-col">
                  <div className="flex ">
                    <button
                      onClick={ () =>
                      {
                        // increaseCartQuantity(product.id);

                        cartCotext.productDispatch(

                          {
                            type: ADD_TO_CART,
                            payload: product
                          }
                        )
                      } }
                      className=" px-3 py-2 md:px-4 text-[10px] md:text-lg font-medium text-center  bg-blue-gray-900 text-white rounded-lg hover:bg-light-blue-500 hover:text-blue-gray-900"
                    >
                      +
                    </button>
                    <span className="text-[10px] md:text-lg font-medium text-center  text-black my-auto mx-8">
                      { quantity } in cart
                    </span>
                    <button
                      onClick={ () =>
                      {
                        // decreaseCartQuantity(product.id);
                        setQuantity( ( x ) => x - 1 )
                      } }
                      className=" px-3 py-2 md:px-4   text-[10px] md:text-lg font-medium text-center  bg-blue-gray-900 text-white rounded-lg hover:bg-light-blue-500 hover:text-blue-gray-900"
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={ () =>
                    {
                      // removeproduct(product.id);
                      setQuantity( ( x ) => 0 )
                    } }
                    className=" mt-2 justify-self-center px-4 py-1 rounded-md mx-auto  text-[10px] md:text-lg font-medium text-center  bg-red-600 hover:bg-red-900"
                  >
                    Remove
                  </button>
                </div>
              ) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
