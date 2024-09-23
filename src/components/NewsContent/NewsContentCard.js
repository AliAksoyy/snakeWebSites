import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
const NewsContentCard = ({
  date,
  title,
  id,
  showSmallCardImage,
  newsPageCardImg,
  newsPageSmallCardImg,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cardWrapper}>
      <div onClick={() => navigate(`/news/${id}`)} className={styles.card}>
        <div className={styles.imageContent}>
          {(newsPageCardImg || newsPageSmallCardImg) && (
            <img
              className={styles.cardImage}
              src={
                showSmallCardImage
                  ? `${process.env.REACT_APP_API_URL}/public/${newsPageSmallCardImg}`
                  : `${process.env.REACT_APP_API_URL}/public/${newsPageCardImg}`
              }
              alt="img"
            />
          )}
        </div>
        <div className={styles.cardContent}>
          <p className="paragraf2Dark">{date}</p>
          <h4 className={styles.title}>{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default NewsContentCard;
