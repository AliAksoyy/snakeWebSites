import React from "react";
import styles from "./styles.module.scss";
const LinkExpiredContent = () => {
  return (
    <div className={styles.content}>
      <p className="paragrafLight">
        For security reasons, password reset links expire after a little while.
        If you still need to reset your password, you can request a new reset
        email.
      </p>
    </div>
  );
};

export default LinkExpiredContent;
