import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const SnakeNewsCard = ({ id, title, homeNewsImg }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/news/${id}`)} className={styles.card}>
      <img
        src={`${process.env.REACT_APP_API_URL}/public/${homeNewsImg}`}
        alt="newsImg"
      />
      <span className="subtile3Light">{title.toLowerCase()}</span>
    </div>
  );
};

export default SnakeNewsCard;
