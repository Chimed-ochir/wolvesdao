import { object, string } from "yup";
import * as Yup from "yup";

export const BuildNewFormValidationSchema = () =>
  object().shape({
    // pollId: string().required("Уг талбар хоосон байж болохгүй").label("pollId"),
    option: string().required("Уг талбар хоосон байж болохгүй").label("option"),
    icon: string()
      .required("Уг талбар хоосон байж болохгүй")
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "зөв icon хаяг оруулна уу!"
      )
      .label("icon"),
  });
// /^(https?):\/\/[\w\-]+(\.[\w\-]+)+[\w\-.,@?^=%&:/~+#]*$/,
