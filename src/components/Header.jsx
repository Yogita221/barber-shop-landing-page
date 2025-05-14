

import React, { useState } from 'react';
import logoo from '../assets/logoo.png';
import { FaBars, FaTimes, FaPhone, FaGlobe } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

   


  return (
    <>
      {/* Top Navbar */}
     <header className="bg-[#0f0f0f] sticky top-0 z-50 shadow-lg">

        <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 lg:px-12 xl:px-20">
          <img src={logoo} alt="Logo" className="h-[60px] w-auto" />

          <div className="hidden md:flex gap-6 text-white font-semibold">
            <a href="#home" className="hover:text-yellow-600">Home</a>
            <a href="#about" className="hover:text-yellow-600">About</a>
            <a href="#services" className="hover:text-yellow-600">Services</a>
            <a href="#gallery" className="hover:text-yellow-600">Gallery</a>
            <a href="#contact" className="hover:text-yellow-600">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
             <div className="flex items-center gap-4 text-white">
    <button className="hover:text-yellow-400 transition-colors duration-200 text-xl">
      <FaGlobe />
    </button>
  </div >
          <div className="flex items-center gap-2 text-white hover:text-yellow-500">
  <IoCall className="text-lg text-yellow-500" />
  <span className="hidden md:inline">+19408081569</span>
</div>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm">Book an Appointment</button>
          </div>

          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="md:hidden text-yellow-500 border-2 border-yellow-500 rounded-full p-2  bg-gray-800">
            <FaBars size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <img src={logoo} alt="Logo" className="h-10" />
          <button onClick={toggleMenu}><FaTimes size={20} /></button>
        </div>

        <div className="px-6 py-4 space-y-4">
          <h3 className="text-yellow-400 text-sm">Menu</h3>
          <ul className="space-y-4 font-medium">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>


          <div className="border-t border-gray-700 pt-4 space-y-2">
            
            <div className="flex items-center gap-2">
              <FaPhone className="text-yellow-400" />
              <span>+19408081569</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-yellow-400" />
              <span>Preferences</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-yellow-400 text-black py-2 rounded-md">Book an Appointment</button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
