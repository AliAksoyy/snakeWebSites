import React from "react";
import styles from "./styles.module.scss";
const BuildSnakeIcon = ({ src }) => {
  return (
    <div className={styles.imgDiv}>
      <img src={src} alt="img" />
    </div>
  );
};

export default BuildSnakeIcon;
