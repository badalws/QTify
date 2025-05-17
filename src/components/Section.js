import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "./Card";
import Carousel from "./Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Section = ({ title, apiUrl, isSongsSection = false }) => {
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Fetch songs or albums based on section type
    axios
      .get(apiUrl)
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data:", error));

    // Fetch genres only for Songs section
    if (isSongsSection) {
      axios
        .get("https://qtify-backend-labs.crio.do/genres")
        .then((response) => {
          const genreList = [{ key: "all", label: "All" }, ...response.data.data];
          setGenres(genreList);
        })
        .catch((error) => console.error("Error fetching genres:", error));
    }
  }, [apiUrl, isSongsSection]);

  const filteredItems =
    selectedGenre === "all"
      ? items
      : items.filter(
          (item) =>
            item.genre?.key?.toLowerCase() === selectedGenre.toLowerCase()
        );

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        {!isSongsSection && (
          <button
            className={styles.toggleButton}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {/* Genre Filtering Tabs for Songs Section */}
      {isSongsSection && genres.length > 0 && (
        <Tabs
          value={selectedGenre}
          onChange={(event, newValue) => setSelectedGenre(newValue)}
          className={styles.tabs}
          indicatorColor="primary"
          textColor="inherit"
        >
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
              className={styles.tab}
            />
          ))}
        </Tabs>
      )}

      {/* Carousel by default, Grid View when "Show All" is clicked (for Albums only) */}
      {!expanded || isSongsSection ? (
        <Carousel
          items={filteredItems}
          renderItem={(item) => (
            <Card
              key={item.id}
              image={item.image}
              albumName={item.title}
              follows={isSongsSection ? item.likes : item.follows}
              isSongsSection={isSongsSection}
            />
          )}
        />
      ) : (
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              albumName={item.title}
              follows={isSongsSection ? item.likes : item.follows}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default Section;
