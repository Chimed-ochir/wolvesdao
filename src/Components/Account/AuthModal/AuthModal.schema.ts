import { object, string } from "yup";
import * as Yup from "yup";

export const BuildLoginFormValidationSchema = () =>
  object().shape({
    email: string().required("The field cannot be empty").label("Username"),
    password: string()
      .required("The field cannot be empty")
      // .min(12, "12-25 Character")
      .max(25, "12-25 Character")
      .label("Password"),
    // .matches(PASSWORD_REGEX, 'PASSWORD_REGEX')
  });
