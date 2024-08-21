import Auth from "layouts/auth";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/whitelogo.png";

const Navbar = () => {
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
    <nav
      className={`p-4 w-full z-50 transition-all duration-500 ease-in-out ${
        navbarFixed
          ? "fixed top-0 bg-white text-black shadow-lg"
          : "absolute top-2 bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center">
        {/* Left Side: Logo with conditional invert filter */}
        <div className="flex items-center flex-grow w-32">
          <img
            src={logo}
            alt="Logo"
            className={`h-7 w-48 transition duration-500 ${
              navbarFixed ? "invert" : ""
            }`}
          />
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-16 flex-grow justify-center">
          <li>
            <a href="#Home" className="text-l font-medium  hover:underline ">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="text-l font-medium  hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#Services" className="text-l font-medium  hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-l font-medium hover:underline">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side: Sign In Button */}
        <div className="flex items-center flex-grow justify-end">
          <Link
            to={'auth/sign-up'}
            className="bg-blue-700 mix-blend-multiply text-white py-2 px-4 rounded-3xl transform hover:bg-blue-500 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;