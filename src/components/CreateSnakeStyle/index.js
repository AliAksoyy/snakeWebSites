import React from "react";
import styles from "./styles.module.scss";
import horn from "../../assets/createSnakeImage/horn.png";
import glasses from "../../assets/createSnakeImage/glasses.png";
import leash from "../../assets/createSnakeImage/leash.png";
import crown from "../../assets/createSnakeImage/crown.png";
import SnakeIcons from "./SnakeIcons";
import VerticalIcon from "./VerticalIcon";
import { useLang } from "../../context/LocalizationContext";
import { useSelector } from "react-redux";

const CreateSnakeStyle = () => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.verticalIcons}>
          <VerticalIcon iconStyles="horn" src={horn} />
          <VerticalIcon iconStyles="glasses" src={glasses} />
        </div>
        <div className={styles.title}>
          <h2 className={styles.header}>
            {languageData[lang]?.data?.home.createSnake.caption}
          </h2>
          <p className="subtitleLight">
            {languageData[lang]?.data?.home.createSnake.title}
          </p>
        </div>
        <SnakeIcons />
        <div className={styles.verticalIcons}>
          <VerticalIcon iconStyles="crown" src={crown} />
          <VerticalIcon iconStyles="leash" src={leash} />
        </div>
      </div>
    </section>
  );
};

export default CreateSnakeStyle;
