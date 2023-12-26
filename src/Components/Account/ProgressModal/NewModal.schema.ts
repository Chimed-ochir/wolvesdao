import { object, string } from "yup";
import * as Yup from "yup";

export const BuildNewFormValidationSchema = () =>
  object().shape({
    notes: string().label("notes"),
  });
