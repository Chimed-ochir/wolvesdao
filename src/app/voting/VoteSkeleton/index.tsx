import SkeletonCard from "@/Components/skeletonCard";
import { Show, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

function VoteSkeleton() {
  return (
    <Stack w={{ base: "93%", lg: "865px" }} mx={"auto"}>
      <Skeleton
        h={{ base: "42px", md: "25px" }}
        borderRadius={"6px"}
        mt={"2px"}
        w={{ base: "140px", sm: "30%" }}
      ></Skeleton>
      <Show above="md"></Show>
      <Show above="md">
        <Stack
          w={{ sm: "100%" }}
          h={"42px"}
          direction={{ base: "row" }}
          justifyContent={"space-between"}
          borderBottom={"1px solid #282828"}
          mt={"40px"}
        >
          <Skeleton
            h={{ base: "24px" }}
            borderRadius={"6px"}
            w={{ base: "100px" }}
          ></Skeleton>
          <Skeleton
            h={{ base: "24px" }}
            borderRadius={"6px"}
            w={{ base: "100px" }}
          ></Skeleton>
          <Skeleton
            h={{ base: "24px" }}
            borderRadius={"6px"}
            w={{ base: "100px" }}
          ></Skeleton>
          <Skeleton
            h={{ base: "24px" }}
            borderRadius={"6px"}
            w={{ base: "100px" }}
          ></Skeleton>
          <Skeleton
            h={{ base: "24px" }}
            borderRadius={"6px"}
            w={{ base: "100px" }}
          ></Skeleton>
        </Stack>
      </Show>
      <SkeletonCard />
      <SkeletonCard />
    </Stack>
  );
}

export default VoteSkeleton;
