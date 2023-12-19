import { object, string } from "yup";
import * as Yup from "yup";

export const BuildNewFormValidationSchema = () =>
  object().shape({
    content: string().label("content"),
    description: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("description"),
    endDate: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("endDate"),
    listContent: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("listContent"),
    notes: string().label("notes"),
    startDate: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("startDate"),
    status: string().label("status"),
    withLink: string()
      .required("Уг талбар хоосон байж болохгүй")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-za-z0-9#]+)*\/?(\?[a-za-z0-9-_]+=[a-za-z0-9-%]+&?)?$/,

        "зөв хаяг оруулна уу!"
      )
      .label("withLink"),
  });
