import {
  Button,
  Stack,
  useModalContext,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { PropsWithChildren, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildLoginFormValidationSchema } from "./AuthModal.schema";
import { useToast } from "@/utils/toast";
import localFont from "next/font/local";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "..";
import { useMutation } from "@/utils";
import { LoginDataType } from "..";
import { MfaModal } from "../MfaModal";
const satFont = localFont({
  src: "../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
const LoginFormBody = ({ loading }: { loading: boolean }) => {
  const [type, setType] = useState("password");
  const changePassword = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <Stack spacing="lg" pb="sm">
      <Stack h="96px" justifyContent={"space-evenly"}>
        <Text
          {...satFont.style}
          fontSize={"22px"}
          color={"#FBFBFB"}
          lineHeight={"30px"}
          fontWeight="700"
        >
          Санал хураалтын хэсэгт нэвтрэх
        </Text>
        <Text
          fontFamily={"Golos Text"}
          fontSize="14"
          lineHeight={"17px"}
          fontWeight={"600px"}
          color="#8A8A8A"
        >
          Та MongolNFT хэрэглэгчийн бүртгэлээ ашиглан нэвтэрнэ үү!
        </Text>
      </Stack>
      <FormInput
        fontWeight="500"
        fontSize="14"
        label={"Нэвтрэх нэр"}
        name="email"
        placeholder={"Нэвтрэх нэр оруулах"}
        color={"white"}
        mt={"5px"}
        isLoading={loading}
      />

      <FormInput
        label={"Нууц үг"}
        name="password"
        placeholder={"Нууц үг оруулах"}
        type={type}
        autoComplete="current-password"
        color={"white"}
        mt={"5px"}
        isLoading={loading}
        inputRightElement={
          <InputRightElement
            onClick={changePassword}
            cursor={"pointer"}
            mt={"5px"}
          >
            {type === "password" ? (
              <AiFillEyeInvisible color={"white"} />
            ) : (
              <AiFillEye color={"white"} />
            )}
          </InputRightElement>
        }
      />

      <Button
        type="submit"
        variant="outline"
        colorScheme="gray"
        bg="#DFFF24"
        color={"black"}
        fontWeight={"700"}
        my={"20px"}
        isLoading={loading}
      >
        Нэвтрэх
      </Button>
    </Stack>
  );
};

const LoginForm = () => {
  const { onClose } = useModalContext();
  const { showErrorToast, showSuccessToast } = useToast();
  const { login } = useAuth();
  const [sessionData, setSessionData] = useState<any>(null);
  const [isOp, setIsOp] = useState(false);
  const [mfa, setMfa] = useState(false);
  const [ner, setNer] = useState("");
  let spell: any = "bat";
  const { loading, request } = useMutation({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
  });
  const onSubmit = (values: any) => {
    request(values)
      .then((res: any) => {
        if (res.session && res.username) {
          setSessionData({
            session: res?.session,
            username: res.username,
          });
          setMfa(true);
        } else {
          login(res);
        }
      })
      .catch((error) => {
        showErrorToast(error.message);
      });
  };

  const onFinish = (data: any) => {
    login(data);
  };
  return (
    <Stack>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={BuildLoginFormValidationSchema()}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <LoginFormBody loading={loading} />
          </Form>
        )}
      </Formik>
      <MfaModal
        isOpen={!!sessionData}
        onClose={() => setSessionData(null)}
        sessionData={sessionData}
        onFinish={onFinish}
      />
    </Stack>
  );
};

export const AuthModal = ({ children }: PropsWithChildren) => {
  return (
    <Modal title={"Login"} controlElement={children} msize="sm">
      {<LoginForm />}
    </Modal>
  );
};
