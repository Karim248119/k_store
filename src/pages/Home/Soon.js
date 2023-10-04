import React from 'react'
import Timer from './Timer'

export default function Soon ()
{
    return (
        <div className=' grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full md:p-14 p-3 bg-blue-gray-50 h-[100vh] md:gap-6'>
            <div className=' h-full'>
                <div className=' h-1/3  flex justify-between px-8 items-center capitalize'>
                    <div>
                        <h1 className=' mb-1 md:text-3xl font-extrabold'>collaporation x</h1>
                        <h1 className='  md:text-3xl font-extrabold text-blue-gray-700 md:mb-5 mb-2'>Tom Ford</h1>
                        <p className='md:text-sm text-[7px]'>Elevate your style with our exclusive  <br></br>collaporation with a top designer </p>
                    </div>
                    <img className=' rounded-full md:h-[150px] h-[80px]' src='https://fashionista.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3NTczODE5MjI3OTczMzEy/tom-ford-announces-new-ceo-creative-director-estee-lauder-buyout.jpg'></img>
                </div>
                <div className='h-2/3 grid grid-cols-2 '>
                    <div className=' relative p-4'>
                        <img className=' rounded-3xl ' src='../../pics/men fasion.jpg'></img>
                        <div className=' opacity-90 blur-[2px] text-center md:w-52 md:h-52 w-24 h-24 flex justify-center items-center  absolute rounded-full bg-blue-gray-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        </div>
                        <span className='-rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-gray-400 text-2xl md:text-5xl font-bold '>Soon!</span>
                    </div >
                    <div className=' relative p-4'>
                        <img className='rounded-3xl ' src='../../pics/woman fasion.jpg'></img>
                        <div className=' opacity-90 blur-[2px] text-center md:w-52 md:h-52 w-24 h-24 flex justify-center items-center  absolute rounded-full bg-blue-gray-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        </div>
                        <span className='-rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-gray-400 text-2xl md:text-5xl font-bold '>Soon!</span>
                    </div>


                </div>
            </div>
            <div className=' h-full bg-img rounded-3xl md:mt-8 relative md:px-0 px-4'>
                <div className=' h-full w-full bg-black opacity-50 rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

                </div>
                <div className=' text-white z-20 absolute md:top-10 md:left-10 top-5 left-5 md:text-5xl text-lg font-bold'>
                    <p className=' md:mb-7'>Get Exclusive In</p>
                    <p className='md:mb-20 mb-10'> Sunday, 10 January 2024</p>
                    <p className=' text-center md:text-xl text-xs text-gray-400'> Countdown</p>

                </div>
                <div className='absolute md:right-14 md:bottom-24 right-5 bottom-12'>
                    <Timer />
                </div>
                <button className=' text-[7px] md:text-sm tracking-wide uppercase md:py-3 md:px-6 py-1 px-2 bg-gray-400 absolute md:bottom-16 md:left-10 bottom-8 left-5 rounded-full text-blue-gray-700 hover:bg-blue-gray-700 hover:text-gray-400'>Register</button>
            </div>

        </div>
    )
}
