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
// import { useParams, usePathname, useRouter } from "next/navigation";
import Loading from "../loading";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import SkeletonCard from "@/Components/skeletonCard";
// import { useAuth } from "@/Components/Account";
const satFont = localFont({
  src: "../../Components/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
// function useScrollPosition() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   function handleScroll() {
//     const height =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;

//     const windowScroll = document.documentElement.scrollTop;

//     const scrolled = (windowScroll / height) * 100;

//     setScrollPosition(scrolled);
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   });

//   return scrollPosition;
// }
export default function Voting() {
  // const [status, setStatus] = useState<string>("");
  // const { loadi } = useAuth();
  const [polls, setPolls] = useState<any[]>([]);
  const [tags, setTags] = useState("all_propsal");
  const [page1, setPage1] = useState(2);
  const [prop, setProp] = useState("Бүх санал");
  //   const pathname = usePathname();

  //   const router = useRouter();
  const array = [
    {
      label: "Бүх санал",
      query: "all_propsal",
      onclick: () => {
        setTags("all_propsal");
      },
    },
    {
      label: "Waiting",
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
        console.log("898989", tags);
      },
    },
    {
      label: "Дэмжигдсэн",
      query: "pending",
      onclick: () => {
        setTags("pending");
        console.log("898989", tags);
      },
    },
    {
      label: "Хэрэгжсэн",
      query: "executed",
      onclick: () => {
        setTags("executed");
        console.log("898989", tags);
      },
    },
    {
      label: "Татгалзсан",
      query: "rejected",
      onclick: () => {
        setTags("rejected");
        console.log("898989", tags);
      },
    },
  ];

  const { data, loading, fetchData, pageCount } = useQuery<{ data: any[] }>({
    uri: `/poll`,
    manual: true,
    params: {
      // status: tags,
      page: 1,
      limit: 5,
    },
  });

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && !loading) {
      // something happens after it reaches 80% of the screen
      console.log("page1", page1);
      fetchData(`/poll`, {
        ...(tags === "all_propsal" ? {} : { status: tags }),
        page: page1,
      }).then((res) => {
        setPolls([...polls, ...res]);
      });
      setPage1((prevPage) => prevPage + 1);

      console.log("pageCount", pageCount);
    }
  }, [inView]);

  useEffect(() => {
    if (!loading) {
      setPage1(2);
      setPolls([]);
      fetchData(`/poll`, {
        ...(tags === "all_propsal" ? {} : { status: tags }),
      }).then(setPolls);
    }
  }, [tags]);

  return (
    <Stack
      // justifyContent={"center"}
      // alignItems={"center"}

      w={{ base: "93%", lg: "865px" }}
      mx={"auto"}
    >
      {" "}
      <Show above="md">
        <Stack alignSelf={"left"} h={"114px"} justifyContent={"space-between"}>
          <Box w={{ lg: "790px" }}>
            <Text
              {...satFont.style}
              fontWeight={"900"}
              fontSize={"24px"}
              lineHeight={"32px"}
              color={"white"}
            >
              Санал хураалт
            </Text>
          </Box>{" "}
          <Stack
            w={{ sm: "100%" }}
            h={"42px"}
            direction={{ base: "row" }}
            justifyContent={"space-between"}
            borderBottom={"1px solid #282828"}
          >
            {array.map((el, id) => (
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
                    // onClick={el.onclick}

                    px={{ md: "10px" }}
                    color={"#FCFCFC"}
                    onClick={el.onclick}
                    cursor={"pointer"}
                  >
                    {el.label}
                  </Text>
                </Box>
              </Link>
            ))}
          </Stack>
        </Stack>
      </Show>
      <Show below="md">
        <Stack alignSelf={"start"}>
          <Menu>
            <MenuButton
              as={Button}
              border={"1px solid white"}
              bg="#010101"
              rightIcon={<MdOutlineExpandMore />}
              color={"white"}
              _hover={{ bg: "#303030" }}
            >
              {prop}
            </MenuButton>
            <MenuList bg={"#101010"}>
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
              <MenuItem
                bg={"#101010"}
                onClick={() => {
                  setTags("waiting");
                  setProp("Waiting");
                }}
                color={"white"}
                _hover={{ bg: "#303030" }}
              >
                Waiting
              </MenuItem>
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
            </MenuList>
          </Menu>
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
              // ml={{ sm: "250px" }}
            >
              Илэрц олдсонгүй
            </Text>
          </Stack>
        )}
        {polls?.map((el: any, id: number) => (
          <PollCard key={id} el={el} />
        ))}
        {/* {loading && ( */}
        {pageCount >= page1 || loading ? (
          <Stack w="100%" ref={ref}>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </Stack>
        ) : null}
        {/* )}  */}
      </Stack>
    </Stack>
  );
}
