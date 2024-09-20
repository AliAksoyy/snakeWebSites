import React from "react";
import styles from "./styles.module.scss";
import appStore from "../../assets/storeImg/appStore.svg";
import googleStore from "../../assets/storeImg/googleStore.svg";

const StoreButton = ({ height }) => {
  return (
    <div className={styles.store}>
      <a
        className={styles.linkAppStore}
        href="https://www.apple.com/tr/app-store/"
        rel="noreferrer"
        target={"_blank"}
      >
        <img
          style={{ height }}
          className={styles.appStoreStyle}
          src={appStore}
          alt="appStore"
        />
      </a>
      <a
        className={styles.linkGoogleStore}
        href="https://play.google.com/store/games?hl=tr&gl=US&pli=1"
        rel="noreferrer"
        target={"_blank"}
      >
        <img
          style={{ height }}
          className={styles.googleStoreStyle}
          src={googleStore}
          alt="googleStore"
        />
      </a>
    </div>
  );
};

export default StoreButton;
