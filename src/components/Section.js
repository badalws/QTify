import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "./Card";

const Section = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error("Error fetching albums:", error));
  }, [apiUrl]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.toggleButton} onClick={() => setExpanded(!expanded)}>
          {expanded ? "Collapse" : "Show All"}
        </button>
      </div>
      <div className={styles.grid}>
        {albums.slice(0, expanded ? albums.length : 6).map((album) => (
          <Card key={album.id} image={album.image} albumName={album.title} follows={album.follows} />
        ))}
      </div>
    </div>
  );
};

export default Section;