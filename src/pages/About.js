import React from "react";
import styles from "../styles/aboutStyle.module.scss";
import AboutHeader from "../components/AboutHeader.js";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <main className={styles.main}>
      <AboutHeader />
      <AboutContent />
    </main>
  );
};

export default About;
