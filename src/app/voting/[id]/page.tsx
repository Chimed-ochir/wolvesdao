"use client";
import {
  Box,
  Button,
  Show,
  Progress,
  Stack,
  Text,
  Image as Images,
  Link,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { AiOutlineCheck, AiOutlineLink } from "react-icons/ai";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";
import { RiSquareLine } from "react-icons/ri";
import { PiHourglassSimpleLight } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import { BsChevronLeft } from "react-icons/bs";
import { useQuery } from "@/utils";
import api from "@/utils/CustomAxios";
import Image from "next/image";
import wolves from "../../../../public/assets/wolf1.png";
import { useRouter } from "next/navigation";
import { VoteModal } from "@/Components/VoteModal";
import Votes from "@/Components/Votes";

const satFont = localFont({
  src: "../../../Components/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});

function Page({ params: { id } }: { params: { id: string } }) {
  const { data, loading, fetchData } = useQuery<{ data: any }>({
    uri: `/poll/${id}`,
  });
  const onFinish = () => {
    fetchData();
  };

  var moment = require("moment");
  const router = useRouter();
  const currentDate = new Date();
  const futureDate = new Date(
    moment.utc(data?.data?.endDate).format("MM-DD-YYYY")
  );
  const nowDate = new Date(
    moment.utc(data?.data?.startDate).format("MM-DD-YYYY")
  );
  const timeDifference = futureDate.getTime() - currentDate.getTime();
  const now = currentDate.getTime() - nowDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  const startDate = Math.floor(now / (1000 * 3600 * 24));
  const [vote, setVote] = useState("");
  const [voteId, setVoteId] = useState(false);
  const [send, setSend] = useState("");
  const [first, setFirst] = useState("");
  const [myId, setMyId] = useState("");
  const [cont, setCont] = useState(false);
  const period: string = data?.data.status;
  useEffect(() => {
    if (data && "meVotedId" in data) {
      setSend(data?.meVotedId as string);
      setFirst(data?.meVotedId as string);
      setVoteId(false);
    }
  }, [data]);

  console.log("----", loading);
  useEffect(() => {
    if (voteId === true) {
      data?.data?.options.map((e: any, id: number) => {
        e.votes.map((el: any, idx: number) => {
          if (el.optionId === first) {
            setMyId(el._id);
          }
        });
      });
    }
  }, [voteId]);
  return !data || loading ? (
    <Stack
      mx={{ base: "auto" }}
      w={{ base: "95%", sm: "480px", md: "768px", lg: "960px" }}
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
              w="20%"
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
              w={{ base: "30%" }}
              ml={"40px"}
            ></Skeleton>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "30%" }}
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
          >
            <Stack
              direction="row"
              ml="10px"
              alignItems={"center"}
              justifyContent={"center"}
              w="20%"
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
              w={{ base: "30%" }}
              ml={"40px"}
            ></Skeleton>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "30%" }}
            ></Skeleton>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
          >
            <Stack
              direction="row"
              ml="10px"
              alignItems={"center"}
              justifyContent={"center"}
              w="20%"
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
              w={{ base: "30%" }}
              ml={"40px"}
            ></Skeleton>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "30%" }}
            ></Skeleton>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            w={{ base: "85%", sm: "458px", md: "498px" }}
          >
            <Stack
              direction="row"
              ml="10px"
              alignItems={"center"}
              justifyContent={"center"}
              w="20%"
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
              w={{ base: "30%" }}
              ml={"40px"}
            ></Skeleton>
            <Skeleton
              h="22px"
              borderRadius={"6px"}
              mt={"2px"}
              w={{ base: "30%" }}
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
  ) : (
    <Stack
      mx={{ base: "auto" }}
      w={{ base: "95%", sm: "480px", md: "768px", lg: "960px" }}
      direction={{ base: "column", lg: "row" }}
      justifyContent={"space-evenly"}
    >
      <Stack w={{ md: "550px" }}>
        {/* <Stack h={{ base: "206px", sm: "277px" }}> */}
        <Stack>
          <Show above="lg">
            <Text
              {...satFont.style}
              color={"#F2F2F2"}
              fontSize="24px"
              lineHeight={"32px"}
              fontWeight="900"
            >
              Саналууд
            </Text>
          </Show>
          <Show below="lg">
            <Stack
              direction="row"
              alignItems={"center"}
              h="42px"
              cursor="pointer"
              w="50px"
              onClick={() => {
                router.push("/voting");
              }}
            >
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
              // h={{ base: "106px", sm: "160px" }}
              py={"20px"}
              justifyContent={"space-around"}
              borderBottom={"1px solid  #282828"}
            >
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={{ base: "10px", sm: "12px" }}
                py={{ base: "2px" }}
                px={{ base: "auto", lg: "2px" }}
                bg={
                  data?.data.status === "active"
                    ? "#228200"
                    : data?.data.status === "pending"
                    ? "#DFFF24"
                    : data?.data.status === "executed"
                    ? "#4916FF"
                    : "#95120A"
                }
                borderRadius={"4px"}
                w={{ base: "55px", sm: "70px" }}
                ml={{ base: "10px", sm: "28px" }}
                //   ml={{ base: "10px", sm: "28px" }}
                textAlign={"center"}
                color={data?.data.status === "pending" ? "black" : "white"}
              >
                {(data?.data?.status as string)?.toUpperCase()}
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
                {data?.data?.description}
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
                // borderRadius={"50%"}
                // bg={"red"}
              >
                <Images
                  src={data?.data?.profile}
                  alt="Profile Picture"
                  w={{ base: "24px", sm: "32px" }}
                  minH={{ base: "24px", sm: "32px" }}
                  minW={{ base: "24px", sm: "32px" }}
                  h={{ base: "24px", sm: "32px" }}
                  my={"auto"}
                  borderRadius={"100%"}
                ></Images>
              </Box>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={{ base: "18px" }}
                // fontSize={{ base: "10px", lg: "12px" }}
                fontSize={{ base: "8px", sm: "12px" }}
                color="white"
              >
                <span style={{ color: "#95999D", fontWeight: "500" }}>
                  Хэнээс
                </span>{" "}
                {data?.data.userName}
              </Text>
              <Text color="white">•</Text>

              <Text
                {...satFont.style}
                fontWeight={"500"}
                lineHeight={{ base: "18px" }}
                fontSize={{ base: "8px", sm: "12px" }}
                color="white"
              >
                Дугаар {data?.data._id}
              </Text>
              <Text color="white">•</Text>
              <Text
                {...satFont.style}
                fontWeight={"500"}
                lineHeight={{ base: "18px" }}
                fontSize={{ base: "8px", sm: "12px" }}
                color="white"
              >
                Огноо: {moment.utc(data?.data.startDate).format("MM-DD-YYYY")}
              </Text>
            </Stack>
          </Box>
        </Stack>
        <Stack
          // h={{ base: "289px", sm: "392px" }}
          justifyContent={{ base: "space-evenly", sm: "space-between" }}
          w={{ lg: "521px" }}
          mb={{ base: "38px", sm: "" }}
          maxHeight={cont === false ? "200px" : ""}
          minHeight={"50px"}
          overflow={"hidden"}
          color="white"
        >
          <div dangerouslySetInnerHTML={{ __html: `${data?.data.content}` }} />
        </Stack>

        <Stack
          mt={"-70px"}
          backdropFilter={cont === false ? "auto" : ""}
          backdropBlur="2px"
        >
          <Button
            variant={"outline"}
            border={"1px solid white"}
            w={"140px"}
            color={"white"}
            mx={"auto"}
            bg={"#282828"}
            onClick={() => {
              setCont(!cont);
            }}
            rightIcon={
              cont === false ? <MdOutlineExpandMore /> : <MdExpandLess />
            }
          >
            {cont === false ? " Дэлгэрэнгүй" : "Хураангуй"}
          </Button>
        </Stack>
        {period === "active" ? (
          <Stack
          // h={{ base: "241px", sm: "301px" }}
          >
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
                  lineHeight={{ base: "27px", lg: "42px" }}
                  fontSize={{ base: "16px", sm: "24px" }}
                  py={"2px"}
                  px={"6px"}
                  ml={"20px"}
                  color={"#F2F2F2"}
                >
                  Санал өгнө үү
                </Text>
              </Stack>
              <Stack justifyContent={"center"} my={"10px"}>
                {data?.data?.options.map((e: any, id: number) => (
                  <Button
                    variant={"outline"}
                    mx={"auto"}
                    key={id}
                    w={{ base: "85%", sm: "458px", md: "498px" }}
                    color="white"
                    onClick={() => {
                      setVote(`${e?.option}`);
                      // setVoteId(`${e?._id}`);
                      setSend(`${e._id}`);
                      if (first !== null && first !== e._id) {
                        setVoteId(true);
                      } else {
                        setVoteId(false);
                      }
                    }}
                    leftIcon={
                      send === e?._id ? (
                        <AiOutlineCheck style={{ fontSize: "18px" }} />
                      ) : undefined
                    }
                  >
                    {e.option}
                  </Button>
                ))}

                <VoteModal
                  choice={vote}
                  send={send}
                  voteId={voteId}
                  optionId={myId}
                  onFinish={onFinish}
                >
                  <Button
                    bg="white"
                    mx={"auto"}
                    w={{ base: "85%", sm: "458px", md: "498px" }}
                    variant={"solid"}
                    color={"black"}
                    // onClick={() => {
                    //   voteSubmit();
                    // }}
                    // {vote === ""?isDisabled:''}
                    isDisabled={
                      send === null || (voteId === false && first !== null)
                    }
                  >
                    {voteId
                      ? "Санал шинэчлэх"
                      : data && "meVotedId" in data
                      ? data?.meVotedId
                        ? "Санал өгсөн"
                        : "Санал өгөх"
                      : "Санал өгөх"}
                  </Button>
                </VoteModal>
              </Stack>
            </Box>
          </Stack>
        ) : null}
        {/* <Stack h={{ base: "298px", sm: "322px" }} mt={{ base: "10px", sm: "" }}> */}
        <Stack mt={{ base: "10px", sm: "" }}>
          <Votes idx={id} />
        </Stack>
        {data?.data.notes ? (
          <Stack
            // h={{ base: "289px", sm: "392px" }}
            borderRadius={"6px"}
            border={"1px solid #282828"}
            bg={"#101010"}
            justifyContent={{ base: "space-evenly", sm: "space-between" }}
            // w={{ lg: "521px" }}
            mb={{ base: "38px", sm: "" }}
            maxHeight={cont === false ? "200px" : ""}
            minHeight={"50px"}
            overflow={"hidden"}
            paddingBottom={"20px"}
            marginTop={"10px"}
          >
            <Stack
              justifyContent={"space-around"}
              borderBottom={"1px solid  #282828"}
            >
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={{ base: "27px", lg: "42px" }}
                fontSize={{ base: "16px", sm: "24px" }}
                py={"2px"}
                px={"6px"}
                ml={"20px"}
                color={"#F2F2F2"}
              >
                Дэлгэрэнгүй мэдээлэл
              </Text>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <div
                dangerouslySetInnerHTML={{ __html: `${data?.data.notes}` }}
                style={{ width: "85%", color: "white" }}
              />
            </Stack>
          </Stack>
        ) : null}
      </Stack>
      <Stack mt={{ lg: "50px" }}>
        <Stack
          borderRadius={"6px"}
          border={"1px solid #282828"}
          bg={"#101010"}
          w={{ sm: "480px", md: "550px", lg: "282px" }}
          // h={"225px"}
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
              Information
            </Text>
          </Stack>
          <Stack justifyContent={"space-around"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              // h={"148px"}
              w={{ base: "95%", sm: "450px", md: "480px", lg: "252px" }}
              mx={"auto"}
            >
              <Stack justifyContent={"space-around"}>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  Tокен
                </Text>
                {/* <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  Voting system
                </Text> */}
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
              <Stack
                justifyContent={"space-around"}
                maxWidth={"153px"}
                alignItems={"right"}
              >
                <Stack
                  direction="row"
                  justifyContent={"right"}
                  alignItems={"center"}
                >
                  {/* <Box
                  
                 
                  bg="red"
                ></Box> */}
                  <Image
                    src={wolves}
                    alt="the wolves"
                    // height={"18px"}
                    // width={"18px"}
                    // border
                  ></Image>
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
                {/* <Text
                  {...satFont.style}
                  fontWeight={"500"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#FFFFFF"}
                  textAlign={"right"}
                >
                  Single choice voting
                </Text> */}
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#FFFFFF"}
                  textAlign={"right"}
                >
                  {moment.utc(data?.data.startDate).format("MM-DD-YYYY")}
                </Text>
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#FFFFFF"}
                  textAlign={"right"}
                >
                  {moment.utc(data?.data.endDate).format("MM-DD-YYYY")}
                </Text>

                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"right"}
                  maxW={"153px"}
                >
                  <Box maxW={"129px"}>
                    <Link href={data?.data?.withLink} isExternal>
                      <Text
                        {...satFont.style}
                        fontWeight={"700"}
                        lineHeight={"18px"}
                        fontSize={"11px"}
                        color={"#FFFFFF"}
                        textAlign={"right"}
                        // textDecoration={"underline"}
                        as="u"
                      >
                        {data?.data?.withLink}
                      </Text>
                    </Link>
                  </Box>
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
                  {data?.data.count}/ 100
                </Text>
              </Stack>
            </Stack>
            <Progress
              colorScheme={"yellow"}
              value={data?.data.count}
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
          // h={"213px"}
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
              Current results
            </Text>
          </Stack>
          <Stack justifyContent={"space-between"} mt="10px" mb="20px">
            {data?.data?.options.map((e: any, id: number) => (
              <Box
                w={{ base: "95%", sm: "450px", md: "480px", lg: "252px" }}
                mx="auto"
                key={id}
              >
                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  h="29px"
                >
                  <Text
                    {...satFont.style}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                    fontSize={"16px"}
                    color={"#F2F2F2"}
                  >
                    {e.option}
                  </Text>
                  <Text
                    {...satFont.style}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                    fontSize={"16px"}
                    color={"#F2F2F2"}
                  >
                    {data?.data?.count !== 0
                      ? e?.votes?.length && e?.votes?.length / data?.data?.count
                      : 0}
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
              Status
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
                  //   {...satFont.style}
                  fontWeight={"500"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  {moment.utc(data?.data.startDate).format("MM-DD-YYYY")}
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
                  //   {...satFont.style}
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
                  //   {...satFont.style}
                  fontWeight={"500"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  {moment.utc(data?.data.endDate).format("MM-DD-YYYY")}
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
                  //   {...satFont.style}
                  fontWeight={"450"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#949494"}
                >
                  {daysDifference === 0
                    ? `Өнөөдөр дуусна`
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
              //   mx={"auto"}
              w={"230px"}
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
                w={"190px"}
                color={period === "executed" ? "#228200" : "#949494"}
              >
                Хэрэгжсэн санал
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
