import React from "react";
import styles from "./styles.module.scss";
import newsHeaderImg from "../../assets/NewsPageImage/newsHeaderImg.png";
import { useLang } from "../../context/LocalizationContext";
import { useSelector } from "react-redux";

const NewsHeader = () => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);

  return (
    <section className={styles.container}>
      <img
        className={styles.headerImg}
        src={newsHeaderImg}
        alt="newsHeaderImg"
      />
      <h2> {languageData[lang]?.data?.news.caption}</h2>
      <p className="subtitleLight"> {languageData[lang]?.data?.news.title}</p>
    </section>
  );
};

export default NewsHeader;
