function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-5 md:mb-6 text-red-900">
          Discover Our Story
        </h2>
        
        <p className="text-center text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed">
          Established in 2025 in Rodriguez Rizal, <span className="font-semibold text-red-600">Vans Glow Up Salon</span> has been serving the community with premium beauty services. We create a relaxing space where you can look and feel your best, combining expert techniques with quality products to bring out your natural glow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          
          <div className="bg-red-50 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl border border-gray-200 transition">
            <h3 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To provide affordable yet high-quality beauty services to every client. We believe everyone deserves to feel confident and beautiful, which is why we offer <span className="font-medium text-red-600">flexible booking through our mobile app</span> and competitive pricing without compromising quality.
            </p>
          </div>

          <div className="bg-red-50 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl border border-gray-200 transition">
            <h3 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3 sm:mb-4">Our Expertise</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our licensed stylists specialize in hair coloring, Brazilian blowout, precision cuts, and nail art. We use <span className="font-medium text-red-600">professional-grade products</span> including Loreal, Wella, and OPI to ensure lasting, stunning results.
            </p>
          </div>
          
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 bg-gradient-to-r from-red-50 to-gray-50 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl border border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-7 md:mb-8 text-red-700">
            Why Choose Vans Glow Up Salon?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 text-center">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-base sm:text-lg mb-2">Experienced Stylist</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Years of hands-on experience in beauty services</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-base sm:text-lg mb-2">Easy Online Booking</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Book anytime through our mobile app</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-base sm:text-lg mb-2">Affordable Prices</h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Quality service that fits your budget</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a href="#services" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full transition text-sm sm:text-base hover:scale-105 active:scale-95">
            Explore Our Services
          </a>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-red-800">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            
            <div className="bg-white p-5 sm:p-6 rounded-xl border-t-4 border-red-400 border border-gray-200 transition">
              <p className="italic text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
               "Napakaganda ng service! Napakabait ng staff, at ramdam mo talaga 'yung effort nila sa bawat gupit. Ang ganda pa ng salon! Book agad ako ulit."
              </p>
              <p className="font-semibold text-red-700 text-sm sm:text-base">- Cathy P., First-Time Customer</p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 rounded-xl border-t-4 border-red-400 border border-gray-200 transition">
              <p className="italic text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
               "Ang linis at ganda ng Van's, nakakarelax! Sobrang galing magkulay ng stylist, hindi tinipid sa product. Highly recommended!"
              </p>
              <p className="font-semibold text-red-700 text-sm sm:text-base">- Mela D., First-Time Visit</p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 rounded-xl border-t-4 border-red-400 border border-gray-200 transition sm:col-span-2 lg:col-span-1">
              <p className="italic text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                "Sana noon pa sila nag-open! Ang bilis mag-book sa app, at affordable pa ang services.
              </p>
              <p className="font-semibold text-red-700 text-sm sm:text-base">- Liza A., New Regular</p>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;