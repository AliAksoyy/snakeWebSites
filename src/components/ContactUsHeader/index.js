import React from "react";
import styles from "./styles.module.scss";
import contactUsHeader from "../../assets/ContactUsImage/contactUsHeader.svg";
import { useLang } from "../../context/LocalizationContext";
import { useSelector } from "react-redux";

const ContactUsHeader = () => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);

  return (
    <div className={styles.container}>
      <img
        className={styles.headerImg}
        src={contactUsHeader}
        alt="contactUsHeader"
      />
      <h2> {languageData[lang]?.data?.contact.caption}</h2>
      <p className="subtitleLight">{languageData[lang]?.data?.contact.title}</p>
    </div>
  );
};

export default ContactUsHeader;
