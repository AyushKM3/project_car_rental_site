import React, { useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { RiMenu3Fill, RiMenuLine } from "react-icons/ri";

const Nav = ({ theme, setTheme }) => {
  const [showMenu, setMenu] = useState(false);
  return (
    <nav className="shadow-xl mt-0 bg-white text-black  dark:bg-black dark:text-white">
      <div className="flex justify-between items-center md:p-2 p-1.5 ">
        <div>
          <h1 className="lg:text-3xl text-xl ml-2 font-bold text-amber-400">
            DriveON
          </h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center lg:gap-12 gap-6">
            <li className=" hover:text-amber-400 duration-400">
              <Link to="/" className="py-3 inline-block">
                Home
              </Link>
            </li>
            <li className=" hover:text-amber-400 duration-400">
              <Link to="/cars" className="py-3 inline-block">
                Cars
              </Link>
            </li>
            <li className=" hover:text-amber-400 duration-400">
              <Link to="/bookings" className="py-3 inline-block">
                Bookings
              </Link>
            </li>
            <li className=" hover:text-amber-400 duration-400">
              <Link to="/about" className="py-3 inline-block">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="mr-6 ml-8 flex items-center justify-center gap-6">
          <div>
            {theme === "dark" ? (
              <IoSunny
                onClick={() => setTheme("light")}
                className="md:text-2xl text-xl cursor-pointer"
              />
            ) : (
              <IoMoon
                onClick={() => setTheme("dark")}
                className="md:text-2xl text-xl cursor-pointer"
              />
            )}
          </div>
          <div>
            {showMenu ? (
              <RiMenu3Fill
                onClick={() => setMenu(!showMenu)}
                className=" md:text-2xl text-xl cursor-pointer"
              />
            ) : (
              <RiMenuLine
                onClick={() => setMenu(!showMenu)}
                className="md:text-2xl text-xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <Menu showMenu={showMenu} />
    </nav>
  );
};

export default Nav;
