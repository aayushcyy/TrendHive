import React from "react";

function Popup(url) {
  return (
    <div className="flex md:top-20 top-[75px] absolute z-30 md:right-36 right-1 md:text-sm text-[10px] font-semibold rounded-sm items-center bg-black md:w-[140px] p-1 text-white transition-opacity">
      <p className="text-black absolute md:-top-5 -top-4 text-lg md:right-[45%] right-5">
        <i class="ri-triangle-fill"></i>
      </p>
      <p>Added to Cart</p>
    </div>
  );
}

export default Popup;
