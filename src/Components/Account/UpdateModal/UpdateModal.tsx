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

import { PropsWithChildren, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildUpdateFormValidationSchema } from "./UpdateModal.schema";
import localFont from "next/font/local";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useAuth } from "..";
import { useMutation } from "@/utils";
import { LoginDataType } from "..";
import { MfaModal } from "../MfaModal";
const satFont = localFont({
  src: "../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
const UpdateFormBody = ({ loading }: { loading: boolean }) => {
  const [type, setType] = useState("password");

  return (
    <Stack spacing="lg" pb="sm">
      <FormInput
        fontWeight="500"
        fontSize="14"
        label={"content"}
        name="content"
        placeholder={"content оруулах"}
        color={"white"}
      />

      <FormInput
        label={"description"}
        name="description"
        placeholder={"description оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />

      <FormInput
        label={"endDate"}
        name="endDate"
        placeholder={"endDate оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
        type="datetime-local"
      />

      <FormInput
        fontWeight="500"
        fontSize="14"
        label={"listContent"}
        name="listContent"
        placeholder={"listContent оруулах"}
        color={"white"}
      />
      <FormInput
        fontWeight="500"
        fontSize="14"
        label={"startDate"}
        name="startDate"
        placeholder={"startDate оруулах"}
        color={"white"}
        type="datetime-local"
      />

      <FormInput
        label={"withLink"}
        name="withLink"
        placeholder={"withLink оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />
      <FormInput
        label={"voteCount"}
        name="voteCount"
        placeholder={"voteCount оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />
      <FormInput
        label={"id"}
        name="id"
        placeholder={"id оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />
      <FormInput
        label={"status"}
        name="status"
        placeholder={"status оруулах"}
        fontWeight="500"
        fontSize="14"
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

const UpdateForm = ({
  data,
  onFinish,
}: {
  data: any;
  onFinish: () => void;
}) => {
  console.log("====", data);
  console.log("==data?._id==", data?.data?._id);
  const { onClose } = useModalContext();
  const { showErrorToast, showSuccessToast } = useToast();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/poll/${data?.data?._id}`,
    method: "patch",
  });
  var moment = require("moment");

  const onSubmit = (values: any) => {
    request(values)
      .then((res: any) => {
        if (res?.success) {
          showSuccessToast("Амжилттай шинэчлэгдлээ!");
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
          content: data?.data?.content,
          description: data?.data?.description,
          endDate: moment
            .utc(data?.data?.endDate)
            .format("YYYY-MM-DDTHH:mm")
            .slice(0, 16),
          listContent: data?.data?.listContent,
          options: data?.data?.options,
          startDate: moment
            .utc(data?.data?.startDate)
            .format("YYYY-MM-DDTHH:mm")
            .slice(0, 16),
          status: data?.data?.status,
          withLink: data?.data?.withLink,
          voteCount: data?.data?.__v,
          id: data?.data?._id,
        }}
        validationSchema={BuildUpdateFormValidationSchema()}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <UpdateFormBody loading={loading} />
          </Form>
        )}
      </Formik>
      {/* <MfaModal
        isOpen={!!sessionData}
        onClose={() => setSessionData(null)}
        sessionData={sessionData}
        onFinish={onFinish}
      /> */}
    </Stack>
  );
};
interface UpdateModalProps {
  data: any;
  children: React.ReactNode;
  onFinish: () => void;
}
export const UpdateModal: React.FC<UpdateModalProps> = ({
  data,
  children,
  onFinish,
}) => {
  return (
    <Modal title={"Өөрчлөх"} controlElement={children} msize="sm">
      {<UpdateForm data={data} onFinish={onFinish} />}
    </Modal>
  );
};
