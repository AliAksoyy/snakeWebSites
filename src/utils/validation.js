export const contactUsvalidation = (values) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^s@]{2,}$/i;
  let isValid = true;

  if (values.firstName !== "") {
    if (!values.firstName) {
      errors.firstName = "FirstName is required";
    } else if (values.firstName.length < 2) {
      errors.firstName = "FirstName must be more than 2 characters";
    }
  } else {
    isValid = false;
  }
  if (values.lastName !== "") {
    if (!values.lastName) {
      errors.lastName = "LastName is required";
    } else if (values.lastName.length < 2) {
      errors.lastName = "LastName must be more than 2 characters";
    }
  } else {
    isValid = false;
  }
  if (values.email !== "") {
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
  } else {
    isValid = false;
  }
  if (values.topic !== "") {
    if (!values.topic) {
      errors.topic = "This field is required";
    } else if (values.topic.length < 2) {
      errors.topic = "Topic must be more than 2 characters";
    }
  } else {
    isValid = false;
  }
  if (values.message !== "") {
    if (!values.message) {
      errors.message = "This field is required";
    } else if (values.message.length < 2) {
      errors.message = "Message must be more than 2 characters";
    }
  } else {
    isValid = false;
  }

  return { ...errors, isValid };
};
