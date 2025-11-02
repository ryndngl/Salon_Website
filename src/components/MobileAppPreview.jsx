import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Download, Smartphone } from "lucide-react";

export default function MobileAppPreview() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      title: "Welcome to Van's Glow up Salon",
      description:
        "Beautiful splash screen that greets users when they open the app",
      image: "/assets/mobile-app/splash-screen.png",
    },
    {
      title: "Browse All Services",
      description:
        "Easy access to all salon services - Hair, Nails, Spa, and more",
      image: "/assets/mobile-app/home-content.png",
    },
    {
      title: "Hair Cut Options",
      description: "Browse haircut styles for Men, Women, and Kids with prices",
      image: "/assets/mobile-app/hair-cut.png",
    },
    {
      title: "Hair Color Styles",
      description: "Explore vibrant colors and transformations for your look",
      image: "/assets/mobile-app/hair-color.png",
    },
    {
      title: "My Bookings",
      description: "Track and manage your appointments in one place",
      image: "/assets/mobile-app/my-bookings.png",
    },
    {
      title: "Profile & Settings",
      description: "View your favorites, past bookings, and payment methods",
      image: "/assets/mobile-app/profile-screen.png",
    },
  ];

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div
      id="mobile-app"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 sm:py-16 md:py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 text-red-400 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
            Mobile App
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Mobile App Features
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Book your favorite salon services anytime, anywhere with our
            easy&#8209;to&#8209;use mobile app
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Phone Mockup - Responsive */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements - hidden on small screens */}
              <div className="hidden sm:block absolute -top-10 -left-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl"></div>
              <div className="hidden sm:block absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>

              {/* Phone Frame - Responsive sizing */}
              <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[660px] md:w-[340px] md:h-[720px] bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl shadow-red-900/50">
                <div className="w-full h-full bg-gray-100 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden relative">
                  {/* Android top bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 to-transparent z-10"></div>

                  {/* Screenshot */}
                  <img
                    src={screens[currentScreen].image}
                    alt={screens[currentScreen].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>

              {/* Navigation Buttons - Better mobile positioning */}
              <button
                onClick={prevScreen}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 sm:-translate-x-12 md:-translate-x-16 rounded-full p-2 sm:p-3 md:p-4 hover:bg-white/10 transition group"
                aria-label="Previous screen"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition" />
              </button>
              <button
                onClick={nextScreen}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 sm:translate-x-12 md:translate-x-16 rounded-full p-2 sm:p-3 md:p-4 hover:bg-white/10 transition group"
                aria-label="Next screen"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition" />
              </button>

              {/* Screen Counter */}
              <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-xs sm:text-sm font-medium">
                {currentScreen + 1} / {screens.length}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 sm:space-y-8 px-4 lg:px-0 mt-8 lg:mt-0">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-block">
                <div className="text-red-400 font-bold text-xs sm:text-sm mb-2">
                  FEATURE {currentScreen + 1}
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                {screens[currentScreen].title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                {screens[currentScreen].description}
              </p>
            </div>

            {/* Dots Navigation */}
            <div className="flex gap-2 sm:gap-3">
              {screens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreen(index)}
                  className={`transition-all rounded-full ${
                    currentScreen === index
                      ? "bg-red-600 w-8 sm:w-10 md:w-12 h-2.5 sm:h-3"
                      : "bg-gray-700 w-2.5 sm:w-3 h-2.5 sm:h-3 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to screen ${index + 1}`}
                />
              ))}
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Happy Clients
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  6
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Services Available
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  4.9★
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  App Rating
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Online Booking
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="pt-4 sm:pt-6 md:pt-8">
              <a
                href="https://github.com/ryndngl/BooknGlow-mobile/releases/download/v1.0.0/booknglow.apk"
                download
                className="w-full bg-green-600 text-white py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition flex items-center justify-center gap-2 sm:gap-3 group hover:bg-green-700 active:scale-95"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition" />
                Download APK
              </a>
              <p className="text-center text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">
                For Android devices only
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
