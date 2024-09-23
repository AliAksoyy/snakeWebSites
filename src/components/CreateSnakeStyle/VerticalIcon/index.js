import React from "react";
import styles from "./styles.module.scss";
const VerticalIcon = ({ src, iconStyles }) => {
  return <img className={styles[iconStyles]} src={src} alt="horn" />;
};

export default VerticalIcon;
