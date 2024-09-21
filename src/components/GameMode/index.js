import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import IconsElement from "./IconsElement";
import Explanation from "./Explanation";
import cardStyle from "./GameModeContent/styles.module.scss";
import { useSelector } from "react-redux";
import { useLang } from "../../context/LocalizationContext";

const GameMode = () => {
  const [activeSpan, setActiveSpan] = useState("classic");
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);

  const handleClick = () => {};

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.header}>
            {" "}
            {languageData[lang]?.data?.home.gameMode.caption}
          </h2>
          <p className="subtitleLight">
            {" "}
            {languageData[lang]?.data?.home.gameMode.title}
          </p>
        </div>
        <IconsElement
          lang={lang}
          languageData={languageData}
          handleClick={handleClick}
        />
        <Explanation
          lang={lang}
          languageData={languageData}
          activeSpan={activeSpan}
        />
      </div>
    </section>
  );
};

export default GameMode;
