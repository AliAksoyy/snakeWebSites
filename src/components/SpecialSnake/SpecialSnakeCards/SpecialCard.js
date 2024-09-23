import React from "react";
import styles from "./styles.module.scss";
const SpecialCard = ({ src }) => {
  return (
    <div className={styles.card}>
      <img src={src} alt="specialImg" />
    </div>
  );
};

export default SpecialCard;
