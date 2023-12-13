import { object, string } from "yup";

export const BuildMfaFormValidationSchema = () =>
  object().shape({
    userCode: string()
      .required("Уг талбар хоосон байж болохгүй")
      .length(6, "Урт 6 тэмдэгт байх ёстой")
      .label("2FA кодоо оруулна уу! "),
  });
