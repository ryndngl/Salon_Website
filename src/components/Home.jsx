import React from 'react';
import backgroundImage from '../assets/BG.webp';

function Home() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`, // Gamitin ang imported image dito
  };

  return (
    <section
      id="home"
      style={sectionStyle} // Apply the inline style here for background-image
      className="
        relative
        py-65             // Your existing padding, adjust if needed
        bg-cover          // Tailwind for background-size: cover;
        bg-center         // Tailwind for background-position: center;
        bg-no-repeat      // Tailwind for background-repeat: no-repeat;
        min-h-screen      // Ensures the section takes full viewport height
        flex              // Enables flexbox for centering content
        items-center      // Centers content vertically
        justify-center    // Centers content horizontally
        text-white">

      <div className="container mx-auto text-center z-10 p-4"> {/* Added p-4 for some internal padding */}
        <h2 className="text-5xl font-bold mb-4">Welcome to Van's Glow Up Salon</h2>
        <p className="text-lg mb-8">
         Your destination for beauty, relaxation, and a renewed you. <br />
          Book your appointments conveniently through our mobile app!
        </p>
        <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
         Download Our Mobile App 
        </button>
      </div>
      {/*Optional: Add an overlay for better text readability if the image is too busy/bright */}
      {<div className="absolute inset-0 bg-black opacity-40"></div> }
    </section>
  );
}

export default Home;