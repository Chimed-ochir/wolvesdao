"use client";
import { Box, Button, Show, Progress, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import localFont from "next/font/local";
import { AiOutlineCheck, AiOutlineLink } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { RiSquareLine } from "react-icons/ri";
import { PiHourglassSimpleLight } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import { BsChevronLeft } from "react-icons/bs";
import { useQuery } from "@/utils";
import api from "@/utils/CustomAxios";

const satFont = localFont({
  src: "../../../Components/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
function Page({ params: { id } }: { params: { id: string } }) {
  const { data, loading, fetchData } = useQuery<{ data: any }>({
    uri: `/poll/${id}`,
  });
  // console.log("123456789987654321", data?.data);
  // console.log("123456789987654321", data?.data._id);
  // console.log("123456789987654321", data?.data.startDate);
  var moment = require("moment");
  const period: string = data?.data.status;
  return (
    <Stack
      mx={{ base: "auto" }}
      w={{ base: "95%", sm: "480px", md: "768px", lg: "960px" }}
      direction={{ base: "column", lg: "row" }}
      justifyContent={"space-evenly"}
    >
      <Stack w={{ md: "550px" }}>
        <Stack h={{ base: "206px", sm: "277px" }}>
          <Show above="sm">
            <Text
              {...satFont.style}
              color={"#F2F2F2"}
              fontSize="24px"
              lineHeight={"32px"}
              fontWeight="900"
            >
              Proposals
            </Text>
          </Show>
          <Show below="sm">
            <Stack direction="row" alignItems={"center"} h="42px">
              <BsChevronLeft color="#FBFBFB" />
              <Text
                {...satFont.style}
                color={"#F2F2F2"}
                fontSize="14px"
                lineHeight={"18px"}
                fontWeight="700"
              >
                Back
              </Text>
            </Stack>
          </Show>
          <Box borderRadius={"6px"} border={"1px solid #282828"} bg={"#101010"}>
            <Stack
              h={{ base: "106px", sm: "160px" }}
              justifyContent={"space-around"}
              borderBottom={"1px solid  #282828"}
            >
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={{ base: "10px", sm: "12px" }}
                py={{ base: "2px" }}
                px={{ base: "auto", lg: "6px" }}
                bg={"#228200"}
                borderRadius={"4px"}
                w={{ base: "45px", sm: "55px" }}
                ml={{ base: "10px", sm: "28px" }}
                textAlign={"center"}
              >
                ACTIVE
              </Text>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={{ base: "27px", lg: "42px" }}
                fontSize={{ base: "20px", lg: "32px" }}
                py={"2px"}
                px={"6px"}
                ml={{ base: "4px", sm: "20px" }}
                color={"#F2F2F2"}
              >
                Building Future of NFTs: MongolNFT Protocol{" "}
              </Text>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              my={"10px"}
              ml={{ base: "10px", sm: "28px" }}
            >
              <Box
                w={{ base: "24px", sm: "32px" }}
                h={{ base: "24px", sm: "32px" }}
                borderRadius={"50%"}
                bg={"red"}
              ></Box>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={{ base: "18px" }}
                // fontSize={{ base: "10px", lg: "12px" }}
                fontSize={{ base: "8px", sm: "12px" }}
              >
                <span style={{ color: "#95999D", fontWeight: "500" }}>by</span>{" "}
                Monopoly
              </Text>
              <Text>•</Text>

              <Text
                {...satFont.style}
                fontWeight={"500"}
                lineHeight={{ base: "18px" }}
                fontSize={{ base: "8px", sm: "12px" }}
              >
                ID {data?.data._id}
              </Text>
              <Text>•</Text>
              <Text
                {...satFont.style}
                fontWeight={"500"}
                lineHeight={{ base: "18px" }}
                fontSize={{ base: "8px", sm: "12px" }}
              >
                Proposed on:{" "}
                {moment.utc(data?.data.startDate).format("MM-DD-YYYY")}
              </Text>
            </Stack>
          </Box>
        </Stack>
        <Stack
          // h={{ base: "289px", sm: "392px" }}
          justifyContent={{ base: "space-evenly", sm: "space-between" }}
          w={{ lg: "521px" }}
          mb={{ base: "38px", sm: "" }}
        >
          {/* <Text
            {...satFont.style}
            color={"#F2F2F2"}
            fontSize={{ base: "16px", sm: "24px" }}
            lineHeight={"30px"}
            fontWeight="700"
          >
            Proposal phases
          </Text> */}
          {/* <Stack ml={"20px"} h={{ base: "235px", sm: "362px" }}>
            <Text
              {...satFont.style}
              color={"#E0E0E0"}
              fontSize={{ base: "12px", sm: "18px" }}
              lineHeight={{ base: "20px", sm: "30px" }}
              fontWeight="700"
            >
              There are a total of 4 phases that your proposal will go through
              from its submission:
            </Text>
            <Stack alignItems={"center"}>
              {/* <Text></Text> */}
          {/* <Text
                {...satFont.style}
                color={"#949494"}
                fontSize={{ base: "12px", sm: "18px" }}
                lineHeight={{ base: "20px", sm: "30px" }}
                fontWeight="500"
              >
                •{" "}
                <span
                  style={{
                    fontWeight: "700",
                    color: "#E0E0E0",
                    marginLeft: "8px",
                  }}
                >
                  Phase 1:
                </span>{" "}
                Community members can submit their proposals whenever they would
                like.
              </Text>
              <Text
                {...satFont.style}
                color={"#949494"}
                fontSize={{ base: "12px", sm: "18px" }}
                lineHeight={{ base: "20px", sm: "30px" }}
                fontWeight="500"
              >
                •{" "}
                <span
                  style={{
                    fontWeight: "700",
                    color: "#E0E0E0",
                    marginLeft: "8px",
                  }}
                >
                  Phase 2:
                </span>{" "}
                After a proposal is submitted, the moderator will review the
                proposals and provide feedback within 7 calendar days.
              </Text>
              <Box
                bgGradient={
                  " linear-gradient(180deg, rgba(3, 3, 3, 0) -1.23%, #000000 102.59%"
                }
              >
                <Text
                  {...satFont.style}
                  color={"#949494"}
                  fontSize={{ base: "12px", sm: "18px" }}
                  lineHeight={{ base: "20px", sm: "30px" }}
                  fontWeight="500"
                >
                  •{"   "}
                  {"   "}
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#E0E0E0",
                      marginLeft: "8px",
                    }}
                  >
                    Phase 3:
                  </span>{" "}
                  The management and Coincil will schedule a meeting the third
                  week of every month to gather and discuss
                  <span
                    style={{
                      ...satFont.style,
                      filter: "blur(3px)",
                      fontSize: "18px",
                      lineHeight: "30px",
                      fontWeight: "500",
                    }}
                  >
                    the proposals{" "}
                  </span>
                </Text>
              </Box>
              <Button
                variant={"outline"}
                w={"115px"}
                mt={"-40px"}
                color={"white"}
              >
                Show more
              </Button>
            </Stack>
          </Stack> */}
          <div dangerouslySetInnerHTML={{ __html: `${data?.data.content}` }} />
        </Stack>
        {period === "active" ? (
          <Stack h={{ base: "241px", sm: "301px" }}>
            <Box
              borderRadius={"6px"}
              border={"1px solid #282828"}
              bg={"#101010"}
            >
              <Stack
                justifyContent={"space-around"}
                borderBottom={"1px solid  #282828"}
              >
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"42px"}
                  fontSize={{ base: "16px", sm: "24px" }}
                  py={"2px"}
                  px={"6px"}
                  ml={"20px"}
                  color={"#F2F2F2"}
                >
                  Cast your vote
                </Text>
              </Stack>
              <Stack justifyContent={"center"} my={"10px"}>
                <Button
                  variant={"outline"}
                  mx={"auto"}
                  w={{ base: "85%", sm: "458px", md: "498px" }}
                >
                  Yes
                </Button>
                <Button
                  variant={"outline"}
                  mx={"auto"}
                  w={{ base: "85%", sm: "458px", md: "498px" }}
                >
                  No
                </Button>
                <Button
                  variant={"outline"}
                  mx={"auto"}
                  w={{ base: "85%", sm: "458px", md: "498px" }}
                  leftIcon={<AiOutlineCheck size="18px" />}
                >
                  Abstain
                </Button>
                <Button
                  bg="white"
                  mx={"auto"}
                  w={{ base: "85%", sm: "458px", md: "498px" }}
                  variant={"solid"}
                  color={"black"}
                >
                  Vote
                </Button>
              </Stack>
            </Box>
          </Stack>
        ) : null}
        <Stack h={{ base: "298px", sm: "322px" }} mt={{ base: "10px", sm: "" }}>
          <Box borderRadius={"6px"} border={"1px solid #282828"} bg={"#101010"}>
            <Stack borderBottom={"1px solid  #282828"}>
              <Stack
                justifyContent={"space-evenly"}
                alignItems="center"
                direction={"row"}
                w="166px"
                h="50px"
                // ml="20px"
              >
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"42px"}
                  fontSize={{ base: "16px", sm: "24px" }}
                  py={"2px"}
                  px={"6px"}
                  color={"#F2F2F2"}
                >
                  Votes{" "}
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  py={"2px"}
                  px={"6px"}
                  bg={"#228200"}
                  borderRadius={"4px"}
                  ml={"-15px"}
                >
                  {data?.data.count}
                </Text>
              </Stack>
            </Stack>
            <Stack justifyContent={"center"} my={"10px"}>
              <Stack
                mx={"auto"}
                w={{ base: "90%", sm: "448px", md: "492px" }}
                h="42px"
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction="row" alignItems={"center"}>
                  <Box
                    borderRadius={"50%"}
                    bg={"green"}
                    w={"25px"}
                    h={"25px"}
                  ></Box>
                  <Text
                    {...satFont.style}
                    fontWeight={"400"}
                    lineHeight={"18px"}
                    fontSize={"12px"}
                    color={"#95999D"}
                  >
                    banaasssaas
                  </Text>
                </Stack>
                <Text
                  {...satFont.style}
                  fontWeight={"400"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#95999D"}
                >
                  Yes
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"400"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#95999D"}
                >
                  494k veSTG
                </Text>
              </Stack>
            </Stack>
            <Stack justifyContent={"center"} my={"10px"}>
              <Stack
                mx={"auto"}
                w={{ base: "90%", sm: "448px", md: "492px" }}
                h="42px"
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction="row" alignItems={"center"}>
                  <Box
                    borderRadius={"50%"}
                    bg={"green"}
                    w={"25px"}
                    h={"25px"}
                  ></Box>
                  <Text
                    {...satFont.style}
                    fontWeight={"400"}
                    lineHeight={"18px"}
                    fontSize={"12px"}
                    color={"#95999D"}
                  >
                    banaasssaas
                  </Text>
                </Stack>
                <Text
                  {...satFont.style}
                  fontWeight={"400"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#95999D"}
                >
                  Yes
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"400"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#95999D"}
                >
                  494k veSTG
                </Text>
              </Stack>
            </Stack>
            <Stack justifyContent={"center"} my={"10px"}>
              <Stack
                mx={"auto"}
                w={{ base: "90%", sm: "448px", md: "492px" }}
                h="42px"
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack direction="row" alignItems={"center"}>
                  <Box
                    borderRadius={"50%"}
                    bg={"green"}
                    w={"25px"}
                    h={"25px"}
                  ></Box>
                  <Text
                    {...satFont.style}
                    fontWeight={"400"}
                    lineHeight={"18px"}
                    fontSize={"12px"}
                    color={"#95999D"}
                  >
                    banaasssaas
                  </Text>
                </Stack>
                <Text
                  {...satFont.style}
                  fontWeight={"400"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#95999D"}
                >
                  Yes
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"400"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#95999D"}
                >
                  494k veSTG
                </Text>
              </Stack>
            </Stack>
            <Stack
              mx={"auto"}
              w="100%"
              h="44px"
              direction="row"
              justifyContent={"center"}
              alignItems={"center"}
              borderTop={"1px solid #282828"}
            >
              <Text
                {...satFont.style}
                fontWeight={"400"}
                lineHeight={"18px"}
                fontSize={"15px"}
                color={"#FBFBFB"}
              >
                View all
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Stack mt={{ lg: "50px" }}>
        <Stack
          borderRadius={"6px"}
          border={"1px solid #282828"}
          bg={"#101010"}
          w={{ sm: "480px", md: "550px", lg: "282px" }}
          h={"225px"}
        >
          <Stack
            alignItems={"left"}
            borderBottom={"1px solid  #282828"}
            justifyContent={"center"}
            h="40px"
          >
            <Text
              {...satFont.style}
              fontWeight={"700"}
              lineHeight={"18px"}
              fontSize={"16px"}
              color={"#F2F2F2"}
              ml={"10px"}
            >
              Information
            </Text>
          </Stack>
          <Stack justifyContent={"space-around"}>
            <Stack
              direction={"row"}
              justifyContent={"space-around"}
              h={"148px"}
            >
              <Stack justifyContent={"space-around"}>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  Token
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  Voting system
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  Start date
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  End date
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  Discussion link
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  Voting poll
                </Text>
              </Stack>
              <Stack
                justifyContent={"space-around"}
                w="153px"
                alignItems={"right"}
              >
                <Stack
                  direction="row"
                  justifyContent={"right"}
                  alignItems={"center"}
                >
                  <Box
                    borderRadius={"100%"}
                    h={"18px"}
                    w={"18px"}
                    bg="red"
                  ></Box>
                  <Text
                    {...satFont.style}
                    fontWeight={"500"}
                    lineHeight={"24px"}
                    fontSize={"12px"}
                    color={"#FFFFFF"}
                  >
                    The Wolves
                  </Text>
                </Stack>
                <Text
                  {...satFont.style}
                  fontWeight={"500"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#FFFFFF"}
                  textAlign={"right"}
                >
                  Single choice voting
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#FFFFFF"}
                  textAlign={"right"}
                >
                  2023-09-22 22:07
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#FFFFFF"}
                  textAlign={"right"}
                >
                  2023-09-28 22:07
                </Text>

                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"right"}
                >
                  <Text
                    {...satFont.style}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                    fontSize={"12px"}
                    color={"#FFFFFF"}
                    textAlign={"right"}
                    as="u"
                  >
                    .xyz/gov/arbitrum/
                  </Text>
                  <AiOutlineLink size="16px" />
                </Stack>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#FFFFFF"}
                  textAlign={"right"}
                >
                  67 / 100
                </Text>
              </Stack>
            </Stack>
            <Progress
              colorScheme={"yellow"}
              value={20}
              size="xs"
              borderRadius={"15px"}
              w={{ base: "300px", sm: "360px", md: "400px", lg: "251px" }}
              mx={"auto"}
            />
          </Stack>
        </Stack>
        <Stack
          borderRadius={"6px"}
          border={"1px solid #282828"}
          bg={"#101010"}
          w={{ sm: "480px", md: "550px", lg: "282px" }}
          h={"213px"}
        >
          <Stack
            alignItems={"left"}
            borderBottom={"1px solid  #282828"}
            justifyContent={"center"}
            h="40px"
          >
            <Text
              {...satFont.style}
              fontWeight={"700"}
              lineHeight={"18px"}
              fontSize={"16px"}
              color={"#F2F2F2"}
              ml={"10px"}
            >
              Current results
            </Text>
          </Stack>
          <Stack justifyContent={"space-between"} h="129px" mt="10px">
            <Box
              w={{ base: "95%", sm: "450px", md: "480px", lg: "252px" }}
              mx="auto"
            >
              <Stack direction="row" justifyContent={"space-between"} h="29px">
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"16px"}
                  color={"#F2F2F2"}
                >
                  Yes
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"16px"}
                  color={"#F2F2F2"}
                >
                  87%
                </Text>
              </Stack>
              <Progress
                colorScheme={"green"}
                value={96}
                size="xs"
                borderRadius={"15px"}
                w={{ base: "100%" }}
                mx={"auto"}
              />
            </Box>
            <Box
              w={{ base: "95%", sm: "450px", md: "480px", lg: "252px" }}
              mx="auto"
            >
              <Stack direction="row" justifyContent={"space-between"} h="29px">
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"16px"}
                  color={"#F2F2F2"}
                >
                  No
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"16px"}
                  color={"#F2F2F2"}
                >
                  17%
                </Text>
              </Stack>
              <Progress
                colorScheme={"gray"}
                value={17}
                size="xs"
                borderRadius={"15px"}
                w={{ base: "100%" }}
                mx={"auto"}
              />
            </Box>
            <Box
              w={{ base: "95%", sm: "450px", md: "480px", lg: "252px" }}
              mx="auto"
            >
              <Stack direction="row" justifyContent={"space-between"} h="29px">
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"16px"}
                  color={"#F2F2F2"}
                >
                  Abstain
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"16px"}
                  color={"#F2F2F2"}
                >
                  0.2%
                </Text>
              </Stack>
              <Progress
                colorScheme={"gray"}
                value={0.2}
                size="xs"
                borderRadius={"15px"}
                w={{ base: "100%" }}
                mx={"auto"}
              />
            </Box>
          </Stack>
        </Stack>

        <Stack
          borderRadius={"6px"}
          border={"1px solid #282828"}
          bg={"#101010"}
          w={{ base: "100%", sm: "480px", md: "550px", lg: "282px" }}
          h={"408px"}
        >
          <Stack
            alignItems={"left"}
            borderBottom={"1px solid  #282828"}
            justifyContent={"center"}
            h="40px"
          >
            <Text
              {...satFont.style}
              fontWeight={"700"}
              lineHeight={"18px"}
              fontSize={"16px"}
              color={"#F2F2F2"}
              ml={"10px"}
            >
              Status
            </Text>
          </Stack>
          <Stack
            justifyContent={"space-evenly"}
            h={"316px"}
            my={"auto"}
            w={{ base: "95%", sm: "460px", md: "500px", lg: "210px" }}
            mx={"auto"}
          >
            <Stack
              direction={"row"}
              mx={{ lg: "auto" }}
              w={{ base: "210px" }}
              h="58px"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack
                w="40px"
                h="40px"
                borderRadius={"6px"}
                bg={period === "active" ? "#FBFBFB" : "#2B2B2B"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack
                  borderRadius="100%"
                  border={`1px solid ${
                    period === "active" ? "black" : "#949494"
                  }`}
                  w="24px"
                  h="24px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <BiRightArrow
                    size="14px"
                    color={period === "active" ? "black" : "#949494"}
                    mx="auto"
                  />
                </Stack>
              </Stack>
              <Box h="58px" justifyContent={"space-evenly"} w={"154px"}>
                <Text
                  //   {...satFont.style}
                  fontWeight={"500"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  2023-09-22 22:09
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={period === "active" ? "900" : "700"}
                  lineHeight={"18px"}
                  fontSize={"15px"}
                  color={period === "active" ? "#228200" : "#949494"}
                >
                  Voting period started
                </Text>
                <Text
                  //   {...satFont.style}
                  fontWeight={"450"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  1 days ago
                </Text>
              </Box>
            </Stack>

            <Box w="1px" bg={"#949494"} h="31px" ml="20px" my={"-9px"}></Box>

            <Stack
              direction={"row"}
              mx={{ lg: "auto" }}
              w={"210px"}
              h="58px"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack
                w="40px"
                h="40px"
                borderRadius={"6px"}
                bg={period === "end" ? "#FBFBFB" : "#2B2B2B"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack
                  borderRadius={"100%"}
                  border={`1px solid ${period === "end" ? "black" : "#949494"}`}
                  w={"24px"}
                  h={"24px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <RiSquareLine
                    size="14px"
                    color={period === "end" ? "black" : "#949494"}
                    mx="auto"
                  />
                </Stack>
              </Stack>
              <Box h="58px" justifyContent={"space-evenly"} w={"154px"}>
                <Text
                  //   {...satFont.style}
                  fontWeight={"500"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  2023-09-29 22:09
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={period === "end" ? "900" : "700"}
                  lineHeight={"18px"}
                  fontSize={"15px"}
                  color={period === "end" ? "#228200" : "#949494"}
                >
                  End voting period
                </Text>
                <Text
                  //   {...satFont.style}
                  fontWeight={"450"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  1 days ago
                </Text>
              </Box>
            </Stack>

            <Box w="1px" bg={"#949494"} h="31px" ml="20px" my={"-9px"}></Box>

            <Stack
              direction={"row"}
              w={"186px"}
              h="58px"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack
                w="40px"
                h="40px"
                borderRadius={"6px"}
                bg={period === "pending" ? "#FBFBFB" : "#2B2B2B"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <PiHourglassSimpleLight
                  size="24px"
                  color={period === "pending" ? "black" : "#949494"}
                  mx="auto"
                />
              </Stack>

              <Text
                {...satFont.style}
                fontWeight={period === "pending" ? "900" : "700"}
                lineHeight={"18px"}
                fontSize={"15px"}
                color={period === "pending" ? "#228200" : "#949494"}
              >
                Pending proposal
              </Text>
            </Stack>

            <Box w="1px" bg={"#949494"} h="31px" ml="20px" my={"-9px"}></Box>

            <Stack
              direction={"row"}
              //   mx={"auto"}
              w={"186px"}
              h="58px"
              alignItems={"center"}
              justifyContent={"space-between"}
              //   ml={"1px"}
            >
              <Stack
                w="40px"
                h="40px"
                borderRadius={"6px"}
                justifyContent={"center"}
                alignItems={"center"}
                bg={period === "executed" ? "#FBFBFB" : "#2B2B2B"}
              >
                <SlEnergy
                  size="24px"
                  color={period === "executed" ? "black" : "#949494"}
                  mx="auto"
                />
              </Stack>
              {/* <Box h="58px" justifyContent={"space-evenly"} w={"154px"}> */}
              <Text
                {...satFont.style}
                fontWeight={period === "executed" ? "900" : "700"}
                lineHeight={"18px"}
                fontSize={"15px"}
                color={period === "executed" ? "#228200" : "#949494"}
              >
                Executed proposal
              </Text>
              {/* </Box> */}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Page;
