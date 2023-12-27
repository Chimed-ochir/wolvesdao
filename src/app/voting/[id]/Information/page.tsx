import { Box, Progress, Stack, Text, Link } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import { PiHourglassSimpleLight } from "react-icons/pi";
import { RiSquareLine } from "react-icons/ri";
import { SlEnergy } from "react-icons/sl";
import localFont from "next/font/local";
import Image from "next/image";
import wolves from "../../../../../public/assets/wolf1.png";
const satFont = localFont({
  src: "../../../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
function Information(data: any) {
  var moment = require("moment");
  const currentDate1 = new Date();
  const currentDate = new Date(moment(currentDate1).format("YYYY-MM-DD"));
  const futureDate = new Date(
    moment(data?.data?.data?.endDate).format("YYYY-MM-DD")
  );
  const nowDate = new Date(
    moment(data?.data?.data?.startDate).format("YYYY-MM-DD")
  );

  const timeDifference = futureDate.getTime() - currentDate.getTime();
  const now = currentDate.getTime() - nowDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  const startDate = Math.floor(now / (1000 * 3600 * 24));
  const period = data?.data?.data.status;

  return (
    <Stack mt={{ lg: "50px" }}>
      <Stack
        borderRadius={"6px"}
        border={"1px solid #282828"}
        bg={"#101010"}
        w={{ sm: "480px", md: "550px", lg: "282px" }}
        mt={{ base: "10px", lg: "" }}
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
            Саналын мэдээлэл
          </Text>
        </Stack>
        <Stack justifyContent={"space-around"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            w={{ base: "95%", sm: "450px", md: "480px", lg: "252px" }}
            mx={"auto"}
          >
            <Stack justifyContent={"space-around"} w="50%">
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#949494"}
              >
                Tокен
              </Text>

              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#949494"}
              >
                Эхлэх огноо
              </Text>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#949494"}
              >
                Дуусах огноо
              </Text>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#949494"}
              >
                Хэлэлцүүлэгийн линк
              </Text>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#949494"}
              >
                Саналын явц
              </Text>
            </Stack>
            <Stack justifyContent={"space-around"} alignItems={"right"} w="50%">
              <Stack
                direction="row"
                justifyContent={"right"}
                alignItems={"center"}
              >
                <Image src={wolves} alt="the wolves"></Image>
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
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#FFFFFF"}
                textAlign={"right"}
              >
                {moment
                  (data?.data.data?.startDate)
                  .format("YYYY-MM-DD-HH:mm")}
              </Text>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#FFFFFF"}
                textAlign={"right"}
              >
                {moment(data?.data.data?.endDate).format("YYYY-MM-DD-HH:mm")}
              </Text>

              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent={"end"}
              >
                <Box maxW={"85%"}>
                  <Link href={data?.data?.data?.withLink} isExternal>
                    <Text
                      {...satFont.style}
                      fontWeight={"700"}
                      lineHeight={"18px"}
                      fontSize={"11px"}
                      color={"#FFFFFF"}
                      textAlign={"right"}
                      as="u"
                    >
                      {data?.data?.data?.withLink}
                    </Text>
                  </Link>
                </Box>
                <AiOutlineLink size="16px" color="white" />
              </Stack>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#FFFFFF"}
                textAlign={"right"}
              >
                {data?.data.data?.count}/ 100
              </Text>
            </Stack>
          </Stack>
          <Progress
            colorScheme={"yellow"}
            value={data?.data?.data?.count}
            size="xs"
            borderRadius={"15px"}
            w={{ base: "95%", sm: "450px", md: "480px", lg: "252px" }}
            mx={"auto"}
            mb={"20px"}
          />
        </Stack>
      </Stack>
      <Stack
        borderRadius={"6px"}
        border={"1px solid #282828"}
        bg={"#101010"}
        w={{ sm: "480px", md: "550px", lg: "282px" }}
        mt={{ base: "10px", lg: "" }}
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
            Одоогийн үр дүн
          </Text>
        </Stack>
        <Stack justifyContent={"space-between"} mt="10px" mb="20px">
          {data?.data?.data?.options?.map((e: any, id: number) => (
            <Box
              w={{ base: "95%", sm: "450px", md: "480px", lg: "252px" }}
              mx="auto"
              key={id}
            >
              <Stack direction="row" justifyContent={"space-between"} h="29px">
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#F2F2F2"}
                >
                  {e.option}
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#F2F2F2"}
                >
                  {data?.data?.data?.count !== 0
                    ? e?.votes?.length &&
                      Number(
                        (e?.votes?.length * 100) / data?.data?.data?.count
                      ).toFixed(0)
                    : 0}{" "}
                  %
                </Text>
              </Stack>
              <Progress
                colorScheme={"green"}
                value={e.votes.length}
                size="xs"
                borderRadius={"15px"}
                w={{ base: "100%" }}
                mx={"auto"}
              />
            </Box>
          ))}
        </Stack>
      </Stack>

      <Stack
        borderRadius={"6px"}
        border={"1px solid #282828"}
        bg={"#101010"}
        w={{ base: "100%", sm: "480px", md: "550px", lg: "282px" }}
        h={"408px"}
        mt={{ base: "10px", lg: "" }}
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
            Статус
          </Text>
        </Stack>
        <Stack
          justifyContent={"space-evenly"}
          h={"316px"}
          my={"auto"}
          w={{ base: "95%", sm: "460px", md: "500px", lg: "230px" }}
          mx={"auto"}
        >
          <Stack
            direction={"row"}
            mx={{ lg: "auto" }}
            w={{ base: "230px" }}
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
            <Box h="58px" justifyContent={"space-evenly"} w={"190px"}>
              <Text
                fontWeight={"500"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#949494"}
              >
                {moment
                  (data?.data?.data.startDate)
                  .format("YYYY-MM-DD-h:m")}
              </Text>
              <Text
                {...satFont.style}
                fontWeight={period === "active" ? "900" : "700"}
                lineHeight={"18px"}
                fontSize={"15px"}
                color={period === "active" ? "#228200" : "#949494"}
              >
                Санал хураалт эхэлсэн
              </Text>
              <Text
                fontWeight={"450"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#949494"}
              >
                {startDate < 0
                  ? "Хараахан эхлээгүй байна"
                  : `${startDate} хоногийн өмнө эхэлсэн`}
              </Text>
            </Box>
          </Stack>

          <Box w="1px" bg={"#949494"} h="31px" ml="20px" my={"-9px"}></Box>

          <Stack
            direction={"row"}
            mx={{ lg: "auto" }}
            w={"230px"}
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
            <Box h="58px" justifyContent={"space-evenly"} w={"190px"}>
              <Text
                fontWeight={"500"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#949494"}
              >
                {moment(data?.data?.data?.endDate).format("YYYY-MM-DD-HH:m")}
              </Text>
              <Text
                {...satFont.style}
                fontWeight={period === "end" ? "900" : "700"}
                lineHeight={"18px"}
                fontSize={"15px"}
                color={period === "end" ? "#228200" : "#949494"}
              >
                Санал хураалт дууссан
              </Text>
              <Text
                fontWeight={"450"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#949494"}
              >
                {daysDifference === 0
                  ? `Өнөөдөр дуусна`
                  : daysDifference < 0
                  ? `${-daysDifference} хоногийн өмнө дууссан `
                  : `${daysDifference} хоногийн дараа дуусна `}
              </Text>
            </Box>
          </Stack>

          <Box w="1px" bg={"#949494"} h="31px" ml="20px" my={"-9px"}></Box>

          <Stack
            direction={"row"}
            w={"230px"}
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
              w="190px"
              color={period === "pending" ? "#228200" : "#949494"}
            >
              Дэмжигдсэн саналууд
            </Text>
          </Stack>

          <Box w="1px" bg={"#949494"} h="31px" ml="20px" my={"-9px"}></Box>

          <Stack
            direction={"row"}
            w={"230px"}
            h="58px"
            alignItems={"center"}
            justifyContent={"space-between"}
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
            <Text
              {...satFont.style}
              fontWeight={period === "executed" ? "900" : "700"}
              lineHeight={"18px"}
              fontSize={"15px"}
              w={"190px"}
              color={period === "executed" ? "#228200" : "#949494"}
            >
              Хэрэгжсэн санал
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Information;
