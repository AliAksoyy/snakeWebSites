import React from "react";
import styles from "./styles.module.scss";
const AcommplishedHeader = () => {
  return (
    <div className={styles.container}>
      <h2>Reset Password</h2>
      <p style={{ textAlign: "center" }} className="subtitleLight">
        You can reset your password using this form.
      </p>
    </div>
  );
};

export default AcommplishedHeader;
