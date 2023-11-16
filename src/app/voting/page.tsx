"use client";
import PollCard from "@/Components/pollCard";
import { useQuery } from "@/utils";
import { Box, Stack, Text, Show } from "@chakra-ui/react";
import axios from "axios";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const satFont = localFont({
  src: "../../Components/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const windowScroll = document.documentElement.scrollTop;

    const scrolled = (windowScroll / height) * 100;

    setScrollPosition(scrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return scrollPosition;
}
export default function Voting() {
  // const [status, setStatus] = useState<string>("");
  const [polls, setPolls] = useState<null | any[]>([]);
  const [tags, setTags] = useState("active");
  const [manu, setManu] = useState("");
  const [page, setPage] = useState(1);
  const pathname = usePathname();
  const array = [
    {
      label: " All proposals",
      onclick: () => {
        setTags("All proposals");
        console.log("898989", tags);
      },
    },
    {
      label: " Active",
      onclick: () => {
        setTags("active");
        console.log("898989", tags);
      },
    },
    {
      label: "Pending",
      onclick: () => {
        setTags("pending");
        console.log("898989", tags);
      },
    },
    {
      label: "Executed",
      onclick: () => {
        setTags("executed");
        console.log("898989", tags);
      },
    },
  ];

  const { data, loading, fetchData } = useQuery<{ data: any }>({
    uri: `/poll`,
    param: {
      // status: tags,
      // page: page,
      // limit: 2,
    },
  });

  //scroll data fetching section
  // const scrollPosition = useScrollPosition();
  // useEffect(() => {
  //   if (scrollPosition > 99.9) {
  //     // something happens after it reaches 80% of the screen
  //     setPage((prevPage) => prevPage + 1);
  //     fetchData();
  //     console.log("--------", page);
  //   }
  // }, [scrollPosition]);
  useEffect(() => {
    console.log("tags", tags);
    fetchData(`/poll?status=${tags}`);
  }, [tags]);
  useEffect(() => {
    setPolls(data);
  }, [data, loading]);

  return (
    <Stack
      // justifyContent={"center"}
      // alignItems={"center"}

      w={{ base: "90%", lg: "865px" }}
      mx={"auto"}
    >
      <Stack alignSelf={"left"} h={"114px"} justifyContent={"space-between"}>
        <Show above="sm">
          <Box w={{ lg: "790px" }}>
            <Text
              {...satFont.style}
              fontWeight={"900"}
              fontSize={"24px"}
              lineHeight={"32px"}
            >
              Voting
            </Text>
          </Box>{" "}
          <Stack
            w={{ sm: "100%", md: "85%", lg: "706px" }}
            h={"42px"}
            direction={{ base: "row" }}
            justifyContent={"space-between"}
          >
            {array.map((el, id) => (
              <Text
                {...satFont.style}
                fontWeight={"700"}
                fontSize={"15px"}
                lineHeight={"24px"}
                // onClick={el.onclick}
                borderBottom={"1px solid white"}
                key={id}
                px={{ md: "10px" }}
                color={"#FCFCFC"}
                onClick={el.onclick}
                cursor={"pointer"}
              >
                {el.label}
              </Text>
            ))}
          </Stack>
        </Show>
      </Stack>
      <Stack>
        <Stack>
          {polls?.length ? (
            polls.map((el: any, id: number) => <PollCard key={id} el={el} />)
          ) : (
            <p>loading</p>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
