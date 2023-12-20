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

import { useEffect } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildUpdateFormValidationSchema } from "./UpdateModal.schema";
import localFont from "next/font/local";

import { useAuth } from "..";
import { useMutation } from "@/utils";

const satFont = localFont({
  src: "../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
const UpdateFormBody = ({ loading }: { loading: boolean }) => {
  return (
    <Stack spacing="lg" pb="sm">
      {/* <FormInput
        fontWeight="500"
        fontSize="14"
        label={"userId"}
        name="userId"
        placeholder={"userId оруулах"}
        type="string"
      /> */}
      <FormInput
        label={"isAdmin"}
        name="isAdmin"
        placeholder={"isAdmin оруулах"}
        fontWeight="500"
        fontSize="14"
        type="string"
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
  id,
  onFinish,
  admin,
}: {
  id: string;
  admin: boolean;
  onFinish: () => void;
}) => {
  const { onClose } = useModalContext();
  const { showErrorToast, showSuccessToast } = useToast();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${id}`,
    method: "patch",
  });

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
          // userId: id,
          isAdmin: admin,
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
    </Stack>
  );
};
interface UpdateModalProps {
  id: string;
  admin: boolean;
  children: React.ReactNode;
  onFinish: () => void;
}
export const ChangeModal: React.FC<UpdateModalProps> = ({
  id,
  admin,
  children,
  onFinish,
}) => {
  return (
    <Modal title={"Өөрчлөх"} controlElement={children} msize="lg">
      {<UpdateForm id={id} admin={admin} onFinish={onFinish} />}
    </Modal>
  );
};
