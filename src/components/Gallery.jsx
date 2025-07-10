import React, { useState } from "react";

import galleryImage1 from "../assets/G1.webp";
import galleryImage2 from "../assets/G2.webp";
import galleryImage3 from "../assets/G3.webp";
import galleryImage4 from "../assets/G4.webp";
import galleryImage5 from "../assets/G5.webp";
import galleryImage6 from "../assets/G6.webp";
import galleryImage7 from "../assets/G7.webp";
import galleryImage8 from "../assets/G8.webp";
import galleryImage9 from "../assets/G9.webp";
import galleryImage10 from "../assets/G10.webp";
import galleryImage11 from "../assets/G11.webp";
import galleryImage12 from "../assets/G12.webp";
import galleryImage13 from "../assets/G13.webp";
import galleryImage14 from "../assets/G14.webp";
import galleryImage15 from "../assets/G15.webp";
import galleryImage16 from "../assets/G16.webp";
import galleryImage17 from "../assets/G17.webp";
import galleryImage18 from "../assets/G18.webp";
import galleryImage19 from "../assets/G19.webp";
import galleryImage20 from "../assets/G20.webp";
import galleryImage21 from "../assets/G21.webp";
import galleryImage22 from "../assets/G22.webp";
import galleryImage23 from "../assets/G23.webp";
import galleryImage24 from "../assets/G24.webp";
import galleryImage25 from "../assets/G25.webp";
import galleryImage26 from "../assets/G26.webp";
import galleryImage27 from "../assets/G27.webp";
import galleryImage28 from "../assets/G28.webp";
import galleryImage29 from "../assets/G29.webp";
import galleryImage30 from "../assets/G30.webp";
import galleryImage31 from "../assets/G31.webp";
import galleryImage32 from "../assets/G32.webp";
import galleryImage33 from "../assets/G33.webp";
import galleryImage34 from "../assets/G34.webp";
import galleryImage35 from "../assets/G35.webp";
import galleryImage36 from "../assets/G36.webp";
import galleryImage37 from "../assets/G37.webp";
import galleryImage38 from "../assets/G38.webp";
import galleryImage39 from "../assets/G39.webp";
import galleryImage40 from "../assets/G40.webp";
import galleryImage41 from "../assets/G41.webp";
import galleryImage42 from "../assets/G42.webp";
import galleryImage43 from "../assets/G43.webp";
import galleryImage44 from "../assets/G44.webp";
import galleryImage45 from "../assets/G45.webp";
import galleryImage46 from "../assets/G46.webp";
import galleryImage47 from "../assets/G47.webp";
import galleryImage48 from "../assets/G48.webp";
import galleryImage49 from "../assets/G49.webp";
import galleryImage50 from "../assets/G50.webp";
import galleryImage51 from "../assets/G51.webp";
import galleryImage52 from "../assets/G52.webp";
import galleryImage53 from "../assets/G53.webp";
import galleryImage54 from "../assets/G54.webp";



