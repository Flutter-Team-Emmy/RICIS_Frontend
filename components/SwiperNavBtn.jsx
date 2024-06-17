import { useSwiper } from "swiper/react";
// import { ReactComponent as Next } from "@/assets/icons/arrow-next.svg";
// import { ReactComponent as Prev } from "@/assets/icons/arrow-prev.svg";
 

const SwiperNavBtn = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-between -translate-y-[10rem] w-full z-[9999]">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-2 w-12 h-12 rounded-full bg-[rgb(0,0,0,0.6)] border border-[#3CB043] z-[9999]"
      >
        <img src="/images/arrow-prev.svg" className="text-white" alt=""/>
        {/* <Prev fill="#ffffff" className="text-white" /> */}
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="p-2 w-12 h-12 rounded-full bg-[rgb(0,0,0,0.6)] border border-[#3CB043] z-[10]"
      >
         <img src="/images/arrow-next.svg" className="text-white fill-white" alt=""/>
        {/* <Next /> */}
      </button>
    </div>
  );
};

export default SwiperNavBtn;