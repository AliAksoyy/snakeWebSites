import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/Sidebar";
import BackToTopButton from "../components/BackToTopButton";
import MarkDownListContent from "../components/MarkDownListContent";
import styles from "../styles/markDownRenderPageStyles.module.scss";

const MarkDownRenderPage = ({ drawerModal }) => {
  const [lists, setLists] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (drawerModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [drawerModal]);

  return (
    <main
      className={
        id !== "partner-opt-out" ? styles.main : styles.partnerOptOutMain
      }
    >
      <SideBar id={id} lists={lists} />
      <MarkDownListContent setLists={setLists} id={id} />
      <BackToTopButton />
    </main>
  );
};

export default MarkDownRenderPage;
