

function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-rose-50 to-pink-100 relative overflow-hidden">
      {/* Background Shapes/Patterns for added visual interest */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/2 w-56 h-56 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10"> {/* Increased max-width and added z-index */}

        {/* About Us Heading: "Discover Our Story" with pulsing underline */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-900 text-center mb-16 relative pb-4 tracking-tight">
          <span className="relative z-10">Discover Our Story</span>
          {/* Custom Underline Element with animation */}
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-2 bg-pink-600 rounded-full animate-pulse-light"></span>
        </h2>

        {/* Main Content Area - Enhanced with Frosted Glass Effect and Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm p-8 md:p-14 rounded-3xl shadow-2xl border border-pink-100 animate-fade-in-up">
          {/* Subtle background gradient inside the frosted glass card */}
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to bottom right, #fce4ec, #fdedf0)' }}></div>

          {/* Mission & Atmosphere Card */}
          <div className="relative z-10 flex flex-col items-center text-center p-6 bg-pink-50 rounded-xl shadow-lg border border-pink-200 transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl">
            <div className="text-5xl text-pink-600 mb-4 animate-bounce-subtle">💖</div> {/* Fun icon with subtle bounce */}
            <h3 className="text-2xl font-bold text-pink-800 mb-3">Our Mission & Atmosphere</h3>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-bold text-pink-700">Van's Glow Up Salon</span>, we are devoted to delivering exceptional beauty services in a
              <span className="font-semibold text-pink-600"> serene and welcoming haven</span>. Our team pours passion into helping you
              <span className="font-semibold text-pink-600"> look and feel your absolute best</span>. We believe that self-care is a vital ingredient
              for overall well-being, crafting an experience that leaves you feeling refreshed, rejuvenated, and utterly confident.
            </p>
          </div>

          {/* Quality & Expertise Card */}
          <div className="relative z-10 flex flex-col items-center text-center p-6 bg-purple-50 rounded-xl shadow-lg border border-purple-200 transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl">
            <div className="text-5xl text-purple-600 mb-4 animate-bounce-subtle animation-delay-200">✨</div> {/* Fun icon with subtle bounce and delay */}
            <h3 className="text-2xl font-bold text-purple-800 mb-3">Quality & Expertise</h3>
            <p className="text-gray-700 leading-relaxed">
              We meticulously select <span className="font-bold text-purple-700">premium products</span> and continuously embrace the latest
              trends and innovative techniques to ensure you receive nothing but the <span className="font-semibold text-purple-600">finest service</span>.
              Our unwavering commitment to excellence shines through in every detail. From timeless classics to cutting-edge
              creations, our skilled experts are here to turn your beauty aspirations into a dazzling reality, promising a truly
              <span className="font-semibold text-purple-600"> personalized glow-up journey</span>.
            </p>
          </div>

          {/* Call to Action Button - CHANGED TO <a> TAG */}
          <div className="md:col-span-2 text-center mt-12 animate-fade-in-up animation-delay-600">
            <a href="#services" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition duration-400 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xl inline-block">
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-extrabold text-purple-900 text-center mb-12 relative pb-3">
            <span className="relative z-10">What Our Clients Say</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1.5 bg-purple-500 rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center border-b-4 border-pink-400 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <p className="italic text-gray-700 mb-5 text-lg leading-relaxed">"The absolute best salon experience! The team is incredibly friendly and skilled. I always leave feeling beautiful and refreshed."</p>
              <p className="font-bold text-pink-700 text-md">- Sarah L. <span className="text-yellow-500 text-xl">★★★★★</span></p>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center border-b-4 border-purple-400 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <p className="italic text-gray-700 mb-5 text-lg leading-relaxed">"My new favorite place for a glow-up! They truly listen to what you want and exceed expectations every time. Highly recommend!"</p>
              <p className="font-bold text-purple-700 text-md">- Jessica M. <span className="text-yellow-500 text-xl">★★★★★</span></p>
            </div>
            {/* Testimonial Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center border-b-4 border-pink-400 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl md:col-span-2 lg:col-span-1">
              <p className="italic text-gray-700 mb-5 text-lg leading-relaxed">"The ambiance is incredibly relaxing, and the results are consistently stunning. It's more than just a salon visit; it's a pampering escape!"</p>
              <p className="font-bold text-pink-700 text-md">- Emily R. <span className="text-yellow-500 text-xl">★★★★★</span></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;