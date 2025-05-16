import React from "react";
import styles from "./Button.module.css"; // Import module-scoped CSS

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;