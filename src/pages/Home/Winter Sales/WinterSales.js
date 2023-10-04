import { Carousel } from "@material-tailwind/react";
import ProductList from "../../ProductList";
import SalestList from "./SalesList";
import { useEffect, useState } from "react";
import SalesCard from "./Sales";

export function WinterSales ( props )
{
    const [ clicked, setClicked ] = useState( false )

    const api_url = "https://fakestoreapi.com/products";
    const [ products, setProducts ] = useState( [] );
    useEffect( () =>
    {
        fetch( api_url ).then( ( res ) => res.json() ).then( ( data ) => setProducts( data ) );
    }, [] );
    const productData = products.map( ( product ) =>
    {
        return (
            product.price > 50 && (
                <SalesCard key={ product.id } product={ product } />
            )
        );
    } );
    return (
        <div className="mb-5 flex flex-col md:flex-row-reverse justify-around  md:m-14 md:mb-14 pt-6 md:mr-32" >
            <h1 className="  capitalize text-lg p-5 text-center font-bold md:text-7xl text-blue-gray-700 md:  md:w-60 h-ful md:hidden"> winter sales 2023 <i class="fa-solid fa-cart-arrow-down mr-2"></i></h1>             <div className="hidden md:block">
                <h1 className="mt-5 capitalize text-lg p-5 text-center font-bold md:text-7xl text-blue-gray-700 md:   h-ful">winter sales</h1>
                <h1 className="capitalize text-lg p-5 text-center font-bold md:text-8xl text-blue-gray-700 md:   h-ful pb-10"> 2023 </h1>
                <h1 className="capitalize text-lg p-5 text-center font-bold md:text-7xl text-blue-gray-700 md:  h-ful pb-10"><i class="fa-solid fa-cart-arrow-down mr-2"></i></h1>

            </div>


            <div className=" flex justify-center w-full md:w-auto ">
                <Carousel
                    color="teal"
                    onClick={ () => { setClicked( !clicked ) } }
                    className="rounded w-[600px] bg-deep-orange-90 relative"
                    autoplay={ !clicked }
                    autoplayDelay={ 2000 }
                    loop={ true }
                    navigation={ ( { setActiveIndex, activeIndex, length } ) => (
                        <div className=" w-full flex justify-center items-center  ">
                            { new Array( length ).fill( "" ).map( ( _, i ) => (
                                <span
                                    key={ i }
                                    className={ `block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${ activeIndex === i ? "w-8 bg-white" : "w-4"
                                        }` }
                                    onClick={ () => setActiveIndex( i ) }
                                />
                            ) ) }
                            <div className=" absolute right-6 md:text-3xl text-sm -z-10 text-blue-gray-700">
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                            <div className=" absolute left-6 md:text-3xl text-sm -z-10 text-blue-gray-700">
                                <i class="fa-solid fa-angle-left"></i>
                            </div>
                        </div>
                    ) }
                >

                    { productData }
                    { productData } { productData } { productData } { productData }

                </Carousel>

            </div>
        </div>

    );
}