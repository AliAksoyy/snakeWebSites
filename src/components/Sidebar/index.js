import React from "react";
import styles from "./styles.module.scss";
import SideBarList from "./SideBarList";
import LanguageDropDown from "./LanguageDropDown";

const Sidebar = ({ lists, id }) => {
  return (
    <>
      {id !== "partner-opt-out" ? (
        <div className={styles.container}>
          <LanguageDropDown />
          <SideBarList lists={lists} />
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
