import React from "react";
import PricingCard from "./priceCard";

const Prices = () => {
  const pricingPlans = [
    {
      users: "1 User",
      price: 5,
      description: "Perfect for individuals"
    },
    {
      users: "5 Users",
      price: 25,
      description: "Great for small teams"
    },
    {
      users: "10 Users",
      price: 50,
      description: "Ideal for growing teams"
    }
  ];

  return (
    <div className="text-center flex flex-col items-center px-8">
      <div className="border border-gray-300 rounded-full px-6 py-1 mb-6 w-fit">
        <span className="text-sm font-medium text-gray-800">
          SIMPLE PRICING
        </span>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
        Choose the plan that's
        <span className="bg-yellow-300 inline-block px-2 py-1 transform -rotate-1">
          right for your team
        </span>
        ?
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8">
        Start with a 14-day free trial. No credit card required.
      </p>
      <div className="flex flex-col lg:flex-row justify-center gap-2 lg:gap-6 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            users={plan.users}
            price={plan.price}
            description={plan.description}
          />
        ))}
      </div>

      <p className="py-8">
        Need more than 10 users?
        <span className="cursor-pointer  text-[#FE9A00]"> Contact us</span> for
        custom pricing.
      </p>
    </div>
  );
};

export default Prices;
