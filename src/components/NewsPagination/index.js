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
      setTotalNumbers((numbers) => {
        return [...numbers, i];
      });
    }
  }, [dataLength, rowsPerPage]);

  const handleClick = (e) => {};

  return <div>NewsPagination</div>;
};

export default NewsPagination;
