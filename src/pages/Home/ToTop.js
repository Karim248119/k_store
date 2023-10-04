import React, { useEffect, useState } from 'react'

export default function TopButton ()
{
    const [ backToTop, setBackToTop ] = useState( false )
    useEffect( () =>
    {
        window.addEventListener( "scroll", () =>
        {
            if ( window.scrollY > 800 )
            {
                setBackToTop( true )
            }
            else
            {
                setBackToTop( false )
            }
        } )
    }, [] )
    const scrollUp = () =>
    {
        window.scrollTo( {
            top: 0,
            behavior: 'smooth'
        } )
    }
    return (
        <div className=' hidden md:block'>
            { backToTop && <button onClick={ scrollUp } className='w-10 h-10 bg-blue-gray-900 rounded-full text-white fixed bottom-10 right-3'>
                <i class="fa-solid fa-angle-up"></i>
            </button> }</div>
    )
}
