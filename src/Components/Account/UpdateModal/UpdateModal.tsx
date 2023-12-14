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

import { PropsWithChildren, useEffect, useMemo, useRef, useState } from "react";
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
import { Editor } from "@tinymce/tinymce-react";
const satFont = localFont({
  src: "../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
const UpdateFormBody = ({ loading }: { loading: boolean }) => {
  const { htma, htm, htma1, htm1 } = useAuth();
  const editorRef = useRef<any | null>(null);
  const editorRef1 = useRef<any | null>(null);
  const log = () => {
    if (editorRef.current && editorRef1.current) {
      htma(editorRef.current.getContent());
      htma1(editorRef1.current.getContent());
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
        label={"listContent"}
        name="listContent"
        placeholder={"listContent оруулах"}
        fontWeight="500"
        fontSize="14"
        color={"white"}
      />
      <Text my={"10px"}>
        Notes :{" "}
        <span style={{ fontSize: "12px" }}>Уг талбар хоосон байж болно</span>
      </Text>
      <Editor
        onInit={(evt, editor) => {
          editorRef1.current = editor;
        }}
        apiKey="7eztjbt9c7vbpz8ry9g8gesq1zmab59yhw5298z3nre97kuc"
        onFocus={(e) => {
          e.stopImmediatePropagation();
        }}
        initialValue={htm1}
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
      <FormInput
        fontWeight="500"
        fontSize="14"
        label={"startDate"}
        name="startDate"
        placeholder={"startDate оруулах"}
        type="datetime-local"
      />
      <FormInput
        label={"endDate"}
        name="endDate"
        placeholder={"endDate оруулах"}
        fontWeight="500"
        fontSize="14"
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
        initialValue={htm}
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
  var moment = require("moment");
  const { htma, htm, htm1, htma1 } = useAuth();
  useEffect(() => {
    htma(data?.data?.content);
    htma1(data?.data?.notes);
  }, []);
  const onSubmit = (values: any) => {
    values.content = htm;
    values.notes = htm1;
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
          notes: data?.data?.notes,
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
    <Modal title={"Өөрчлөх"} controlElement={children} msize="lg">
      {<UpdateForm data={data} onFinish={onFinish} />}
    </Modal>
  );
};
