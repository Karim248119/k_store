// import { Input, Typography } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

import { Typography, IconButton, Input } from "@material-tailwind/react";
export function Search() {
  return (
    // <div className="md:w-[18rem] w-[10-rem]block mt-6">
    //   <Input type="seacrh" label="Search" />
    //   <Typography
    //     variant="small"
    //     color="gray"
    //     className="mt-2 flex items-center gap-1 font-normal"
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="currentColor"
    //       className="-mt-px h-4 w-4"
    //     ></svg>
    //   </Typography>
    // </div>
    <div className="flex flex-wrap items-center justify-between gap-y-4 w-[100px] md:w-auto md:mt-0 mt-5 mr-36">
      <div className="ml-auto flex gap-1 md:mr-4">
        <IconButton variant="text" color="blue-gray-900">
          <Cog6ToothIcon className="h-4 w-4 hidden md:block" />
        </IconButton>
        <IconButton variant="text" color="blue-gray-900">
          <BellIcon className="h-4 w-4 hidden md:block" />
        </IconButton>
      </div>
      <div className="relative flex w-full gap-2 text-blue-gray-900 md:w-max">
        <Input
          color="blue-gray-900"
          type="search"
          label="Type here..."
          className="pr-20 text-white "
          //   containerProps={{
          //     className: "min-w-[288px]",
          //   }}
        />
        <Button
          size="sm"
          className="!absolute md:right-1 md:left-auto left-40 top-1 rounded border-none"
        >
          <i class="fa-solid fa-magnifying-glass  text-blue-gray-900 "></i>
        </Button>
      </div>
    </div>
  );
}
