import { useState, useEffect } from "react";
import bgimg from "../assets/bgimg2.png";
import microsoftimg from "../assets/Microsoft.png";
import appleimg from "../assets/apple.png";
import unityimg from "../assets/unity.png";
import ximg from "../assets/twitter.png";

function HeroPage() {
    const [navbarFixed, setNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarFixed(true);
            } else {
                setNavbarFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className="bg-cover bg-center h-auto pb-20"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                {/* Navbar */}
                <nav
                    className={`p-4 w-full z-50 transition duration-500 ease-in-out ${
                        navbarFixed
                            ? "fixed top-0 bg-white text-black shadow-lg"
                            : "absolute top-2 bg-transparent text-white"
                    }`}
                >
                    <div className="container mx-auto flex items-center">
                        {/* Left Side: Logo with increased spacing from the left */}
                        <div className="flex items-center flex-grow pl-6">
                            <img src="logo.png" alt="Logo" className="h-8 w-8" />
                        </div>

                        {/* Center: Navigation Links */}
                        <ul className="flex space-x-16 flex-grow justify-center">
                            <li>
                                <a href="#Home" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#About" className="hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#Services" className="hover:underline">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#Contact" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>

                        {/* Right Side: Sign In Button */}
                        <div className="flex items-center flex-grow justify-end">
                            <a
                                href="#SignIn"
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                </nav>

                {/* Centered Content */}
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
            </div>

            {/* Centered Image Div with Margin */}
            <div
                style={{ backgroundColor: "#050323" }}
                className="relative flex justify-center items-center h-auto pb-6"
            >
                {/* Main Image */}
                <img
                    src="https://horizon-ui.com/pro/static/media/main-dashboard-pro-hero.89c0ad9e30d788ba5a8a.png"
                    alt="Centered"
                    className="w-4/5"
                />

                {/* Additional Images Positioned on Top */}
                <img
                    src="https://horizon-ui.com/pro/static/media/main-chart-pro.7e5b8efa6626092f4ab5.png"
                    alt="Top"
                    className="absolute top-[15%] left-[24%] w-[30%] shadow-2xl"
                />
                <img
                    src="https://horizon-ui.com/pro/static/media/balance-card-pro.18f6d1bf696d385fa871.png"
                    alt="Top"
                    className="absolute top-[15%] left-[1%] w-[18%] shadow-2xl transform rotate-12 rounded-xl"
                />
                <img
                    src="https://horizon-ui.com/pro/static/media/balance-card-pro.18f6d1bf696d385fa871.png"
                    alt="Top"
                    className="absolute top-[75%] left-[1%] w-[15%] shadow-2xl transform -rotate-12 rounded-xl"
                />
                <img
                    src="https://horizon-ui.com/pro/static/media/light-card-pro.4f0096d58a74ccd3ef2c.png"
                    alt="Top"
                    className="absolute top-[15%] left-[83%] w-[15%] shadow-2xl transform -rotate-12 rounded-xl"
                />
                <img
                    src="https://horizon-ui.com/pro/static/media/wallet-card-pro.93cdfdec0d36bfb414bd.png"
                    alt="Top"
                    className="absolute top-[68%] left-[80%] w-[18%] shadow-2xl transform rotate-12 rounded-xl"
                />
            </div>

            {/* Join Developers Section */}
            <div style={{ backgroundColor: "#050323" }} className="text-center pt-20 pb-14">
                <h2 className="text-2xl md:text-3xl text-white font-semibold mb-10">
                    JOIN 30,000+ DEVELOPERS & BUSINESSES THAT USE HORIZON UI
                </h2>

                {/* Icons */}
                <div className="flex justify-center space-x-14 mb-8">
                    <img src={microsoftimg} alt="Icon 1" className="h-12 w-12 invert" />
                    <img src={appleimg} alt="Icon 2" className="h-12 w-12 invert" />
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
        </>
    );
}

export default HeroPage;
