"use client";

import React from "react";
import TextHeader from "./TextHeader";
import CardCenter from "../components/CardCenter";
import Link from "next/link";
import { useGetServicesQuery } from "@/store/api/generalApi";
import MotionComponent from "@/components/MotionComponent";
import { textVariants, fadeInVariants } from "@/utils/variants";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import SwiperNavBtn from "../components/SwiperNavBtn";
import "swiper/css";
import "swiper/css/pagination";
import { services } from "@/utils/servicesData";
import { useRouter } from "next/navigation";

const Services = () => {
  const { data, isLoading, isSuccess } = useGetServicesQuery();

  const results = data?.data.services;

  const router = useRouter();

  return (
    <div className="w-full mx-auto absolute -mt-40 mb-[3rem] ">
      <div className="mt-20 w-full">
        {services.length <= 4 && (
          <div className="flex gap-x-20 justify-center z-[100] relative ">
            {services.map((data, index) => {
              const firstSubServiceId = data.subServices[0]?.id;
              return (
                <CardCenter
                  key={data.id}
                  index={index}
                  header={data.name}
                  // subHeader={data.description}
                  id={data.id}
                  img={data.Image}
                  handleClick={() =>
                    console.log("clicked")
                    // router.push(
                    //   `/services?tab=${data.name}&subId=${firstSubServiceId}`
                    // )
                  }
                  // results={results}
                />
              );
            })}
          </div>
        )}
        <Swiper
          slidesPerView={services?.length >= 4 ? 4 : services?.length}
          spaceBetween={30}
          // centeredSlides={true}
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
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
          // cssMode={true}
          //  pagination={{
          //   clickable: true,
          // }}
          mousewheel={results?.length > 4 ? true : false}
          keyboard={true}
          autoplay={results?.length > 4 ? true : false}
          className="mySwiper"
        >
          {services.length > 4 &&
            services?.map((data, index) => (
              <SwiperSlide key={data.id}>
                <CardCenter
                  key={data.id}
                  index={index}
                  header={data.name}
                  // subHeader={data.description}
                  id={data.id}
                  img={data.Image}
                  // results={results}
                />
              </SwiperSlide>
            ))}
          {(isLoading || results?.length === 0) &&
            [0, 1, 2, 3, 4, 5].map((loader, index) => (
              <SwiperSlide key={loader}>
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
