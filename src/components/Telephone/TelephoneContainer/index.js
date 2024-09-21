import React from "react";
import styles from "./styles.module.scss";
import smallTelphone from "../../../assets/telephoneImg/smallTelephone.png";
import StoreButton from "../../StoreButton";
import { useLang } from "../../../context/LocalizationContext";
import { useSelector } from "react-redux";

const TelephoneContainer = () => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);

  return (
    <div className={styles.smallContainer}>
      <div className={styles.smallHeader}>
        <h3>
          {languageData[lang]?.data?.home.telephone.meduim.title} <br />
          {languageData[lang]?.data?.home.telephone.meduim.restTitle}
        </h3>
      </div>
      <div className={styles.smallImg}>
        <img src={smallTelphone} alt="smallTelphone" />
      </div>
      <div className={styles.smallparaf}>
        <p className="subtitleLight">
          {languageData[lang]?.data?.home.telephone.paragraph}
        </p>
      </div>
      <StoreButton height="40px" />
    </div>
  );
};

export default TelephoneContainer;
