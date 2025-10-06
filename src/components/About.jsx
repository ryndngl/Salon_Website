function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white text-gray-800">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-pink-700">
          Discover Our Story
        </h2>
        
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Established in 2025 in Rodriguez Rizal, <span className="font-semibold text-pink-600">Vans Glow Up Salon</span> has been serving the community with premium beauty services. We create a relaxing space where you can look and feel your best, combining expert techniques with quality products to bring out your natural glow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="bg-pink-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide affordable yet high-quality beauty services to every client. We believe everyone deserves to feel confident and beautiful, which is why we offer <span className="font-medium text-pink-600">flexible booking through our mobile app</span> and competitive pricing without compromising quality.
            </p>
          </div>

          <div className="bg-purple-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Our Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              Our licensed stylists specialize in hair coloring, Brazilian blowout, precision cuts, and nail art. We use <span className="font-medium text-purple-600">professional-grade products</span> including Loreal, Wella, and OPI to ensure lasting, stunning results.
            </p>
          </div>
          
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-pink-700">
            Why Choose Vans Glow Up Salon?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-lg mb-2">Experienced Stylist</h4>
              <p className="text-gray-600 text-sm">Years of hands-on experience in beauty services</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Easy Online Booking</h4>
              <p className="text-gray-600 text-sm">Book anytime through our mobile app</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Affordable Prices</h4>
              <p className="text-gray-600 text-sm">Quality service that fits your budget</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#services" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition">
            Explore Our Services
          </a>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10 text-purple-800">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-pink-400">
              <p className="italic text-gray-600 mb-4">
                I have been coming here for over a year. The stylists really know their craft and the prices are very reasonable. Plus booking through their app is so convenient!
              </p>
              <p className="font-semibold text-pink-700">- Maria S., Regular Client</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-400">
              <p className="italic text-gray-600 mb-4">
                Got my hair colored here and it turned out exactly how I wanted. The staff is friendly and the salon is always clean and professional.
              </p>
              <p className="font-semibold text-purple-700">- Jean T., First-time Client</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-pink-400">
              <p className="italic text-gray-600 mb-4">
                Best salon in Cainta! I always book my appointments through their app. Very professional service at affordable prices. Highly recommended!
              </p>
              <p className="font-semibold text-pink-700">- Andrea L., Loyal Customer</p>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;