import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import React from "react";

function SkeletonId() {
  return (
    <Stack
      mx={{ base: "auto" }}
      w={{ base: "95%", sm: "480px", md: "550px", lg: "960px" }}
      direction={{ base: "column", lg: "row" }}
      justifyContent={"space-evenly"}
    >
      <Stack w={{ md: "550px" }}>
        <Skeleton
          h="22px"
          w={"30%"}
          alignSelf={"start"}
          mt="10px"
          // ml="30px"
        />
        <Stack
          mt="10px"
          bg={"#101010"}
          w={{ md: "550px" }}
          alignItems={"center"}
          borderRadius={"6px"}
          justifyContent={"center"}
        >
          <Skeleton
            h="22px"
            w={"25%"}
            alignSelf={"start"}
            borderRadius={"6px"}
            mt="10px"
            ml="30px"
          />
          <Skeleton
            h="22px"
            borderRadius={"6px"}
            mt={"10px"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
          ></Skeleton>
          <Skeleton
            h="22px"
            borderRadius={"6px"}
            mt={"10px"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
          ></Skeleton>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
            mb="20px"
          >
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
              w={{ base: "40%", sm: "20%" }}
            >
              <SkeletonCircle size="10" />
              <Skeleton
                h="22px"
                borderRadius={"6px"}
                mt={"2px"}
                w={{ base: "50%" }}
              ></Skeleton>
            </Stack>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "25%", sm: "30%" }}
              ml={{ sm: "40px" }}
            ></Skeleton>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "25%", sm: "30%" }}
            ></Skeleton>
          </Stack>
        </Stack>
        <Stack
          // bg="black"
          my="10px"
          w={{ base: "100%" }}
          // alignItems={"center"}
        >
          <SkeletonText h="100px" noOfLines={5} />
          <Skeleton h="100px" borderRadius={"6px"}></Skeleton>
        </Stack>

        <Stack
          mt="10px"
          bg={"#101010"}
          w={{ md: "550px" }}
          alignItems={"center"}
          borderRadius={"6px"}
        >
          {/* <SkeletonText h="220px" noOfLines={5} /> */}
          <Skeleton
            h="42px"
            borderRadius={"6px"}
            mt={"10px"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
          ></Skeleton>
          <Skeleton
            h="42px"
            borderRadius={"6px"}
            mt={"10px"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
          ></Skeleton>
          <Skeleton
            h="42px"
            borderRadius={"6px"}
            mt={"10px"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
          ></Skeleton>
          <Skeleton
            h="42px"
            borderRadius={"6px"}
            my={"10px"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
          ></Skeleton>
        </Stack>
        <Stack
          mt="10px"
          bg={"#101010"}
          w={{ md: "550px" }}
          alignItems={"center"}
          borderRadius={"6px"}
          justifyContent={"center"}
          pb={"15px"}
        >
          {/* <SkeletonText h="220px" noOfLines={5} /> */}
          <Skeleton
            h="22px"
            borderRadius={"6px"}
            mt={"10px"}
            w={"85%"}
          ></Skeleton>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
            mb="20px"
          >
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
              w={{ base: "40%", sm: "20%" }}
            >
              <SkeletonCircle size="10" />
              <Skeleton
                h="22px"
                borderRadius={"6px"}
                mt={"2px"}
                w={{ base: "50%" }}
              ></Skeleton>
            </Stack>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "25%", sm: "30%" }}
              ml={{ sm: "40px" }}
            ></Skeleton>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "25%", sm: "30%" }}
            ></Skeleton>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
            mb="20px"
          >
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
              w={{ base: "40%", sm: "20%" }}
            >
              <SkeletonCircle size="10" />
              <Skeleton
                h="22px"
                borderRadius={"6px"}
                mt={"2px"}
                w={{ base: "50%" }}
              ></Skeleton>
            </Stack>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "25%", sm: "30%" }}
              ml={{ sm: "40px" }}
            ></Skeleton>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "25%", sm: "30%" }}
            ></Skeleton>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
            mb="20px"
          >
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
              w={{ base: "40%", sm: "20%" }}
            >
              <SkeletonCircle size="10" />
              <Skeleton
                h="22px"
                borderRadius={"6px"}
                mt={"2px"}
                w={{ base: "50%" }}
              ></Skeleton>
            </Stack>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "25%", sm: "30%" }}
              ml={{ sm: "40px" }}
            ></Skeleton>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "25%", sm: "30%" }}
            ></Skeleton>
          </Stack>
          <Skeleton
            h="22px"
            borderRadius={"6px"}
            mt={"2px"}
            w={"40%"}
            mb="10px"
          ></Skeleton>
        </Stack>
      </Stack>
      <Stack mt={{ lg: "50px" }}>
        <Stack
          mt="10px"
          bg={"#101010"}
          w={{ sm: "480px", md: "550px", lg: "282px" }}
          alignItems={"center"}
          borderRadius={"6px"}
          justifyContent={"center"}
        >
          {/* <SkeletonText h="220px" noOfLines={5} /> */}
          <Skeleton
            h="22px"
            borderRadius={"6px"}
            mt={"10px"}
            w={"85%"}
          ></Skeleton>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%" }}
          >
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
              // ml={"40px"}
            ></Skeleton>
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
            ></Skeleton>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%" }}
          >
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
              // ml={"40px"}
            ></Skeleton>
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
            ></Skeleton>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%" }}
          >
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
              // ml={"40px"}
            ></Skeleton>
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
            ></Skeleton>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%" }}
          >
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
              // ml={"40px"}
            ></Skeleton>
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
            ></Skeleton>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%" }}
          >
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
              // ml={"40px"}
            ></Skeleton>
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
            ></Skeleton>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%" }}
          >
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
              // ml={"40px"}
            ></Skeleton>
            <Skeleton
              h="18px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "40%" }}
            ></Skeleton>
          </Stack>

          <Skeleton
            h="14px"
            borderRadius={"6px"}
            mt={"2px"}
            w={"85%"}
            mb="10px"
          ></Skeleton>
        </Stack>
        <Stack
          mt="10px"
          bg={"#101010"}
          w={{ sm: "480px", md: "550px", lg: "282px" }}
          alignItems={"center"}
          borderRadius={"6px"}
          justifyContent={"center"}
        >
          {/* <SkeletonText h="220px" noOfLines={5} /> */}
          <Skeleton
            h="22px"
            borderRadius={"6px"}
            mt={"10px"}
            w={"85%"}
          ></Skeleton>

          <Skeleton
            h="14px"
            borderRadius={"6px"}
            mt={"10px"}
            w={"85%"}
            mb="10px"
          ></Skeleton>
          <Skeleton
            h="14px"
            borderRadius={"6px"}
            mt={"10px"}
            w={"85%"}
            mb="10px"
          ></Skeleton>
          <Skeleton
            h="14px"
            borderRadius={"6px"}
            mt={"10px"}
            w={"85%"}
            mb="30px"
          ></Skeleton>
        </Stack>
        <Stack
          mt="10px"
          bg={"#101010"}
          w={{ sm: "480px", md: "550px", lg: "282px" }}
          alignItems={"center"}
          borderRadius={"6px"}
          justifyContent={"center"}
        >
          <Skeleton
            h="40px"
            borderRadius={"6px"}
            mt={"10px"}
            w={"85%"}
          ></Skeleton>
          <Stack
            direction="row"
            justifyContent={"center"}
            w="85%"
            alignItems={"center"}
            mt="20px"
          >
            <Skeleton
              h="40px"
              borderRadius={"6px"}
              mt={"10px"}
              w={"40px"}
            ></Skeleton>
            <Stack justifyContent={"space-between"} w="80%" h="58px">
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"30%"}
              ></Skeleton>
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"70%"}
              ></Skeleton>
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"45%"}
              ></Skeleton>
            </Stack>
          </Stack>
          <Skeleton
            h={"30px"}
            w="2px"
            alignSelf={"start"}
            ml={{ base: "40px", sm: "70px", md: "80px", lg: "40px" }}
          />
          <Stack
            direction="row"
            justifyContent={"center"}
            w="85%"
            alignItems={"center"}
          >
            <Skeleton
              h="40px"
              borderRadius={"6px"}
              mt={"10px"}
              w={"40px"}
            ></Skeleton>
            <Stack justifyContent={"space-between"} w="80%" h="58px">
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"30%"}
              ></Skeleton>
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"70%"}
              ></Skeleton>
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"45%"}
              ></Skeleton>
            </Stack>
          </Stack>
          <Skeleton
            h={"30px"}
            w="2px"
            alignSelf={"start"}
            ml={{ base: "40px", sm: "70px", md: "80px", lg: "40px" }}
          />
          <Stack
            direction="row"
            justifyContent={"center"}
            w="85%"
            alignItems={"center"}
          >
            <Skeleton
              h="40px"
              borderRadius={"6px"}
              mt={"10px"}
              w={"40px"}
            ></Skeleton>
            <Stack justifyContent={"space-between"} w="80%" h="58px">
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"30%"}
              ></Skeleton>
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"70%"}
              ></Skeleton>
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"45%"}
              ></Skeleton>
            </Stack>
          </Stack>
          <Skeleton
            h={"30px"}
            w="2px"
            alignSelf={"start"}
            ml={{ base: "40px", sm: "70px", md: "80px", lg: "40px" }}
          />
          <Stack
            direction="row"
            justifyContent={"center"}
            w="85%"
            alignItems={"center"}
            mb="20px"
          >
            <Skeleton
              h="40px"
              borderRadius={"6px"}
              mt={"10px"}
              w={"40px"}
            ></Skeleton>
            <Stack justifyContent={"space-between"} w="80%" h="58px">
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"30%"}
              ></Skeleton>
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"70%"}
              ></Skeleton>
              <Skeleton
                h="14px"
                borderRadius={"6px"}
                my={"2px"}
                w={"45%"}
              ></Skeleton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SkeletonId;
