import React from "react";
import header from "../../assets/accomplishedPasswordImage/header.png";
import styles from "./styles.module.scss";
const AcommplishedImage = () => {
  return (
    <div>
      <img className={styles.image} src={header} alt="header" />
    </div>
  );
};

export default AcommplishedImage;
