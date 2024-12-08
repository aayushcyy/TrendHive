import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductDiv from "./ProductDiv";
import useProducts from "../Store/Store";
import Footer from "./Footer";
import Loader from "./Loader";
import image40 from "../assets/40off.png";
import productsLocal from "./Products";
import Marquee from "./Marquee";
import Popup from "./Popup";

function Home() {
  const { products, loading, error, fetchProducts } = useProducts();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    fetchProducts();
    const loadingTime = Math.floor(Math.random() * 4);
    console.log(loadingTime);
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, loadingTime * 1000);
    return () => clearTimeout(timer);
  }, [fetchProducts]);

  if (loading || showLoader) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full">
      <Marquee />
      <Navbar />
      <div className="md:px-20 px-2 md:my-10 my-3 flex md:justify-start justify-center flex-wrap gap-5">
        {productsLocal.map((product) => (
          <ProductDiv
            imgSrc={product.url}
            title={product.title}
            price={product.price}
          />
        ))}
        {console.log("item re-rendered!")}
      </div>

      {/* image div here */}
      <div className="w-full my-10 md:px-[80px] px-3 relative text-white">
        <div className="rounded-xl overflow-hidden relative">
          <img
            className="inset-0 w-full h-full object-cover z-0"
            src={image40}
            alt=""
          />
        </div>
        <div className="absolute flex flex-col md:gap-8 gap-1 md:top-10 top-3 md:left-64 left-10 font-semibold">
          <div className="flex items-center">
            <div className="md:text-6xl text-xl">
              The <br />
              Big
            </div>
            <div className="md:text-[160px] text-7xl font-bold font-outfit text-[#86bc3b]">
              40<span className="md:text-7xl text-xl font-medium">%</span>
            </div>
          </div>
          <div className="md:text-6xl text-xl md:-mt-16 -mt-3">
            Fashion Sale
          </div>
          <div>
            <button className="md:py-2 py-[2px] md:px-5 px-2 text-center text-xs font-normal rounded-full bg-[#86bc3b]">
              Shop now
              <span className="font-medium md:text-lg text-xs">
                <i class="ri-arrow-right-up-line"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
