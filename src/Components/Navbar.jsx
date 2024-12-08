import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full md:px-20 px-5 py-2 flex items-center justify-between border-b-[1px] border-gray-200">
      <div className="font-bold md:text-2xl text-xl">
        <Link to={"/"}>TrendHive</Link>
      </div>
      <div className="gap-20 md:flex hidden  font-semibold text-base">
        <Link to={"/"}>Products</Link>
        <Link to={"/about"}>About Us</Link>
      </div>
      <div className="flex items-center gap-10">
        <Link to={"/cart"} className="text-2xl font-bold pt-[5px]">
          <ion-icon name="cart-outline"></ion-icon>
        </Link>
        <button className="px-5 hidden md:flex pt-[3px] pb-[5px] border-2 border-black bg-[#CCF493] rounded-3xl text-center">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
