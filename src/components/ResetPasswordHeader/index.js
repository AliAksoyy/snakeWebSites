import React from "react";
import styles from "./styles.module.scss";
import headerImg from "../../assets/resetPasswordImage/resetPassImage.svg";
const ResetPasswordHeader = () => {
  return (
    <div className={styles.container}>
      <img className={styles.headerImg} src={headerImg} alt="headerImg" />
      <h2>Reset Password</h2>
      <p className="subtitleLight">
        You can reset your password using this form.
      </p>
    </div>
  );
};

export default ResetPasswordHeader;
