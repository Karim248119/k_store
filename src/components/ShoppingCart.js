import { useCartContext } from "../context/Shopingcontext";
import CartCard from "./CartCard";
import { Footer } from "./Footer";
import StickyNavbar from "./Nav";

export default function ShoppingCart ()
{
  const cartContext = useCartContext()
  return <div className="">
    <div className='gray w-full  min-h-[90vh]  '>
      <StickyNavbar />
      { cartContext.product.length > 0 ? (
        <div className=" text-center md:w-[60%] w-[95%] bg-gray-300 m-auto rounded-xl table-shadow md:mt-32">
          <div className=" grid md:grid-cols-12 grid-cols-10 capitalize p-5 gap-5 bg-blue-gray-900 text-white rounded-t-xl md:text-lg text-[10px]">
            <div className=" col-span-3 md:col-span-5 ">product</div>
            <div className=" col-span-2">quantity</div>
            <div className=" col-span-1 text-center">price</div>
            <div className=" col-span-2  text-center">total</div>
            <div className=" col-span-1 text-center ">pay</div>

          </div>
          <div classNa='grid md:grid-cols-5 grid-cols-3 gap-5 m-5'>
            { cartContext.product.map( ( product ) => (


              <CartCard key={ product.id } product={ product } />
            ) ) }
          </div>

        </div> ) : <div className='center font-bold w-52 md:w-auto flex justify-center'><h1 className=' text-lg md:text-4xl text-center'>No Products In Your Cart!</h1> </div> }
    </div>
    <div className=" mt-8" >
      <Footer />
    </div>

  </div>;
}
