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
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation={{
          nextEl: `.${styles.rightArrow}`,
          prevEl: `.${styles.leftArrow}`,
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

        {/* Navigation Buttons Inside Swiper */}
        <div className={`${styles.arrow} ${styles.leftArrow}`}>
          <img src={leftArrow} alt="Left" />
        </div>
        <div className={`${styles.arrow} ${styles.rightArrow}`}>
          <img src={rightArrow} alt="Right" />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
