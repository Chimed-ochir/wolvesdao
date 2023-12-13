import { Button, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildMfaFormValidationSchema } from "./MfaModal.schema";
import { useToast } from "@/utils/toast";
import { useMutation } from "@/utils";
import { useAuth } from "..";

const MfaFormBody = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <Stack spacing="md">
      <FormInput
        label={"2FA кодоо оруулна уу!"}
        name="userCode"
        isLoading={isLoading}
        tooltipText={
          "Та өөрийн холбосон authenticator апп-с гаргаж өгсөн 6 оронтой кодыг оруулна уу."
        }
        mt={"10px"}
        color={"white"}
        isMfa
      />

      <Button
        type="submit"
        variant="outline"
        colorScheme="gray"
        bg="#DFFF24"
        color={"black"}
        fontWeight={"700"}
        my={"20px"}
        isLoading={isLoading}
      >
        Илгээх
      </Button>
    </Stack>
  );
};

const MfaForm = ({
  sessionData,
  onFinish,
  onClose,
}: {
  sessionData: any;
  onFinish: (data: any) => any;
  onClose: () => any;
}) => {
  const { showErrorToast } = useToast();
  const { login } = useAuth();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/loginMFA`,
  });
  const onSubmit = (values: any) => {
    request({ ...sessionData, ...values })
      .then((res: any) => {
        login(res);
      })
      .catch((error) => {
        showErrorToast(error.message);
      });
  };

  return (
    <Formik
      initialValues={{ userCode: "" }}
      validationSchema={BuildMfaFormValidationSchema()}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <MfaFormBody isLoading={loading} />
        </Form>
      )}
    </Formik>
  );
};

export const MfaModal = ({
  isOpen,
  onClose,
  sessionData,
  onFinish,
}: {
  isOpen: boolean;
  onClose: () => any;
  sessionData: any;
  onFinish: (data: any) => any;
}) => {
  return (
    <Modal
      title={"2FA баталгаажуулалт"}
      isOpen={isOpen}
      onClose={onClose}
      msize="sm"
    >
      <MfaForm
        sessionData={sessionData}
        onClose={onClose}
        onFinish={onFinish}
      />
    </Modal>
  );
};
