import React from 'react';

const CenteredContent = () => {

  return (
    <div className="flex flex-col items-center justify-end h-4/5 space-y-4 pt-40">
      <h1 className="text-center text-5xl md:text-5xl lg:text-6xl font-semibold text-white max-w-7xl">
        The ultimate React admin template for
      </h1>
      <h1 className="text-center text-5xl md:text-5xl lg:text-6xl font-bold text-white max-w-6xl">
        building web apps 10X faster
      </h1>
      <div className="text-center text-white text-lg md:text-l max-w-3xl mx-auto pt-6 pb-6">
        Join over 30,000+ developers and create your fully-functional web
        app 10X faster within hours, with the trendiest React Admin Template
        for Chakra UI, Tailwind CSS, NextJS & Figma.
      </div>
      {/* Get Started with Pro Button */}
      <div>
        <a
          href="#signIn"
          className="bg-blue-700 text-white py-3 px-6 rounded-full text-sm md:text-base font-medium hover:bg-blue-500 transition duration-300"
        >
          Get Started with Pro
        </a>
      </div>
    </div>
  );
};

export default CenteredContent;
