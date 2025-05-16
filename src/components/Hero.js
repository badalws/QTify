import React from "react";
import styles from "./Hero.module.css";
import headphonesImg from "../assets/vibrating-headphone.svg"; // Corrected Path

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands of podcast episodes</h1>
      </div>
      <div className={styles.heroImage}>
        <img src={headphonesImg} width={212} alt="Headphones" />
      </div>
    </div>
  );
}

export default Hero;