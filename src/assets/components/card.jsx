import React, { useState, useRef } from "react";
import check from "../images/check.svg"; // Adjust the path as necessary
import play from "../images/play.svg"; // Adjust the path as necessary

import { FaTimes } from "react-icons/fa";
const StepCard = ({ stepNumber, title, description, listItems, media }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (media.type === "video" && videoRef.current) {
      videoRef.current.pause(); // Pause the mini video
      setIsPopupOpen(true); // Open the popup
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    if (videoRef.current) {
      videoRef.current.play(); // Resume the mini video when closing popup
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.className.includes("popup-container")) {
      closePopup();
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {/* Left Section */}
        <div className="lg:w-1/2 p-6">
          <div className="bg-yellow-300 px-2 -rotate-1 text-black font-medium text-lg md:text-lg inline-block mb-2">
            Step {stepNumber}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
          <p className="mb-4 text-base md:text-lg text-gray-600">
            {description}
          </p>
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
        <div
          className="lg:w-1/2 relative"
          onMouseEnter={() => media.type === "video" && setIsHovered(true)}
          onMouseLeave={() => media.type === "video" && setIsHovered(false)}
        >
          {media.type === "video" ? (
            <>
              <video
                className="w-full cursor-pointer rounded-xl"
                src={media.src}
                ref={videoRef}
                autoPlay={true}
                controls={false}
                loop
                muted
              />
              {isHovered && (
                <div
                  onClick={handleVideoClick}
                  className="absolute cursor-pointer inset-0 rounded-xl bg-black/40 flex items-center justify-center"
                >
                  <img src={play} alt="" className="w-12 h-12" />
                </div>
              )}
            </>
          ) : (
            <img className="w-full" src={media.src} alt="Step visual" />
          )}
        </div>
      </div>

      {/* Video Popup */}
      {isPopupOpen && media.type === "video" && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 popup-container"
          onClick={handleOutsideClick}
        >
          <div className="relative w-full max-w-4xl" style={{ width: "80%" }}>
            <div
              className="absolute cursor-pointer  top-4 right-4  text-2xl font-bold bg-white/20 border-2 rounded-xl w-8 h-8 flex items-center justify-center z-10"
              onClick={closePopup}
            >
              <FaTimes className="w-4 h-4" />
            </div>
            <video
              className="w-full rounded-xl"
              src={media.src}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      )}
    </>
  );
};

export default StepCard;
