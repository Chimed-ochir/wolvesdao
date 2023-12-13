import {
  Box,
  Divider,
  Button,
  Stack,
  useModalContext,
  HStack,
  Link,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useToast } from "@/utils/toast";
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { AiFillEye } from '@react-icons/all-files/ai/AiFillEye';
// import { AiFillEyeInvisible } from '@react-icons/all-files/ai/AiFillEyeInvisible';

import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildNewFormValidationSchema } from "./OptionNewModal.schema";
import localFont from "next/font/local";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useAuth } from "..";
import { useMutation } from "@/utils";
import { LoginDataType } from "..";
import { MfaModal } from "../MfaModal";
import { Editor } from "@tinymce/tinymce-react";
const satFont = localFont({
  src: "../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
const OptionFormBody = ({ loading }: { loading: boolean }) => {
  return (
    <Stack spacing="lg" pb="sm">
      {/* <FormInput
        label={"pollId"}
        name="pollId"
        placeholder={"pollId оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
        isDisabled
      /> */}
      <FormInput
        label={"Option"}
        name="option"
        placeholder={"option оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />

      <FormInput
        fontWeight="500"
        fontSize="14"
        label={"Icon Link"}
        name="icon"
        placeholder={"icon оруулах"}
        color={"white"}
      />

      <Button
        type="submit"
        variant="outline"
        colorScheme="gray"
        bg="white"
        color={"black"}
        fontWeight={"700"}
        my={"20px"}
        isLoading={loading}
      >
        Илгээх
      </Button>
    </Stack>
  );
};

const OptionForm = ({
  onFinish,
  id,
  option1,
  icon,
}: {
  onFinish: () => void;
  id: string;
  option1: string;
  icon: string;
}) => {
  const { onClose } = useModalContext();
  const { showErrorToast, showSuccessToast } = useToast();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/option/${id}`,
    method: "patch",
  });
  console.log("id", id);
  const onSubmit = (values: any) => {
    console.log("myvalues", values);
    request(values)
      .then((res: any) => {
        if (res?.success) {
          showSuccessToast("Амжилттай өөрчлөгдлөө!");
          onFinish();
          onClose();
        }
      })
      .catch((error) => {
        showErrorToast(error.message);
      });
  };

  return (
    <Stack>
      <Formik
        initialValues={{
          option: option1,
          icon: icon,
        }}
        validationSchema={BuildNewFormValidationSchema()}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <OptionFormBody loading={loading} />
          </Form>
        )}
      </Formik>
    </Stack>
  );
};
interface UpdateModalProps {
  children: React.ReactNode;
  id: string;
  option: string;
  icon: string;
  onFinish: () => void;
}
export const OptionNewModal: React.FC<UpdateModalProps> = ({
  children,
  id,
  onFinish,
  icon,
  option,
}) => {
  return (
    <Modal title={"Сонголт өөрчлөх"} controlElement={children} msize="lg">
      {<OptionForm onFinish={onFinish} id={id} option1={option} icon={icon} />}
    </Modal>
  );
};
