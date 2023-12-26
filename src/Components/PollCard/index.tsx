"use client";
import { Box, Image, Show, Stack, Text } from "@chakra-ui/react";
import React from "react";
import localFont from "next/font/local";
const satFont = localFont({
  src: "../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});

import { useRouter } from "next/navigation";
import { CalcPercent } from "@/utils";
function PollCard(el: any) {
  const data = el.el;
  var moment = require("moment");
  const router = useRouter();
  const currentDate = new Date();
  const formattedCurrentDate = new Date(
    moment(currentDate).format("YYYY-MM-DD")
  );
  const futureDate = new Date(moment.utc(data.endDate).format("YYYY-MM-DD"));
  const timeDifference = futureDate.getTime() - formattedCurrentDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  return (
    <Stack
      w="100%"
      bg={"#101010"}
      borderRadius={"6px"}
      border={"1px solid #282828"}
      mt={{ sm: "20px" }}
      cursor={"pointer"}
      onClick={() => {
        router.push(`voting/${data._id}`);
      }}
    >
      <Stack mx={{ base: "10px", md: "33px" }} mt={"20px"} mb={"20px"}>
        <Stack>
          <Stack
            w={{ base: "100%", lg: "800px" }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
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
                fontSize={{ base: "8px", sm: "12px" }}
                color={"white"}
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
                  color={"white"}
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
                color={"white"}
              >
                Огноо: {moment.utc(data.startDate).format("YYYY-MM-DD-h:mm")}
              </Text>
            </Stack>
            <Text
              {...satFont.style}
              fontWeight={"700"}
              lineHeight={"18px"}
              fontSize={{ base: "10px", sm: "12px" }}
              py={{ base: "2px" }}
              px={{ base: "auto", lg: "2px" }}
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
            color={"#F2F2F2"}
          >
            {data.description}
          </Text>
        </Stack>
        <div
          dangerouslySetInnerHTML={{ __html: `${data.listContent}` }}
          style={{ maxHeight: "200px", overflow: "hidden", color: "white" }}
        />

        {data.status === "active" ? (
          <Stack>
            {data.options.map((el: any, id: number) => (
              <Box
                w={{ base: "100%", lg: "798px" }}
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
                    minW={"300px"}
                    mx={"auto"}
                    ml={{ base: "5px", sm: "20px" }}
                    alignItems="center"
                  >
                    <Stack direction={"row"} alignItems="center">
                      {" "}
                      <Text>{el?.icon}</Text>
                      <Text color={"white"}>{el.option}: </Text>
                      <Text color={"white"} minW={"60px"} h="21px">
                        {el.votes.length} Wolves
                      </Text>
                    </Stack>
                    <Text
                      {...satFont.style}
                      fontWeight={"700"}
                      lineHeight={"18px"}
                      fontSize={"15px"}
                      color={"white"}
                      h="21px"
                    >
                      {el.votes.length !== 0
                        ? CalcPercent(data.count, el.votes.length).toFixed(0)
                        : 0}
                      %
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            ))}
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
        </Text>
      </Stack>
    </Stack>
  );
}

export default PollCard;
