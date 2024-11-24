import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiTicket } from "react-icons/gi";
import { PiBowlFoodFill } from "react-icons/pi";
import { RiGalleryFill } from "react-icons/ri";
import { BiSolidDrink } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { IoLogOut, IoFastFoodSharp } from "react-icons/io5";
import { MdDensityMedium } from "react-icons/md";
import { useAuth } from "../context/auth.context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-white pl-3 h-16 w-full shadow flex items-center justify-between fixed top-0 z-50 border-b">
        <div className="flex items-center space-x-3 w-60">
          <Link to="/" className="flex items-center">
            <img src="Logo.png" alt="logo" className="w-12 h-12" />
            <div className="flex flex-col">
              <h1 className="text-xl ml-2 sm:text-2xl font-bold">Hostal Y&E</h1>
              <span className="text-small ml-2 sm:text-small font-semibold">Tu oasis privado</span>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex justify-end items-center space-x-1 w-6/12">
          <div className="hidden lg:flex font-semibold text-lg pr-6">
            <ul className="flex items-center space-x-4">
              <li className="p-1 flex items-center gap-1 hover:text-blue-500 duration-200 cursor-pointer">
                <FaHome />
                <Link to="/">Home</Link>
              </li>
              <li className="p-1 flex items-center gap-1 hover:text-blue-500 duration-200 cursor-pointer">
                <GiTicket />
                <Link to="/">Oferts</Link>
              </li>
              <li className="p-1 flex items-center gap-1 hover:text-blue-500 duration-200 cursor-pointer">
                <FaBowlFood />
                <Link to="/">Gastronomics</Link>
              </li>
              <li className="p-1 flex items-center gap-1 hover:text-blue-500 duration-200 cursor-pointer">
                <BiSolidDrink />
                <Link to="/">Drinks</Link>
              </li>
              <li className="p-1 flex items-center gap-1 hover:text-blue-500 duration-200 cursor-pointer">
                <IoFastFoodSharp />
                <Link to="/">Snacks</Link>
              </li>
              <li className="p-1 flex items-center gap-1 hover:text-blue-500 duration-200 cursor-pointer">
                <PiBowlFoodFill />
                <Link to="/">Desserts</Link>
              </li>
              <li className="p-1 flex items-center gap-1 hover:text-blue-500 duration-200 cursor-pointer">
                <RiGalleryFill />
                <Link to="/">Gallery</Link>
              </li>
              <li className="p-1 flex items-center gap-1 hover:text-blue-500 duration-200 cursor-pointer">
                <GrGallery />
                <Link to="/">Events</Link>
              </li>
            </ul>
          </div>

          <div className="flex w-auto">
            <div className="hidden lg:flex font-semibold text-lg">
              <ul className="mx-1">
                <li className="sm:p-4 hover:text-blue-500 duration-200 cursor-pointer">
                  <div onClick={logout} className="flex gap-1 items-center">
                    <IoLogOut className="w-6 h-6" />
                    LogOut
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Boton Menu */}
        <div className="lg:hidden flex items-center">
          <ul className="mr-2">
            <li className="p-2 text-gray-900 rounded-lg outline-none hover:text-blue-500">
              <Link to="/shopCar">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
          <ul className="mr-2">
            <li className="p-2 text-gray-900 rounded-lg outline-none hover:text-blue-500">
              <MdDensityMedium onClick={toggleMenu} />
            </li>
          </ul>
        </div>
        {/* <!-- Mobile Menu --> */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-20">
            <nav className="flex flex-col items-center">
              <Link
                to="/"
                className="block p-2 text-gray-700 hover:text-blue-500"
              >
                Shop
              </Link>
              <Link
                to="/aboutUs"
                className="block p-2 text-gray-700 hover:text-blue-500"
              >
                About Us
              </Link>
              <Link
                to="/contactUs"
                className="block p-2 text-gray-700 hover:text-blue-500"
              >
                Contact Us
              </Link>
              <button
                onClick={logout}
                className="block p-2 text-gray-700 hover:text-blue-500"
              >
                Log Out
              </button>
            </nav>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};
export default Navbar;
