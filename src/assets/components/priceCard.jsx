import React from "react";
import CustomButton from "./customButton"; // Assuming CustomButton is in a separate file

const PricingCard = ({ users, price, description }) => {
  return (
    <div className=" rounded-lg  p-6  flex flex-col items-center  bg-white">
      <div className="bg-yellow-300 text-sm font-semibold -rotate-1 w-fit inline-block px-1">
        <h3 className="text-lg font-semibold">{users} </h3>
      </div>
      <div className="text-center py-4">
        <h2 className="text-3xl font-bold">
          ${price}
          <span className="text-black/60 text-sm font-normal"> /month</span>
        </h2>
      </div>
      <div className="text-center mb-6 ">
        <p className="text-black/60">{description}</p>
      </div>
      <div className="mb-8">
        <CustomButton text="Start Free Trial" px="px-16" />
      </div>
    </div>
  );
};

export default PricingCard;
