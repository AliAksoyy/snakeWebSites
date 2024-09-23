import React from "react";
import styles from "./styles.module.scss";
import arrowRight from "../../../assets/termsOfServiceImage/arrowRight.svg";

const SideBarListItem = ({ href, text, isActive, handleClick }) => {
  return (
    <li className={styles.list}>
      <a
        className={`${styles.link} ${isActive ? "buttonDark2" : "buttonLight"}`}
        href={href}
        onClick={(e) => handleClick(e)}
      >
        {text}
      </a>
      <img src={arrowRight} alt="arrowRight" />
    </li>
  );
};

export default SideBarListItem;
