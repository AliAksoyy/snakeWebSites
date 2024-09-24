import React from "react";
import styles from "./styles.module.scss";
const LinkExpiredButton = () => {
  return (
    <div className={styles.btnParent}>
      <button className={styles.button}>Request a new reset email</button>
    </div>
  );
};

export default LinkExpiredButton;
