import React from 'react'

export default function Adv ()
{
    return (
        <div className=' md:my-10 text-blue-gray-300 w-full h-[35vh] md:h-[25vh] p-5 md:px-36 grid md:grid-rows-1 md:grid-cols-4 grid-cols-2 grid-rows-2 10px gap-5'>
            <div className=' h-full flex-col md:flex-row text-center w-full flex justify-center items-center md:text-3xl gap-2 border-2 border-blue-gray-300 bg-white '>
                <i class="fa-solid fa-gift"></i>
                <p className=' md:w-[70%] w-[65%]  text-[8px] md:text-lg uppercase 10px '>customer loyality Programs</p>
            </div>
            <div className=' h-full flex-col md:flex-row text-center w-full flex justify-center items-center md:text-3xl gap-2 border-2 border-blue-gray-300  bg-white'>
                <i class="fa-solid fa-truck-fast"></i>
                <p className=' md:w-[65%] w-[60%]  text-[8px] md:text-lg uppercase 10px '>world wide shipping</p>
            </div>
            <div className=' h-full flex-col md:flex-row text-center w-full flex justify-center items-center md:text-3xl gap-2 border-2 border-blue-gray-300 bg-white '>
                <i class="fa-regular fa-clock"></i>
                <p className=' md:w-[70%] w-[65%]  text-[8px] md:text-lg uppercase 10px '>24/7 technical support</p>
            </div>
            <div className=' h-full flex-col md:flex-row text-center w-full flex justify-center items-center md:text-3xl gap-2 border-2 border-blue-gray-300 bg-white '>
                <i class="fa-solid fa-rotate-left"></i>
                <p className=' md:w-[70%] w-[65%]  text-[8px] md:text-lg uppercase 10px '>return and exchange</p>
            </div>
        </div>
    )
}
