import React from "react";
import styles from "./styles.module.scss";
import SnakeNewsCard from "./SnakeNewsCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLang } from "../../context/LocalizationContext";

const SnakeNews = () => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);
  const news = useSelector((state) => state.news);
  const navigate = useNavigate();

  if (!news?.length) {
    return;
  } else {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2 className={styles.header}>
              {languageData[lang]?.data?.home.snakeNews.caption}
            </h2>
            <p className="subtitleLight">
              {languageData[lang]?.data?.home.snakeNews.title}
            </p>
          </div>
          <div className={styles.cards}>
            {news?.slice(-3)?.map((item) => {
              return (
                <SnakeNewsCard
                  key={item.id}
                  homeNewsImg={item.homeNewsImg}
                  id={item.id}
                  {...item[lang]}
                />
              );
            })}
          </div>
          <div onClick={() => navigate("/news")} className={styles.newsButton}>
            <button className={`${styles.button}`}>
              {" "}
              {languageData[lang]?.data?.home.snakeNews.button}
            </button>
          </div>
        </div>
      </section>
    );
  }
};

export default SnakeNews;
