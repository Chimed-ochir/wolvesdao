"use client";
import { Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";
import React from "react";

function SkeletonCard(el: any) {
  return (
    <Stack
      w="100%"
      bg={"#101010"}
      borderRadius={"6px"}
      border={"1px solid #282828"}
      mt={{ sm: "20px" }}
      cursor={"pointer"}
    >
      <Stack mx={{ base: "10px", md: "33px" }} mt={"20px"} mb={"20px"}>
        <Stack>
          <Stack
            w={{ base: "93%", sm: "100%", md: "93%", lg: "800px" }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mr={{ base: "10px", sm: "28px" }}
          >
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
              w={"60%"}
            >
              <SkeletonCircle size="10" />
              <Skeleton
                h="18px"
                borderRadius={"6px"}
                mt={"2px"}
                w={{ base: "20%" }}
              ></Skeleton>
              <Skeleton
                h="18px"
                borderRadius={"6px"}
                mt={"2px"}
                w={{ base: "30%" }}
              ></Skeleton>
              <Skeleton
                h="18px"
                borderRadius={"6px"}
                mt={"2px"}
                w={{ base: "30%" }}
              ></Skeleton>
            </Stack>{" "}
            <Stack
              direction="row"
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
              w={"30%"}
            >
              <Skeleton
                h="18px"
                borderRadius={"6px"}
                mt={"2px"}
                w={{ base: "40%" }}
              ></Skeleton>
            </Stack>
          </Stack>
          <Skeleton
            h="22px"
            borderRadius={"6px"}
            mt={"2px"}
            w={{ base: "93%", sm: "100%", md: "93%", lg: "800px" }}
          ></Skeleton>
          <Skeleton
            h="14px"
            borderRadius={"6px"}
            mt={"2px"}
            w={{ base: "93%", sm: "100%", md: "93%", lg: "800px" }}
            mb={"2px"}
            alignSelf={"start"}
          ></Skeleton>
        </Stack>

        <Skeleton
          h="14px"
          borderRadius={"6px"}
          mt={"2px"}
          w={"20%"}
          mb={"2px"}
          alignSelf={"start"}
        ></Skeleton>
      </Stack>
    </Stack>
  );
}

export default SkeletonCard;
