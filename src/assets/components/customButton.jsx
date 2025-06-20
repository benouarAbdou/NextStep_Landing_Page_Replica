import React from "react";
import RightArrow from "../images/right_arrow.svg"; // Adjust the path as necessary

const CustomButton = ({ text, px = "px-6" }) => {
  return (
    <button
      className={`flex text-lg items-center cursor-pointer gap-2 bg-black text-white ${px} py-2 font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200`}
    >
      <span>{text}</span>
      <img src={RightArrow} alt="Right Arrow" className="w-5 h-5" />
    </button>
  );
};

export default CustomButton;
