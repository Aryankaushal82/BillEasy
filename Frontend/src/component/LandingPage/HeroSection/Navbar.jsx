import { useState, useEffect } from "react";

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
      className={`p-4 w-full z-50 transition duration-500 ease-in-out ${navbarFixed
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
  );
};

export default Navbar;
