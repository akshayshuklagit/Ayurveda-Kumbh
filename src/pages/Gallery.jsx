import React from "react";
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
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
