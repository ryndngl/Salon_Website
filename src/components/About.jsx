function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white text-gray-800"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-pink-700">
          Discover Our Story
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          At <span className="font-semibold text-pink-600">Van's Glow Up Salon</span>, 
          we create a relaxing space where you can look and feel your best. 
          From expert techniques to premium products, we bring out your glow — 
          every visit, every time.
        </p>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Mission Card */}
          <div className="bg-pink-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We aim to deliver exceptional beauty services in a 
              <span className="font-medium text-pink-600"> serene and welcoming environment</span>. 
              Our passion is helping you feel confident, refreshed, and ready to shine.
            </p>
          </div>

          {/* Expertise Card */}
          <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Our Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              From timeless classics to the latest trends, our skilled team uses 
              <span className="font-medium text-purple-600"> premium products</span> 
              and techniques to bring your beauty goals to life.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#services"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition"
          >
            Explore Our Services
          </a>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10 text-purple-800">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-pink-400">
              <p className="italic text-gray-600 mb-4">"The absolute best salon experience! The team is incredibly friendly and skilled."</p>
              <p className="font-semibold text-pink-700">- Sarah L. ★★★★★</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-400">
              <p className="italic text-gray-600 mb-4">"My new favorite place for a glow-up! They truly listen and exceed expectations."</p>
              <p className="font-semibold text-purple-700">- Jessica M. ★★★★★</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-pink-400">
              <p className="italic text-gray-600 mb-4">"The ambiance is incredibly relaxing, and the results are always stunning."</p>
              <p className="font-semibold text-pink-700">- Emily R. ★★★★★</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
