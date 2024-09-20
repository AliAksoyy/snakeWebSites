import React from "react";
import mooxerLogo from "../../assets/mooxerLogo/mooxerLogo.svg";
import StoreButton from "../StoreButton";
import FooterIcons from "./FooterIcons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLang } from "../../context/LocalizationContext";
import LocalizationIcon from "../LocalizationIcon";
import styles from "./styles.module.scss";

const Footer = ({ drawerModal }) => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  if (drawerModal) {
    return null;
  } else {
    return (
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <img src={mooxerLogo} alt="mooxerLogo" />
          <FooterIcons color={"#787878"} />
        </div>
        <div className={styles.border} />
        <div className={styles.buttons}>
          <ul className={styles.lists}>
            <li className={styles.list}>
              <Link
                onClick={handleClick}
                className={`${styles.link} buttonDark`}
                to={"/mdRender/termsOfService"}
              >
                {languageData[lang]?.data?.footer.termsOfService}
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                onClick={handleClick}
                className={`${styles.link} buttonDark`}
                to={"/mdRender/privacyPolicy"}
              >
                {languageData[lang]?.data?.footer.privacyPolicy}
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                onClick={handleClick}
                className={`${styles.link} buttonDark`}
                to={"/mdRender/dataProtection"}
              >
                {languageData[lang]?.data?.footer.dataProtection}
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                onClick={handleClick}
                className={`${styles.link} buttonDark`}
                to={"/mdRender/parentsGuide"}
              >
                {languageData[lang]?.data?.footer.parentsGuide}
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                onClick={handleClick}
                className={`${styles.link} buttonDark`}
                to={"/contact"}
              >
                {languageData[lang]?.data?.footer.contactUs}
              </Link>
            </li>
          </ul>
          <div className={styles.StoreButtons}>
            <LocalizationIcon />
            <StoreButton />
          </div>
        </div>
      </footer>
    );
  }

  return <div>Footer</div>;
};

export default Footer;
