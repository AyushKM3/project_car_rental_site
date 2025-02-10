import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Menu = ({ showMenu }) => {
  return (
    <div
      className={` fixed z-50 top-0 ${
        showMenu ? "left-0" : "-left-full"
      }  bg-slate-200 text-black dark:bg-[#0d0a06] dark:text-white w-[75%] h-screen md:hidden flex  flex-col px-10 py-16 transition-all duration-500`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-4">
          <FaUserCircle className="w-[50px] h-[50px]" />
          <div className="text-lg font-bold">
            <h1>Hello,</h1>
            <h1>Ayush Mishra</h1>
          </div>
        </div>
        <nav>
          <ul className="space-y-4 mt-10 font-bold text-2xl">
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
        </nav>
      </div>
    </div>
  );
};

export default Menu;
