// import { TFunction } from 'next-i18next';
import { object, string } from "yup";

export const BuildMfaFormValidationSchema = () =>
  object().shape({
    userCode: string()
      .required("Уг талбар хоосон байж болохгүй")
      .length(6, "Урт 6 тэмдэгт байх ёстой")
      .label("2FA код"),
    // verifyCode: string()
    // 	.required()
    // 	.length(8)
    // 	.label(t('mfaModal.mfaForm.fields.verifyCode')),
  });
