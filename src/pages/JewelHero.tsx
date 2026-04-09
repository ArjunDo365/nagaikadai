import React from "react";
import IconCaretDown from "../components/Icon/IconCaretDown";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";

const JewelHero = () => {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  return (
    <div className="panel p-0" id="hero">
      <div className="swiper w-full h-[600px]" id="slider4">
        <div className="swiper-wrapper">
          <Swiper
          
            modules={[Navigation, Pagination,Autoplay ]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000 }}
            // pagination={{
            //   clickable: true,
            //   type: "fraction",
            // }}
            navigation={{
              nextEl: ".swiper-button-next-ex4",
              prevEl: ".swiper-button-prev-ex4",
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === "rtl" ? "true" : "false"}
          >
            <SwiperSlide>
              <img
                src={c1}
                className="w-full h-full object-cover"
                alt="slide1"
              />
              {/* <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                <div className="text-3xl font-bold">Slide 1</div>
                <div className="mb-4 sm:text-base font-medium">
                  Lorem Ipsum is simply dummy text of the printing.
                </div>
              </div> */}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c2}
                className="w-full h-full object-cover"
                alt="slide2"
              />
              {/* <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                <div className="text-3xl font-bold">Slide 2</div>
                <div className="mb-4 sm:text-base font-medium">
                  Lorem Ipsum is simply dummy text of the printing.
                </div>
              </div> */}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c3}
                className="w-full h-full object-cover"
                alt="slide3"
              />
              {/* <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                <div className="text-3xl font-bold">Slide 3</div>
                <div className="mb-4 sm:text-base font-medium">
                  Lorem Ipsum is simply dummy text of the printing.
                </div>
              </div> */}
            </SwiperSlide>
          </Swiper>
        </div>
        <button className="swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
          <IconCaretDown className="w-5 h-5 rtl:-rotate-90 rotate-90" />
        </button>
        <button className="swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
          <IconCaretDown className="w-5 h-5 rtl:rotate-90 -rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default JewelHero;
