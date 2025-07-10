import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Contact() {
  return (
    <section
      id="contact"
      className="pt-20 md:pt-32 pb-0 bg-gradient-to-br from-purple-50 to-pink-100 relative overflow-hidden"
    >
      {/* Subtle Background Shapes for visual interest, consistent with other sections */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        {/* Contact Us Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 text-center mb-16 relative pb-4 tracking-tight">
          <span className="relative z-10">Get In Touch</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-36 h-2 bg-indigo-600 rounded-full animate-pulse-light"></span>
        </h2>

        {/* Main Contact Card / Information Box */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 animate-fade-in-up">
          <p className="text-gray-700 text-lg text-center mb-10 leading-relaxed">
            Have questions or want to book an appointment? We're here to help
            you achieve your perfect glow! Contact us today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            {/* Email Contact */}
            <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <MdEmail className="text-5xl text-blue-600 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Email Us
              </h4>
              <a
                href="mailto:vansglowupsalon@email.com"
                className="text-blue-700 hover:underline font-medium text-sm"
              >
                Van'sGlowUpSalon@email.com
              </a>
            </div>

            {/* Phone Contact */}
            <div className="flex flex-col items-center p-4 bg-pink-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <MdPhone className="text-5xl text-pink-600 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Call Us
              </h4>
              <a
                href="tel:+639389917000"
                className="text-pink-700 hover:underline font-medium text-sm"
              >
                +63 (938) 991 7000
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <MdLocationOn className="text-5xl text-purple-600 mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Visit Us
              </h4>
              <p className="text-purple-700 font-medium text-sm leading-relaxed">
                Blk 7 Lot 2 Phase 1 Sub Urban Village Brgy. San Jose Rodriguez
                Rizal
              </p>
            </div>
          </div>

          {/* Book an Appointment Button */}
          <div className="text-center mt-10">
            <a
              href="tel:+639389917000"
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700
                                                text-white font-bold py-4 px-12 rounded-full transition-all duration-300shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xl inline-block"
            >
              Book Your Appointment Now!
            </a>
          </div>
        </div>

        {/* Google Map Embed - ADJUSTED: Changed 'mb-0' to 'mb-16' for bottom margin */}
        {/* Replace the src with your actual Google Maps embed link */}
        <div className="mt-20 mb-16 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 animate-fade-in-up animation-delay-400 bg-white p-8">
          <h3 className="text-3xl font-extrabold text-indigo-900 text-center mb-8">
            Find Us on the Map
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.4018260199996!2d121.16850311486608!3d14.8690380896001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339798f0e0c8d76d%3A0x6b8d21b76a0d4c81!2sSan%20Jose%20Rodriguez%20Rizal%2C%20Philippines!5e0!3m2!1sen!2sph!4v1678901234567!5m2!1sen!2sph" // REPLACE WITH YOUR ACTUAL EMBED MAP LINK!
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Salon Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
