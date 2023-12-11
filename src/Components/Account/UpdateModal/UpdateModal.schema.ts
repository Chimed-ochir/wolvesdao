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

    startDate: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("startDate"),
    status: string().required("Уг талбар хоосон байж болохгүй").label("status"),
    withLink: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("withLink"),
    voteCount: string()
      .required("Уг талбар хоосон байж болохгүй")
      .label("voteCount"),
    id: string().required("Уг талбар хоосон байж болохгүй").label("id"),
  });
