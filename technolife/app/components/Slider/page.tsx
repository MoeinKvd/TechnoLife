"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swipernavbtn from "../Swipernavbtn/page";
const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      dir="rtl"
      className="relative"
    >
      <SwiperSlide>
        <img
          src="/Images/Banners/banner_SlideBanner_o3M2sC_ecec9d5d-d9bc-43af-9512-18bd15f78b87.gif"
          alt=""
          className="w-full  object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_RH3eVt_e68359d2-00f5-4c5f-baa8-1e1e389240d9.gif"
          alt=""
          className="w-full  md:h-[350px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_5g2fEV_2c620669-15c1-4df8-a713-976f8b59baa5.png"
          alt=""
          className="w-full md:h-[350px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_oLtOY8_0a56f239-fca5-4431-bfbc-ead10b755441.png"
          alt=""
          className="w-full  md:h-[350px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_vqQ1A7_4c4a0e4c-e979-4e89-b578-df3ca021c15e.webp"
          alt=""
          className="w-full md:h-[350px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_jDrwWL_bcc3b8f2-ad72-4813-8820-15ee8ce0e5a5.gif"
          alt=""
          className="w-full  md:h-[350px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_qBWz8Z_e0a94ad1-73e6-402a-9d4d-dc095249579e.png"
          alt=""
          className="w-full  md:h-[350px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_vL2wqO_8c7b5da0-4761-43b8-80cd-0c1ad5baa6bc.png"
          alt=""
          className="w-full  md:h-[350px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_N9BgDZ_afe33780-44ee-4f48-a781-2d157c7e040a.png"
          alt=""
          className="w-full  md:h-[350px] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_DJDztX_ffb1bbc6-cd17-4a6a-8591-827f10a1e151.webp"
          alt=""
          className="w-full  md:h-[350px] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_pkTOYg_49572a5b-adc4-4676-81e7-9a319f9e9d85.png"
          alt=""
          className="w-full  md:h-[350px] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_e8lLTx_d5b7eb61-a011-45cb-b40d-ab2b9387f86b.webp"
          alt=""
          className="w-full h-[250px] md:h-[350px] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_rbDhBt_705017cc-c3bb-470a-a3b1-81665bd53265.webp"
          alt=""
          className="w-full h-[250px] md:h-[350px] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/Images/banners/banner_SlideBanner_C5PBm4_a04b79c3-ac87-4570-bc02-1c2cc49e9950.png"
          alt=""
          className="w-full h-[250px] md:h-[350px] object-cover"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/Images/Banners/banner_SlideBanner_jjZL1O_ad5bd42c-5981-40a3-b137-4084ce31bba4.webp"
          alt=""
          className="w-full h-[250px] md:h-[350px] object-cover"
        />
      </SwiperSlide>
      <Swipernavbtn />
    </Swiper>
  );
};
export default Slider;
