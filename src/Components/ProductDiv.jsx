import React, { useState, memo, useCallback } from "react";
import useProducts from "../Store/Store";
import Popup from "./Popup";

const ProductDiv = memo(({ imgSrc, title, price }) => {
  const { addToCart } = useProducts();
  const [showPopup, setShowPopup] = useState(false);
  const [cartActive, setCartActive] = useState(true);

  const cartHandler = useCallback(() => {
    setCartActive(false);
    addToCart({ title, url: imgSrc, price });
    setShowPopup(true);
    const popupTime = setTimeout(() => {
      setShowPopup(false);
    }, 1500);
  }, [imgSrc, title, price, addToCart]);
  return (
    <>
      {showPopup && <Popup url={imgSrc} />}
      <div className="text-black bg-[#F3F3F3] overflow-hidden flex justify-between flex-col rounded-lg md:py-2 py-1 md:px-2 px-1 md:w-[250px] w-[180px] md:h-[400px] h-[304px] relative">
        {cartActive && (
          <button
            className="absolute z-20 right-2 bg-white transition hover:bg-[#CCF493] hover:scale-125 flex items-center px-[6px] py-[6px] text-lg rounded-[50%]"
            onClick={cartHandler}
          >
            <ion-icon name="cart-outline"></ion-icon>
          </button>
        )}
        {!cartActive && (
          <button className="absolute z-20 right-2 bg-[#CCF493] transition flex items-center px-[6px] py-[1px] text-lg rounded-[50%] cursor-none">
            <i class="ri-check-fill"></i>
          </button>
        )}
        <div className="rounded-lg overflow-hidden md:w-[234px] w-[172px] md:h-[300px] h-[290px] mb-2 relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={imgSrc}
            alt=""
          />
        </div>
        <div className="w-full md:h-14 h-12">
          <p className="mb-3 md:text-[18px] text-[15px] leading-6 font-semibold">
            {title}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600 font-semibold md:text-[18px] text-[15px]">
            {price}
          </p>
          <p className="md:text-[18px] text-[15px]">
            Buy Now <i class="ri-arrow-right-up-line"></i>
          </p>
        </div>
      </div>
    </>
  );
});

export default ProductDiv;