function Gallery() {
  const allGalleryItems = [
    { src: galleryImage1, category: "Nails" },
    { src: galleryImage2, category: "Eye Lashes",},
    { src: galleryImage3, category: "Nails" },
    { src: galleryImage4, category: "Hair Styling" },
    { src: galleryImage5, category: "Hair Color" },
    { src: galleryImage6, category: "Hair Styling" },
    { src: galleryImage7, category: "Hair Styling" },
    { src: galleryImage8, category: "Hair Styling" },
    { src: galleryImage9, category: "Hair Styling" },
    { src: galleryImage10, category: "Hair Styling" },
    { src: galleryImage11, category: "Hair Styling" },
    { src: galleryImage12, category: "Hair Styling" },
    { src: galleryImage13, category: "Hair Styling" },
    { src: galleryImage14, category: "Hair Styling" },
    { src: galleryImage15, category: "Hair Styling" },
    { src: galleryImage16, category: "Hair Styling" },
    { src: galleryImage17, category: "Hair Styling" },
    { src: galleryImage18, category: "Hair Styling" },
    { src: galleryImage19, category: "Hair Styling" },
    { src: galleryImage20, category: "Hair Styling" },
    { src: galleryImage21, category: "Hair Color" },
    { src: galleryImage22, category: "Hair Color" },
    { src: galleryImage23, category: "Hair Color" },
    { src: galleryImage24, category: "Hair Color" },
    { src: galleryImage25, category: "Hair Color" },
    { src: galleryImage26, category: "Hair Color" },
    { src: galleryImage27, category: "Hair Color" },
    { src: galleryImage28, category: "Hair Color" },
    { src: galleryImage29, category: "Hair Color" },
    { src: galleryImage30, category: "Hair Color" },
    { src: galleryImage31, category: "Nails" },
    { src: galleryImage32, category: "Nails" },
    { src: galleryImage33, category: "Nails" },
    { src: galleryImage34, category: "Nails" },
    { src: galleryImage35, category: "Nails" },
    { src: galleryImage36, category: "Nails" },
    { src: galleryImage37, category: "Nails" },
    { src: galleryImage38, category: "Nails" },
    { src: galleryImage39, category: "Nails" },
    { src: galleryImage40, category: "Eye Lashes" },
    { src: galleryImage41, category: "Eye Lashes" },
    { src: galleryImage42, category: "Eye Lashes" },
    { src: galleryImage43, category: "Eye Lashes" },
    { src: galleryImage44, category: "Eye Lashes" },
    { src: galleryImage45, category: "Eye Lashes" },
    { src: galleryImage46, category: "Eye Lashes" },
    { src: galleryImage47, category: "Foot Spa" },
    { src: galleryImage48, category: "Foot Spa" },
    { src: galleryImage49, category: "Foot Spa" },
    { src: galleryImage50, category: "Foot Spa" },
    { src: galleryImage51, category: "Foot Spa" },
    { src: galleryImage52, category: "Foot Spa" },
    { src: galleryImage53, category: "Foot Spa" },
    { src: galleryImage54, category: "Foot Spa" }
    
    
    
    
    
    
  ];

  const categories = [
    "All",
    "Hair Styling",
    "Hair Color",
    "Nails",
    "Eye Lashes",
    "Foot Spa",
  ];
  const [filter, setFilter] = useState("All");

  const filteredGalleryItems =
    filter === "All"
      ? allGalleryItems
      : allGalleryItems.filter((item) => item.category === filter);

  // State to manage the lightbox
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
// bg-pink-600 rounded-full animate-pulse-light
  return (
    <section
      id="gallery"
      className="py-20 md:py-32 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      {" "}
      {/* Changed gradient background for a fresh look */}
      <div className="container mx-auto px-4 text-center max-w-7xl">
        {" "}
        {/* Increased max-width */}
        {/* Heading and Underline for Gallery */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-12 relative pb-4">
          {" "}
          {/* Changed text color */}
          <span className="relative z-10">Our Gallery</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-28 h-2 bg-purple-500 rounded-full animate-pulse-light"></span>{" "}
          {/* Changed underline color */}
        </h2>
        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`  py-2 px-6 rounded-full text-lg font-medium transition-all duration-300 ease-in-out
              ${filter === cat? "bg-purple-600 text-white shadow-lg hover:bg-purple-700": "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100" }`}>
              {cat}
            </button>
          ))}
        </div>
        {/* --- Image Grid (Replaces Carousel) --- */}
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
                  {" "}
                  {/* 4:3 aspect ratio */}
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
        {/* --- Lightbox Modal (Retained) --- */}
        {lightboxOpen && selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain cursor-zoom-out"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-4xl font-bold bg-black bg-opacity-60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-80 transition z-50"
                aria-label="Close image"
              >
                &times;
              </button>
              {selectedImage.alt && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center text-lg">
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
