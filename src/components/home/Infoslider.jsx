// components/home/HealthCampSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/assets/highlights/s1.jpg",
  "/assets/highlights/s2.jpg",
  "/assets/highlights/s3.jpg",
  "/assets/highlights/s4.jpg",
  "/assets/highlights/s5.jpg",
  "/assets/highlights/s6.jpg",
  "/assets/highlights/s7.jpg",
  "/assets/highlights/s8.jpg",
  "/assets/highlights/s9.jpg",
  "/assets/highlights/s10.jpg",
  "/assets/highlights/s11.jpg",
  "/assets/highlights/s12.jpg",
  "/assets/highlights/s13.jpg",
  "/assets/highlights/s14.jpg",
  "/assets/highlights/s15.jpg",
  "/assets/highlights/s16.jpg",
  "/assets/highlights/s17.jpg",
  "/assets/highlights/s18.jpg",
];
const Infoslider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false, // keeps autoplay after manual nav
      }}
      breakpoints={{
        320: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-xl shadow-md p-2 h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
            <img
              src={img}
              alt={`Highlight ${index + 1}`}
              className="w-auto h-full object-contain rounded-lg"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Infoslider;
