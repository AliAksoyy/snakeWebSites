import React from "react";
import styles from "./styles.module.scss";
import leftIcon from "../../assets/NewsPageImage/leftIcon.svg";
import rightIcon from "../../assets/NewsPageImage/rightIcon.svg";

const PaginationIcon = ({ page, setPage, totalNumbers, children }) => {
  return (
    <>
      <div onClick={() => setPage(page - 1)} className={styles.leftIcon}>
        {page !== 1 && (
          <button className={styles.button}>
            <img src={leftIcon} alt="leftIcon" />
          </button>
        )}
      </div>
      {children}
      <div onClick={() => setPage(page + 1)} className={styles.rightIcon}>
        {totalNumbers?.at(-1) + 1 !== page && (
          <button className={styles.button}>
            <img src={rightIcon} alt="rightIcon" />
          </button>
        )}
      </div>
    </>
  );
};

export default PaginationIcon;
