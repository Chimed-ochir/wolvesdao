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

import { useEffect, useMemo, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildNewFormValidationSchema } from "./OptionNewModal.schema";
import localFont from "next/font/local";

import { useAuth } from "..";
import { useMutation } from "@/utils";
import InputEmoji from "react-input-emoji";

const OptionFormBody = ({
  loading,
  icon,
}: {
  loading: boolean;
  icon: string;
}) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setText(icon || "");
  }, [icon]);
  const { emoji1 } = useAuth();

  const log = () => {
    if (text) {
      emoji1(text);
    }
  };

  const handleInputChange = (newText: string) => {
    setText(newText);
  };

  return (
    <Stack spacing="lg" pb="sm">
      <FormInput
        label={"Сонголт оруулах"}
        name="option"
        placeholder={"Сонголт оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />
      <Text>Тэмдэглэгээ: {text}</Text>
      <InputEmoji
        value={text}
        onChange={handleInputChange}
        cleanOnEnter
        placeholder="Icon оруулах"
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
        onClick={log}
      >
        Тохируулах
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
  const { emo } = useAuth();
  const onSubmit = (values: any) => {
    values.icon = emo;
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
            <OptionFormBody loading={loading} icon={icon} />
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
