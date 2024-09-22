import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import IconsElement from "./IconsElement";
import Explanation from "./Explanation";
import cardStyle from "./PowerModeContent/styles.module.scss";
import { useSelector } from "react-redux";
import { useLang } from "../../context/LocalizationContext";

const PowerMode = () => {
  const [activeSpan, setActiveSpan] = useState("magnifier");
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);

  useEffect(() => {
    const firstActiveSpanEl = document.querySelector("#powerActiveSpan");
    const modDescriptionContainer = document.getElementById("mod-description");
    const firstImgEl = document
      .getElementById("powerModeImg")
      .getBoundingClientRect();

    firstActiveSpanEl.style.left =
      firstImgEl.width / 2 +
      firstImgEl.left -
      modDescriptionContainer.getBoundingClientRect().left -
      firstActiveSpanEl.getBoundingClientRect().width / 2 -
      8 +
      "px";
  }, []);

  const handleClick = (e) => {
    const activeSpanEl = document.querySelector("#powerActiveSpan");
    const modDescriptionContainer = document.getElementById("mod-description");

    setActiveSpan(e.target.getAttribute("aria-label"));
    const bound = e.target.getBoundingClientRect();

    const powerCards = document.querySelectorAll("#powerModeImg");

    powerCards.forEach((card) => {
      if (card === e.target) {
        card.parentElement.classList.add(cardStyle.active);
      } else {
        card.parentElement.classList.remove(cardStyle.active);
      }
    });
    activeSpanEl.style.left =
      bound.width / 2 +
      bound.left -
      modDescriptionContainer.getBoundingClientRect().left -
      activeSpanEl.getBoundingClientRect().width / 2 -
      8 +
      "px";
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.header}>
            {" "}
            {languageData[lang]?.data?.home.powerMode.caption}
          </h2>
          <p className="subtitleLight">
            {languageData[lang]?.data?.home.powerMode.title}
          </p>
        </div>{" "}
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

export default PowerMode;
