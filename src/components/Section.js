import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "./Card";

const Section = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const sliderRef = useRef(null); // Reference for scrolling

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error("Error fetching albums:", error));
  }, [apiUrl]);

  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollLeft -= 300;
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.toggleButton} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Collapse" : "Show All"}
        </button>
      </div>

      {title === "New Albums" ? (
        <div className={styles.sliderWrapper}>
          <button className={styles.arrowLeft} onClick={scrollLeft}>←</button>
          <div className={styles.sliderContainer} ref={sliderRef}>
            {albums.slice(0, expanded ? albums.length : 7).map((album) => (
              <Card key={album.id} image={album.image} albumName={album.title} follows={album.follows} />
            ))}
          </div>
          <button className={styles.arrowRight} onClick={scrollRight}>→</button>
        </div>
      ) : (
        <div className={styles.grid}>
          {albums.slice(0, expanded ? albums.length : 7).map((album) => (
            <Card key={album.id} image={album.image} albumName={album.title} follows={album.follows} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;