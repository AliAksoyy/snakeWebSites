import React from "react";
import styles from "./styles.module.scss";
import tabletTelephone from "../../../assets/telephoneImg/tabletTelephone.png";
import StoreButton from "../../StoreButton";
import { useLang } from "../../../context/LocalizationContext";
import { useSelector } from "react-redux";

const TabletContainer = () => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);

  return (
    <div className={styles.tabletContainer}>
      <div className={styles.tabletHeader}>
        <h2>
          {" "}
          {languageData[lang]?.data?.home.telephone.meduim.title}
          <br />
          {languageData[lang]?.data?.home.telephone.meduim.restTitle}
        </h2>
      </div>{" "}
      <div className={styles.tabletImg}>
        <img src={tabletTelephone} alt="tabletTelphone" />
      </div>{" "}
      <div className={styles.tabletparaf}>
        <p className="subtitleLight">
          {languageData[lang]?.data?.home.telephone.paragraph}
        </p>
      </div>
      <StoreButton height="48px" />
    </div>
  );
};

export default TabletContainer;
