import { Button, Stack, useModalContext, Text } from "@chakra-ui/react";
import { useToast } from "@/utils/toast";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildNewFormValidationSchema } from "./NewModal.schema";
import { useAuth } from "..";
import { useMutation } from "@/utils";

const NewFormBody = ({ loading }: { loading: boolean }) => {
  const { htma } = useAuth();

  const editorRef = useRef<any | null>(null);
  const log = () => {
    if (editorRef.current) {
      htma(editorRef.current.getContent());
    }
  };

  return (
    <Stack spacing="lg" pb="sm">
      <FormInput
        label={"Саналын нэр оруулах"}
        name="description"
        placeholder={"Саналын нэр оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />

      <FormInput
        label={"Саналын мэдээлэл хураангуй"}
        name="listContent"
        placeholder={"Саналын  хураангуй мэдээлэл оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />

      <FormInput
        fontWeight="500"
        fontSize="14"
        label={"Санал хураалт эхлэх хугацаа оруулах"}
        name="startDate"
        placeholder={"Эхлэх хугацаа оруулах"}
        type="datetime-local"
      />
      <FormInput
        label={"Санал хураалт дуусах хугацаа оруулах"}
        name="endDate"
        placeholder={"Дуусах хугацаа оруулах"}
        fontWeight="500"
        fontSize="14"
        type="datetime-local"
      />
      <FormInput
        label={"Саналын хэлэлцүүлэгчийн линк оруулах"}
        name="withLink"
        placeholder={"Саналын хэлэлцүүлэгчийн линк оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />
      {/* <FormInput name="content"> */}
      <Text my={"10px"}>
        Саналын талаарх мэдээлэл оруулах :{" "}
        <span style={{ fontSize: "12px" }}>
          Уг талбар хоосон байж болохгүй!
        </span>
      </Text>
      <Editor
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        apiKey="7eztjbt9c7vbpz8ry9g8gesq1zmab59yhw5298z3nre97kuc"
        onFocus={(e) => {
          e.stopImmediatePropagation();
        }}
        init={{
          height: 300,
          menubar: true,
          auto_focus: true,

          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
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
        Илгээх
      </Button>
    </Stack>
  );
};

const NewForm = ({ onFinish }: { onFinish: () => void }) => {
  const { onClose } = useModalContext();
  const { htm } = useAuth();
  const { showErrorToast, showSuccessToast } = useToast();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/poll`,
    method: "post",
  });

  const onSubmit = (values: any) => {
    values.content = htm;

    request(values)
      .then((res: any) => {
        if (res?.success) {
          showSuccessToast("Амжилттай үүсгэлээ!");
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
          content: "",
          description: "",

          endDate: "",
          listContent: "",
          startDate: "",

          withLink: "",
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
export const NewModal: React.FC<UpdateModalProps> = ({
  children,
  onFinish,
}) => {
  return (
    <Modal title={"Нэмэх"} controlElement={children} msize="lg">
      {<NewForm onFinish={onFinish} />}
    </Modal>
  );
};
