import React from "react";

const ShimmerCard = () => {
  return (
    <div>
      <div className="w-72 m-2 border border-solid p-2.5 rounded-md shadow-lg shadow-stone-300">
        <div className="h-44 bg-gray-200 rounded-md"></div>
        <div className="my-1 h-6 bg-gray-200 rounded-md"></div>
        <div className="h-6 bg-gray-200 rounded-md"></div>
        <div className="my-1 h-6 bg-gray-200 rounded-md"></div>
        <div className="flex justify-between">
          <div className="my-1 h-6 bg-gray-200 w-20 rounded-md"></div>
          <div className=" my-1 h-6 bg-gray-200 w-20 rounded-md"></div>
          <div className="my-1 h-6 bg-gray-200 w-20 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
