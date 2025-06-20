import React from "react";
import CustomButton from "./customButton";
import { FaHeart, FaStar, FaPhone } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      {/* Top text with border */}
      <div className="border border-gray-300 rounded-full px-6 py-1 mb-6">
        <span className="text-sm font-medium text-gray-800">
          🎯 The simplest way to create beautiful processes
        </span>
      </div>

      {/* Title with "in minutes" having yellow background and tilt */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Create and run step-by-
        <br />
        step processes{" "}
        <span className="bg-yellow-300 inline-block px-2 py-1 transform -rotate-2">
          in minutes
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8">
        Create and run repeatable SOPs, workflows and checklists. Track progress
        with smart due-dates and more!
      </p>

      {/* Custom Button */}
      <div className="mb-8">
        <CustomButton text="Start For Free Today" />
      </div>

      {/* Row of three items with FontAwesome icons */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8">
        {/* Item 1: Red Heart */}
        <div className="flex items-center gap-3">
          <FaHeart className="text-red-500 text-xl" />
          <span className="text-gray-700">Try it for free for 14 days</span>
        </div>

        {/* Item 2: Yellow Star */}
        <div className="flex items-center gap-3">
          <FaStar className="text-yellow-500 text-xl" />
          <span className="text-gray-700">No credit card required</span>
        </div>

        {/* Item 3: Green Phone */}
        <div className="flex items-center gap-3">
          <FaPhone className="text-green-500 text-xl" />
          <span className="text-gray-700">Help 24/7</span>
        </div>
      </div>

      {/* Loom Video Embed with 4:3 Aspect Ratio */}
      <div className="w-full h-full max-w-3xl mb-8">
        <div className="relative aspect-[16/9]">
          <iframe
            src="https://www.loom.com/embed/d81ee9ad60b042528ee02aea17927f13?sid=e600f0f2-35e5-4ac7-a20f-eaffd4b2f150&hide_owner=true&hide_title=true&hide_share=true&hideEmbedTopBar=true&hide_speed=true"
            frameBorder="0"
            allowFullScreen
            className="absolute  top-0 left-0 w-full h-full rounded-xl "
          ></iframe>
        </div>
      </div>

      <div className="border border-gray-300 rounded-full px-6 py-1 mb-6">
        <span className="text-sm font-medium text-gray-800">
          HOW DOES IT WORK?
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
        Simplify how your team works with
        <br />
        <span className="bg-yellow-300 inline-block px-2 py-1 transform -rotate-1">
          structured, repeatable processes.
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8">
        NextStep simplifies process creation and execution so your team can
        focus on doing great work. Here;aps how it works…
      </p>
    </div>
  );
};

export default Hero;
