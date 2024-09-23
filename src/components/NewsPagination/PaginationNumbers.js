import React from "react";
import styles from "./styles.module.scss";

const PaginationNumbers = ({ totalNumbers, handleClick, page }) => {
  console.log(totalNumbers);
  return (
    <div className={styles.numbers}>
      {totalNumbers?.length > 0 &&
        totalNumbers?.map((totalNumber, index) => {
          return (
            <button
              onClick={handleClick}
              id={"paginationButton"}
              key={index}
              className={`${styles.number} ${
                totalNumber + 1 === page && styles.active
              } paragraf2Dark`}
            >
              {totalNumber + 1}
            </button>
          );
        })}
    </div>
  );
};

export default PaginationNumbers;
