import React from 'react'

function Navbar() {
  return (
    <nav className="py-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-red-900 mb-4 md:mb-0">Van's Glow Up Salon</h1>
        <ul className="flex flex-col md:flex-row md:space-x-6">
          <li><a href="#home" className="text-gray-700 hover:text-red-900 transition duration-300">Home</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-red-900 transition duration-300">Services</a></li>
          <li><a href="#gallery" className="text-gray-700 hover:text-red-900 transition duration-300">Gallery</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-red-900 transition duration-300">About</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-red-900 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
