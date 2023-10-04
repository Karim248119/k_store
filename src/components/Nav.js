import React from "react";
import
{
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Badge,
} from "@material-tailwind/react";
// import { MultiLevelSidebar } from "./SideBar";
import { Link, NavLink } from "react-router-dom";
import { Search } from "./Search";
import { useCartContext } from "../context/Shopingcontext";

function StickyNavbar ()
{
  const [ openNav, setOpenNav ] = React.useState( false );

  React.useEffect( () =>
  {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav( false )
    );
  }, [] );

  const navList = (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 nav " >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal self-center"
      >
        <NavLink to="/" className="flex items-center p-2">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal self-center"
      >
        <NavLink to="/Men" className="flex items-center p-2">
          Men
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal self-center"
      >
        <NavLink to="/Women" className="flex items-center p-2">
          Women
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal self-center"
      >
        <NavLink to="/Accessories" className="flex items-center p-2">
          Accessories
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal self-center"
      >
        <NavLink to="/Electronics" className="flex items-center p-2">
          Electronics
        </NavLink>
      </Typography>
    </ul>
  );
  const cartCotext = useCartContext()
  return (
    <div className="  max-h-[110px] w-full mb-8  NAV  ">
      <Navbar blurred={ false } shadow={ false } className=" sticky top-0 z-10 h-max max-w-full rounded-none px-0 border-none lg:px-8 lg:py  md:bg-white bg-blue-gray-800 text-white pt-10 grid">

        <img
          alt="logo"
          src="../pics/kstore.png"
          className=" max-w-32 md:max-h-14 max-h-10 p-2 mx-auto md:block hidden mt-5"
        ></img>
        <div className="flex items-center justify-between text-blue-gray-800">
          <img
            alt="logo"
            src="../pics/kstore.png"
            className=" max-w-32 md:max-h-14 max-h-10 p-2 md:pl-10 md:hidden"
          ></img>
          {/* <div className=" border-b-2 border-blue-gray-900 hidden">
            <input type="search" placeholder="Looking For Some Thing?" className=" w-52"></input>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div> */}
          <div className=" w-full flex items-center gap-4 md:mx-auto md:pt-10 md:justify-between ">
            <Search />
            <div className=" w-[100%] hidden lg:block bg-blue-gray-60">{ navList }</div>
            <div className=" flex items-center justify-center md:mr-10 gap-4  justify-self-start md:relative  absolute right-6">
              <div className="hidden md:block">
                <Link to="/Cart" className="  hidden border-blue-gray-900 border-2 text-blue-gray-900 rounded-full  hover:bg-blue-gray-900  hover:text-blue-gray-500">
                  <i class="fa-solid fa-xl fa-cart-shopping"></i>
                  <span className=" absolute flex justify-center items-center w-5 h-5 text-white -right-2 -bottom-2 bg-red-500 rounded-full  text-[8px]">{ cartCotext.getAllQuantity }</span>
                </Link>

              </div>

              <Link to="/love" className="md:ml-0 -mr-5 md:mr-2 md:text-2xl relative text-blue-gray-900 rounded-full  hover:text-blue-600">
                <i class="fa-solid fa-lg fa-heart"></i>
              </Link>
              <Link to="/Cart" className=" mr-2 md:mr-6 relative md:text-2xl text-blue-gray-900 rounded-full p-3  hover:text-blue-600">
                <i class="fa-solid fa-lg fa-cart-shopping"></i>
                <span className=" absolute flex justify-center items-center w-4 h-4 md:text-sm md:bottom-[70%] md:bg-white  text-blue-gray-900 font-bold  rounded-full  text-[8px] right-[30%] bottom-[60%] ">{ cartCotext.getAllQuantity }</span>
              </Link>
            </div>


            <IconButton
              variant="text"
              className="   ml-auto h-6 w-6 text-inherit hover:bg-transparent text-blue-gray-900 focus:bg-transparent active:bg-transparent lg:hidden absolute right-3"
              ripple={ false }
              onClick={ () => setOpenNav( !openNav ) }
            >
              { openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6  "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={ 2 }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={ 2 }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) }
            </IconButton>
          </div>
        </div>
        <MobileNav open={ openNav }>
          { navList }
          <div className="ml-44 mt-3 hidden">
            <Badge content="0" placement="bottom-end ">
              <Link to="/Cart" className=" mx-auto border-blue-gray-900 border-2  text-blue-gray-900 rounded-full p-3 hover:bg-blue-gray-900  hover:text-blue-gray-500">
                <i class="fa-solid fa-lg fa-cart-shopping"></i>
              </Link>
            </Badge>
          </div>
        </MobileNav>
      </Navbar>

      <div className="mx-auto max-w-screen-md py-12">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-2"
        ></Typography>
      </div>
    </div>
  );
}
export default StickyNavbar;
