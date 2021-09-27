import React from "react";
import { Formik, Form } from "formik";

import helloFormSchema from "./validationForm";

import InputField from "../InputField";
import TextAreaField from "../InputField/TextAreaField";
import Button from "../Button";

function ContactForm() {
  return (
    <div className="helloForm-section-wrapper" id="contact">
      <div className="contactForm-wrapper">
        <h4 className="helloForm-section__title">say hello</h4>
        <div className="helloForm-section-text-wrapper">
          <p className="helloForm-section__text helloForm-section__text--first ">
            Got some questions about us? Wanna do business with us?
          </p>
          <p className="helloForm-section__text">
            Or do you just want to send ud your latest cat-content - there you
            go:
          </p>
        </div>

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
            <div className="helloForm-form-wrapper">
              <div className="helloForm-from-inputs">
                <InputField
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                />
                <InputField
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                <InputField name="email" type="email" placeholder="E-Mail" />
              </div>
              <div className="inputField-wrapper-textAreaField-wrapper">
                <TextAreaField
                  name="message"
                  type="text"
                  placeholder="Your Message"
                />
              </div>
            </div>
            <Button buttonTitle="SEND THAT MAIL" />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ContactForm;
