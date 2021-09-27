import React from "react";
import { useField, ErrorMessage } from "formik";

const InputField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="inputField-wrapper">
      <ErrorMessage
        component="div"
        name={field.name}
        className="invalidFeedback"
      />
      <input
        className={`inputField__input ${
          meta.error && meta.touched && "inputField__input--error"
        } ${meta.touched && !meta.error && "inputField__input--valid"}`}
        {...field}
        {...props}
      />
      <i className="validation-icon"></i>
    </div>
  );
};

export default InputField;
