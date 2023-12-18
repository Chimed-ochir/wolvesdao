import { object, string } from "yup";
import * as Yup from "yup";

export const BuildNewFormValidationSchema = () =>
  object().shape({
    name: string().label("name").required("Уг талбар хоосон байж болохгүй"),
  });
