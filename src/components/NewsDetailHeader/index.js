import React from "react";
import styles from "./styles.module.scss";
import arrowLeft from "../../assets/newsDetailImage/arrowLeft.svg";
import { useNavigate } from "react-router-dom";

const NewsDetailHeader = ({ title, date, newsDetailImage }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button
          onClick={() => navigate(-1)}
          className={`${styles.button} buttonMedium`}
        >
          {" "}
          <img src={arrowLeft} alt="arrowLeft" />
          <span>BACK TO NEWS</span>
        </button>
      </div>
      <div>
        <p className={`${styles.paraf} paragraf2Dark`}>{date}</p>
        <h3>{title}</h3>
      </div>
      <div className={styles.detailImg}>
        {newsDetailImage && (
          <img
            className={styles.img}
            src={`${process.env.REACT_APP_API_URL}/public/${newsDetailImage}`}
            alt="newsDetailImg"
          />
        )}
      </div>
    </>
  );
};

export default NewsDetailHeader;
