import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RemoveModal } from "../Account/RemoveModal";
import { ChangeModal } from "../Account/ChangeModal ";

function UserCard({ data, onFinish }: { data: any; onFinish: () => void }) {
  return (
    <Stack
      direction={"row"}
      borderRadius={"6px"}
      border={"1px solid #282828"}
      bg={"#101010"}
      my={"3px"}
      w={{ base: "100%", md: "90%" }}
      alignItems={"center"}
      mx="auto"
      p={"5px"}
      justifyContent={"space-between"}
    >
      {" "}
      <Stack
        direction="row"
        alignItems={"center"}
        w={{ base: "20%", sm: "30%", lg: "" }}
      >
        <Text
          fontWeight={"700"}
          fontSize={{ base: "12", sm: "16px" }}
          lineHeight={"30px"}
          color={"white"}
        >
          Нэр : {data.user}
        </Text>
      </Stack>
      <Stack direction="row" w={{ base: "20%", sm: "25%", md: "30%", lg: "" }}>
        <Text
          fontWeight={"700"}
          fontSize={{ base: "12", sm: "16px" }}
          lineHeight={"30px"}
          color={"white"}
        >
          Admin :
        </Text>
        {data?.isAdmin ? (
          <Text
            fontWeight={"500"}
            fontSize={{ base: "12", sm: "14px" }}
            lineHeight={"30px"}
            color={"white"}
          >
            True
          </Text>
        ) : (
          <Text
            fontWeight={"500"}
            fontSize={{ base: "12", sm: "14px" }}
            lineHeight={"30px"}
            color={"white"}
          >
            False
          </Text>
        )}
      </Stack>
      <Stack direction="row" w={{ base: "30%", lg: "" }}>
        <RemoveModal onFinish={onFinish} id={data?._id}>
          <Button
            bg="white"
            w={"80px"}
            variant={"solid"}
            color={"black"}
            fontSize={"14px"}
            h="30px"
          >
            Устгах
          </Button>
        </RemoveModal>
        <ChangeModal id={data?._id} admin={data?.isAdmin} onFinish={onFinish}>
          <Button
            bg="white"
            w={"80px"}
            variant={"solid"}
            color={"black"}
            fontSize={"14px"}
            h="30px"
          >
            Өөрчлөх
          </Button>
        </ChangeModal>
      </Stack>
    </Stack>
  );
}

export default UserCard;
