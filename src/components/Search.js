import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { FaSearch } from "react-icons/fa";
import react from "@heroicons/react";
export function NavbarWithSearch() {
  return (
    <Navbar className="mx-auto  px-4 py-3 bg-blue-950 w-full p-6">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          <img
            src="../pics/k-store-low-resolution-logo-color-on-transparent-background.png"
            className=" w-34 h-12 p-2 pl-10"
          ></img>
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="blue-gray">
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="blue-gray">
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex justify-end items-center w-full gap-2 md:w-max ">
          <Input
            placeholder="Search her.."
            type="search"
            className="pr-20 bg-blue-950 border-zinc-100 border-2 rounded-lg w-full -ml-30 p-6 "
            containerProps={{
              className: "md:min-w-[500px]  ",
            }}
          />
          {/* <Input
            type="search"
            className="pr-20 bg-blue-950 border-zinc-100 border-2 rounded-lg w-full -ml-30 p-6 md:w-full "
            placeholder="type her"
          ></Input> */}
          <Button size="sm" className="!absolute mr-16 mt-2  text-white">
            <FaSearch></FaSearch>
          </Button>
          <div className=" flex h-16 justify-center iten-center flex-col">
            <div className=" justify-self-center">0</div>
            <button>
              <i className="fa-solid fa-cart-shopping mr-5 ml-5"></i>
            </button>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
