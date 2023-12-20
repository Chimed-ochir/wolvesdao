import { object, string } from "yup";
import * as Yup from "yup";

export const BuildUpdateFormValidationSchema = () =>
  object().shape({
    // userId: string().required("Уг талбар хоосон байж болохгүй").label("userId"),
    isAdmin: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("isAdmin"),
  });
