import React from "react";
import RightArrow from "../images/right_arrow.svg"; // Adjust the path as necessary

const CustomButton = ({ text }) => {
  return (
    <button className="flex items-center cursor-pointer gap-2 bg-black text-white px-6 py-2 font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
      <span>{text}</span>
      <img src={RightArrow} alt="Right Arrow" className="w-5 h-5" />
    </button>
  );
};

export default CustomButton;
