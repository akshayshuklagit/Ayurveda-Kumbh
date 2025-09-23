import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";
import PageHeader from "../components/common/PageHeader";

const images = [
  "/assets/gallery/g2.jpg",
  "/assets/gallery/g3.jpg",
  "/assets/gallery/g4.jpg",
  "/assets/gallery/g5.jpg",
  "/assets/gallery/g6.jpg",
  "/assets/gallery/g7.jpg",
  "/assets/gallery/g8.jpg",
  "/assets/gallery/g9.jpg",
  "/assets/gallery/g10.jpg",
  "/assets/gallery/g11.jpg",
  "/assets/gallery/g12.jpg",
  "/assets/gallery/g13.jpg",
  "/assets/gallery/g14.jpg",
  "/assets/gallery/g15.jpg",
  "/assets/gallery/g16.jpg",
  "/assets/gallery/g17.jpg",
  "/assets/gallery/g18.jpg",
  "/assets/gallery/g19.jpg",
  "/assets/gallery/g20.jpg",
  "/assets/gallery/g21.jpg",
  "/assets/gallery/g22.jpg",
  "/assets/gallery/g23.jpg",
  "/assets/gallery/g27.jpg",
  "/assets/gallery/g29.jpg",
  "/assets/gallery/g26.jpg",
  "/assets/gallery/g28.jpg",
  "/assets/gallery/g25.jpg",
  "/assets/gallery/g31.jpg",
  "/assets/gallery/g32.jpg",
  "/assets/gallery/g33.jpg",
  "/assets/gallery/g34.jpg",
  "/assets/gallery/g35.jpg",
  "/assets/gallery/g36.jpg",
  "/assets/gallery/g37.jpg",
  "/assets/gallery/g38.jpg",
  "/assets/gallery/g39.jpg",
  "/assets/gallery/g40.jpg",
  "/assets/gallery/g41.jpg",
  "/assets/gallery/g42.jpg",
  "/assets/gallery/g43.jpg",
  "/assets/gallery/g44.jpg",
  "/assets/gallery/g45.jpg",
  "/assets/gallery/g46.jpg",
  "/assets/gallery/g47.jpg",
  "/assets/gallery/g48.jpg",
  "/assets/gallery/g49.jpg",
  "/assets/gallery/g50.jpg",
  "/assets/gallery/g51.jpg",
  "/assets/gallery/g52.jpg",
  "/assets/gallery/g53.jpg",
  "/assets/gallery/g54.jpg",
  "/assets/gallery/g55.jpg",
  "/assets/gallery/g56.jpg",
  "/assets/gallery/g57.jpg",
  "/assets/gallery/g59.jpg",
  "/assets/gallery/g61.jpg",
  "/assets/gallery/g62.jpg",

  "/assets/gallery/g64.jpg",
];

const ImageWithSkeleton = ({ src, alt, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {!isLoaded && (
        <div className="w-full h-64 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-64 object-cover hover:scale-105 transition-transform duration-300 ${
          isLoaded ? 'block' : 'hidden'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

const Gallery = () => {
  return (
    <>
      <PageHeader
        title="Gallery"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Gallery" }]}
      ></PageHeader>
      <section className="py-12 bg-background">
        <div className="container">
          <SectionTitle title="Gallery" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {images.map((src, index) => (
              <ImageWithSkeleton
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
