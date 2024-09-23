import React from "react";
import styles from "./styles.module.scss";
import warningIcon from "../../../assets/ContactUsImage/warningIcon.svg";
import approvalIcon from "../../../assets/ContactUsImage/approvalIcon.svg";
import errorIcon from "../../../assets/ContactUsImage/errorIcon.svg";

const InputElement = ({
  type,
  name,
  placeholder,
  formError,
  value,
  onChange,
  isValid,
  handleClearClick,
  handleBlur,
}) => {
  return (
    <div className={`${styles[name]}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className={`${styles.input} ${
          isValid && !formError
            ? styles.approvalInput
            : formError === undefined
            ? styles.firstInputStyle
            : styles.errorInput
        }`}
      />
      {formError && (
        <img
          onClick={handleClearClick}
          className={styles.iconImage}
          src={formError ? approvalIcon : errorIcon}
          alt="icon"
        />
      )}
      {formError && (
        <span className={`${styles.span} caption`}>
          <img src={warningIcon} alt="warningIcon" />
          {formError}
        </span>
      )}
    </div>
  );
};

export default InputElement;
