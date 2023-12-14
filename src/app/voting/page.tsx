"use client";
import PollCard from "@/Components/pollCard";
import { useQuery } from "@/utils";
import {
  Box,
  Stack,
  Text,
  Show,
  Skeleton,
  SkeletonCircle,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import SkeletonCard from "@/Components/skeletonCard";
import { NewModal } from "@/Components/Account/NewModal";
import { useAuth } from "@/Components/Account";
import VoteSkeleton from "./VoteSkeleton";
import { usePathname, useRouter } from "next/navigation";
const satFont = localFont({
  src: "../../Components/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});

export default function Voting() {
  const [polls, setPolls] = useState<any[]>([]);
  const [tags, setTags] = useState("all_propsal");
  const [page1, setPage1] = useState(1);
  const [prop, setProp] = useState("Бүх санал");
  const { admin, loading: authloading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const array = [
    {
      label: "Бүх санал",
      query: "all_propsal",
      onclick: () => {
        setTags("all_propsal");
      },
    },
    {
      label: "Хүлээгдэж байна",
      query: "waiting",
      onclick: () => {
        setTags("waiting");
      },
    },

    {
      label: "Идэвхтэй",
      query: "active",
      onclick: () => {
        setTags("active");
      },
    },
    {
      label: "Дэмжигдсэн",
      query: "pending",
      onclick: () => {
        setTags("pending");
      },
    },
    {
      label: "Хэрэгжсэн",
      query: "executed",
      onclick: () => {
        setTags("executed");
      },
    },
    {
      label: "Татгалзсан",
      query: "rejected",
      onclick: () => {
        setTags("rejected");
      },
    },
  ];

  const { loading, fetchData, data, pageCount } = useQuery<{ data: any[] }>({
    uri: `/poll`,
    manual: true,
  });
  const onFinish = () => {
    fetchData();
  };
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && !loading) {
      fetchData(`/poll`, {
        page: page1 + 1,
        limit: 5,
        sort: "status",
        ...(admin && tags === "all_propsal"
          ? {}
          : {
              status:
                tags === "all_propsal" && !admin ? { $ne: "waiting" } : tags,
            }),
      }).then((res) => {
        setPolls([...polls, ...res]);
      });
      setPage1((prevPage) => prevPage + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (!loading && !authloading) {
      setPolls([]);
      setPage1(1);
      fetchData(`/poll`, {
        page: 1,
        limit: 5,
        sort: "status",
        ...(admin && tags === "all_propsal"
          ? {}
          : {
              status:
                tags === "all_propsal" && !admin ? { $ne: "waiting" } : tags,
            }),
      }).then(setPolls);
    }
  }, [tags, authloading]);

  return (!loading && !data) || !polls ? (
    <VoteSkeleton />
  ) : (
    <Stack w={{ base: "93%", lg: "865px" }} mx={"auto"}>
      {" "}
      <Show above="md">
        <Stack alignSelf={"left"} h={"114px"} justifyContent={"space-between"}>
          <Stack w={{ lg: "790px" }} direction="row">
            <Text
              {...satFont.style}
              fontWeight={"900"}
              fontSize={"24px"}
              lineHeight={"32px"}
              color={"white"}
              minW={"190px"}
            >
              Санал хураалт
            </Text>
            {admin ? (
              <NewModal onFinish={onFinish}>
                <Button
                  bg="white"
                  w={"120px"}
                  variant={"solid"}
                  color={"black"}
                >
                  Санал нэмэх
                </Button>
              </NewModal>
            ) : null}
          </Stack>{" "}
          <Stack
            w={{ sm: "100%" }}
            h={"42px"}
            direction={{ base: "row" }}
            justifyContent={"space-between"}
            borderBottom={"1px solid #282828"}
          >
            {array.map((el, id) => {
              const isAdmin = el.label === "Хүлээгдэж байна" && admin;
              const isNotWaiting = el.label !== "Хүлээгдэж байна";

              if (isNotWaiting || isAdmin) {
                return (
                  <Link
                    key={id}
                    href={{
                      pathname: "/voting",
                      query: { status: el.query },
                    }}
                  >
                    <Box
                      mb={"-5px"}
                      h="42px"
                      borderBottom={el.query === tags ? "1px solid white" : ""}
                    >
                      <Text
                        {...satFont.style}
                        fontWeight={"700"}
                        fontSize={"15px"}
                        lineHeight={"24px"}
                        px={{ md: "10px" }}
                        color={"#FCFCFC"}
                        cursor={"pointer"}
                        onClick={el.onclick}
                      >
                        {el.label}
                      </Text>
                    </Box>
                  </Link>
                );
              }

              return null;
            })}
          </Stack>
        </Stack>
      </Show>
      <Show below="md">
        <Stack alignSelf={"start"} direction={"row"}>
          <Menu>
            <MenuButton
              as={Button}
              border={"1px solid white"}
              bg="#010101"
              rightIcon={<MdOutlineExpandMore />}
              color={"white"}
              _hover={{ bg: "#303030" }}
              minW={"150px"}
            >
              {prop}
            </MenuButton>
            <MenuList bg={"#101010"}>
              <Link
                href={{
                  pathname: "/voting",
                  query: { status: "all_propsal" },
                }}
              >
                <MenuItem
                  bg={"#101010"}
                  onClick={() => {
                    setTags("all_propsal");
                    setProp("Бүх санал");
                  }}
                  color={"white"}
                  _hover={{ bg: "#303030" }}
                >
                  Бүх санал
                </MenuItem>
              </Link>
              {admin ?? (
                <Link
                  href={{
                    pathname: "/voting",
                    query: { status: "waiting" },
                  }}
                >
                  <MenuItem
                    bg={"#101010"}
                    onClick={() => {
                      setTags("waiting");
                      setProp("Waiting");
                    }}
                    color={"white"}
                    _hover={{ bg: "#303030" }}
                  >
                    Хүлээгдэж байна
                  </MenuItem>
                </Link>
              )}
              <Link
                href={{
                  pathname: "/voting",
                  query: { status: "active" },
                }}
              >
                <MenuItem
                  bg={"#101010"}
                  onClick={() => {
                    setTags("active");
                    setProp("Идэвхтэй");
                  }}
                  color={"white"}
                  _hover={{ bg: "#303030" }}
                >
                  Идэвхтэй
                </MenuItem>
              </Link>
              <Link
                href={{
                  pathname: "/voting",
                  query: { status: "pending" },
                }}
              >
                <MenuItem
                  bg={"#101010"}
                  onClick={() => {
                    setTags("pending");
                    setProp("Дэмжигдсэн");
                  }}
                  color={"white"}
                  _hover={{ bg: "#303030" }}
                >
                  Дэмжигдсэн
                </MenuItem>
              </Link>
              <Link
                href={{
                  pathname: "/voting",
                  query: { status: "executed" },
                }}
              >
                <MenuItem
                  bg={"#101010"}
                  onClick={() => {
                    setTags("executed");
                    setProp("Хэрэгжсэн");
                  }}
                  color={"white"}
                  _hover={{ bg: "#303030" }}
                >
                  Хэрэгжсэн
                </MenuItem>
              </Link>
              <Link
                href={{
                  pathname: "/voting",
                  query: { status: "rejected" },
                }}
              >
                <MenuItem
                  bg={"#101010"}
                  onClick={() => {
                    setTags("rejected");
                    setProp("Татгалзсан");
                  }}
                  _hover={{ bg: "#303030" }}
                  color={"white"}
                >
                  Татгалзсан
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
          {admin ? (
            <NewModal onFinish={onFinish}>
              <Button bg="white" w={"120px"} variant={"solid"} color={"black"}>
                Санал нэмэх
              </Button>
            </NewModal>
          ) : null}
        </Stack>
      </Show>
      <Stack alignItems={"center"}>
        {!loading && polls?.length === 0 && (
          <Stack
            mt="30px"
            w={{ sm: "100%" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              {...satFont.style}
              fontWeight={"500"}
              fontSize={"24px"}
              lineHeight={"32px"}
              color={"white"}
            >
              Илэрц олдсонгүй
            </Text>
          </Stack>
        )}
        {polls?.map((el: any, id: number) => (
          <PollCard key={id} el={el} />
        ))}
        {pageCount > page1 || loading ? (
          <Stack w="100%" ref={ref}>
            <SkeletonCard />
            <SkeletonCard />
          </Stack>
        ) : null}
      </Stack>
    </Stack>
  );
}
