import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import PageHeader from "../components/common/PageHeader";

const images = [
  "src/assets/gallery/g2.jpg",
  "src/assets/gallery/g3.jpg",
  "src/assets/gallery/g4.jpg",
  "src/assets/gallery/g5.jpg",
  "src/assets/gallery/g6.jpg",
  "src/assets/gallery/g7.jpg",
  "src/assets/gallery/g8.jpg",
  "src/assets/gallery/g9.jpg",
  "src/assets/gallery/g10.jpg",
  "src/assets/gallery/g11.jpg",
  "src/assets/gallery/g12.jpg",
  "src/assets/gallery/g13.jpg",
  "src/assets/gallery/g14.jpg",
  "src/assets/gallery/g15.jpg",
  "src/assets/gallery/g16.jpg",
  "src/assets/gallery/g17.jpg",
  "src/assets/gallery/g18.jpg",
  "src/assets/gallery/g19.jpg",
  "src/assets/gallery/g20.jpg",
  "src/assets/gallery/g21.jpg",
  "src/assets/gallery/g22.jpg",
  "src/assets/gallery/g23.jpg",
  "src/assets/gallery/g27.jpg",
  "src/assets/gallery/g29.jpg",
  "src/assets/gallery/g26.jpg",
  "src/assets/gallery/g28.jpg",
  "src/assets/gallery/g25.jpg",

  "src/assets/gallery/g31.jpg",
  "src/assets/gallery/g32.jpg",
  "src/assets/gallery/g33.jpg",
  "src/assets/gallery/g34.jpg",
  "src/assets/gallery/g35.jpg",
  "src/assets/gallery/g36.jpg",
  "src/assets/gallery/g37.jpg",
  "src/assets/gallery/g38.jpg",
  "src/assets/gallery/g39.jpg",
  "src/assets/gallery/g40.jpg",
  "src/assets/gallery/g41.jpg",
  "src/assets/gallery/g42.jpg",
  "src/assets/gallery/g43.jpg",
  "src/assets/gallery/g44.jpg",
  "src/assets/gallery/g45.jpg",
  "src/assets/gallery/g46.jpg",
  "src/assets/gallery/g47.jpg",
  "src/assets/gallery/g48.jpg",
  "src/assets/gallery/g49.jpg",
  "src/assets/gallery/g50.jpg",
  "src/assets/gallery/g51.jpg",
  "src/assets/gallery/g52.jpg",
  "src/assets/gallery/g53.jpg",
  "src/assets/gallery/g54.jpg",
  "src/assets/gallery/g55.jpg",
  "src/assets/gallery/g56.jpg",
  "src/assets/gallery/g57.jpg",
  "src/assets/gallery/g59.jpg",
  "src/assets/gallery/g61.jpg",
  "src/assets/gallery/g62.jpg",

  "src/assets/gallery/g64.jpg",
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
