import { Button, Stack, Text, useModalContext } from "@chakra-ui/react";
import { Modal } from "@/Components/Modal";
import { useToast } from "@/utils/toast";
import { useMutation } from "@/utils";
import { useRouter } from "next/navigation";

const DeleteForm = ({ onFinish }: { onFinish: () => void }) => {
  const { showErrorToast, showSuccessToast } = useToast();
  const { onClose } = useModalContext();
  const router = useRouter();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
    method: "delete",
  });
  const onSubmit = () => {
    request()
      .then((res: any) => {
        if (res?.success) {
          showSuccessToast("Амжилттай устгалаа!");

          onFinish();

          onClose();
        }
      })
      .catch((error) => {
        showErrorToast(error.message);
      });
  };

  return (
    <Stack spacing="md">
      <Text>
        Та Админуудаас бусад бүх хэрэглэгчдийг устгахдаа итгэлтэй байна уу?
      </Text>
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
  children: React.ReactNode;

  onFinish: () => void;
}
export const DeleteAllModal: React.FC<DeleteModalProps> = ({
  children,

  onFinish,
}) => {
  return (
    <Modal title={"Бүх хэрэглэгч устгах"} controlElement={children} msize="sm">
      <DeleteForm onFinish={onFinish} />
    </Modal>
  );
};
