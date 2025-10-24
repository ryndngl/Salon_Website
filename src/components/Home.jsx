// src/components/Home.jsx
import backgroundImage from "/assets/BackgroundImage/BG2.webp";

function Home() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section
      id="home"
      style={sectionStyle}
      className="
        relative
        py-16 sm:py-24 md:py-32 lg:py-48 
        bg-cover
        bg-center
        bg-no-repeat
        min-h-screen 
        flex 
        items-center 
        justify-center
        text-white
     "
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 md:px-8 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
          Welcome to Van's Glow Up Salon
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 leading-relaxed">
         Your local home for a fabulous glow-up! Come on in and feel the care. <br className="hidden sm:block" />
         Booking your appointments is quick and easy through our mobile app.
        </p>
        <a href="#mobile-app">
          <button className="bg-green-500 text-white font-semibold py-3 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full transition duration-300 text-sm sm:text-base md:text-lg hover:bg-green-600 hover:scale-105 active:scale-95 shadow-lg">
            Get the App Now
          </button>
        </a>
      </div>
    </section>
  );
}

export default Home;