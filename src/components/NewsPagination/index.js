import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import PaginationIcon from "./PaginationIcon";
import PaginationNumbers from "./PaginationNumbers";

const NewsPagination = ({
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  dataLength,
}) => {
  const [totalNumbers, setTotalNumbers] = useState([]);

  useEffect(() => {
    for (let i = 0; i < Math.ceil(dataLength / rowsPerPage); i++) {
      setTotalNumbers((number) => {
        return [...number, i];
      });
    }
  }, [dataLength, rowsPerPage]);

  const handleClick = (e) => {
    const numbersButton = document.querySelectorAll("#paginationButton");
    numbersButton.forEach((numberButton) => {
      if (e.target.innerText === numberButton.innerText) {
        setPage(Number(e.target.innerText));
      }
    });
    document.body.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      blocking: "center",
    });
  };

  return (
    <section className={styles.container}>
      <PaginationIcon totalNumbers={totalNumbers} page={page} setPage={setPage}>
        <PaginationNumbers
          handleClick={handleClick}
          totalNumbers={totalNumbers}
          page={page}
        />
      </PaginationIcon>
    </section>
  );
};

export default NewsPagination;
