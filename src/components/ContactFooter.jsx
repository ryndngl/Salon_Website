import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function ContactFooter() {
  return (
    <div id="contact" className="bg-gray-200">
      <footer className="text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-10">
          {/* Salon Name */}
          <h2 className="text-2xl font-bold text-red-900 mb-8">
            Van's Glow Up Salon
          </h2>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="md:pr-8 border-b md:border-b-0 md:border-r border-gray-400">
              <h3 className="text-lg font-semibold mb-4 text-red-900">Contact</h3>
              <ul className="space-y-2 mb-6 text-gray-800">
                <li className="flex items-center gap-2">
                  <MdEmail className="text-xl text-red-900" />
                  <a
                    href="mailto:Van'sGlowUpSalon@email.com"
                    className="hover:underline"
                  >
                    Van'sGlowUpSalon@email.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MdPhone className="text-xl text-red-900" />
                  <a href="tel:+639389917000" className="hover:underline">
                    +63 (938) 991 7000
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MdLocationOn className="text-xl text-red-900" />
                  <span>Visit Us</span>
                </li>
              </ul>

              {/* Address */}
              <div className="text-sm leading-relaxed text-gray-800">
                <p>Blk 7 Lot 2 Phase 1 Sub Urban Village</p>
                <p>Brgy. San Jose Rodriguez Rizal, Philippines</p>
              </div>
            </div>

            {/* Right Column - Clickable Map Preview */}
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <a
                href="https://www.google.com/maps/place/DHALIA+SALON/@14.7527606,121.140007,3a,75y,358.61h,93.72t/data=!3m8!1e1!3m6!1s1XYYx1P5CGRuNC5P8n-s_w!2e0!5s20240201T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.719836212531348%26panoid%3D1XYYx1P5CGRuNC5P8n-s_w%26yaw%3D358.6066431000693!7i16384!8i8192!4m6!3m5!1s0x3397a4ccd3336411:0xdf88bba0b4df985e!8m2!3d14.7528255!4d121.1400074!16s%2Fg%2F11w33sfjnz?hl=en&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=-3.719836212531348&panoid=1XYYx1P5CGRuNC5P8n-s_w&yaw=358.6066431000693"
                  alt="Salon Location Preview"
                  className="w-full h-[250px] object-cover"
                />
                <div className="bg-red-900 text-white text-center py-2 text-sm font-medium hover:bg-red-800 transition">
                  Get Directions
                </div>
              </a>
            </div>
          </div>

          {/* Terms & Privacy */}
          <div className="text-center mt-16 text-sm text-gray-800">
            <a href="#" className="hover:underline mx-1">
              Terms of Condition
            </a>
            <span className="mx-1">•</span>
            <a href="#" className="hover:underline mx-1">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-red-900">
          <div className="py-3 text-center text-sm">
            © {new Date().getFullYear()} Van's Glow Up Salon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactFooter;
