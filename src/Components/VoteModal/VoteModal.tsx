import {
  Box,
  Divider,
  Button,
  Stack,
  useModalContext,
  HStack,
  Link,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { AiFillEye } from '@react-icons/all-files/ai/AiFillEye';
// import { AiFillEyeInvisible } from '@react-icons/all-files/ai/AiFillEyeInvisible';

import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import { Modal } from "@/Components/Modal";
import { FormInput } from "@/Components/form/FormInput";
// import { useLogin } from "@/services/auth/login.service";
// import { useAuthContext } from "@/contexts/AuthContext";
// import { useConfirmWithResend } from "@/services/auth/confirm.service";
import { useToast } from "@/utils/toast";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useAuth } from "../Account";
import { useMutation } from "@/utils";
import { LoginDataType } from "../Account";
import localFont from "next/font/local";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
// const LoginFormBody = ({ isLoading }: { isLoading: boolean }) => {
const satFont = localFont({
  src: "../../Components/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
const VoteForm = ({
  choice,
  send,
  voteId,
  optionId,
  onFinish,
}: {
  choice: string;
  send: string;
  optionId?: string;
  voteId: boolean;
  onFinish: () => void;
}) => {
  const { onClose } = useModalContext();
  const { showErrorToast, showSuccessToast } = useToast();

  const { loading, request } = useMutation({
    uri: voteId
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/vote/${optionId}`
      : `${process.env.NEXT_PUBLIC_BACKEND_URL}/vote`,
    method: voteId ? "patch" : "post",
  });

  const onVote = (data: string) => {
    const value = { optionId: data };
    request(value)
      .then((res: any) => {
        if (res.success === false) {
          showErrorToast(res.message);
        } else {
          // router.reload();
          // window.location.reload();
          // router.push(`${pathname}`);
          // router.reload();
          onFinish();
          onClose();
          if (voteId) {
            showSuccessToast("Санал амжилттай шинэчлэгдлээ");
          } else {
            showSuccessToast("Та амжилттай саналаа өглөө.");
          }
        }
      })
      .catch((error) => {
        console.log("error", error);
        showErrorToast(error.message);
      });
  };

  // login(res);
  // console.log("<<<<>>>>", values);

  // console.log("---", res);

  // const onFinish = (data: any) => {
  //   // const authenticationResult = login(data);
  //   login(data);
  //   // if (authenticationResult) {
  //   //   showSuccessToast("Amjiltai nevterlee");
  //   //   onClose();
  //   // }
  // };
  return (
    <Stack>
      <Stack spacing="lg" pb="sm">
        <HStack position="relative">
          {/* <HiOutlineUserCircle size="40" opacity={0.1} />
          <Divider /> */}
        </HStack>{" "}
        <Stack
          h="70px"
          direction={"row"}
          justifyContent="space-between"
          my="10px"
        >
          <Stack>
            <Box>
              <Text
                {...satFont.style}
                color="#949494"
                fontWeight={"900"}
                fontSize={"12px"}
                lineHeight={"18px"}
              >
                Сонголт
              </Text>
            </Box>
            <Box>
              <Text
                {...satFont.style}
                color="#949494"
                fontWeight={"900"}
                fontSize={"12px"}
                lineHeight={"18px"}
              >
                The Wolves NFT
              </Text>
            </Box>
            <Box>
              <Text
                {...satFont.style}
                color="#949494"
                fontWeight={"900"}
                fontSize={"12px"}
                lineHeight={"18px"}
              >
                Validation
              </Text>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Text
                {...satFont.style}
                color="#FFFFFF"
                fontWeight={"700"}
                fontSize={"12px"}
                lineHeight={"18px"}
              >
                {choice}
              </Text>
            </Box>
            <Box>
              <Text
                {...satFont.style}
                color="#FFFFFF"
                fontWeight={"700"}
                fontSize={"12px"}
                lineHeight={"18px"}
              >
                1
              </Text>
            </Box>
            <Box>
              <Text
                {...satFont.style}
                color="#FFFFFF"
                fontWeight={"700"}
                fontSize={"12px"}
                lineHeight={"18px"}
              >
                Basic
              </Text>
            </Box>
          </Stack>
        </Stack>
        <Alert
          status="warning"
          bg={"#0D0D0D"}
          borderRadius={"6px"}
          border={"1px solid #282828"}
          px={"8px"}
          pt="10px"
          mx={"-10px"}
          w="290px"
        >
          <Text
            {...satFont.style}
            color="#949494"
            fontWeight={"700"}
            fontSize={"12px"}
            lineHeight={"16px"}
          >
            {/* <Box bg={"white"} w={"19px"} h={"19px"} borderRadius={"50%"}> */}
            <AlertIcon
              color={"white"}
              boxSize="18px"
              display={"inline-block"}
            />
            {/* </Box> */}
            Та санал өгөхийн тулд MongolNFT хэтэвчиндээ The Wolves NFT-тэй,
            DAO-ийн саналын эрхтэй гишүүн байх шаардлагатай.(To vote, ensure you
            `&apos;`re a voting member and have The Wolves NFT in your MongolNFT
            wallet.)
          </Text>
        </Alert>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          mt={"40px"}
          mb="20px"
          ml="-5px"
        >
          <Button
            color={"white"}
            variant="outline"
            w={"124px"}
            onClick={() => {
              onClose();
            }}
          >
            Буцах
          </Button>

          <Button
            variant="solid"
            color={"black"}
            bg={"white"}
            w={"124px"}
            isLoading={loading}
            onClick={() => {
              onVote(send);
            }}
          >
            Санал өгөх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const VoteModal = ({
  children,
  send,
  choice,
  voteId,
  optionId,
  onFinish,
}: {
  children: React.ReactNode;
  choice: string;
  send: string;
  optionId?: string;
  voteId: boolean;
  onFinish: () => void;
}) => {
  return (
    <Modal title={"Та саналаа өгнө үү"} controlElement={children} msize="xs">
      <VoteForm
        choice={choice}
        send={send}
        voteId={voteId}
        optionId={optionId}
        onFinish={onFinish}
      />
    </Modal>
  );
};
