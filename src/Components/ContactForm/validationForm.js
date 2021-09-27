import * as Yup from "yup";

const helloFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "First name must be longer than 3 characters")
    .max(20, "Too Long")
    .required("First name is required"),
  lastName: Yup.string()
    .min(3, "Last name must be longer than 3 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Sorry, that‘s no valid E-Mail address")
    .required("Email is required"),
  message: Yup.string()
    .min(5, "Message must be longer than 5 characters")
    .required("Message is required"),
});

export default helloFormSchema;
