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
    <section id="gallery" className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-12 relative pb-4">
          <span className="relative z-10">Our Gallery</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-28 h-2 bg-purple-500 rounded-full animate-pulse-light"></span>
        </h2>
        
        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`py-2 px-6 rounded-full text-lg font-medium transition-all duration-300 ease-in-out
                ${filter === cat ? "bg-purple-600 text-white shadow-lg hover:bg-purple-700" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100">
          {filteredGalleryItems.length > 0 ? (
            filteredGalleryItems.map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => openLightbox(item)}
              >
                {/* Image with aspect ratio container */}
                <div className="w-full h-0 pb-[75%] relative bg-gray-200">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-80"
                    loading="lazy"
                  />
                </div>
              
                {/* Overlay for title/description on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-xl py-10">
              No items found for this category.
            </p>
          )}
        </div>

        {/* Updated Lightbox Modal */}
        {lightboxOpen && selectedImage && (
          <div
            onClick={closeLightbox}
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
            className="fixed inset-0 flex justify-center items-center z-50 cursor-pointer"
          >
            {/* Close button in upper-right corner, now outside the image div */}
            <button
              onClick={closeLightbox}
              aria-label="Close image"
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition z-50"
            >
              &#x2715;
            </button>
            
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-transparent max-w-3xl w-full max-h-[80vh] overflow-hidden relative cursor-default"
            >
              {/* Image */}
              <div className="flex justify-center items-center p-4">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              {/* Optional caption */}
              {selectedImage.alt && (
                <div className="bg-red-900 text-white text-center p-3 text-lg font-semibold select-none">
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