import React, { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
  const [fieldErrors, setFieldErrors] = useState({});
  const validationRules = {
    name: val => !!val,
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: val => !!val
  };
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors(prev => ({ ...prev, ...errors }));
    return !hasErrors;
  };

  const renderFieldError = field => {
    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>;
    }
  };

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(
    () => {
      if (Object.keys(fieldErrors).length > 0) {
        validate();
      }
    },
    [inputs]
  );

  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        name: "",
        email: "",
        message: ""
      });
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: process.env.REACT_APP_FORMSPREE_URL,
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(
          true,
          "Thank you for contacting me. Will get back to you soon!",
          form,
          alert("Thank you for contacting me. Will get back to you soon!")
        );
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <section id="contact">
      <div className="row twelve">
        <div className="twelve columns collapsed">
          <h1>Contact Me</h1>
          <div className="contact-form">
            <form onSubmit={handleOnSubmit} noValidate>
              <input type="hidden" name="_subject" value="New submission!" />
              <input type="text" name="_gotcha" style={{ display: "none" }} />
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                onChange={handleOnChange}
                value={inputs.name}
                placeholder="Please enter your name..."
                className={fieldErrors.name ? "error" : ""}
              />
              {renderFieldError("name")}
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                onChange={handleOnChange}
                value={inputs.email}
                placeholder="Please enter your email..."
                className={fieldErrors.email ? "error" : ""}
              />
              {renderFieldError("email")}
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={handleOnChange}
                value={inputs.message}
                placeholder="Looking forward to receiving your message : )"
                className={fieldErrors.message ? "error" : ""}
              />
              {renderFieldError("message")}
              {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                  {serverState.status.msg}
                </p>
              )}
              <button
                className="contact-submit"
                type="submit"
                disabled={serverState.submitting}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
