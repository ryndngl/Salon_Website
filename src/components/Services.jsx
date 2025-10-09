function Services() {
  const services = [
    {
      title: "Hair Cut",
      description: "Expert haircuts, and styling for every occasion.",
      image: "/assets/servicesImages/haircut.webp",
    },
    {
      title: "Hair Color",
      description: "Explore a spectrum of shades like blonde, brunette, and red, or more specific hues like auburn, chocolate, or honey.",
      image: "/assets/servicesImages/haircolor.webp",
    },
    {
      title: "Nail Care",
      description: "Indulge in our luxurious manicures and pedicures designed to pamper and beautify your hands and feet.",
      image: "/assets/servicesImages/nailcare.webp",
    },
    {
      title: "Hair Treatment",
      description: "Specialized treatments to nourish, strengthen, and revitalize your hair, making your big day even more beautiful.",
      image: "/assets/servicesImages/hairtreatment.webp",
    },
    {
      title: "Rebond & Chemical Forms",
      description: "Achieve smooth, sleek hair with our rebonding services: Rebond with Brazilian, Rebond with Botox, Rebond with Keratin, or Rebond with Cysteine.",
      image: "/assets/servicesImages/rebond.webp",
    },
    {
      title: "Foot Spa",
      description: "Experience ultimate relaxation with our expert foot spa services designed to relieve tension and soothe your body.",
      image: "/assets/servicesImages/foot.webp",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-red-50">
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-800 mb-8 sm:mb-10 md:mb-12 relative">
          <span className="relative z-10">Our Services</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-20 sm:w-28 md:w-36 h-2 bg-red-600 rounded-full"></span>
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 transition duration-300 hover:opacity-80 flex flex-col items-center border border-gray-200 cursor-pointer overflow-hidden"
              >
                <div className="w-full h-48 sm:h-56 md:h-64 mb-4 md:mb-6 overflow-hidden rounded-xl relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-800 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed flex-grow text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;