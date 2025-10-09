import { useState } from 'react';
import LogoIcon from '/assets/vans-glow-up-salon.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 py-4 shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 z-50"> 
      <div className="w-full flex justify-between items-center px-4 md:px-12"> 
        
        {/* START: SALON BRAND (Logo + Title) */}
        <div className="flex items-center space-x-2"> 
            
            {/* LOGO ICON */}
            <img 
                src={LogoIcon} 
                alt="Van's Glow up Salon Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10" 
            />
            
            <h1 className="text-xl sm:text-2xl font-bold text-white inline-block">
                Van's Glow Up Salon
            </h1>
        </div>
        {/* END: SALON BRAND */}


        {/* Hamburger Menu Button - Visible lang sa mobile */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
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
            bg-gray-800 md:bg-transparent // Background sa mobile menu
            p-4 md:p-0 // Padding sa mobile menu
            rounded-lg md:rounded-none // Rounded corners sa mobile menu
            shadow-lg md:shadow-none // Shadow sa mobile menu
            absolute md:relative // Absolute position sa mobile para sa overlay
            top-full left-0 right-0 // Full width at nasa ilalim ng navbar sa mobile
            z-20 // Para nasa ibabaw ng ibang content
          `}
        >
          <li><a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white transition duration-300 text-lg md:text-base">Home</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white transition duration-300 text-lg md:text-base">Services</a></li>
          <li><a href="#gallery" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white transition duration-300 text-lg md:text-base">Gallery</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white transition duration-300 text-lg md:text-base">About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white transition duration-300 text-lg md:text-base">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;