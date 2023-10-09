import React from "react";
import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems, setTotalAmount } from "../utils/cartSlice";

const Itemcard = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, description, imageId, defaultPrice } = item.card.info;

  const addFoodItems = (item) => {
    dispatch(addItems(item));
    dispatch(setTotalAmount());
  };

  return (
    <div className="p-4 m-4 flex justify-between bg-white border-b-2 box-shadow">
      <div className="flex flex-col w-[70%] space-y-3">
        <span className="font-bold">{name}</span>
        <span className="font-semibold">
          ₹{price / 100 || defaultPrice / 100}
        </span>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
      <div className="relative">
        <img src={IMG_URL + imageId} alt="Dish" className="h-32 rounded-md" />
        <button
          onClick={() => addFoodItems(item)}
          className="absolute left-[30%] -bottom-[10%] font-bold bg-green-600 text-white hover:text-white hover:bg-orange-600 rounded-md px-4 py-1"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Itemcard;
