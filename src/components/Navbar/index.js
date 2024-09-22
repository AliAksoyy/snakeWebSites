import React from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "../../context/LocalizationContext";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);
  return (
    <nav className={styles.navbar}>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <Link
            className={`${styles.link} ${
              location.pathname === "/" && styles.active
            } buttonMedium`}
            to="/"
          >
            {" "}
            {languageData[lang]?.data?.header.home}
          </Link>
        </li>{" "}
        <li className={styles.list}>
          <Link
            className={`${styles.link} ${
              location.pathname === "/about" && styles.active
            } buttonMedium`}
            to={"/about"}
          >
            {languageData[lang]?.data?.header.about}
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            className={`${styles.link} ${
              location.pathname === "/news" && styles.active
            } buttonMedium`}
            to={"/news"}
          >
            {languageData[lang]?.data?.header.news}
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            className={`${styles.link} ${
              location.pathname === "/contact" && styles.active
            } buttonMedium`}
            to={"/contact"}
          >
            {languageData[lang]?.data?.header.contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
