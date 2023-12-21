import {
  Button,
  Stack,
  useModalContext,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useToast } from "@/utils/toast";

import { useState } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";

import { BuildUpdateFormValidationSchema } from "./UpdateModal.schema";

import { useMutation } from "@/utils";

const UpdateFormBody = ({
  loading,
  setSelectedStatus,
  selectedStatus,
}: {
  loading: boolean;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
  selectedStatus: string;
}) => {
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };
  return (
    <Stack spacing="lg" pb="sm">
      <FormControl id="status" fontWeight="500" fontSize="14" color={"white"}>
        <FormLabel>Саналын статус оруулах</FormLabel>
        <Select value={selectedStatus} onChange={handleStatusChange}>
          <option value="executed">executed</option>
          <option value="rejected">rejected</option>
        </Select>
      </FormControl>
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
  const { onClose } = useModalContext();
  const { showErrorToast, showSuccessToast } = useToast();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/poll/${data?.data?._id}`,
    method: "patch",
  });
  const [selectedStatus, setSelectedStatus] = useState<string>(
    data?.data?.status || ""
  );

  const onSubmit = () => {
    const updatedValues = {
      status: selectedStatus,
    };

    request(updatedValues)
      .then((res: any) => {
        if (res?.success) {
          showSuccessToast("Амжилттай статус шинэчлэгдлээ!");
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
          status: data?.data?.status,
        }}
        validationSchema={BuildUpdateFormValidationSchema()}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <UpdateFormBody
              loading={loading}
              setSelectedStatus={setSelectedStatus}
              selectedStatus={selectedStatus}
            />
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

interface UpdateModalProps {
  data: any;
  children: React.ReactNode;
  onFinish: () => void;
}
export const StatusModal: React.FC<UpdateModalProps> = ({
  data,
  children,
  onFinish,
}) => {
  return (
    <Modal title={"Статус өөрчлөх"} controlElement={children} msize="md">
      {<UpdateForm data={data} onFinish={onFinish} />}
    </Modal>
  );
};
