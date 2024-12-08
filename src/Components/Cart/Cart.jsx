import React, { useState } from "react";
import Navbar from "../Navbar";
import Marquee from "../Marquee";
import CartProduct from "./CartProduct";
import useProducts from "../../Store/Store";

function Cart() {
  const [couponVal, setCouponVal] = useState(0);
  const { cart } = useProducts();
  const priceArr = cart.map((product) =>
    Number(product.price.replace(/[^0-9.-]+/g, ""))
  );
  const totalMRP = priceArr.reduce((accu, crrVal) => {
    return accu + crrVal;
  }, 0);
  const discountOnMRP = 399;
  const totalAmount = totalMRP - discountOnMRP - couponVal;

  return (
    <div>
      <Marquee />
      <Navbar />
      <div className="flex flex-col">
        <div className="w-full py-3 text-center text-lg font-semibold">
          Your Cart
        </div>
        {cart.length === 0 ? (
          <p className="text-center font-semibold text-lg">is empty</p>
        ) : (
          <div className="flex md:flex-row flex-col justify-between w-full md:px-[20%] px-7">
            <div className="md:border-r-[1px] md:border-b-0 border-b-[1px] border-[#e0e0e0] md:w-[55%] w-full py-5 flex flex-col gap-3">
              <p className="uppercase md:text-lg text-xs font-semibold mb-3">
                Items
              </p>
              {/* cart item here */}
              {cart.map((product) => (
                <CartProduct
                  title={product.title}
                  price={product.price}
                  url={product.url}
                />
              ))}
            </div>
            <div className="md:w-[40%] w-full ">
              <div className="flex flex-col gap-3 w-full border-b-[1px] border-[#e0e0e0] py-5">
                <p className="uppercase text-xs font-semibold">Coupons</p>
                <div className="flex w-full justify-between">
                  <div className="flex gap-5 items-center">
                    <p className="text-lg">
                      <i class="ri-price-tag-3-line"></i>
                    </p>
                    <p className="font-semibold ">Apply Coupons</p>
                  </div>
                  <button
                    className="px-4 py-[1px] border-[#86BC3B] text-[#86BC3B] hover:bg-[#86bc3b48] border-[1px] text-xs uppercase font-semibold rounded-sm"
                    onClick={() => setCouponVal(300)}
                  >
                    Apply
                  </button>
                </div>
                <p className="text-center text-sm">
                  You'll get upto ₹300 OFF on first order
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full border-b-[1px] border-[#e0e0e0] py-5">
                <p className="uppercase text-xs font-semibold mb-2">
                  Price details
                </p>
                <div className="flex justify-between text-sm">
                  <p>Total MRP</p>
                  <p>{totalMRP}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>Discount on MRP</p>
                  <p className="text-green-600">{discountOnMRP}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>Coupon Discount</p>
                  <p>{couponVal}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>Plateform Fee</p>
                  <p className="uppercase text-green-600">Free</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p>Shipping Fee</p>
                  <p className="uppercase text-green-600">Free</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full py-5">
                <div className="flex justify-between text-lg font-bold ">
                  <p>Total Amount</p>
                  <p>{totalAmount}</p>
                </div>
                <button className="uppercase w-full bg-[#86BC3B] text-white font-semibold py-3 text-sm hover:bg-[#98d247] transition rounded-sm">
                  Place order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
