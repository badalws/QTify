import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import leftArrow from "../assets/icons/leftArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";

const Carousel = ({ items, renderItem }) => {
  return (
    <div className={styles.carouselWrapper}>
      {/* Left Navigation Button */}
      <button className={`${styles.arrow} custom-prev`}>
        <img src={leftArrow} alt="Left" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 7 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Navigation Button */}
      <button className={`${styles.arrow} custom-next`}>
        <img src={rightArrow} alt="Right" />
      </button>
    </div>
  );
};

export default Carousel;