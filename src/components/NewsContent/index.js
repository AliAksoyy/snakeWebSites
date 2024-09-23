import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import NewsContentCard from "./NewsContentCard";

const NewsContent = ({ newsData, page, rowsPerPage, lang }) => {
  const [showSmallCardImage, setShowSmallCardImage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 661) {
        setShowSmallCardImage(true);
      } else {
        setShowSmallCardImage(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.container}>
      {newsData
        ?.slice(
          (page - 1) * rowsPerPage,
          (page - 1) * rowsPerPage + rowsPerPage
        )
        ?.map((newsDataItem) => {
          const { date, title, mdContent } = newsDataItem[lang];
          return (
            <NewsContentCard
              showSmallCardImage={showSmallCardImage}
              key={newsDataItem.id}
              date={date}
              title={title}
              id={newsDataItem.id}
              newsPageCardImg={newsDataItem.newsPageCardImg}
              newsPageSmallCardImg={newsDataItem.newsPageSmallCardImg}
              newsContent={mdContent}
            />
          );
        })}
    </section>
  );
};

export default NewsContent;
