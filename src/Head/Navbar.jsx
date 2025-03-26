import React from "react";
import logo from "../assets/logo.png";
import { BsCoin } from "react-icons/bs";

const Navbar = ({coin}) => {
  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt="" />
      <div className="hidden sm:flex items-center justify-end gap-8 font-medium text-[#131313B3] text-base ">
        <a href="">Home</a><a href="">Fixture</a><a href="">Teams</a><a href="">Schedules</a>
      </div>
      <div>
          <div className="flex items-center gap-2 px-6 py-4 border-1 border-gray-100 rounded-lg">
            <p>{coin}</p>
            <span>Coin</span>
            <BsCoin className="text-yellow-400 bg-amber-700 rounded-[50%] text-xl" />
          </div>
        </div>
    </div>
  );
};

export default Navbar;
