import React from 'react';

const CenteredImage = () => {

  return (
    <div
      style={{ backgroundColor: "#050323" }}
      className="relative flex justify-center items-center h-auto pb-6"
    >
      {/* Main Image */}
      <img
        src="https://horizon-ui.com/pro/static/media/main-dashboard-pro-hero.89c0ad9e30d788ba5a8a.png"
        alt="Centered"
        className="w-4/5 animate-fade-up"
      />

      {/* Additional Images Positioned on Top */}
      <img
        src="https://horizon-ui.com/pro/static/media/main-chart-pro.7e5b8efa6626092f4ab5.png"
        alt="Top"
        className="absolute top-[15%] left-[24%] w-[30%] shadow-2xl animate-fade-up"
      />
      <img
        src="https://horizon-ui.com/pro/static/media/balance-card-pro.18f6d1bf696d385fa871.png"
        alt="Top"
        className="absolute top-[15%] left-[1%] w-[18%] shadow-2xl transform rotate-12 rounded-xl animate-fade"
      />
      <img
        src="https://horizon-ui.com/pro/static/media/balance-card-pro.18f6d1bf696d385fa871.png"
        alt="Top"
        className="absolute top-[75%] left-[1%] w-[15%] shadow-2xl transform -rotate-12 rounded-xl animate-fade"
      />
      <img
        src="https://horizon-ui.com/pro/static/media/light-card-pro.4f0096d58a74ccd3ef2c.png"
        alt="Top"
        className="absolute top-[15%] left-[83%] w-[15%] shadow-2xl transform -rotate-12 rounded-xl animate-fade"
      />
      <img
        src="https://horizon-ui.com/pro/static/media/wallet-card-pro.93cdfdec0d36bfb414bd.png"
        alt="Top"
        className="absolute top-[68%] left-[80%] w-[18%] shadow-2xl transform rotate-12 rounded-xl animate-fade"
      />
    </div>
  );
};

export default CenteredImage;