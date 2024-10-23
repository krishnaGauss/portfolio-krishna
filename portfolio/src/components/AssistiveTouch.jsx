
import React, { useState } from 'react';
import { FaGithub, FaDiscord, FaEnvelope, FaPlus } from 'react-icons/fa';
import { TbX } from 'react-icons/tb'; 
import { motion } from 'framer-motion'; 

const AssistiveTouch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const iconVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.1, rotate: 15 }
  };

  return (
    <div>
      {/* Mobile Version - Floating Button */}
      <div className="fixed bottom-8 right-8 z-50 lg:hidden">
        <button
          className={`w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 ${
            isOpen ? 'transform rotate-45' : ''
          }`}
          onClick={toggleMenu}
        >
          <FaPlus className="text-2xl" />
        </button>

        {/* Menu Items for Mobile */}
        {isOpen && (
          <div className="flex flex-col items-center space-y-4 mt-4">
            <a href="https://github.com/krishnaGauss" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 bg-white text-blue-500 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
                <FaGithub className="text-xl" />
              </button>
            </a>

            <a href="https://discord.com/users/notgauss" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 bg-white text-blue-500 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
                <FaDiscord className="text-xl" />
              </button>
            </a>

            <a href="mailto:goswamikrishna549@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 bg-white text-blue-500 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
                <FaEnvelope className="text-xl" />
              </button>
            </a>

            <a href="https://x.com/onlygaus" target="_blank" rel="noopener noreferrer">
              <button className="w-12 h-12 bg-white text-blue-500 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
                <TbX className="text-xl" />
              </button>
            </a>
          </div>
        )}
      </div>

      {/* Desktop Sticky Menu */}
      <div className="hidden lg:flex flex-col fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
        <motion.a
          href="https://github.com/krishnaGauss"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
          transition={{ duration: 0.3 }}
        >
          <button className="w-12 h-12 bg-white text-blue-500 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg transition-colors duration-300">
            <FaGithub className="text-xl" />
          </button>
        </motion.a>

        <motion.a
          href="https://discord.com/users/notgauss"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <button className="w-12 h-12 bg-white text-blue-500 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg transition-colors duration-300">
            <FaDiscord className="text-xl" />
          </button>
        </motion.a>

        <motion.a
          href="mailto:goswamikrishna549@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <button className="w-12 h-12 bg-white text-blue-500 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg transition-colors duration-300">
            <FaEnvelope className="text-xl" />
          </button>
        </motion.a>

        <motion.a
          href="https://x.com/onlygaus"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={iconVariants}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <button className="w-12 h-12 bg-white text-blue-500 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg transition-colors duration-300">
            <TbX className="text-xl" />
          </button>
        </motion.a>
      </div>
    </div>
  );
};

export default AssistiveTouch;


