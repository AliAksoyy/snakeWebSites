import React from "react";
import styles from "../styles/resetPasswordStyles.module.scss";
import ResetPasswordHeader from "../components/ResetPasswordHeader";
import ResetPasswordForm from "../components/ResetPasswordForm";
const ResetPassword = () => {
  return (
    <main className={styles.main}>
      <ResetPasswordHeader />
      <ResetPasswordForm />
    </main>
  );
};

export default ResetPassword;
