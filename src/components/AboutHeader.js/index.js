import React from "react";
import styles from "./styles.module.scss";
import aboutHeaderImg from "../../assets/aboutImage/aboutHeaderImg.svg";

const AboutHeader = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.headerImg}
        src={aboutHeaderImg}
        alt="aboutHeaderImg"
      />
      <h2>About Us</h2>
      <p className="subtitleLight">Discover our story.</p>
    </div>
  );
};

export default AboutHeader;
