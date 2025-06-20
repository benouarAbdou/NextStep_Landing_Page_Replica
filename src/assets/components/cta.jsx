import { FaHeart, FaStar, FaPhone } from "react-icons/fa";
import CustomButton from "./customButton"; // Adjust the import path as necessary
const Cta = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col items-center justify-center text-center">
      {/* Title with "in minutes" having yellow background and tilt */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
        Ready to turn your chaos into a
        <br />
        <span className="bg-yellow-300 inline-block px-2 py-1 transform -rotate-1">
          professional Process System
        </span>
        ?
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8">
        Be among the first to transform your processes and join our growing
        community.
      </p>

      {/* Custom Button */}
      <div className="mb-8">
        <CustomButton text="Try for Free" />
      </div>

      {/* Row of three items with FontAwesome icons */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8">
        {/* Item 1: Red Heart */}
        <div className="flex items-center gap-2">
          <FaHeart className="text-red-500 text-md" />
          <span className="text-gray-700">Try it for free for 14 days</span>
        </div>

        {/* Item 2: Yellow Star */}
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500 text-md" />
          <span className="text-gray-700">No credit card required</span>
        </div>

        {/* Item 3: Green Phone */}
        <div className="flex items-center gap-2">
          <FaPhone className="text-green-500 text-md" />
          <span className="text-gray-700">Help 24/7</span>
        </div>
      </div>
    </div>
  );
};
export default Cta;
