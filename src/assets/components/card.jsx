import React from "react";
import check from "../images/check.svg"; // Adjust the path as necessary
const StepCard = ({ stepNumber, title, description, listItems, media }) => {
  return (
    <div className="flex flex-col lg:flex-row  items-center gap-4">
      {/* Left Section */}
      <div className="lg:w-1/2 p-6">
        <div className="bg-yellow-300 px-2 -rotate-1 text-black font-medium text-lg md:text-lg inline-block mb-2">
          Step {stepNumber}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        <p className="mb-4 text-base md:text-lg text-gray-600">{description}</p>
        <ul className="space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <img
                src={check}
                alt="Check icon"
                className="w-6 h-6 mr-2"
                style={{ fill: "#f97316" }} // Orange color for SVG
              />
              <span className="text-gray-700 text-base md:text-[unset]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Right Section */}
      <div className="lg:w-1/2">
        {media.type === "video" ? (
          <video
            className="w-full"
            src={media.src}
            autoPlay={true}
            controls={false}
            loop
            muted
          />
        ) : (
          <img className="w-full" src={media.src} alt="Step visual" />
        )}
      </div>
    </div>
  );
};

export default StepCard;
