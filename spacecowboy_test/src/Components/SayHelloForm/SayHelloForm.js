import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import helloFormSchema from "./validationForm";

import Button from "../Button";

function sayHelloForm() {
  return (
    <div className="helloForm-section-wrapper">
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
        {({ errors, touched }) => (
          <Form className="helloForm-from">
            {/* <ErrorMessage  name="firstName" className="invalidFeedback" /> */}
            {errors.firstName && touched.firstName ? (
              <div className="invalidFeedback">{errors.firstName}</div>
            ) : null}
            <Field
              name="firstName"
              placeholder="First Name"
              className="helloForm-form__input"
              type="text"
            />
            {errors.lastName && touched.lastName ? (
              <div className="invalidFeedback">{errors.lastName}</div>
            ) : null}
            <Field
              name="lastName"
              placeholder="Last Name"
              className="helloForm-form__input"
              type="text"
            />
            {errors.email && touched.email ? (
              <div className="invalidFeedback">{errors.email}</div>
            ) : null}
            <Field
              name="email"
              placeholder="E-mail"
              className="helloForm-form__input"
              type="email"
            />
            {errors.message && touched.message ? (
              <div className="invalidFeedback">{errors.message}</div>
            ) : null}
            <Field
              name="message"
              placeholder="Your message"
              className="helloForm-form__input textarea"
              type="textarea"
            />
            
            <Button buttonTitle="SEND THAT MAIL" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default sayHelloForm;
