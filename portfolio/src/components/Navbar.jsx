import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close buttons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent sticky top-0 z-50 p-4 backdrop-blur-sm">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center">
        <div className="flex space-x-8">
          <a
            href="#about-me"
            className="text-blue-500 hover:text-[#FFD700] transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-blue-500 hover:text-[#FFD700] transition duration-300"
          >
            Projects
          </a>
          <a
            href="#say-hi"
            className="text-blue-500 hover:text-[#FFD700] transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex justify-between items-center">
        <div className="text-white text-lg font-bold">Krishna Goswami</div>
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="flex flex-col items-center mt-4 lg:hidden transition duration-300 ease-in-out">
          <a
            href="#about-me"
            className="text-blue-500 hover:text-[#FFD700] transition duration-300 p-2"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-blue-500 hover:text-[#FFD700] transition duration-300 p-2"
          >
            Projects
          </a>
          <a
            href="#say-hi"
            className="text-blue-500 hover:text-[#FFD700] transition duration-300 p-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
