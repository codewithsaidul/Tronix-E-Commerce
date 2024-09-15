// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import "./index.css"

// import required modules
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={true}
        loop={true}
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[url('/slider1.png')] bg-cover bg-no-repeat object-cover bg-center py-20 rounded-3xl px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-title text-primary md:max-w-[500px] lg:max-w-[680px] mx-auto capitalize mb-2">
              Better Devices for Better Life
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray max-w-[680px] mx-auto">
              Discover the latest in technology with our premium selection of
              high-performance PCs, professional-grade cameras, and immersive
              headphones.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[url('/slider1.png')] bg-cover bg-no-repeat object-cover bg-center py-20 rounded-3xl px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-title text-primary md:max-w-[500px] lg:max-w-[680px] mx-auto capitalize mb-2">
              Better Devices for Better Life
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray max-w-[680px] mx-auto">
              Discover the latest in technology with our premium selection of
              high-performance PCs, professional-grade cameras, and immersive
              headphones.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[url('/slider1.png')] bg-cover bg-no-repeat object-cover bg-center py-20 rounded-3xl px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-title text-primary md:max-w-[500px] lg:max-w-[680px] mx-auto capitalize mb-2">
              Better Devices for Better Life
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray max-w-[680px] mx-auto">
              Discover the latest in technology with our premium selection of
              high-performance PCs, professional-grade cameras, and immersive
              headphones.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[url('/slider1.png')] bg-cover bg-no-repeat object-cover bg-center py-20 rounded-3xl px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-title text-primary md:max-w-[500px] lg:max-w-[680px] mx-auto capitalize mb-2">
              Better Devices for Better Life
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray max-w-[680px] mx-auto">
              Discover the latest in technology with our premium selection of
              high-performance PCs, professional-grade cameras, and immersive
              headphones.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[url('/slider1.png')] bg-cover bg-no-repeat object-cover bg-center py-20 rounded-3xl px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-title text-primary md:max-w-[500px] lg:max-w-[680px] mx-auto capitalize mb-2">
              Better Devices for Better Life
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray max-w-[680px] mx-auto">
              Discover the latest in technology with our premium selection of
              high-performance PCs, professional-grade cameras, and immersive
              headphones.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[url('/slider1.png')] bg-cover bg-no-repeat object-cover bg-center py-20 rounded-3xl px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-title text-primary md:max-w-[500px] lg:max-w-[680px] mx-auto capitalize mb-2">
              Better Devices for Better Life
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray max-w-[680px] mx-auto">
              Discover the latest in technology with our premium selection of
              high-performance PCs, professional-grade cameras, and immersive
              headphones.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[url('/slider1.png')] bg-cover bg-no-repeat object-cover bg-center py-20 rounded-3xl px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-title text-primary md:max-w-[500px] lg:max-w-[680px] mx-auto capitalize mb-2">
              Better Devices for Better Life
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray max-w-[680px] mx-auto">
              Discover the latest in technology with our premium selection of
              high-performance PCs, professional-grade cameras, and immersive
              headphones.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
