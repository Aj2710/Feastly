import React from "react";
import { Link } from "react-router-dom";

const DefaultCart = () => {
  return (
    <div className="w-100% md:h-[calc(100vh-80px)] flex items-center flex-col justify-center my-0 mx-auto text-center">
      <div className="w-96">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt=""
        />
      </div>
      <div className="mt-6 text-base font-semibold">Your Cart is Empty</div>
      <div className="mt-2">
        You can go to home page to view more restaurants
      </div>
      <div className="mt-7 py-3 px-5 capitalize text-orange-500  hover:text-white  hover:bg-orange-500 font-semibold cursor-pointer text-base text-center outline-0 rounded-md border-2 border-orange-500">
        <Link to="/">See Restaurants Near You</Link>
      </div>
    </div>
  );
};

export default DefaultCart;
