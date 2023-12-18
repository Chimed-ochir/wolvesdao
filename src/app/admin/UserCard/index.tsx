import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";

function UserCard({ data }: { data: any }) {
  return (
    <Stack
      direction={"row"}
      borderRadius={"6px"}
      border={"1px solid #282828"}
      bg={"#101010"}
      my={"3px"}
      w="90%"
      alignItems={"center"}
      mx="auto"
      p={"5px"}
    >
      {" "}
      <Stack direction="row" alignItems={"center"} w={{ base: "30%", lg: "" }}>
        <Text
          fontWeight={"700"}
          fontSize={"16px"}
          lineHeight={"30px"}
          color={"white"}
        >
          Id :{data._id}
        </Text>
      </Stack>
      <Stack direction="row" w={{ base: "30%", lg: "" }}>
        <Text
          fontWeight={"700"}
          fontSize={"16px"}
          lineHeight={"30px"}
          color={"white"}
        >
          Admin :
        </Text>
        {data?.isAdmin ? (
          <Text
            fontWeight={"500"}
            fontSize={"14px"}
            lineHeight={"30px"}
            color={"white"}
          >
            True
          </Text>
        ) : (
          <Text
            fontWeight={"500"}
            fontSize={"14px"}
            lineHeight={"30px"}
            color={"white"}
          >
            False
          </Text>
        )}
      </Stack>
      <Stack direction="row" w={{ base: "30%", lg: "" }}>
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
      </Stack>
    </Stack>
  );
}

export default UserCard;
