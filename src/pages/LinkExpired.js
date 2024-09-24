import React from "react";
import styles from "../styles/linkExpired.module.scss";
import LinkExpiredHeader from "../components/LinkExpiredHeader";
import LinkExpiredContent from "../components/LinkExpiredContent";
import LinkExpiredImage from "../components/LinkExpiredImage";
import LinkExpiredButton from "../components/LinkExpiredButton";
const LinkExpired = () => {
  return (
    <main className={styles.main}>
      <LinkExpiredHeader />
      <LinkExpiredImage />
      <LinkExpiredContent />
      <LinkExpiredButton />
    </main>
  );
};

export default LinkExpired;
