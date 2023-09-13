import { useCartContext } from "../context/Shopingcontext";

export default function ShoppingCart ()
{
  const cartContext = useCartContext()
  return <div>
    {/* <video width="640" height="360" autoPlay className=" absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
      <source src="../vid/clideo_editor_541b0260b44a4f3a96b341bbbd18230e.mp4" type="video/mp4" />

    </video> */}
    {/* {
      cartContext.product.map( ( e ) => ( <div key={ e.id }>{ e.image }</div> ) )
    } */}

    {/* <div className='gray w-full  md:min-h-[75vh]  '>

      { cartContext.Product.length > 0 ? ( <div className='grid md:grid-cols-5 grid-cols-3 gap-5 m-5'>
        { cartContext.Product.map( ( product ) => ( <div key={ product.id }> { product.image }</div> ) ) }
      </div> ) : <div className='center font-bold w-52 md:w-auto flex justify-center'><h1 className=' text-lg md:text-4xl'>No Products In Ypur Caert!</h1> </div> }
    </div> */}
    { console.log( cartContext.Product ) }
  </div>;
}
