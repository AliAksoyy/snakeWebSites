import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import InputElement from "./InputElement";
import TextAreaElement from "./TextAreaElement";
import CheckBoxElement from "./CheckBoxElement";
import { contactUsvalidation } from "../../utils/validation";
import { toastifyError, toastifyWarning } from "../../helpers/toastify";
import { useLang } from "../../context/LocalizationContext";
import { useSelector } from "react-redux";

const ContactUsFormElement = ({ postContactServer }) => {
  const { lang } = useLang();
  const languageData = useSelector((state) => state.localization);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
    checked: false,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formValuesError, setFormValuesError] = useState({});

  useEffect(() => {
    if (Object.values(formValues).every((item) => item)) {
      setFormValuesError(contactUsvalidation(formValues));
    }
  }, [formValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = () => {
    setFormValuesError(contactUsvalidation(formValues));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValuesError.isValid) {
      toastifyError(
        "Please make sure you have filled out all the required information"
      );
    } else if (formValuesError.isValid && !formValues.checked) {
      setFormValuesError({
        ...formValuesError,
        checked: "Please check the box",
      });
      toastifyWarning("Please check the box");
    } else {
      postContactServer({ ...formValues, messageId: Date.now() });
    }
  };

  const handleClearClick = (e) => {
    const clearValue = e.target.previousElementSibling.name;
    if (formValuesError[clearValue]) {
      setFormValues({ ...formValues, [clearValue]: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <InputElement
        type="text"
        name="firstName"
        placeholder={languageData[lang]?.data?.contact.firstName}
        value={formValues.firstName}
        onChange={handleChange}
        formError={formValuesError.firstName}
        isValid={formValuesError.isValid}
        handleClearClick={handleClearClick}
        handleBlur={handleBlur}
      />
      <InputElement
        type="text"
        name="lastName"
        placeholder={languageData[lang]?.data?.contact.lastName}
        value={formValues.lastName}
        onChange={handleChange}
        formError={formValuesError.lastName}
        isValid={formValuesError.isValid}
        handleClearClick={handleClearClick}
        handleBlur={handleBlur}
      />
      <InputElement
        type="text"
        name="email"
        placeholder={languageData[lang]?.data?.contact.email}
        value={formValues.email}
        onChange={handleChange}
        formError={formValuesError.email}
        isValid={formValuesError.isValid}
        handleClearClick={handleClearClick}
        handleBlur={handleBlur}
      />
      <InputElement
        type="text"
        name="topic"
        placeholder={languageData[lang]?.data?.contact.topic}
        value={formValues.topic}
        onChange={handleChange}
        formError={formValuesError.topic}
        isValid={formValuesError.isValid}
        handleClearClick={handleClearClick}
        handleBlur={handleBlur}
      />
      <TextAreaElement
        name="message"
        placeholder={languageData[lang]?.data?.contact.textArea}
        value={formValues.message}
        onChange={handleChange}
        formError={formValuesError.message}
        isValid={formValuesError.isValid}
        handleBlur={handleBlur}
      />
      <CheckBoxElement
        type="checkbox"
        name="checked"
        value={formValues.checked}
        setFormValues={setFormValues}
        formValues={formValues}
        formError={formValuesError.checked}
      />
    </form>
  );
};

export default ContactUsFormElement;
