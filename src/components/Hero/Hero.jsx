import React, { useEffect, useState } from "react";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import Brand from "../../api/brand";
import Carts from "../../api/cart";
import apple from "../../media/img/fmn.png";
import ADS1 from "../../media/img/kidetADS-01.png";
import ADS2 from "../../media/img/kidetADS-02.png";
import ADS3 from "../../media/img/kidetADS-03.png";
// import Products from "../../api/products";

const Hero = () => {
  return (
<main className="sm-width w-4/5 px-3 container">
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-[240px] dark:bg-gray-800 bg-white rounded-2xl">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide">
              <img
                src={ADS1}
                alt={ADS1}
                className="h-full w-full text-4xl transition bg-blue duration-900"
              />
            </div>
            <div className="hs-carousel-slide">
              <img
                src={ADS2}
                alt={ADS2}
                className="h-full w-full text-4xl transition bg-blue duration-900"
              />
            </div>
            <div className="hs-carousel-slide">
              <img
                src={ADS3}
                alt={ADS3}
                className="h-full w-full text-4xl transition bg-blue duration-900"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800"
        >
          <IoChevronBack className="w-6 h-6 text-gray-400" />
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800"
        >
          <IoChevronForward className="w-6 h-6 text-gray-400" />
        </button>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          <span className="hs-carousel-active:bg-blue-600 bg-gray-400 w-1 h-1 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-blue-600 bg-gray-400 w-1 h-1 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-blue-600 bg-gray-400 w-1 h-1 rounded-full cursor-pointer"></span>
        </div>
      </div>
      <div className="">
        <p className=" py-1 text-sm font-bold text-gray-400 dark:text-gray-400">
          Trusted Partners
        </p>
        <div className="deal inline-flex gap-2.5 overflow-y-auto overflow-auto w-full">
          {Brand.map((brand) => (
            <div
              key={brand.id}
              className="relative bg-white rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] w-[150px] h-[150px] p-2"
            >
              <img
                className="w-full h-full rounded-lg"
                src={apple}
                alt={brand.name}
                loading="lazy"
              />
              <div className="p-4 absolute top-0 left-0 md:p-5 w-full h-full flex justify-center items-center text-center m-auto">
                <h3 className="text-lg font-extrabold text-gray-600 dark:text-gray-400">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};



const Result = () => {
 
  return (
    <div>
      {console.log(URL.createObjectURL(window.location.search))}
    </div>
  )
};

const Basket = () => {
  let [inCart, setInCart] = useState();

  useEffect(() => {
    Carts.map((cart) =>
      setInCart(
        ++cart.price * cart.ammount -
          (cart.discountPercentage / 100) * cart.price * cart.ammount
      )
    );
   
  }, [inCart]);

  return <div>{inCart}</div>;
};

export {Hero, Basket, Result}
