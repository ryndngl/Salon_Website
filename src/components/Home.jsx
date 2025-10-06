// src/components/Home.jsx
import backgroundImage from "/assets/BG2.webp";

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
        bg-top md:bg-center 
        bg-no-repeat
        min-h-screen 
        flex 
        items-center 
        justify-center
        text-white
     "
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-sm"></div>

      <div className="container mx-auto text-center z-10 p-4 sm:p-6 md:p-8">
        <h2
          className="
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          font-bold mb-4 sm:mb-6 md:mb-8
        "
        >
          Welcome to Van's Glow Up Salon
        </h2>
        <p
          className="
          text-base sm:text-lg md:text-xl
          mb-8 sm:mb-10 md:mb-12
        "
        >
          Your destination for beauty, relaxation, and a renewed you. <br />
          Book your appointments conveniently through our mobile app!
        </p>
        <a href="#mobile-app">
          <button
            className="
            bg-green-500 text-white font-semibold
            py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8
            rounded-full transition duration-300
            text-sm sm:text-base md:text-lg
            hover:bg-green-600
          "
          >
            Get the App Now
          </button>
        </a>
      </div>
    </section>
  );
}

export default Home;