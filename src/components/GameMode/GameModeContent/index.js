import React from "react";
import styles from "./styles.module.scss";
const GameModeContent = ({ handleClick, src, spanText, alt }) => {
  return (
    <div className={styles.content} id="Classic">
      <div onClick={handleClick} className={styles.card} aria-label={alt}>
        <img id="img" src={src} alt={alt} aria-label={alt} />
      </div>
      <span className={styles.span}>{spanText}</span>
    </div>
  );
};

export default GameModeContent;
