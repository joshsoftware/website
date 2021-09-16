import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  API_BASE_URL,
  GOOGLE_RECAPETCHA_SITE_KEY,
} from "../../globalConstants.js";
import useInput from "../../hooks/useInput";
import LinkButton from "../../shared-components/linkButton/linkButton";
import "./contact-us.css";

const ContactUsForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const contact_us = {
      name,
      email,
      organization,
      job_title,
      role,
      message,
      phone,
    };
    fetch(`${API_BASE_URL}contact_us.json`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "g-recaptcha-response": gCaptcha, contact_us }),
    })
      .then((res) => {
        if (res.ok) return res.json();

        throw new Error(`${res.status} - ${res.statusText}`);
      })
      .then(() => {
        alert("Thanks for contacting us! We will get back to you soon!");
      })
      .catch((result) => {
        console.log(result);
      });
  };

  const { value: name, onChange: onChangeName } = useInput("");
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: organization, onChange: onChangeOrganization } = useInput("");
  const { value: job_title, onChange: onChangeJobTitle } = useInput("");
  const { value: role, onChange: onChangeRole } = useInput("");
  const { value: message, onChange: onChangeMessage } = useInput("");
  const { value: phone, onChange: onChangePhone } = useInput("");
  const [gCaptcha, setGCaptcha] = useState(false);

  return (
    <form className="contact-form-wrap" onSubmit={handleSubmit}>
      <div className="form-floating mb-3 position-relative">
        <input
          type="text"
          class="form-control"
          id="input-fname"
          required={true}
          placeholder="name"
          onChange={onChangeName}
        />
        <label htmlFor="input-fname">Name</label>
      </div>
      <div className="form-floating mb-3 position-relative">
        <input
          id="inputEmail"
          type="email"
          placeholder="email"
          required={true}
          className="form-control"
          onChange={onChangeEmail}
        />

        <label htmlFor="inputEmail" className="mb-0">
          Email
        </label>
      </div>
      <div className="form-floating mb-3 position-relative">
        <input
          id="input-organization"
          type="text"
          required={true}
          className="form-control"
          placeholder="organization"
          onChange={onChangeOrganization}
        />
        <label htmlFor="input-organization" className="mb-0">
          Organization
        </label>
      </div>
      <div className="form-floating mb-3 position-relative form-select-floating">
        <select
          id="exampleFormControlSelect1"
          aria-describedby="form-control"
          className="form-control form-select-field"
          onChange={onChangeRole}
        >
          <option>- Please Select -</option>
          <option>Potential Customer</option>
          <option>Partner or Alliance</option>
          <option>Job Seeker</option>
        </select>
        <small id="form-control" className="form-text text-muted">
          (Potential Customer; Partner or Alliance; Job Seeker)
        </small>
        <label htmlFor="exampleFormControlSelect1" className="mb-2">
          You are:
        </label>
      </div>
      <div className="form-floating mb-3 position-relative">
        <textarea
          id="exampleFormControlTextarea1"
          className="form-control"
          placeholder="Leave a comment here"
          onChange={onChangeMessage}
        ></textarea>
        <label htmlFor="exampleFormControlTextarea1" className="mb-0">
          How can we help you?
        </label>
      </div>
      <div className="captcha">
        <ReCAPTCHA
          sitekey={GOOGLE_RECAPETCHA_SITE_KEY}
          onChange={setGCaptcha}
        />
      </div>
      <LinkButton
        buttonText="submit"
        type="submit"
        id="contact-us-btn"
        className="mt-4"
      />
    </form>
  );
};

export default ContactUsForm;
