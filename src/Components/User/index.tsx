"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Skeleton, Stack, Text } from "@chakra-ui/react";
import UserCard from "../UserCard";
import { useQuery } from "@/utils";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { UserModal } from "@/Components/Account/UserModal/UserModal";
import { DeleteAllModal } from "../Account/DeleteAllModal";
import SkeletonUserCard from "../SkeletonUserCard";
function User() {
  const { loading, data, fetchData, pageCount } = useQuery<any>({
    uri: "/user",
    manual: true,
  });
  const onFinish = () => {
    fetchData(`/user`, {
      page: page1,
      limit: 10,
    });
  };
  const [page1, setPage1] = useState(1);
  const [view, setView] = useState(false);

  useEffect(() => {
    if (pageCount >= page1) {
      fetchData(`/user`, {
        page: page1,
        limit: 10,
      });
    }
  }, [view]);
  useEffect(() => {
    fetchData(`/user`, {
      page: 1,
      limit: 10,
    });
  }, []);
  return (
    <>
      <Stack
        w="70%"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        mb="10px"
      >
        <Text
          fontWeight={"700"}
          fontSize={"16px"}
          lineHeight={"30px"}
          color={"white"}
          minW="135px"
        >
          Админ хуудас
        </Text>
        <Stack direction={"row"}>
          <UserModal onFinish={onFinish}>
            <Button
              bg="white"
              w={{ base: "", md: "130px" }}
              maxW={"130px"}
              variant={"solid"}
              color={"black"}
              fontSize={{ base: "12", md: "14px" }}
            >
              Хэрэглэгч нэмэх
            </Button>
          </UserModal>
          <DeleteAllModal onFinish={onFinish}>
            <Button
              bg="white"
              w={{ base: "", md: "155px" }}
              variant={"solid"}
              color={"black"}
              fontSize={{ base: "12", md: "14px" }}
              maxW={"155px"}
            >
              Бүх хэрэглэгч устгах
            </Button>
          </DeleteAllModal>
        </Stack>
      </Stack>
      <Box
        w={{ base: "90%", md: "70%" }}
        mx="auto"
        bg="dark"
        border={"1px solid #282828"}
        py="10px"
        borderRadius={"6px"}
      >
        <Text
          fontWeight={"700"}
          fontSize={"16px"}
          lineHeight={"30px"}
          color={"white"}
          w="90%"
          mx="auto"
        >
          Нийт хэрэглэгчид
          {/* : {data?.length} */}
        </Text>

        {loading ? (
          <>
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
            <SkeletonUserCard />
          </>
        ) : (
          data?.map((user: any, index: number) => (
            <UserCard data={user} key={index} onFinish={onFinish} />
          ))
        )}
        <Stack direction="row" w="180px" mx="auto" my="10px">
          <Button
            bg="white"
            w={"80px"}
            variant={"solid"}
            color={"black"}
            onClick={() => {
              setPage1((prevPage) => prevPage - 1);
              setView(!view);
            }}
            isDisabled={page1 === 1}
          >
            <FaAngleLeft size="20" />
          </Button>
          <Button
            bg="white"
            w={"80px"}
            variant={"solid"}
            color={"black"}
            onClick={() => {
              setPage1((prevPage) => prevPage + 1);
              setView(!view);
            }}
            isDisabled={pageCount === page1}
          >
            <FaAngleRight size="20" />
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default User;
