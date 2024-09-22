import React from "react";
import styles from "./styles.module.scss";

const Explanation = ({ activeSpan, lang, languageData }) => {
  return (
    <div className={styles.explanation} id="mod-description">
      <p className={`${styles.paragraf} subtile2Light`}>
        {languageData[lang]?.data?.home.powerMode[activeSpan]}
      </p>
      <span id="powerActiveSpan" className={styles.active}></span>
    </div>
  );
};

export default Explanation;
