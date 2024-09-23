import React from "react";
import styles from "./styles.module.scss";
import { useLang } from "../../../context/LocalizationContext";

const LanguageDropDown = () => {
  const { lang, setLang } = useLang();

  const handleChange = (e) => {
    setLang(e.target.value);
    localStorage.setItem("localization", e.target.value);
  };

  return (
    <div className={styles.container}>
      <select
        onChange={handleChange}
        className={styles.select}
        name="language"
        id="language"
        value={lang}
      >
        <option className={styles.option} value="tr">
          Turkish
        </option>
        <option className={styles.option} value="en">
          English
        </option>
      </select>
    </div>
  );
};

export default LanguageDropDown;
