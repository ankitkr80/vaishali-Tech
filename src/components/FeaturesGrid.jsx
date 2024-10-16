import React from "react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: "boost.png", // Replace with actual path
      title: "Boost your Reach & Visibility",
    },
    {
      icon: "sales.png", // Replace with actual path
      title: "Elevate your Brand Value",
    },
    {
      icon: "virtual.png", // Replace with actual path
      title: "Secure your Virtual Interactions",
    },
    {
      icon: "brandpng.png", // Replace with actual path
      title: "Elevate your Brand Value",
    },
    {
      icon: "reach.png", // Replace with actual path
      title: "Secure your Virtual Interactions",
    },
    {
      icon: "anouncement.png", // Replace with actual path
      title: "Streamline your Performance",
    },
  ];

  return (
    <div className="text-center mt-15 p-6 bg-gray-100 items-start px-4 md:px-16 justify-center">
      <h2 className="text-[32px] md:text-[40px] font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
        A Business Website that Leaves an Impact
      </h2>
      <p className="text-gray-600 text-lg md:text-xl mb-8 text-start">
        Just like your business, your business website needs to be unique, impactful, and advanced
        to get ahead of the competition. VaishaliTech's team of experts works closely with you to build a
        website that helps you stand out and beat the competition.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center w-full h-[240px] sm:h-[220px] md:h-[260px] lg:h-[300px]"
            // Tailwind's responsive width settings for different screen sizes
          >
            <img 
              src={feature.icon} 
              alt={feature.title} 
              className="w-40 h-30 md:w-24 md:h-24 mb-4 sm:w-16 sm:h-16 lg:w-28 lg:h-28"
            />
            <h3 className="text-[#4e6185] font-bold text-md md:text-2xl sm:text-sm lg:text-xl">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
