import React from 'react'
import { useCartContext } from '../../context/Shopingcontext';
import { Footer } from '../../components/Footer';
import StickyNavbar from '../../components/Nav';
import LoveCard from './LoveCard';

export default function LovePage ()
{

    const cartContext = useCartContext()
    return <div className="">
        <div className='gray w-full  min-h-[90vh]  '>
            <StickyNavbar />
            { cartContext.favourites.length > 0 ? (
                <div className=" md:mt-32">

                    <div className="p-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                        { cartContext.favourites.map( ( product ) => (


                            <LoveCard key={ product.id } product={ product } />
                        ) ) }
                    </div>

                </div> ) : <div className='center font-bold w-52 md:w-auto flex justify-center'><h1 className=' text-lg md:text-4xl capitalize'>No favourite products!</h1> </div> }
        </div>
        <div className=" mt-8" >
            <Footer />
        </div>

    </div>;

}
