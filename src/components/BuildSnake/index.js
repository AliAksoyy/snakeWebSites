import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Retangle from "./Retangle";
import BuildSnakeIcon from "./BuildSnakeIcon";
import map from "../../assets/buildSnakeImage/map.png";
import magnet from "../../assets/buildSnakeImage/magnet.png";
import number5x from "../../assets/buildSnakeImage/5xNumber.png";
import number2x from "../../assets/buildSnakeImage/2xNumber.png";
import quickTurn from "../../assets/buildSnakeImage/quickTurn.png";
import healthPotion from "../../assets/buildSnakeImage/healthPotion.png";
import smallMap from "../../assets/buildSnakeImage/smallMap.png";
import smallMagnet from "../../assets/buildSnakeImage/smallMagnet.png";
import small5xNumber from "../../assets/buildSnakeImage/small5xNumber.png";
import small2xNumber from "../../assets/buildSnakeImage/small2xNumber.png";
import smallHealthPotion from "../../assets/buildSnakeImage/smallHealthPotion.png";
import smallQuickTurn from "../../assets/buildSnakeImage/smallQuickTurn.png";
import { useLang } from "../../context/LocalizationContext";
import { useSelector } from "react-redux";

const BuildSnake = () => {
  const [containerWidth, setContainerWidth] = useState(true);
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 673) {
        setContainerWidth(false);
      } else {
        setContainerWidth(true);
      }
    };
    document.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, [containerWidth]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Retangle />
        <div className={styles.title}>
          <h2 className={styles.header}>
            {" "}
            {languageData[lang]?.data?.home.buildSnake.caption}
          </h2>
          <p className="subtitleLight">
            {" "}
            {languageData[lang]?.data?.home.buildSnake.title}
          </p>
        </div>
        <Retangle />
        <div className={styles.icons}>
          <BuildSnakeIcon src={containerWidth ? map : smallMap} />
          <BuildSnakeIcon src={containerWidth ? magnet : smallMagnet} />
          <BuildSnakeIcon src={containerWidth ? number2x : small2xNumber} />
          <BuildSnakeIcon src={containerWidth ? quickTurn : smallQuickTurn} />
          <BuildSnakeIcon src={containerWidth ? number5x : small5xNumber} />
          <BuildSnakeIcon
            src={containerWidth ? healthPotion : smallHealthPotion}
          />
        </div>
      </div>
    </section>
  );
};

export default BuildSnake;
