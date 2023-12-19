import { object, string } from "yup";
import * as Yup from "yup";

export const BuildUpdateFormValidationSchema = () =>
  object().shape({
    content: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("content"),
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
    withLink: string()
      .required("Уг талбар хоосон байж болохгүй")
      // .matches(
      //   /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      //   "зөв хаяг оруулна уу!"
      // )
      .label("withLink"),
    voteCount: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("voteCount"),
    id: string().required("Уг талбар хоосон байж болохгүй").label("id"),
  });
