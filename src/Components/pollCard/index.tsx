"use client";
import { Box, Image, Show, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
const satFont = localFont({
  src: "../../Components/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
import {
  BsCheckSquareFill,
  BsFillXSquareFill,
  BsDashSquareFill,
} from "react-icons/bs";
import { isDate } from "moment";
import { useRouter } from "next/navigation";
import { CalcPercent, CalcStatus } from "@/utils";
import { useAuth } from "../Account";
// import Image from "next/image";
function PollCard(el: any) {
  const data = el.el;
  var moment = require("moment");
  const { user } = useAuth();
  // const [state1, setState1] = useState("");
  const router = useRouter();
  const currentDate = new Date();
  const futureDate = new Date(moment.utc(data.endDate).format("MM-DD-YYYY"));
  const startDate = new Date(moment.utc(data.startDate).format("MM-DD-YYYY"));
  const timeDifference = futureDate.getTime() - currentDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  const toast = useToast();
  // const hoursDifference = Math.floor(
  //   (timeDifference % (1000 * 3600 * 24)) / (1000 * 3600)
  // );
  // const minutesDifference = Math.floor(
  //   (timeDifference % (1000 * 3600)) / (1000 * 60)
  // console.log("user---", user);
  // );
  // useEffect(() => {
  //   setState1(CalcStatus(startDate, currentDate,futureDate));
  // }, []);
  return (
    <Stack
      w="100%"
      bg={"#101010"}
      borderRadius={"6px"}
      border={"1px solid #282828"}
      mt={{ sm: "20px" }}
      cursor={"pointer"}
      onClick={() => {
        // router.push(`voting/${data._id}`);
        if (user) {
          router.replace(`voting/${data._id}`);
        } else {
          toast({
            title: "Та нэвтэрнэ үү",
            description: "We've created your account for you.",
            // status: "success",

            duration: 5000,
            isClosable: true,
          });
        }
      }}
    >
      <Stack ml={{ base: "10px", md: "33px" }} mt={"20px"} mb={"20px"}>
        <Stack>
          <Stack
            w={{ base: "93%", sm: "100%", md: "93%", lg: "800px" }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mr={{ base: "10px", sm: "28px" }}
          >
            {/* <Stack direction={"row"} alignItems={"center"}>
              <Box w={"32px"} h={"32px"} borderRadius={"50%"} bg={"red"}></Box>
              <Text>
                <span>by</span> Monopoly
              </Text>
              <Text>•</Text>

              <Text>ID 53536475</Text>
              <Text>•</Text>
              <Text>Proposed on: 2023-09-22</Text>
            </Stack> */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              my={"10px"}
              w={"80%"}
              overflow={"none"}
            >
              <Box
                w={{ base: "24px", sm: "32px" }}
                h={{ base: "24px", sm: "32px" }}
              >
                {/* <Box
                  w={{ base: "24px", sm: "32px" }}
                  h={{ base: "24px", sm: "32px" }}
                  my={"auto"}
                  borderRadius={"50%"}
                  bg={"red"}
                ></Box> */}
                {/* <Image
                  src={data?.profile}
                  width={32}
                  height={32}
                  alt="Profile Picture"
                ></Image> */}

                <Image
                  src={data?.profile}
                  alt="Profile Picture"
                  w={{ base: "24px", sm: "32px" }}
                  minH={{ base: "24px", sm: "32px" }}
                  minW={{ base: "24px", sm: "32px" }}
                  h={{ base: "24px", sm: "32px" }}
                  my={"auto"}
                  borderRadius={"100%"}
                ></Image>
              </Box>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={{ base: "12px", sm: "18px" }}
                // fontSize={{ base: "10px", lg: "12px" }}
                fontSize={{ base: "8px", sm: "12px" }}
              >
                <span style={{ color: "#95999D", fontWeight: "500" }}>
                  Хэнээс
                </span>{" "}
                {data.userName}
              </Text>
              <Show above="sm">
                <Text>•</Text>

                <Text
                  {...satFont.style}
                  fontWeight={"500"}
                  lineHeight={{ base: "12px", sm: "18px" }}
                  fontSize={{ base: "8px", sm: "12px" }}
                >
                  Дугаар {data._id}
                </Text>
              </Show>
              <Text>•</Text>
              <Text
                {...satFont.style}
                fontWeight={"500"}
                lineHeight={{ base: "12px", sm: "18px" }}
                fontSize={{ base: "8px", sm: "12px" }}
              >
                Огноо: {moment.utc(data.startDate).format("MM-DD-YYYY")}
              </Text>
            </Stack>
            <Text
              {...satFont.style}
              fontWeight={"700"}
              lineHeight={"18px"}
              fontSize={{ base: "10px", sm: "12px" }}
              py={{ base: "2px" }}
              px={{ base: "auto", lg: "2px" }}
              // ml={{ sm: "35px" }}
              mr={{ sm: "3px", md: "" }}
              bg={
                data.status === "active"
                  ? "#228200"
                  : data.status === "pending"
                  ? "#DFFF24"
                  : data.status === "executed"
                  ? "#4916FF"
                  : "#95120A"
              }
              borderRadius={"4px"}
              w={{ base: "55px", sm: "70px" }}
              //   ml={{ base: "10px", sm: "28px" }}
              textAlign={"center"}
              color={data.status === "pending" ? "black" : "white"}
            >
              {(data.status as string).toUpperCase()}
            </Text>
          </Stack>
          <Text
            {...satFont.style}
            fontWeight={"700"}
            lineHeight={{ base: "27px", lg: "42px" }}
            fontSize={{ base: "20px", lg: "32px" }}
            py={"2px"}
            px={{ base: "auto", lg: "6px" }}
            // ml={{ base: "4px", sm: "20px" }}
            color={"#F2F2F2"}
          >
            {data.description}
          </Text>
        </Stack>
        <div
          dangerouslySetInnerHTML={{ __html: `${data.listContent}` }}
          style={{ maxHeight: "200px", overflow: "hidden" }}
        />
        {/* <Text
          fontWeight={"500"}
          {...satFont.style}
          lineHeight={{ base: "23px", lg: "30px" }}
          fontSize={{ base: "12px", lg: "18px" }}
          w={{ base: "93%", lg: "794px" }}
          dangerouslySetInnerHTML={{ __html: `${data.content}` }}
        >
          There are a total of 4 phases that your proposal will go through from
          its submission: After a proposal is submitted, the moderator will
          review the proposals and provide feedback within 7 calendar days.
        </Text> */}
        {data.status === "active" ? (
          <Stack>
            {data.options.map((el: any, id: number) => (
              <Box
                w={{ base: "93%", lg: "798px" }}
                bg={"#1C1C1C"}
                borderRadius={"6px"}
                key={id}
              >
                <Stack
                  w={`${
                    el.votes.length !== 0
                      ? CalcPercent(data.count, el.votes.length)
                      : 0
                  }%`}
                  bg={"#303030"}
                  borderRadius={"6px"}
                  justifyContent={"center"}
                  h={"42px"}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    w={{ base: "210px", lg: "700px" }}
                    mx={"auto"}
                    ml={{ base: "5px", sm: "20px" }}
                  >
                    <Stack direction={"row"}>
                      {" "}
                      {/* <Box bg="white" w="18px" h="18px" borderRadius={"4px"}>
                        <BsCheckSquareFill color="#228200" size="18px" />
                      </Box> */}
                      <Image src={el?.icon} w="18px" />
                      <Text>{el.option}: </Text>
                      <Text>{el.votes.length} Wolves</Text>
                    </Stack>
                    <Text
                      {...satFont.style}
                      fontWeight={"700"}
                      lineHeight={"18px"}
                      fontSize={"15px"}
                    >
                      {el.votes.length !== 0
                        ? CalcPercent(data.count, el.votes.length)
                        : 0}
                      %
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            ))}
            {/* <Box
              w={{ base: "93%", lg: "798px" }}
              bg={"#1C1C1C"}
              borderRadius={"6px"}
            >
              <Stack
                w={"40%"}
                bg={"#303030"}
                borderRadius={"6px"}
                justifyContent={"center"}
                h={"42px"}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  w={{ base: "210px", lg: "700px" }}
                  mx={"auto"}
                  ml={{ base: "5px", sm: "20px" }}
                >
                  <Stack direction={"row"}>
                    {" "}
                    <Box bg="white" w="18px" h="18px" borderRadius={"4px"}>
                      <BsFillXSquareFill color="red" size="18px" />
                    </Box>
                    <Text>No: </Text>
                    <Text>12 Wolves</Text>
                  </Stack>
                  <Text
                    {...satFont.style}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                    fontSize={"15px"}
                  >
                    98.75%
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Box w={{ base: "93%", lg: "798px" }} bg={"#1C1C1C"}>
              <Stack
                w={"70%"}
                bg={"#303030"}
                borderRadius={"6px"}
                justifyContent={"center"}
                h={"42px"}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  w={{ base: "210px", lg: "700px" }}
                  mx={"auto"}
                  ml={{ base: "5px", sm: "20px" }}
                >
                  <Stack direction={"row"}>
                    {" "}
                    <Box bg="white" w="18px" h="18px" borderRadius={"4px"}>
                      <BsDashSquareFill color="#303030" size="18px" />
                    </Box>
                    <Text>Abstain: </Text>
                    <Text>1</Text>
                  </Stack>
                  <Text
                    {...satFont.style}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                    fontSize={"15px"}
                  >
                    28.75%
                  </Text>
                </Stack>
              </Stack>
            </Box> */}
          </Stack>
        ) : null}

        <Text
          {...satFont.style}
          color={"#95999D"}
          fontSize="12px"
          lineHeight={"18px"}
          fontWeight="500"
        >
          {daysDifference === 0
            ? "Өнөөдөр"
            : daysDifference < 0
            ? "Хугацаа дууссан"
            : `${daysDifference} өдрийн дараа хаагдана`}

          {/* {hoursDifference < 0 ? 0 : hoursDifference} hours{" "}
          {minutesDifference < 0 ? 0 : minutesDifference} minutes */}
        </Text>
      </Stack>
    </Stack>
  );
}

export default PollCard;
