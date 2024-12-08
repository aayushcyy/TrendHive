import React, { useState } from "react";
import useProducts from "../../Store/Store";

function CartProduct({ title, price, url }) {
  const { removeFromCart } = useProducts();
  const [quantity, setQuantity] = useState(1);

  const removeItemHandler = () => {
    removeFromCart(url);
  };

  return (
    <div className="md:w-[450px] border-[#e0e0e0]  border-[1px] px-2 py-2 relative rounded-sm">
      <div className="flex gap-2 w-full relative">
        <button
          className="text-xl absolute -right-1 z-20 -top-1"
          onClick={removeItemHandler}
        >
          <i class="ri-close-line"></i>
        </button>
        <div className="md:w-[110px] w-[120px] md:h-[150px] rounded-sm flex items-center justify-center overflow-hidden object-cover relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={url}
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm h-10 font-semibold w-[90%]">{title}</p>
          <div className="flex gap-3 items-center">
            <button
              className="py-[1px] px-[7px] bg-[#e2e2e2] text-black"
              onClick={() =>
                setQuantity((state) => (state > 1 ? state - 1 : state))
              }
            >
              <i class="ri-subtract-line"></i>
            </button>
            <p className="text-sm font-semibold">{quantity}</p>
            <button
              className="py-[1px] px-[7px] bg-[#e2e2e2] text-black"
              onClick={() =>
                setQuantity((state) => (state < 10 ? state + 1 : state))
              }
            >
              <i class="ri-add-line"></i>
            </button>
          </div>
          <p className="text-sm font-semibold">{price}</p>

          <p className="text-xs">
            <span className="text-[10px] border-[1px] border-black rounded-full px-[2px] font-semibold">
              <i class="ri-arrow-go-back-line"></i>
            </span>
            <span className="font-semibold"> 7 days</span> return available
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
