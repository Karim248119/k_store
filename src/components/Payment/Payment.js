import React from "react";
import
{
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import CheckoutForm from "./PaymentCard";

export function Payment ( { price } )
{
    const [ open, setOpen ] = React.useState( false );

    const handleOpen = () => setOpen( !open );

    return (
        <div className=" ">
            <button onClick={ handleOpen } className=" text-center px-2 py-[2px] md:px-3 md:py-2 text-[7px] md:text-sm font-medium   bg-blue-gray-900 text-white rounded-lg hover:bg-light-blue-500 hover:text-blue-gray-900">
                <i class="fa-solid fa-lg fa-money-check-dollar"></i>
            </button>
            <Dialog open={ open } handler={ handleOpen } size="xs" className=" -mx-10 flex justify-center items-center border-none blur-0 rounded-full">
                <CheckoutForm price={ price } />
            </Dialog>
        </div>
    );
}