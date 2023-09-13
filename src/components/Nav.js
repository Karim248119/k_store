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
import { Search } from "./Secrch";

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
    <ul className=" mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 nav">
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
          Men Clothes
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal self-center"
      >
        <NavLink to="/Women" className="flex items-center p-2">
          Women Clothes
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

  return (
    <div className="  max-h-[110px] w-full mb-8  NAV  ">
      <Navbar className=" sticky top-0 z-10 h-max max-w-full rounded-none px-0 border-none lg:px-8 lg:py bg-blue-gray-800 text-white pt-10 grid">
        <div className="flex items-center justify-between text-blue-gray-800">
          <Typography as="a" href="#" className=" cursor-pointer  font-medium">
            <img
              src="../pics/kstore.png"
              className=" max-w-32 md:max-h-14 max-h-10 p-2 md:pl-10"
            ></img>
          </Typography>
          <Search />

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block ">{ navList }</div>
            <div className="hidden md:block">
              <Badge content="0" placement="bottom-end">
                <Link to="/Cart" className=" border-blue-gray-900 border-2  text-blue-gray-900 rounded-full p-3 hover:bg-blue-gray-900  hover:text-blue-gray-500">
                  <i class="fa-solid fa-xl fa-cart-shopping"></i>
                </Link>
              </Badge>
            </div>

            <IconButton
              variant="text"
              className="  ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={ false }
              onClick={ () => setOpenNav( !openNav ) }
            >
              { openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 -ml-10 "
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
                  className="h-6 w-6 -ml-10"
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
          <div className="ml-44 mt-3">
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
