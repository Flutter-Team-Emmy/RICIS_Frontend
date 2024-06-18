"use client";

import React from "react";
import TextHeader from "./TextHeader";
import CardCenter from "../components/CardCenter";
import Link from "next/link";
import { useGetServicesQuery } from "@/store/api/generalApi";
import MotionComponent from "@/components/MotionComponent";
import { textVariants, fadeInVariants } from "@/utils/variants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import SwiperNavBtn from "../components/SwiperNavBtn";
import "swiper/css";
import "swiper/css/pagination";

const Services = () => {

  const { data, isLoading, isSuccess } = useGetServicesQuery();

  const results = data?.data.services;

  return (
    <div className="w-full mx-auto absolute -mt-40 mb-[3rem]">
      <div className="mt-20 w-full">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          // cssMode={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {isSuccess && results?.map((data, index) => (
            <SwiperSlide key={data.id}>
              <CardCenter
                key={data.id}
                index={index}
                header={data.name}
                subHeader={data.description}
                id={data.id}
                img={data.image}
                results={results}
              />
            </SwiperSlide>
          ))}
          {(isLoading || results?.length === 0) &&
            [0, 1, 2, 3, 4, 5].map((loader, index) => (
              <SwiperSlide key={loader} >
                <MotionComponent
                  as="div"
                  variants={fadeInVariants("up", (index + 1) / 10, 0.5)}
                  className=""
                >
                  <div className="rounded-t-[12px] bg-gray-200 w-[20rem] h-[180px]"></div>
                  <h1 className="w-[20rem] mt-4 mb-4 h-4 bg-gray-200 animate-pulse"></h1>
                  <h2 className="w-[20rem] h-4 bg-gray-200 animate-pulse"></h2>
                </MotionComponent>
              </SwiperSlide>
            ))}
          <SwiperNavBtn />
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
