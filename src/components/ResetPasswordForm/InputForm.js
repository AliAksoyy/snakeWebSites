import React from "react";
import styles from "./styles.module.scss";
import warningIcon from "../../assets/resetPasswordImage/warningIcon.svg";
const InputForm = ({
  type,
  placeholder,
  name,
  src,
  value,
  onChange,
  error,
  id,
  handleClick,
}) => {
  return (
    <div className={styles.inputParent}>
      <input
        style={error && { border: "1px solid #ef4141" }}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
      />
      {value && (
        <img
          className={styles.img}
          onClick={handleClick}
          src={src}
          alt="showIcon"
        />
      )}
      {error && (
        <span className={`${styles.span} caption`}>
          <img
            className={styles.warningImg}
            src={warningIcon}
            alt="warningIcon"
          />
          {error}
        </span>
      )}
    </div>
  );
};

export default InputForm;
