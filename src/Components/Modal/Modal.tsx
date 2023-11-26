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
} from "@chakra-ui/react";
import { PropsWithChildren, ReactNode } from "react";

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
        <ModalContent bg="#1A1A1C">
          {title ? (
            <ModalHeader
              borderBottom={title !== "Votes" ? "1px solid #0D0D0D" : undefined}
            >
              {title === "Cast your vote" || title === "Votes" ? (
                <Stack alignItems={"center"}>
                  <Text size="h5" cursor="default" fontWeight={600}>
                    {title}
                  </Text>
                </Stack>
              ) : (
                <Text size="h5" cursor="default" fontWeight={600}>
                  {title}
                </Text>
              )}
            </ModalHeader>
          ) : null}
          {title === "Cast your vote" ? null : <ModalCloseButton />}
          <ModalBody pt={title === "Cast your vote" ? "" : "14px"}>
            {children}
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  );
};
