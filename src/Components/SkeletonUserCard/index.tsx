import {
  Box,
  Button,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RemoveModal } from "../Account/RemoveModal";
import { ChangeModal } from "../Account/ChangeModal ";

function SkeletonUserCard() {
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
        <Skeleton h="16px" borderRadius={"6px"} w={"80px"}></Skeleton>
        <Text>:</Text>
        <Skeleton h="16px" borderRadius={"6px"} w={"100px"}></Skeleton>
      </Stack>
      <Stack
        direction="row"
        w={{ base: "20%", sm: "25%", md: "30%", lg: "" }}
        alignItems={"center"}
      >
        <Skeleton h="16px" borderRadius={"6px"} w={"90px"}></Skeleton>{" "}
        <Text>:</Text>
        <Skeleton h="16px" borderRadius={"6px"} w={"80px"}></Skeleton>
      </Stack>
      <Stack
        direction="row"
        w={{ base: "30%", lg: "" }}
        justifyContent={"center"}
      >
        <Skeleton h="28px" borderRadius={"6px"} w={"100px"}></Skeleton>
        <Skeleton h="28px" borderRadius={"6px"} w={"100px"}></Skeleton>
      </Stack>
    </Stack>
  );
}

export default SkeletonUserCard;
