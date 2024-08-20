import React from 'react';
import microsoftimg from "../../../assets/Microsoft.png";
// import appleimg from "../../../assets/apple.png";
import unityimg from "../../../assets/unity.png";
import ximg from "../../../assets/twitter.png";

const Join = () => {

  return (
    <div style={{ backgroundColor: "#050323" }} className="text-center pt-20 pb-14">
      <h2 className="text-2xl md:text-3xl text-white font-semibold mb-10">
        JOIN 30,000+ DEVELOPERS & BUSINESSES THAT USE HORIZON UI
      </h2>

      {/* Icons */}
      <div className="flex justify-center space-x-14 mb-8">
        <img src={microsoftimg} alt="Icon 1" className="h-12 w-12 invert" />
        {/* <img src={appleimg} alt="Icon 2" className="h-12 w-12 invert" /> */}
        <img src={unityimg} alt="Icon 3" className="h-12 w-12 invert" />
        <img src={ximg} alt="Icon 4" className="h-12 w-12 invert" />
      </div>

      {/* Overlapping Profile Images and Review */}
      <div className="flex justify-center items-center space-x-4">
        <div className="flex -space-x-4">
          <img
            src="profile1.png"
            alt="Profile 1"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <img
            src="profile2.png"
            alt="Profile 2"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <img
            src="profile3.png"
            alt="Profile 3"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <img
            src="profile4.png"
            alt="Profile 4"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
        </div>

        {/* Review Text */}
        <div className="text-white text-lg md:text-xl">
          "Horizon UI has transformed the way we build applications. Highly recommend!"
        </div>
      </div>
    </div>
  );
};

export default Join;
