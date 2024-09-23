import React from "react";
import styles from "./styles.module.scss";
import SpecialSnakeCards from "./SpecialSnakeCards";
import { useLang } from "../../context/LocalizationContext";
import { useSelector } from "react-redux";
const SpecialSnake = () => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2 className={styles.header}>
            {" "}
            {languageData[lang]?.data?.home.specialSnake.caption}
          </h2>
          <p className="subtitleLight">
            {languageData[lang]?.data?.home.specialSnake.title}
          </p>
        </div>
        <SpecialSnakeCards />
      </div>
    </section>
  );
};

export default SpecialSnake;
