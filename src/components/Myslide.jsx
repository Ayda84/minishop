// وارد کردن کامپوننت‌های اصلی
import { Swiper, SwiperSlide } from "swiper/react";

// وارد کردن ماژول‌ها از مسیر صحیح
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// وارد کردن استایل‌ها
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MySlider = () => {
  return (
    <div className="w-full md:mt-3 mt-6">
      <Swiper
        // اینجا حتما باید Autoplay را در آرایه ماژول‌ها قرار دهی
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
          <img src="./src/image/slider/pic1.webp" alt="slider" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-128 flex items-center justify-center text-white text-2xl">
          <img src="./src/image/slider/pic2.webp" alt="slider" />
        </SwiperSlide>

        <SwiperSlide className="w-full h-128 flex items-center justify-center text-white text-2xl">
          <img src="./src/image/slider/pic3.webp" alt="slider" />
        </SwiperSlide>

        <SwiperSlide className="w-full h-128 flex items-center justify-center text-white text-2xl">
          <img src="./src/image/slider/pic4.webp" alt="slider" />
        </SwiperSlide>

        <SwiperSlide className="w-full h-128 flex items-center justify-center text-white text-2xl">
          <img src="./src/image/slider/pic5.webp" alt="slider" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySlider;
