import React from "react";
import { Formik, Form } from "formik";

import helloFormSchema from "./validationForm";

import InputField from "../InputField";
import TextAreaField from '../InputField/TextAreaField';
import Button from "../Button";

function ContactForm() {
  return (
    <div className="helloForm-section-wrapper" id="contact">
      <h4 className="helloForm-section__title">say hello</h4>
      <p className="helloForm-section__text">
        Got some questions about us?
        <br />
        Wanna do business with us?
        <br />
        Or do you just want to send ud your latest
        <br />
        cat-content - there you go:
      </p>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        validationSchema={helloFormSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="helloForm-form">
          <InputField name="firstName" type="text" placeholder="First Name" />
          <InputField name="lastName" type="text" placeholder="Last Name" />
          <InputField name="email" type="email" placeholder="E-Mail" />
          <TextAreaField
            name="message"
            type="text"
            placeholder="Your Message"
          />
          <Button buttonTitle="SEND THAT MAIL" />
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
