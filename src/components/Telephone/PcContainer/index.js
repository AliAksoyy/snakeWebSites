import React from "react";
import styles from "./styles.module.scss";
import telephoneLeft from "../../../assets/telephoneImg/telephoneLeft.png";
import telephoneRight from "../../../assets/telephoneImg/telephoneRight.png";
import StoreButton from "../../StoreButton";
import { useLang } from "../../../context/LocalizationContext";
import { useSelector } from "react-redux";

const PcContainer = () => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);
  return (
    <div className={styles.pcContainer}>
      <img
        className={styles.telephoneLeft}
        src={telephoneLeft}
        alt="telephoneLeft"
      />
      <div className={styles.content}>
        <h1> {languageData[lang]?.data?.home.telephone.title}</h1>
        <p className="subtitleLight">
          {languageData[lang]?.data?.home.telephone.paragraph}
        </p>

        <StoreButton height="60px" />
      </div>
      <img
        className={styles.telephoneRight}
        src={telephoneRight}
        alt="telephoneRight"
      />
    </div>
  );
};

export default PcContainer;
