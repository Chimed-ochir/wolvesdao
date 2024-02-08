"use client";
import {
  Box,
  Button,
  Show,
  Stack,
  Text,
  Image as Images,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { BsChevronLeft } from "react-icons/bs";
import { useQuery } from "@/utils";

import { useRouter } from "next/navigation";
import { VoteModal } from "@/Components/VoteModal";
import Votes from "@/Components/Votes";
import SkeletonId from "./SkeletonId";
import Information from "./Information/page";
import { useAuth } from "@/Components/Account";
import { UpdateModal } from "@/Components/Account/UpdateModal";
import { DeleteModal } from "@/Components/Account/DeleteModal";
import { OptionModal } from "@/Components/Account/OptionModal";
import { OptionNewModal } from "@/Components/Account/OptionNewModal";
import { ProgressModal } from "@/Components/Account/ProgressModal";
import { StatusModal } from "@/Components/Account/StatusModal";
import { redirect } from "next/navigation";
const satFont = localFont({
  src: "../../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});

function Page({ params: { id } }: { params: { id: string } }) {
  const { data, loading, fetchData, success } = useQuery<{ data: any }>({
    uri: `/poll/${id}`,
  });
  const onFinish = () => {
    fetchData();
  };

  if (success === false) {
    redirect("/voting");
  }
  const { admin, user } = useAuth();
  var moment = require("moment");
  const router = useRouter();

  const [vote, setVote] = useState("");
  const [voteId, setVoteId] = useState(false);
  const [send, setSend] = useState("");
  const [first, setFirst] = useState("");
  const [myId, setMyId] = useState("");
  const [cont, setCont] = useState(false);
  const [cont1, setCont1] = useState(false);
  const toast = useToast();
  useEffect(() => {
    if (data && "meVotedId" in data) {
      setSend(data?.meVotedId as string);
      setFirst(data?.meVotedId as string);
      setVoteId(false);
    }
  }, [data]);
  useEffect(() => {
    if (voteId === true) {
      const myVote = data?.data?.options.find((op: any) => op._id === first);
      const vote = myVote?.votes.find((v: any) => v.userName === user);
      setMyId(vote?._id);
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
            <StatusModal data={data} onFinish={onFinish}>
              <Button
                bg="white"
                minW={"88px"}
                variant={"solid"}
                color={"black"}
              >
                Статус Өөрчлөх
              </Button>
            </StatusModal>
          </Stack>
        ) : null}
        <Stack>
          <Show below="lg">
            <Stack
              direction="row"
              alignItems={"center"}
              h="42px"
              cursor="pointer"
              w="80px"
              onClick={() => {
                router.back();
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
          <Show above="lg">
            {admin ? null : (
              <Stack
                direction="row"
                alignItems={"center"}
                h="42px"
                cursor="pointer"
                w="80px"
              ></Stack>
            )}
          </Show>
          <Box
            borderRadius={"6px"}
            border={"1px solid #282828"}
            bg={"#101010"}
            // marginTop={admin ? "" : "50px"}
          >
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
                Огноо: {moment(data?.data.startDate).format("YYYY-MM-DD")}
              </Text>
            </Stack>
          </Box>
        </Stack>
        <Stack
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
          boxShadow="xl"
          p="6"
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
        {(data?.data?.status as string) === "active" ||
        ((data?.data?.status as string) === "waiting" && admin) ? (
          <Stack>
            <Box
              borderRadius={"6px"}
              border={"1px solid #282828"}
              bg={"#101010"}
            >
              <Stack
                justifyContent={"space-around"}
                borderBottom={"1px solid  #282828"}
                direction={"row"}
                alignItems="center"
              >
                <Text
                  {...satFont.style}
                  fontWeight={"700"}
                  lineHeight={{ base: "18px" }}
                  fontSize={{ base: "16px" }}
                  py={"2px"}
                  px={"6px"}
                  my="8px"
                  color={"#F2F2F2"}
                  minW={{ base: "130px", sm: "130px" }}
                >
                  Санал өгнө үү
                </Text>
                {admin ? (
                  <OptionModal onFinish={onFinish} id={data?.data._id}>
                    <Button
                      bg="white"
                      w={{ base: "100px", sm: "120px" }}
                      variant={"outline"}
                      color={"black"}
                      fontSize={"14px"}
                      h={"30px"}
                    >
                      Нэмэх
                    </Button>
                  </OptionModal>
                ) : null}
              </Stack>
              <Stack justifyContent={"center"} my={"10px"}>
                {data?.data?.options.map((e: any, id: number) => (
                  <Stack key={id} direction={"row"}>
                    <Button
                      variant={"outline"}
                      mx={"auto"}
                      w={{ base: "85%", sm: "458px", md: "498px" }}
                      bg={send === e?._id ? "#dfff17" : "black"}
                      color={send === e?._id ? "black" : "white"}
                      borderColor={send === e?._id ? "black" : "white"}
                      onClick={() => {
                        if (user) {
                          setVote(`${e?.option}`);
                          setSend(`${e._id}`);
                          if (first !== null && first !== e._id) {
                            setVoteId(true);
                          } else {
                            setVoteId(false);
                          }
                        } else {
                          toast({
                            title:
                              "Та МongolNFT хэрэглэгчийн бүртгэлээ ашиглан нэвтэрнэ үү!",
                            description:
                              "Нэвтэрч орсны дараагаар саналаа өгөх боломжтой.",

                            duration: 5000,
                            isClosable: true,
                          });
                        }
                      }}
                      _hover={{ borderColor: "#dfff17" }}
                    >
                      {e.icon} {e.option}
                    </Button>
                    {admin ? (
                      <Stack direction="row">
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
                            fontSize={"14px"}
                            h={"30px"}
                          >
                            Устгах
                          </Button>
                        </DeleteModal>
                        <OptionNewModal
                          id={e?._id}
                          onFinish={onFinish}
                          option={e.option}
                          icon={e.icon}
                        >
                          <Button
                            bg="white"
                            minW={"88px"}
                            variant={"outline"}
                            color={"black"}
                            fontSize={"14px"}
                            h={"30px"}
                          >
                            Өөрчлөх
                          </Button>
                        </OptionNewModal>
                      </Stack>
                    ) : null}
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
                    isDisabled={
                      send === null ||
                      (voteId === false && first !== null) ||
                      !user
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
        <Stack mt={{ base: "10px", sm: "" }}>
          {user ? <Votes idx={id} /> : null}
        </Stack>
        {(data?.data?.status as string) === "executed" ||
        (data?.data?.status as string) === "pending" ? (
          <Stack
            borderRadius={"6px"}
            border={"1px solid #282828"}
            bg={"#101010"}
            justifyContent={{ base: "space-evenly", sm: "space-between" }}
            mb={{ base: "38px", sm: "" }}
            paddingBottom={"20px"}
            marginTop={"10px"}
          >
            <Stack
              direction="row"
              justifyContent={"space-around"}
              borderBottom={"1px solid  #282828"}
              alignItems={"center"}
            >
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={{ base: "18px" }}
                fontSize={{ base: "16px" }}
                py={"2px"}
                px={"6px"}
                ml={"10px"}
                my="8px"
                color={"#F2F2F2"}
                minW={"200px"}
              >
                Дэлгэрэнгүй мэдээлэл
              </Text>
              {admin ? (
                <ProgressModal onFinish={onFinish} data={data}>
                  <Button
                    bg="white"
                    w={"110px"}
                    variant={"outline"}
                    color={"black"}
                    fontSize={"14px"}
                    h={"30px"}
                  >
                    Явц оруулах
                  </Button>
                </ProgressModal>
              ) : null}
            </Stack>
            {data?.data.notes ? (
              <>
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  w={{ lg: "521px" }}
                  mb={{ base: "38px", sm: "" }}
                  maxHeight={cont1 === false ? "300px" : ""}
                  minHeight={"200px"}
                  overflow={"hidden"}
                  color="white"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: `${data?.data.notes}` }}
                    style={{ width: "85%", color: "white" }}
                  />
                </Stack>
                <Stack
                  mt={"-70px"}
                  backdropFilter={cont1 === false ? "auto" : ""}
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
                      setCont1(!cont1);
                    }}
                    mt={cont1 ? "20px" : ""}
                    rightIcon={
                      cont1 === false ? (
                        <MdOutlineExpandMore />
                      ) : (
                        <MdExpandLess />
                      )
                    }
                  >
                    {cont1 === false ? " Дэлгэрэнгүй" : "Хураангуй"}
                  </Button>
                </Stack>
              </>
            ) : (
              <Text
                {...satFont.style}
                fontWeight={"500"}
                lineHeight={{ base: "18px" }}
                fontSize={{ base: "16px" }}
                py={"2px"}
                px={"6px"}
                ml={"10px"}
                my="8px"
                color={"#F2F2F2"}
              >
                Одоогоор хийгдсэн ажил байхгүй.
              </Text>
            )}
          </Stack>
        ) : null}
      </Stack>
      <Information data={data} />
    </Stack>
  );
}

export default Page;
