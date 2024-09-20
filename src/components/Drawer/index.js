import React from "react";
import styles from "./styles.module.scss";
import FooterIcons from "../Footer/FooterIcons";
import StoreButton from "../StoreButton";
import DrawerNavbar from "./DrawerNavbar";
import LocalizationIcon from "../LocalizationIcon";

const Drawer = ({ drawerModal, setDrawerModal }) => {
  return (
    <div className={styles.wrapper}>
      <section id="#drawer" className={styles.section}>
        <div className={styles.container}>
          <DrawerNavbar setDrawerModal={setDrawerModal} />
          <div className={styles.icons}>
            <FooterIcons color={"#fff"} />
          </div>
          <div className={styles.buttons}>
            <LocalizationIcon />
            <StoreButton drawerModal={drawerModal} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Drawer;
