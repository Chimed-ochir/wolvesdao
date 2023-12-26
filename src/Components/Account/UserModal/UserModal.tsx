import { Button, Stack, useModalContext, Text } from "@chakra-ui/react";
import { useToast } from "@/utils/toast";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildNewFormValidationSchema } from "./UserModal.schema";
import { useMutation } from "@/utils";

const NewFormBody = ({ loading }: { loading: boolean }) => {
  return (
    <Stack spacing="lg" pb="sm">
      <FormInput
        label={"user"}
        name="user"
        placeholder={"user оруулах"}
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

const NewForm = ({ onFinish }: { onFinish: () => void }) => {
  const { onClose } = useModalContext();

  const { showErrorToast, showSuccessToast } = useToast();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/name`,
    method: "post",
  });

  const onSubmit = (values: any) => {
    request(values)
      .then((res: any) => {
        showSuccessToast("Амжилттай хэрэглэгч нэмлээ!");
        onFinish();
        onClose();
      })
      .catch((error) => {
        showErrorToast(error.message);
      });
  };

  return (
    <Stack>
      <Formik
        initialValues={{
          user: "",
        }}
        validationSchema={BuildNewFormValidationSchema()}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <NewFormBody loading={loading} />
          </Form>
        )}
      </Formik>
    </Stack>
  );
};
interface UpdateModalProps {
  children: React.ReactNode;
  onFinish: () => void;
}
export const UserModal: React.FC<UpdateModalProps> = ({
  children,
  onFinish,
}) => {
  return (
    <Modal title={"Хэрэглэгч нэмэх"} controlElement={children} msize="md">
      {<NewForm onFinish={onFinish} />}
    </Modal>
  );
};
