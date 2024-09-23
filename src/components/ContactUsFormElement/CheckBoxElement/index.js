import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import warningIcon from "../../../assets/ContactUsImage/warningIcon.svg";
import { useLang } from "../../../context/LocalizationContext";
import { useSelector } from "react-redux";

const CheckBoxElement = ({
  type,
  name,
  value,
  setFormValues,
  formValues,
  formError,
}) => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);
  return (
    <div className={styles.checkboxParent}>
      <div className={styles.inputAndLabel}>
        <input
          className={styles.input}
          type={type}
          name={name}
          value={value}
          onChange={(e) => {
            setFormValues({ ...formValues, [name]: e.target.checked });
          }}
        />{" "}
        <label className={`${styles.label} paragraf2Light`}>
          <Link className={styles.link} to="/mdRender/termsOfService">
            {languageData[lang]?.data?.contact.labelLink}
          </Link>{" "}
          {languageData[lang]?.data?.contact.label}
        </label>
        {formError && (
          <span className={`${styles.span} caption`}>
            <img src={warningIcon} alt="warningIcon" />
            {formError}
          </span>
        )}
      </div>{" "}
      <button
        style={{ minWidth: "8rem", minHeight: "2.5rem" }}
        className={styles.button}
      >
        {languageData[lang]?.data?.contact.button}
      </button>
    </div>
  );
};

export default CheckBoxElement;
