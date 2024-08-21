import React from 'react';
import microsoftimg from "../../../assets/Microsoft.png";
// import appleimg from "../../../assets/apple.png";
import unityimg from "../../../assets/unity.png";
import ximg from "../../../assets/twitter.png";

const Join = () => {

  return (
    <div style={{ backgroundColor: "#050323" }} className="text-center pt-20 pb-14 rounded-b-[75px]">
      <h2 className="text-2xl md:text-3xl text-white font-semibold mb-10">
          JOIN 30,000+ USERS STREAMLINING BILLING, INVENTORY, AND INVOICING
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
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile 1"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt="Profile 2"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt="Profile 3"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt="Profile 4"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
        </div>

        {/* Review Text */}
        <div className="text-white text-lg md:text-xl">
          " ProfitX has transformed the way we build applications. Highly recommend! "
        </div>
      </div>
    </div>
  );
};

export default Join;