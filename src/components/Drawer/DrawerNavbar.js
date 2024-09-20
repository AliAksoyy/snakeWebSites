import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import drawerStyles from "../Drawer/styles.module.scss";
import { useLang } from "../../context/LocalizationContext";
import { useSelector } from "react-redux";
const DrawerNavbar = ({ setDrawerModal }) => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);

  const handleClose = () => {
    setDrawerModal(false);
    document.getElementById("#drawer").classList.add(drawerStyles.close);
  };

  return (
    <ul className={styles.lists}>
      <li onClick={handleClose} className={styles.list}>
        <Link className={styles.link} to="/">
          {languageData[lang]?.data?.header.home}
        </Link>
      </li>
      {/* <li onClick={handleClose} className={styles.list}>
        <Link
          
          className={styles.link}
          to="/about"
        >
         {languageData[lang]?.data?.header.about}
        </Link>
      </li> */}
      <li onClick={handleClose} className={styles.list}>
        <Link className={styles.link} to="/news">
          {languageData[lang]?.data?.header.news}
        </Link>
      </li>
      <li onClick={handleClose} className={styles.list}>
        <Link className={styles.link} to="/contact">
          {languageData[lang]?.data?.header.contact}
        </Link>
      </li>
    </ul>
  );
};

export default DrawerNavbar;
