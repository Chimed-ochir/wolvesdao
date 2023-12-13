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

import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildOptionwFormValidationSchema } from "./OptionModal.schema";
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

const OptionForm = ({ onFinish, id }: { onFinish: () => void; id: string }) => {
  const { onClose } = useModalContext();
  const { showErrorToast, showSuccessToast } = useToast();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/option`,
    method: "post",
  });
  var moment = require("moment");
  const onSubmit = (values: any) => {
    request(values)
      .then((res: any) => {
        if (res?.success) {
          showSuccessToast("Амжилттай сонголт орууллаа!");
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
          pollId: id,
          option: "",
          icon: "",
        }}
        validationSchema={BuildOptionwFormValidationSchema()}
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
  onFinish: () => void;
}
export const OptionModal: React.FC<UpdateModalProps> = ({
  children,
  id,
  onFinish,
}) => {
  return (
    <Modal title={"Сонголт нэмэх"} controlElement={children} msize="lg">
      {<OptionForm onFinish={onFinish} id={id} />}
    </Modal>
  );
};
