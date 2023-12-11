import { Button, Stack, Text, useModalContext } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildMfaFormValidationSchema } from "./DeleteModal.schema";
// import { useLoginWithChallenge } from '@/services/auth/mfa.service';
import { useToast } from "@/utils/toast";
import { useMutation } from "@/utils";
import { useAuth } from "..";
import { useRouter } from "next/navigation";
// import { SendEmailButton } from '@/components/common/SendEmailButton';

const DeleteForm = ({ id }: { id: string }) => {
  const { showErrorToast, showSuccessToast } = useToast();
  const { onClose } = useModalContext();
  const router = useRouter();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/poll/${id}`,
    method: "delete",
  });
  const onSubmit = () => {
    request()
      .then((res: any) => {
        if (res?.success) {
          showSuccessToast("Амжилттай устгалаа!");
          router.push("/voting");
          onClose();
        }
      })
      .catch((error) => {
        showErrorToast(error.message);
      });
  };

  return (
    <Stack spacing="md">
      <Text>Та уг саналыг устгахдаа итгэлтэй байна уу?</Text>
      <Button
        type="submit"
        variant="outline"
        colorScheme="gray"
        bg="white"
        color={"black"}
        fontWeight={"700"}
        my={"20px"}
        isLoading={loading}
        onClick={() => {
          onSubmit();
        }}
      >
        Устгах
      </Button>
    </Stack>
  );
};
interface DeleteModalProps {
  id: string;
  children: React.ReactNode;
}
export const DeleteModal: React.FC<DeleteModalProps> = ({ id, children }) => {
  return (
    <Modal title={"Санал устгах"} controlElement={children} msize="sm">
      <DeleteForm id={id} />
    </Modal>
  );
};
