import React from "react";
import styles from "./styles.module.scss";
const Loading = ({ width, height }) => {
  return (
    <div className={styles.container}>
      <div
        style={{ width: `${width}px`, height: `${height}px` }}
        className={styles.loading}
      ></div>
      <div
        style={{ width: `${width}px`, height: `${height}px` }}
        className={`${styles.loading} ${styles.delay1}`}
      ></div>
      <div
        style={{ width: `${width}px`, height: `${height}px` }}
        className={`${styles.loading} ${styles.delay2}`}
      ></div>
    </div>
  );
};

export default Loading;
