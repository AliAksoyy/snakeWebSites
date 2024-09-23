import React from "react";
import styles from "./styles.module.scss";
const SnakeCard = ({ src }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt="snakeImg" />
    </div>
  );
};

export default SnakeCard;
