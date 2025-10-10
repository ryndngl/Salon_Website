import { useState } from "react";

function Gallery() {
  const allGalleryItems = [
    // Hair Cut - Kids
    { src: "/assets/HairCut/kids1.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/kids2.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/kids3.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/kids4.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/kids5.webp", category: "Hair Cut" },
    
    // Hair Cut - Men
    { src: "/assets/HairCut/men1.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/men2.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/men3.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/men4.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/men5.webp", category: "Hair Cut" },
    
    // Hair Cut - Women
    { src: "/assets/HairCut/women1.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/women2.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/women3.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/women4.webp", category: "Hair Cut" },
    { src: "/assets/HairCut/women5.webp", category: "Hair Cut" },
    
    // Hair Color
    { src: "/assets/HairColor/hair-color1.webp", category: "Hair Color" },
    { src: "/assets/HairColor/hair-color2.webp", category: "Hair Color" },
    { src: "/assets/HairColor/hair-color3.webp", category: "Hair Color" },
    { src: "/assets/HairColor/hair-color4.webp", category: "Hair Color" },
    { src: "/assets/HairColor/hair-color5.webp", category: "Hair Color" },
    { src: "/assets/HairColor/hair-color6.webp", category: "Hair Color" },
    { src: "/assets/HairColor/hair-color7.webp", category: "Hair Color" },
    { src: "/assets/HairColor/hair-color8.webp", category: "Hair Color" },
    { src: "/assets/HairColor/hair-color9.webp", category: "Hair Color" },
    { src: "/assets/HairColor/hair-color10.webp", category: "Hair Color" },
    
    // Nail Care
    { src: "/assets/NailCare/nails1.webp", category: "Nail Care" },
    { src: "/assets/NailCare/nails2.webp", category: "Nail Care" },
    { src: "/assets/NailCare/nails3.webp", category: "Nail Care" },
    { src: "/assets/NailCare/nails4.webp", category: "Nail Care" },
    { src: "/assets/NailCare/nails5.webp", category: "Nail Care" },
    { src: "/assets/NailCare/nails6.webp", category: "Nail Care" },
    { src: "/assets/NailCare/nails7.webp", category: "Nail Care" },
    { src: "/assets/NailCare/nails8.webp", category: "Nail Care" },
    
    // Rebond & Forms
    { src: "/assets/Rebond/rebond1.webp", category: "Rebond & Forms" },
    { src: "/assets/Rebond/rebond2.webp", category: "Rebond & Forms" },
    { src: "/assets/Rebond/rebond3.webp", category: "Rebond & Forms" },
    { src: "/assets/Rebond/rebond4.webp", category: "Rebond & Forms" },
    { src: "/assets/Rebond/rebond5.webp", category: "Rebond & Forms" },
    
    // Hair Treatment
    { src: "/assets/HairTreatment/hair-treatment1.webp", category: "Hair Treatment" },
    { src: "/assets/HairTreatment/hair-treatment2.webp", category: "Hair Treatment" },
    { src: "/assets/HairTreatment/hair-treatment3.webp", category: "Hair Treatment" },
    { src: "/assets/HairTreatment/hair-treatment4.webp", category: "Hair Treatment" },
    { src: "/assets/HairTreatment/hair-treatment5.webp", category: "Hair Treatment" },
    { src: "/assets/HairTreatment/hair-treatment6.webp", category: "Hair Treatment" },
    { src: "/assets/HairTreatment/hair-treatment7.webp", category: "Hair Treatment" },
    { src: "/assets/HairTreatment/hair-treatment8.webp", category: "Hair Treatment" },
    
    // Foot Spa
    { src: "/assets/FootSpa/foot-spa1.webp", category: "Foot Spa" },
    { src: "/assets/FootSpa/foot-spa2.webp", category: "Foot Spa" },
    { src: "/assets/FootSpa/foot-spa3.webp", category: "Foot Spa" },
    { src: "/assets/FootSpa/foot-spa4.webp", category: "Foot Spa" },
    { src: "/assets/FootSpa/foot-spa5.webp", category: "Foot Spa" },
    { src: "/assets/FootSpa/foot-spa6.webp", category: "Foot Spa" },
    { src: "/assets/FootSpa/foot-spa7.webp", category: "Foot Spa" },
    { src: "/assets/FootSpa/foot-spa8.webp", category: "Foot Spa" }
  ];

  const categories = [
    "Hair Cut", 
    "Hair Color",
    "Nail Care",
    "Rebond & Forms",
    "Hair Treatment",
    "Foot Spa",
  ];
  
  const [filter, setFilter] = useState(categories[0]);
  const filteredGalleryItems = allGalleryItems.filter((item) => item.category === filter);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-800 mb-8 sm:mb-10 md:mb-12 relative pb-4">
          <span className="relative z-10">Our Gallery</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 sm:w-24 md:w-28 h-2 bg-purple-500 rounded-full animate-pulse-light"></span>
        </h2>
        
        {/* Category Filters */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`py-2 px-4 sm:px-5 md:px-6 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 ease-in-out
                ${filter === cat ? "bg-purple-600 text-white shadow-lg hover:bg-purple-700" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100">
          {filteredGalleryItems.length > 0 ? (
            filteredGalleryItems.map((item, index) => (
              <div
                key={index}
                className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-md group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => openLightbox(item)}
              >
                <div className="w-full h-0 pb-[75%] relative bg-gray-200">
                  <img
                    src={item.src}
                    alt={item.alt || item.category}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-80"
                    loading="lazy"
                  />
                </div>
              
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-3 md:p-4">
                  <p className="text-white text-sm sm:text-base md:text-lg font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {item.alt || item.category}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-base sm:text-lg md:text-xl py-10">
              No items found for this category.
            </p>
          )}
        </div>

        {/* Lightbox Modal - Mobile Optimized */}
        {lightboxOpen && selectedImage && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 cursor-pointer p-2 sm:p-4"
          >
            <button
              onClick={closeLightbox}
              aria-label="Close image"
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl font-bold hover:text-gray-300 transition z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-white/10"
            >
              ✕
            </button>
            
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-transparent max-w-3xl w-full max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh] overflow-hidden relative cursor-default"
            >
              <div className="flex justify-center items-center p-2 sm:p-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt || selectedImage.category}
                  className="w-full h-auto max-h-[80vh] sm:max-h-[75vh] object-contain rounded-lg"
                />
              </div>

              {selectedImage.alt && (
                <div className="bg-red-900 text-white text-center p-2 sm:p-3 text-sm sm:text-base md:text-lg font-semibold select-none">
                  {selectedImage.alt}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;