import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-[#040404] pt-20 pb-36  md:px-48 items-center md:gap-0 gap-10 flex md:flex-row flex-col md:items-start justify-between  relative overflow-hidden">
      <div className="z-10 flex flex-col md:gap-8 gap-5 justify-between">
        <p className="md:text-3xl text-2xl text-center text-white font-semibold">
          Discover Style, shop, <br /> trending looks today!
        </p>
        <div className="flex justify-center">
          <form className="flex justify-between md:w-full w-[90%] md:p-[4px] p-[2px] md:border-2 border-[1px] border-gray-500 rounded-full">
            <input
              className="bg-transparent text-sm text-gray-500 focus:outline-none active:bg-transparent w-56  pl-5 pb-1"
              type="email"
              placeholder="Enter your email address"
            />
            <button
              className="rounded-[50%] py-1 px-2 bg-[#86bc3b] text-xl"
              type="submit"
            >
              <i class="ri-arrow-right-up-line"></i>
            </button>
          </form>
        </div>
        <div className="flex justify-center gap-2 text-xs font-semibold text-[#919191]">
          <Link className="px-3 py-[4px]   rounded-2xl bg-[#2C2C2C] " to={"/"}>
            Facebook
          </Link>
          <Link className="px-3 py-[4px] rounded-2xl bg-[#2C2C2C]" to={"/"}>
            Instagram
          </Link>
          <Link className="px-3 py-[4px] rounded-2xl bg-[#2C2C2C] " to={"/"}>
            Twitter
          </Link>
        </div>
      </div>
      <div className="z-10 md:text-left text-center flex flex-col gap-3 md:text-base text-lg text-white">
        <p className="uppercase text-[#CCF593]">Useful Links</p>
        <p>Home</p>
        <p>Our Products</p>
        <p>New Arrivals</p>
        <p>Collections</p>
        <p>About Us</p>
      </div>
      <div className="z-10 flex text-center flex-col gap-3 md:text-base text-lg text-white">
        <p className="uppercase text-[#CCF593]">Products</p>
        <p>Jackets</p>
        <p>Shirts</p>
        <p>Dresses</p>
        <p>Outwears</p>
        <p>Hates</p>
      </div>
      <div className="z-10 flex text-center flex-col gap-3 md:text-base text-lg text-white">
        <p className="uppercase text-[#CCF593]">Help</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>

      <p className="md:text-[308px] text-[150px] -rotate-90 md:rotate-0 font-bold text-[#222222a2] absolute md:left-0 md:-bottom-[150px] md:top-0 bottom-64 left-3 z-0">
        TrendHive
      </p>
    </div>
  );
}

export default Footer;
