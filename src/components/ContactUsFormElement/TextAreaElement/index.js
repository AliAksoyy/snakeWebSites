import React from "react";
import styles from "./styles.module.scss";
import warningIcon from "../../../assets/ContactUsImage/warningIcon.svg";

const TextAreaElement = ({
  name,
  placeholder,
  value,
  onChange,
  formError,
  handleBlur,
  isValid,
}) => {
  return (
    <div className={styles.textareaParent}>
      <textarea
        placeholder={placeholder}
        className={`${styles.textArea} ${
          isValid && !formError
            ? styles.approvalTextArea
            : formError === undefined
            ? styles.textArea
            : styles.erroerrorTextArearInput
        }`}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={handleBlur}
      ></textarea>
      {formError && (
        <span className={`${styles.span} caption`}>
          <img src={warningIcon} alt="warningIcon" />
          {formError}
        </span>
      )}
    </div>
  );
};

export default TextAreaElement;
