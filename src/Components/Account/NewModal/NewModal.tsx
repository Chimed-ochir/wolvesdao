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
  Input,
} from "@chakra-ui/react";
import { useToast } from "@/utils/toast";
import { Editor } from "@tinymce/tinymce-react";
import { PropsWithChildren, useMemo, useRef, useState } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildNewFormValidationSchema } from "./NewModal.schema";
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
        label={"description"}
        name="description"
        placeholder={"description оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />

      <FormInput
        fontWeight="500"
        fontSize="14"
        label={"listContent"}
        name="listContent"
        placeholder={"listContent оруулах"}
        color={"white"}
      />
      {/* <Text my={"10px"}>
        listContent :{" "}
        <span style={{ fontSize: "12px" }}>
          Уг талбар хоосон байж болохгүй!
        </span>
      </Text>
      <Editor
        onInit={(evt, editor) => {
          editor1Ref.current = editor;
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
      /> */}
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
        label={"endDate"}
        name="endDate"
        placeholder={"endDate оруулах"}
        fontWeight="500"
        fontSize="14"
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
        label={"status"}
        name="status"
        placeholder={"status оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />

      {/* <FormInput name="content"> */}
      <Text my={"10px"}>
        Content :{" "}
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
  const { htm, htm1 } = useAuth();
  const { showErrorToast, showSuccessToast } = useToast();
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/poll`,
    method: "post",
  });
  var moment = require("moment");

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
          notes: "",
          endDate: "",
          listContent: "",
          startDate: "",
          status: "",
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
