import React from "react";
import styles from "./styles.module.scss";
import MarkDownContent from "./MarkDownContent";

const MarkDownListContent = ({ setLists, id }) => {
  return (
    <div
      className={
        id !== "partner-opt-out"
          ? styles.container
          : styles.partnerOptOutContainer
      }
    >
      <MarkDownContent id={id} setLists={setLists} />
    </div>
  );
};

export default MarkDownListContent;
