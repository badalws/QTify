import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

const Card = ({ image, albumName, follows }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={albumName} className={styles.albumImage} />
      <div className={styles.cardContent}>
        <Chip label={`${follows} Follows`} className={styles.chip} />
        <h3 className={styles.albumName}>{albumName}</h3>
      </div>
    </div>
  );
};

export default Card;