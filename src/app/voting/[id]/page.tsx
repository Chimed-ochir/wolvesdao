"use client";
import {
  Box,
  Button,
  Show,
  Stack,
  Text,
  Image as Images,
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

import wolves from "../../../../public/assets/wolf1.png";
import { useRouter } from "next/navigation";
import { VoteModal } from "@/Components/VoteModal";
import Votes from "@/Components/Votes";
import SkeletonId from "./SkeletonId";
import Information from "./Information/page";
import { useAuth } from "@/Components/Account";
import { UpdateModal } from "@/Components/Account/UpdateModal";
import { DeleteModal } from "@/Components/Account/deleteModal";
import { Editor } from "@tinymce/tinymce-react";

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
  const { admin } = useAuth();
  var moment = require("moment");
  const router = useRouter();

  const [vote, setVote] = useState("");
  const [voteId, setVoteId] = useState(false);
  const [send, setSend] = useState("");
  const [first, setFirst] = useState("");
  const [myId, setMyId] = useState("");
  const [cont, setCont] = useState(false);
  const period: string = data?.data?.status;
  useEffect(() => {
    if (data && "meVotedId" in data) {
      setSend(data?.meVotedId as string);
      setFirst(data?.meVotedId as string);
      setVoteId(false);
    }
  }, [data]);
  console.log("admin", admin);
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
    <SkeletonId />
  ) : (
    <Stack
      mx={{ base: "auto" }}
      w={{ base: "95%", sm: "480px", md: "550px", lg: "960px" }}
      direction={{ base: "column", lg: "row" }}
      justifyContent={"space-evenly"}
    >
      <Stack w={{ md: "550px" }}>
        {admin ? (
          <Stack direction="row" justifyContent={"space-between"} w={"60%"}>
            <UpdateModal data={data} onFinish={onFinish}>
              <Button
                bg="white"
                minW={"88px"}
                variant={"solid"}
                color={"black"}
              >
                Өөрчлөх
              </Button>
            </UpdateModal>
            <DeleteModal
              id={id}
              title="Санал устгах"
              option={false}
              onFinish={onFinish}
            >
              <Button
                bg="white"
                minW={"88px"}
                variant={"outline"}
                color={"black"}
              >
                Устгах
              </Button>
            </DeleteModal>
          </Stack>
        ) : null}
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
              w="80px"
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
                Буцах
              </Text>
            </Stack>
          </Show>

          <Box borderRadius={"6px"} border={"1px solid #282828"} bg={"#101010"}>
            <Stack
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
            _hover={{ bg: "#303030" }}
            onClick={() => {
              setCont(!cont);
            }}
            mt={cont ? "20px" : ""}
            rightIcon={
              cont === false ? <MdOutlineExpandMore /> : <MdExpandLess />
            }
          >
            {cont === false ? " Дэлгэрэнгүй" : "Хураангуй"}
          </Button>
        </Stack>
        {/* {period === "active" ? ( */}
        <Stack
        // h={{ base: "241px", sm: "301px" }}
        >
          <Box borderRadius={"6px"} border={"1px solid #282828"} bg={"#101010"}>
            <Stack
              justifyContent={"space-around"}
              borderBottom={"1px solid  #282828"}
              direction={"row"}
              alignItems="center"
            >
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={{ base: "27px", lg: "42px" }}
                fontSize={{ base: "16px", sm: "24px" }}
                py={"2px"}
                px={"6px"}
                ml={"20px"}
                my="8px"
                color={"#F2F2F2"}
              >
                Санал өгнө үү
              </Text>
              <Button
                bg="white"
                minW={"88px"}
                variant={"outline"}
                color={"black"}
              >
                Нэмэх
              </Button>
            </Stack>
            <Stack justifyContent={"center"} my={"10px"}>
              {data?.data?.options.map((e: any, id: number) => (
                <Stack key={id} direction={"row"}>
                  <Button
                    variant={"outline"}
                    mx={"auto"}
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
                  <DeleteModal
                    id={e?._id}
                    title="Сонголт устгах"
                    option={true}
                    onFinish={onFinish}
                  >
                    <Button
                      bg="white"
                      minW={"88px"}
                      variant={"outline"}
                      color={"black"}
                    >
                      Устгах
                    </Button>
                  </DeleteModal>
                  <Button
                    bg="white"
                    minW={"88px"}
                    variant={"outline"}
                    color={"black"}
                  >
                    Өөрчлөх
                  </Button>
                </Stack>
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
        {/* ) : null} */}
        <Stack mt={{ base: "10px", sm: "" }}>
          <Votes idx={id} />
        </Stack>
        {data?.data.notes ? (
          <Stack
            borderRadius={"6px"}
            border={"1px solid #282828"}
            bg={"#101010"}
            justifyContent={{ base: "space-evenly", sm: "space-between" }}
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
      <Information data={data} />
    </Stack>
  );
}

export default Page;
