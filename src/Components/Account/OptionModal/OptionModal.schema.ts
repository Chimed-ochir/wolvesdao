import { object, string } from "yup";
import * as Yup from "yup";

export const BuildNewFormValidationSchema = () =>
  object().shape({
    pollId: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("content"),
    option: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("description"),
    icon: string().required("Уг талбар хоосон байж болохгүй").label("endDate"),
  });
