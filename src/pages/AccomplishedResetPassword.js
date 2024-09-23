import React from "react";
import styles from "../styles/accomplishedStyles.module.scss";
import AcommplishedHeader from "../components/AcommplishedHeader";
import AcommplishedImage from "../components/AcommplishedImage";
const AccomplishedResetPassword = () => {
  return (
    <main className={styles.main}>
      <AcommplishedHeader />
      <AcommplishedImage />
      <p className={`${styles.paragraf} paragrafLight`}>
        You have successfully reset your password. Now, you can continue from
        where you left off!
      </p>
    </main>
  );
};

export default AccomplishedResetPassword;
