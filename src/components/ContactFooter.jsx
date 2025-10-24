import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function ContactFooter() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const termsContent = (
    <>
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-red-900">Terms and Conditions</h2>
      <p className="mb-3 sm:mb-4 font-medium text-gray-700 text-sm sm:text-base">Last Updated: January 2025</p>
      <p className="mb-3 sm:mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        By using Van's Glow Up Salon app and services, you agree to these terms.
      </p>
      <h3 className="font-semibold mt-4 sm:mt-6 mb-2 text-red-900 text-base sm:text-lg">Booking and Payments</h3>
      <p className="mb-3 sm:mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        Bookings must be confirmed. Cancellations require 24-hour notice. We accept GCash, Cash on service. 
      </p>
      <h3 className="font-semibold mt-4 sm:mt-6 mb-2 text-red-900 text-base sm:text-lg">Service Policies</h3>
      <p className="mb-3 sm:mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        Inform us of allergies or conditions. Results may vary. Minors need guardian consent.
      </p>
      <h3 className="font-semibold mt-4 sm:mt-6 mb-2 text-red-900 text-base sm:text-lg">User Accounts & Privacy</h3>
      <p className="mb-3 sm:mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        Keep your account secure and provide accurate info. We protect your data per our Privacy Policy.
      </p>
      <h3 className="font-semibold mt-4 sm:mt-6 mb-2 text-red-900 text-base sm:text-lg">Liability & Intellectual Property</h3>
      <p className="mb-3 sm:mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        We are not liable for indirect damages. All app content is owned by Van's Glow Up Salon.
      </p>
      <h3 className="font-semibold mt-4 sm:mt-6 mb-2 text-red-900 text-base sm:text-lg">Changes & Governing Law</h3>
      <p className="mb-3 sm:mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        Terms may change anytime. Use constitutes acceptance. Governed by Philippines law.
      </p>
      <p className="mt-6 sm:mt-8 text-gray-700 font-semibold text-sm sm:text-base">
        Contact us for questions: vansglowupsalon@gmail.com | +63 956 411 7744
      </p>
    </>
  );

  const privacyContent = (
    <>
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-red-900">Privacy Policy</h2>
      <p className="mb-3 sm:mb-4 font-medium text-gray-700 text-sm sm:text-base">Last Updated: January 2025</p>
      <p className="mb-3 sm:mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        We collect personal info (name, contact, payment) and usage data to improve your experience. We protect your data securely.
      </p>
      <h3 className="font-semibold mt-4 sm:mt-6 mb-2 text-red-900 text-base sm:text-lg">Use & Sharing</h3>
      <p className="mb-3 sm:mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        Data is used to manage bookings, payments, and communications. We do not sell your info. Shared only with trusted providers or legal requirements.
      </p>
      <h3 className="font-semibold mt-4 sm:mt-6 mb-2 text-red-900 text-base sm:text-lg">Your Rights</h3>
      <p className="mb-3 sm:mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        You may access, correct, or delete your data. Opt out of marketing anytime.
      </p>
      <h3 className="font-semibold mt-4 sm:mt-6 mb-2 text-red-900 text-base sm:text-lg">Security & Retention</h3>
      <p className="mb-3 sm:mb-4 text-gray-800 leading-relaxed text-sm sm:text-base">
        We use industry-standard security and keep data only as long as needed or legally required.
      </p>
      <p className="mt-6 sm:mt-8 text-gray-700 font-semibold text-sm sm:text-base">
        Contact us: vansglowupsalon2k25@gmail.com | +63 956 411 7744
      </p>
    </>
  );

  return (
    <div id="contact" className="bg-gray-200">
      <footer className="text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-6 sm:py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-red-900 mb-4 sm:mb-6 text-center">
            Van's Glow Up Salon
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-stretch">
            {/* Contact Info */}
            <div className="pr-0 md:pr-4 md:border-r border-gray-400 h-full">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-red-900">Contact</h3>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-gray-800">
                <li className="flex items-center gap-2 sm:gap-3">
                  <MdEmail className="text-lg sm:text-xl text-red-900 flex-shrink-0" />
                  <a
                    href="mailto:VansGlowUpSalon2k25@gmail.com"
                    className="hover:underline text-sm sm:text-base break-all"
                  >
                    VansGlowUpSalon2k25@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <MdPhone className="text-lg sm:text-xl text-red-900 flex-shrink-0" />
                  <a href="tel:+639389917000" className="hover:underline text-sm sm:text-base">
                    +63 956 411 7744
                  </a>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <MdLocationOn className="text-lg sm:text-xl text-red-900 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-red-900 text-sm sm:text-base">Visit Us</span>
                    <p className="text-xs sm:text-sm leading-tight text-gray-800 mt-1">
                      Blk 7 Lot 2 Phase 1 Sub Urban Village<br />
                      Brgy. San Jose Rodriguez Rizal, Philippines
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Store Hours */}
            <div className="px-0 md:px-4 md:border-r border-gray-400 h-full">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-red-900">Business Hours</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-800 text-sm sm:text-base">
                <li>
                  <span className="font-semibold text-red-900">Monday - Friday:</span>
                  <p>9:00 AM - 9:00 PM</p>
                </li>
                <li>
                  <span className="font-semibold text-red-900">Saturday:</span>
                  <p>9:00 AM - 9:00 PM</p>
                </li>
                <li>
                  <span className="font-semibold text-red-900">Sunday:</span>
                  <p>9:00 AM - 9:00 PM</p>
                </li>
                <li>
                  <span className="font-semibold text-red-900">Holidays:</span>
                  <p>By Appointment Only</p>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div className="pl-0 md:pl-4 h-full">
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <a
                  href="https://www.google.com/maps/place/DHALIA+SALON/@14.7527606,121.140007,3a,75y,358.61h,93.72t/data=!3m8!1e1!3m6!1s1XYYx1P5CGRuNC5P8n-s_w!2e0!5s20240201T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.719836212531348%26panoid%3D1XYYx1P5CGRuNC5P8n-s_w%26yaw%3D358.6066431000693!7i16384!8i8192!4m6!3m5!1s0x3397a4ccd3336411:0xdf88bba0b4df985e!8m2!3d14.7528255!4d121.1400074!16s%2Fg%2F11w33sfjnz?hl=en&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=-3.719836212531348&panoid=1XYYx1P5CGRuNC5P8n-s_w&yaw=358.6066431000693"
                    alt="Salon Location Preview"
                    className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover"
                  />
                  <div className="bg-red-900 text-white text-center py-2 text-xs sm:text-sm font-medium hover:bg-red-800 transition">
                    Get Directions
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Terms & Privacy */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12 text-xs sm:text-sm text-gray-800">
            <button
              onClick={() => setShowTerms(true)}
              className="hover:underline mx-1 text-red-900 font-semibold"
            >
              Terms and Conditions
            </button>
            <span className="mx-1">•</span>
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:underline mx-1 text-red-900 font-semibold"
            >
              Privacy Policy
            </button>
          </div>

          {/* Terms Modal */}
          {showTerms && (
            <div
              onClick={() => setShowTerms(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 z-50 cursor-pointer"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-3xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-y-auto rounded-lg p-6 sm:p-8 text-gray-900 cursor-default shadow-lg relative"
              >
                <button
                  onClick={() => setShowTerms(false)}
                  aria-label="Close Terms and Conditions"
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-red-900 text-xl sm:text-2xl font-bold hover:text-red-700 transition w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ✕
                </button>
                {termsContent}
              </div>
            </div>
          )}

          {/* Privacy Modal */}
          {showPrivacy && (
            <div
              onClick={() => setShowPrivacy(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 z-50 cursor-pointer"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-3xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-y-auto rounded-lg p-6 sm:p-8 text-gray-900 cursor-default shadow-lg relative"
              >
                <button
                  onClick={() => setShowPrivacy(false)}
                  aria-label="Close Privacy Policy"
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-red-900 text-xl sm:text-2xl font-bold hover:text-red-700 transition w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ✕
                </button>
                {privacyContent}
              </div>
            </div>
          )}
        </div>

        {/* Footer bottom */}
        <div className="bg-red-900">
          <div className="py-3 text-center text-xs sm:text-sm">
            © {new Date().getFullYear()} Van's Glow Up Salon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactFooter;