import { object, string } from "yup";
import * as Yup from "yup";

export const BuildLoginFormValidationSchema = () =>
  object().shape({
    email: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("Username"),
    password: string()
      .required("Уг талбар хоосон байж болохгүй")
      // .min(12, "12-25 Character")
      .max(25, "12-25 Тэмдэгт")
      .label("Password"),
    // .matches(PASSWORD_REGEX, 'PASSWORD_REGEX')
  });
