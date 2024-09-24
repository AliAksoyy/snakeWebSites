import React, { useState } from "react";
import styles from "./styles.module.scss";
import InputForm from "./InputForm";
import hideIcon from "../../assets/resetPasswordImage/hideIcon.svg";
import showIcon from "../../assets/resetPasswordImage/showIcon.svg";
import { resetValidation } from "../../utils/validation";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

const ResetPasswordForm = () => {
  const [values, setValues] = useState({ password: "", confirmPassword: "" });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(resetValidation(values));
    setIsSubmit(true);

    if (Object.values(formError).every((item) => item === null) && isSubmit) {
      axios
        .post(
          `http://localhost:5000/auth/resetPassword?token=${searchParams.get(
            "token"
          )}`,
          {
            password: values.password,
          }
        )
        .then((res) => {
          // burada onay sayfası acılacak
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/linkExpired");
        });
      setValues({ password: "", confirmPassword: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    const input = e.target.previousElementSibling;
    console.log(e.target);
    if (input.type === "password") {
      e.target.src = hideIcon;
      input.type = "text";
    } else {
      input.type = "password";
      e.target.src = showIcon;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputForm
        type="password"
        placeholder="Enter new password"
        name="password"
        value={values.password}
        onChange={handleChange}
        error={formError.password}
        id="password"
        handleClick={handleClick}
        src={showIcon}
      />
      <InputForm
        type="password"
        placeholder="Confirm new password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        error={formError.confirmPassword}
        id="confirmPassword"
        handleClick={handleClick}
        src={showIcon}
      />
      <button className={styles.button}>Create New Password</button>
    </form>
  );
};

export default ResetPasswordForm;
