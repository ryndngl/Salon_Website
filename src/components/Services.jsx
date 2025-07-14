
// --- Local Image Imports ---
import haircutImage from '../assets/haircut.webp';
import haircolorImage from '../assets/haircolor.webp';
import nailcareImage from '../assets/nailcare.webp';
import hairtreatmentImage from '../assets/hairtreatment.webp';
import footImage from '../assets/foot.webp';
import rebondImage from '../assets/rebond.webp';

function Services() {
  const services = [
    {
      title: "Hair Styling",
      description: "Expert haircuts, and styling for every occasion.",
      image: haircutImage,
    },
    {
      title: "Hair Color",
      description: "Explore a spectrum of shades like blonde, brunette, and red, or more specific hues like auburn, chocolate, or honey.",
      image: haircolorImage,
    },
    {
      title: "Nail Care",
      description: "Indulge in our luxurious manicures and pedicures designed to pamper and beautify your hands and feet.",
      image: nailcareImage,
    },
    {
      title: "Hair Treatment",
      description: "Specialized treatments to nourish, strengthen, and revitalize your hair, making your big day even more beautiful.",
      image: hairtreatmentImage,
    },
    {
      title: "Rebond & Chemical Forms",
      description: "Achieve smooth, sleek hair with our rebonding services: Rebond with Brazilian, Rebond with Botox, Rebond with Keratin, or Rebond with Cysteine.",
      image: rebondImage,
    },
    {
      title: "Foot Spa",
      description: "Experience ultimate relaxation with our expert foot spa services designed to relieve tension and soothe your body.",
      image: footImage,
    },
  ];

  return (
    <section id="services" className="py-20 bg-red-50">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-red-800 mb-12 relative">
          <span className="relative z-10">Our Services</span>
          {/* Responsive underline width */}
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 sm:w-32 md:w-40 h-2 bg-red-600 rounded-full animate-pulse-light"></span>
        </h2>

        {/* Outer flex container to center the entire grid group */}
        <div className="flex justify-center">
          {/* Main grid for larger screens (lg: and up) - ALREADY RESPONSIVE! */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`
                  bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl hover:-translate-y-3
                  flex flex-col items-center border border-gray-100 cursor-pointer overflow-hidden
                `}
              >
                {/* Image Container with Responsive Aspect Ratio or Height */}
                <div className="w-full h-48 sm:h-56 md:h-64 mb-6 overflow-hidden rounded-xl shadow-inner relative group"> {/* Responsive height */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transform transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay for title on image hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-base sm:text-lg font-bold text-white">{service.title}</p> {/* Responsive font size */}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-red-800 mb-3">{service.title}</h3> {/* Responsive font size */}
                <p className="text-sm sm:text-base leading-relaxed flex-grow text-gray-700">{service.description}</p> {/* Responsive font size */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;