import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";
import { useSelector } from "react-redux";
export default function NavBar() {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex justify-evenly bg-black">
      <NavLink to="/">
        <div className="flex items-center">
          <img src={logo} className="w-20 h-15 mr-0" />
          <span className="ml-0 font-bold text-3xl text-white">
            ReduxShopApp
          </span>
        </div>
      </NavLink>

      <div className="flex items-center font-medium mr-3 ">
        <NavLink to="/">
          <p className=" font-bold text-xl text-white">Home</p>
        </NavLink>
        <NavLink to="/cart">
          <div className="flex relative">
            <FaShoppingCart className="ml-3 text-white " />
            {cart.length > 0 && (
              <span className="absolute flex justify-center items-center left-5 bottom-2 bg-[green] w-4 h-4 rounded-full text-white animate-bounce ">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
}
