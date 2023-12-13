"use client";
import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { Formik } from "formik";
export function loginSubmit(values: any) {}
function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      {/* <Button onClick={onOpen}>Нэвтрэх</Button> */}
      <Button onClick={onOpen}>LOG IN</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={(values, actions) => {
                loginSubmit(values);
              }} */}
            {/* > */}
            <FormControl>
              <FormLabel>Login name</FormLabel>
              <Input ref={initialRef} placeholder="Login name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" />
            </FormControl>
            {/* </Formik> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default InitialFocus;
