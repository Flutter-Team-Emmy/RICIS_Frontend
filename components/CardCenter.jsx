import Link from "next/link";
import React from "react";
import Image from "next/image";
import MotionComponent from "./MotionComponent";
import { fadeInVariants } from "@/utils/variants";

const CardCenter = ({ header, subHeader, img, id, index }) => {
  return (
    <MotionComponent
      as="div"
      variants={fadeInVariants("up", (index + 1) / 10, 0.5)}
      className="flex items-center flex-col justify-center bg-white rounded-[15px] px-8 py-4"
    >
      <img src={img} className="rounded-t-[12px] w-[20rem] h-[150px]" />
      <div className="flex flex-col space-y-[0.75rem] pt-2">
        <h1 className="sf700 text-sm font-medium leading-[24px] tracking-[-0.64px] text-center">
          {header}
        </h1>
      </div>
    </MotionComponent>
  );
};

export default CardCenter;
