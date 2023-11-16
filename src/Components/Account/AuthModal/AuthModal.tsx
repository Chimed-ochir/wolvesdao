import {
  Box,
  Divider,
  Button,
  Stack,
  useModalContext,
  HStack,
  Link,
} from "@chakra-ui/react";
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { AiFillEye } from '@react-icons/all-files/ai/AiFillEye';
// import { AiFillEyeInvisible } from '@react-icons/all-files/ai/AiFillEyeInvisible';

import { PropsWithChildren, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
import { BuildLoginFormValidationSchema } from "./AuthModal.schema";
// import { useLogin } from "@/services/auth/login.service";
// import { useAuthContext } from "@/contexts/AuthContext";
// import { useConfirmWithResend } from "@/services/auth/confirm.service";
import { useToast } from "@/utils/toast";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useAuth } from "..";
import { useMutation } from "@/utils";

// const LoginFormBody = ({ isLoading }: { isLoading: boolean }) => {
const LoginFormBody = () => {
  const [type, setType] = useState("password");

  //   const { openLogin, seeLogin } = useAuthContext();
  //   const changePassword = () => {
  //     if (type === "password") {
  //       setType("text");
  //     } else {
  //       setType("password");
  //     }
  //   };

  return (
    <Stack spacing="lg" pb="sm">
      <HStack position="relative">
        <Divider />
        <HiOutlineUserCircle size="40" opacity={0.1} />
        <Divider />
      </HStack>
      <FormInput
        fontWeight="500"
        fontSize="14"
        label={"Email"}
        name="email"
        placeholder={"Email"}
        // isLoading={isLoading}
      />
      <Box>
        <FormInput
          label={"Password"}
          name="password"
          placeholder={"Password"}
          type={type}
          autoComplete="current-password"
          //   isLoading={isLoading}
        />

        {/* {type === "password" ? (
          <Box
            style={{
              position: "absolute",
              top: "53px",
              right: "10px",
              cursor: "pointer",
              marginBottom: "33px",
              zIndex: "1",
            }}
            onClick={changePassword}
          >
            <AiFillEyeInvisible />
          </Box>
        ) : (
          <Box
            style={{
              position: "absolute",
              top: "53px",
              right: "10px",
              cursor: "pointer",
              marginBottom: "33px",
              zIndex: "1",
            }}
            onClick={changePassword}
          >
            <AiFillEye />
          </Box>
        )} */}
      </Box>

      {/* <Button variant="white" size="sm" type="submit" isLoading={isLoading}> */}

      <Button
        type="submit"
        variant="outline"
        colorScheme="gray"
        bg="white"
        color={"black"}
        fontWeight={"700"}
        my={"20px"}
      >
        Login
      </Button>
    </Stack>
  );
};

const LoginForm = () => {
  const { onClose } = useModalContext();
  const { showErrorToast, showSuccessToast } = useToast();
  const { login, loading } = useAuth();
  const [sessionData, setSessionData] = useState<any>(null);
  const [isOp, setIsOp] = useState(false);
  const [ner, setNer] = useState("");
  let spell: any = "bat";
  //   const { confirmWithResend } = useConfirmWithResend(
  //     (data) => {
  //       if (data?.$metadata.httpStatusCode === 200) {
  //         showSuccessToast(
  //           `${t("authTokenModal.fields.email")} ${
  //             data?.CodeDeliveryDetails.Destination
  //           }` as string
  //         );
  //       }

  //       // onFinish(data);
  //     },
  //     (error) => showErrorToast(error?.message)
  //   );
  //   const { logins, isLoginLoading } = useLogin(
  //     (data: any, values: any) => {
  //       if (data?.ChallengeName === "SOFTWARE_TOKEN_MFA") {
  //         setSessionData({
  //           Session: data?.Session,
  //           username: values.username,
  //           sub: data?.sub,
  //         });
  //         return;
  //       }
  //       onFinish(data);
  //     },
  //     (error: any) => {
  //       if (error?.message === "UserNotConfirmedException") {
  //         confirmWithResend(spell);
  //         setIsOp(true);
  //       } else {
  //         showErrorToast("Nevtrehed aldaa garlaa");
  //       }
  //     }
  //   );
  const { loading: loadingRefresh, request } = useMutation({
    uri: "http://localhost:8000/auth/login",
  });
  const onSubmit = (values: any) => {
    // spell = values.username;
    // setNer(spell);
    request(values).then((res) => {
      login(res);
      console.log("---111", res);
    });
    // login(res);
    // console.log("<<<<>>>>", values);

    // console.log("---", res);
  };

  const onFinish = (data: any) => {
    // const authenticationResult = login(data);
    login(data);
    // if (authenticationResult) {
    //   showSuccessToast("Amjiltai nevterlee");
    //   onClose();
    // }
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
            <LoginFormBody />
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

export const AuthModal = ({ children }: PropsWithChildren) => {
  return (
    <Modal title={"Login"} controlElement={children} msize="md">
      {<LoginForm />}
    </Modal>
  );
};
