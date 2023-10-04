// import { Input, Typography } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

import { Typography, IconButton, Input } from "@material-tailwind/react";
export function Search ()
{
  return (
    <div className=" h-10 w-80 rounded-full md:flex justify-between mr-32 ml-10 shadow hidden ">
      <input className="p-5 focus:outline-none" type="search" placeholder=" Looking For Something?"></input>
      <button className=" bg-blue-gray-900 text-gray-300 rounded-r-full h-full w-10"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  );
}
