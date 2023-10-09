import React from "react";
import { useState } from "react";

const HelpSection = ({ title, description }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div>
      <div className="flex flex-col border-b-2 cursor-pointer">
        <div
          onClick={() => {
            setShowDesc(!showDesc);
          }}
          className="flex justify-between p-6 bg-white text-lg font-semibold"
        >
          <span>{title}</span>
          <span>
            {showDesc ? (
              <i class="fa-solid fa-angle-up"></i>
            ) : (
              <i class="fa-solid fa-angle-down"></i>
            )}
          </span>
        </div>
        {showDesc && (
          <div className=" pb-4 px-6 text-sm text-gray-700">
            <span>{description}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpSection;
