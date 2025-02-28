import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaHeart, FaPlay, FaShareAlt } from "react-icons/fa";
import { slides } from "./data";

export const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-300 p-6 rounded-lg">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <button className="text-white text-2xl">←</button>
              </div>
              <div className="text-white">
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="text-lg text-yellow-300">Por {slide.artist}</p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="flex items-center gap-2">
                    <FaPlay /> {slide.plays} Reproduções
                  </span>
                  <span className="flex items-center gap-2">
                    <FaHeart /> {slide.likes}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaShareAlt /> {slide.shares}
                  </span>
                </div>
              </div>
              <img src={slide.image} alt={slide.title} className="w-40 rounded-lg" />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <button className="text-white text-2xl">→</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
