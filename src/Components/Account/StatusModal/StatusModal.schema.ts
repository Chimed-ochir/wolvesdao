import { object, string } from "yup";
import * as Yup from "yup";

export const BuildUpdateFormValidationSchema = () =>
  object().shape({
    status: string().required("Уг талбар хоосон байж болохгүй").label("status"),
  });
