import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State para sa mobile menu

  return (
    <nav className="py-4 shadow-md bg-white relative z-50"> {/* Nagdagdag ng bg-white at z-50 para mas makita at nasa ibabaw */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6"> {/* Nagdagdag ng responsive padding */}
        {/* Salon Title - Responsive Font Size */}
        <h1 className="text-2xl sm:text-3xl font-bold text-red-900">Van's Glow Up Salon</h1>

        {/* Hamburger Menu Button - Visible lang sa mobile */}
        <button
          className="md:hidden text-gray-700 hover:text-red-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* SVG para sa hamburger icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation Links - Responsive Visibility at Layout */}
        <ul
          className={`
            ${isOpen ? 'flex' : 'hidden'} // Ipakita/Itago base sa isOpen state
            md:flex // Laging ipakita sa desktop
            flex-col md:flex-row // Column sa mobile, row sa desktop
            md:space-x-6 // Spacing sa desktop
            mt-4 md:mt-0 // Margin top sa mobile
            w-full md:w-auto // Full width sa mobile
            items-center // Center items horizontally sa mobile
            md:items-end // Align items sa dulo sa desktop
            bg-white md:bg-transparent // Background sa mobile menu
            p-4 md:p-0 // Padding sa mobile menu
            rounded-lg md:rounded-none // Rounded corners sa mobile menu
            shadow-lg md:shadow-none // Shadow sa mobile menu
            absolute md:relative // Absolute position sa mobile para sa overlay
            top-full left-0 right-0 // Full width at nasa ilalim ng navbar sa mobile
            z-20 // Para nasa ibabaw ng ibang content
          `}
        >
          <li><a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-900 transition duration-300 text-lg md:text-base">Home</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-900 transition duration-300 text-lg md:text-base">Services</a></li>
          <li><a href="#gallery" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-900 transition duration-300 text-lg md:text-base">Gallery</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-900 transition duration-300 text-lg md:text-base">About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-red-900 transition duration-300 text-lg md:text-base">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
