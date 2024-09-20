import React from "react";
import styles from "./styles.module.scss";
import { useLang } from "../../context/LocalizationContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import drawerStyles from "../Drawer/styles.module.scss";
import logo from "../../assets/logo/logo.svg";
import Navbar from "../Navbar";
import HamburgerIcon from "../FontAwesomeIcons/HamburgerIcon";
import CloseIcon from "../FontAwesomeIcons/CloseIcon";
import ButtonContentSvg from "./ButtonContentSvg";


const Header = ({ drawerModal, setDrawerModal }) => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);
  const drawerEl = document.getElementById("#drawer");
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    drawerEl.classList.remove(drawerStyles.close);
    drawerEl.classList.add(drawerStyles.open);
    setDrawerModal(true);
  };

  const handleDrawerClose = () => {
    setDrawerModal(false);
    drawerEl.classList.remove(drawerStyles.open);
    drawerEl.classList.add(drawerStyles.close);
  };

  const openGoogleStore = () => {
    window.open("https://www.apple.com/tr/app-store/", "_blank");
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className={styles.logo}
          src={logo}
          alt="logo"
        />
        <Navbar />
        {drawerModal ? (
          <div onClick={handleDrawerClose} className={styles.hamburgerIcon}>
            <CloseIcon />
          </div>
        ) : (
          <div onClick={handleDrawerOpen} className={styles.hamburgerIcon}>
            <HamburgerIcon />
          </div>
        )}
        <button
          type="button"
          onClick={openGoogleStore}
          className={`${styles.button} buttonMedium`}
        >
          {" "}
          {languageData[lang]?.data?.header.button} <br />
          <span className={styles.span}>
            {languageData[lang]?.data?.header.buttonSpan}
            <ButtonContentSvg />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
