import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Smartphone } from 'lucide-react';

// Import your images
import splashScreen from '../assets/mobile-app/splash-screen.png';
import homeContent from '../assets/mobile-app/home-content.png';
import hairCut from '../assets/mobile-app/hair-cut.png';
import hairColor from '../assets/mobile-app/hair-color.png';
import myBookings from '../assets/mobile-app/my-bookings.png';
import profileScreen from '../assets/mobile-app/profile-screen.png';

export default function MobileAppPreview() {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  const screens = [
    {
      title: "Welcome to Van's Glow up Salon",
      description: "Beautiful splash screen that greets users when they open the app",
      image: splashScreen
    },
    {
      title: "Browse All Services",
      description: "Easy access to all salon services - Hair, Nails, Spa, and more",
      image: homeContent
    },
    {
      title: "Hair Cut Options",
      description: "Browse haircut styles for Men, Women, and Kids with prices",
      image: hairCut
    },
    {
      title: "Hair Color Styles",
      description: "Explore vibrant colors and transformations for your look",
      image: hairColor
    },
    {
      title: "My Bookings",
      description: "Track and manage your appointments in one place",
      image: myBookings
    },
    {
      title: "Profile & Settings",
      description: "View your favorites, past bookings, and payment methods",
      image: profileScreen
    }
  ];

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div id="mobile-app" className="min-h-screen bg-gradient-to-br  from-gray-900 via-gray-800 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Smartphone className="w-4 h-4" />
            Mobile App
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Mobile App Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Book your favorite salon services anytime, anywhere with our easy-to-use mobile app
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Phone Mockup - Android Version */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>

            {/* Phone Frame - Android Style - Better proportions */}
             <div className="relative w-[340px] h-[720px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl shadow-red-900/50">
             <div className="w-full h-full bg-gray-100 rounded-[2rem] overflow-hidden relative">

            {/* Android top bar (subtle) */}
             <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/10 to-transparent z-10"></div>
    
             {/* Actual Screenshot */}
            <img 
             src={screens[currentScreen].image} 
             alt={screens[currentScreen].title}
             className="w-full h-full object-cover transition-all duration-500"
             />
            </div>
            </div>

              {/* Navigation Buttons - Plain/Transparent */}
              <button 
                onClick={prevScreen}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 rounded-full p-4 hover:bg-white/10 transition group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition" />
              </button>
              <button 
                onClick={nextScreen}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 rounded-full p-4 hover:bg-white/10 transition group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition" />
              </button>

              {/* Screen Counter */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm font-medium">
                {currentScreen + 1} / {screens.length}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="text-red-400 font-bold text-sm mb-2">
                  FEATURE {currentScreen + 1}
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white leading-tight">
                {screens[currentScreen].title}
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed">
                {screens[currentScreen].description}
              </p>
            </div>

            {/* Dots Navigation */}
            <div className="flex gap-3">
              {screens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreen(index)}
                  className={`transition-all rounded-full ${
                    currentScreen === index 
                      ? 'bg-red-600 w-12 h-3' 
                      : 'bg-gray-700 w-3 h-3 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">6</div>
                <div className="text-sm text-gray-400">Services Available</div>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">4.9★</div>
                <div className="text-sm text-gray-400">App Rating</div>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Online Booking</div>
              </div>
            </div>

            {/* Download Button - APK Only */}
            <div className="pt-8">
              <button className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold transition flex items-center justify-center gap-3 group">
                <Download className="w-6 h-6 group-hover:translate-y-1 transition" />
                Download APK
              </button>
              <p className="text-center text-gray-500 text-sm mt-3">
                For Android devices only
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}