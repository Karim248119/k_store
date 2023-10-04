import React from 'react'
import StickyNavbar from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { Button } from 'flowbite-react'
import Timer from './Timer'
import { WinterSales } from './Winter Sales/WinterSales'
import Soon from './Soon'
import TopButton from './ToTop'
import { Link } from 'react-router-dom'
import Adv from './Adv'

export default function HomePage ()
{
    return (
        <div>
            <StickyNavbar />
            <div>
                <div className=''>

                    <div className=' md:mt-28 md:w-[70%] mx-auto  -z-10'>
                        <div className=' -z-10 grid grid-cols-5 md:grid-cols-3 capitalize md:h-[80vh] h-[50vh] bg-blue-gray-50 relative rounded-tr-full  text-blue-gray-700 md:pt-4 pl-4'>
                            <div className=' flex flex-col md:ml-24 mt-20 md:mt-32 col-span-3 md:col-span-2'>
                                <h1 className=' md:w-[80%] text-lg font-extrabold md:mb-14 mb-4 md:text-5xl'>fashon for  all, <div className='md:p-2 p-0'></div>every day</h1>
                                <p className='md:w-[70%] md:mb-14 text-[10px] md:text-base mb-4'>discover your personal style and make a stastment with every outfit. shop with us to elevate your wardrobe and bring your fashon game to the next level.</p>

                                <Link to="/men">
                                    <button className=' md:w-32 w-14 text-[8px] md:text-base rounded-full  bg-blue-gray-900 text-white hover:bg-light-blue-500 hover:text-blue-gray-900 capitalize mr-10 relative p-2'> shop now</button>

                                </Link>
                            </div>
                            <div className=' md:flex justify-center md:w-auto md:h-auto mt-8 col-span-2 md:col-span-1 '>
                                <img src='../pics/w-m-removebg-preview.png' className=' md:h-[500px] h-52 absolute bottom-0 hidden md:block' ></img>
                                <img src='../pics/full_body-removebg-preview.png ' className=' md:hidden h-60'></img>
                            </div>
                        </div>
                        <p className=' hidden capitalize text-[8px] md:text-xl text-center md:mt-5 mt-1 md:px-20 px-3'>browse our carefully curated collection of high qualitiy clothing, accessories and electronic devices featuring the latest trends and styles</p>

                    </div>
                </div>
                <Adv />
                <WinterSales />
                <Soon />
            </div>
            <Footer />
            <TopButton />
        </div>
    )
}
