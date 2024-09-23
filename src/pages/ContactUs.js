import React, { useEffect, useState } from "react";
import styles from "../styles/contactUsStyles.module.scss";
import ContactUsHeader from "../components/ContactUsHeader";
import ContactUsFormElement from "../components/ContactUsFormElement";
import axios from "axios";
import Loading from "../components/Loading";
import { toastifyError, toastifySuccess } from "../helpers/toastify";

const ContactUs = ({ drawerModal }) => {
  const [loading, setLoading] = useState(false);

  const postContactServer = async (formData) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/contact`, formData)
      .then((res) => {
        setLoading(false);
        toastifySuccess("Your request has been successfully sent");
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        toastifyError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (drawerModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [drawerModal]);

  if (loading) {
    return <Loading width={20} height={20} />;
  } else {
    return (
      <main className={styles.main}>
        {" "}
        <ContactUsHeader />
        <ContactUsFormElement postContactServer={postContactServer} />
      </main>
    );
  }
};

export default ContactUs;
