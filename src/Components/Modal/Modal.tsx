import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalProps as ChakraModalProps,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
// import localFont from "next/dist/compiled/@next/font/dist/local";
import { PropsWithChildren, ReactNode } from "react";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../fonts/revolution/revolution-bold.otf",
});
export type ModalProps = Omit<ChakraModalProps, "isOpen" | "onClose"> &
  PropsWithChildren<{
    title?: string | ReactNode;
    controlElement?: ReactNode;
    isOpen?: boolean;
    onClose?: () => any;
    w?: string;
    msize?: string;
  }>;

export const Modal = ({
  children,
  title,
  controlElement,
  isOpen: _isOpen,
  onClose: _onClose,
  isCentered = true,
  w = "100%",
  msize,
  ...props
}: ModalProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isControlled = isOpen !== undefined && typeof _onClose === "function";

  const isModalOpen = isControlled ? _isOpen : isOpen;
  const onModalClose = isControlled ? _onClose : onClose;

  return (
    <>
      {isControlled ? (
        controlElement
      ) : (
        <Stack cursor="pointer" w={w} alignItems="stretch" onClick={onOpen}>
          {controlElement}
        </Stack>
      )}
      <ChakraModal
        isOpen={isModalOpen as boolean}
        onClose={onModalClose as () => any}
        isCentered={isCentered}
        {...props}
        size={msize}
      >
        <ModalOverlay bg="none" backdropFilter="blur(10px)" />
        {/* <ModalOverlay zIndex={1500} backdropFilter='blur(10px)' /> */}
        <ModalContent bg="#1A1A1C" color={"white"}>
          {title ? (
            <ModalHeader
              borderBottom={title !== "Votes" ? "1px solid #0D0D0D" : undefined}
            >
              {title === "Та саналаа өгнө үү" || title === "Votes" ? (
                <Stack alignItems={"center"}>
                  <Text size="h5" cursor="default" fontWeight={600}>
                    {title}
                  </Text>
                </Stack>
              ) : title === "Login" ? (
                <Stack
                  // position={"absolute"}
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                  h={"70px"}
                  w={{ base: "100%", sm: "336px" }}
                  gap={"2.42px"}
                  // ml={"20px"}
                  mx={"auto"}
                >
                  <Text
                    {...myFont.style}
                    fontSize={"23px"}
                    color={"#DFFF24"}
                    lineHeight={"23px"}
                  >
                    THE
                  </Text>

                  <Text
                    {...myFont.style}
                    lineHeight={"42px"}
                    fontSize={"45px"}
                    color={"white"}
                    // textAlign={"center"}
                  >
                    WOLVES<span style={{ color: "#DFFF24" }}>.</span>DAO
                  </Text>
                </Stack>
              ) : (
                <Text size="h5" cursor="default" fontWeight={600}>
                  {title}
                </Text>
              )}
            </ModalHeader>
          ) : null}
          {title === "Та саналаа өгнө үү" || title === "Login" ? null : (
            <ModalCloseButton />
          )}
          <ModalBody pt={title === "Та саналаа өгнө үү" ? "" : "14px"}>
            {children}
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  );
};
