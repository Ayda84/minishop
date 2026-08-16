
import { Swiper, SwiperSlide } from "swiper/react";


import { Autoplay, Pagination, Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import pic1 from "../image/slider/pic1.webp";
import pic2 from "../image/slider/pic2.webp";
import pic3 from "../image/slider/pic3.webp";
import pic4 from "../image/slider/pic4.webp";
import pic5 from "../image/slider/pic5.webp";

const MySlider = () => {
  return (
    <div className="w-full md:mt-3 mt-6">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full"
      >
        <SwiperSlide className="w-full h-128 flex items-center justify-center text-white text-2xl w-full">
          <img src={pic1} alt="slider" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-128 flex items-center justify-center text-white text-2xl">
          <img src={pic2} alt="slider" />
        </SwiperSlide>

        <SwiperSlide className="w-full h-128 flex items-center justify-center text-white text-2xl">
          <img src={pic3} alt="slider" />
        </SwiperSlide>

        <SwiperSlide className="w-full h-128 flex items-center justify-center text-white text-2xl">
          <img src={pic4} alt="slider" />
        </SwiperSlide>

        <SwiperSlide className="w-full h-128 flex items-center justify-center text-white text-2xl">
          <img src={pic5} alt="slider" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySlider;
