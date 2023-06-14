"use client";

import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import styles from "./ContactForm.module.css";

import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqyedaa");

  const submitHandler = () => {};
  if (state.succeeded) {
    toast("Thank you for contacting me. I will check your message ASAP.");
    return (
      <div className={styles.image}>
        <Image src="contact.svg" fill={true} alt="contact" />
        <h2>Ty for your message</h2>
        <ToastContainer />
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address
            <input
              id="email"
              type="email"
              name="email"
              className={styles.input}
              placeholder="Enter your Email"
            />
          </label>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className={styles.error}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Enter your message"
            />
          </label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className={styles.error}
          />
        </div>

        <button
          type="submit"
          onClick={submitHandler}
          disabled={state.submitting}
          className={styles.button}
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </>
  );
};

export default ContactForm;
