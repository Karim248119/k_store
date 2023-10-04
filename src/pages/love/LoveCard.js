import * as actions from "../../context/Actions";
import { useCartContext } from "../../context/Shopingcontext";

export default function LoveCard ( { product } )
{


    const cartCotext = useCartContext()

    return (
        <div className="product rounded-lg md:mt-14 relative">
            <div className="h-full flex-col justify-between flex max-w-lg bg-white text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700c product ">

                <img
                    className=" md:max-h-56 max-h-52 w-56 m-auto p-4 rounded-3xl "
                    src={ product.image }
                    alt=""
                />

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

                            </p>

                            <div class=" text-[7px] md:text-xl  font-bold text-gray-900 no-underline dark:text-white">
                                { product.rating.rate }
                            </div>
                            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                            <div class=" font-medium text-[7px] md:text-sm text-gray-900 underline hover:no-underline dark:text-white">
                                { product.rating.count } reviews
                            </div>
                        </div>

                        {/* //////////////////////////////////////////////////button ////////////////////////////////////////////////////////////*/ }
                        <div className="mx-auto">
                            <button
                                onClick={ () =>
                                {
                                    // increaseCartQuantity(product.id);

                                    cartCotext.productDispatch(

                                        {
                                            type: actions.ADD_TO_CART,
                                            payload: product
                                        }
                                    )
                                } }
                                className=" self-center flex items-center px-3 py-2 text-[10px] md:text-lg font-medium text-center  bg-blue-gray-900 text-white rounded-lg hover:bg-light-blue-500 hover:text-blue-gray-900"
                            >
                                Add To Cart
                                <i class="fa-solid  fa-cart-shopping ml-2"></i>
                            </button>
                            <button
                                onClick={ () =>
                                {
                                    // increaseCartQuantity(product.id);

                                    cartCotext.productDispatch(

                                        {
                                            type: actions.RMOVE_FROM_FAVOURITE,
                                            payload: product
                                        }
                                    )
                                } }
                                className=" absolute  md:top-4 md:right-4 right-1 top-1 text-blue-gray-900 hover:text-red-500 md:text-lg text-xs"><i class="fa-solid  fa-circle-xmark"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
