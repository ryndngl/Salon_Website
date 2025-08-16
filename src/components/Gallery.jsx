import { useState } from "react";

function Gallery() {
  const allGalleryItems = [
    { src: "/assets/galleryImages/G1.webp", category: "Nails" },
    { src: "/assets/galleryImages/G2.webp", category: "Eye Lashes" },
    { src: "/assets/galleryImages/G3.webp", category: "Nails" },
    { src: "/assets/galleryImages/G4.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G5.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G6.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G7.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G8.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G9.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G10.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G11.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G12.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G13.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G14.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G15.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G16.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G17.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G18.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G19.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G20.webp", category: "Hair Cut" },
    { src: "/assets/galleryImages/G21.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G22.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G23.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G24.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G25.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G26.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G27.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G28.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G29.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G30.webp", category: "Hair Color" },
    { src: "/assets/galleryImages/G31.webp", category: "Nails" },
    { src: "/assets/galleryImages/G32.webp", category: "Nails" },
    { src: "/assets/galleryImages/G33.webp", category: "Nails" },
    { src: "/assets/galleryImages/G34.webp", category: "Nails" },
    { src: "/assets/galleryImages/G35.webp", category: "Nails" },
    { src: "/assets/galleryImages/G36.webp", category: "Nails" },
    { src: "/assets/galleryImages/G37.webp", category: "Nails" },
    { src: "/assets/galleryImages/G38.webp", category: "Nails" },
    { src: "/assets/galleryImages/G39.webp", category: "Nails" },
    { src: "/assets/galleryImages/G40.webp", category: "Eye Lashes" },
    { src: "/assets/galleryImages/G41.webp", category: "Eye Lashes" },
    { src: "/assets/galleryImages/G42.webp", category: "Eye Lashes" },
    { src: "/assets/galleryImages/G43.webp", category: "Eye Lashes" },
    { src: "/assets/galleryImages/G44.webp", category: "Eye Lashes" },
    { src: "/assets/galleryImages/G45.webp", category: "Eye Lashes" },
    { src: "/assets/galleryImages/G46.webp", category: "Eye Lashes" },
    { src: "/assets/galleryImages/G47.webp", category: "Foot Spa" },
    { src: "/assets/galleryImages/G48.webp", category: "Foot Spa" },
    { src: "/assets/galleryImages/G49.webp", category: "Foot Spa" },
    { src: "/assets/galleryImages/G50.webp", category: "Foot Spa" },
    { src: "/assets/galleryImages/G51.webp", category: "Foot Spa" },
    { src: "/assets/galleryImages/G52.webp", category: "Foot Spa" },
    { src: "/assets/galleryImages/G53.webp", category: "Foot Spa" },
    { src: "/assets/galleryImages/G54.webp", category: "Foot Spa" }
  ];

  const categories = [
    "Hair Cut", 
    "Hair Color",
    "Nails",
    "Eye Lashes",
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