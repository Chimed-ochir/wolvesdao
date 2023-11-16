// import { TFunction } from 'next-i18next';
import { object, string } from "yup";
import * as Yup from "yup";
export const BuildLoginFormValidationSchema = () =>
  object().shape({
    username: string().required("userName").label("Нэвтрэх нэр"),
    password: string()
      .required("password")
      .min(12, " хамгийн багалаа 12 урттай")
      .max(25, "Хамгийн ихдээ 25 урттай")
      .label("Нууц үг"),
    // .matches(PASSWORD_REGEX, 'PASSWORD_REGEX')
  });
