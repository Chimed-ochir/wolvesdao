import PollCard from "@/Components/pollCard";
import { Box, Stack, Text, Show } from "@chakra-ui/react";
import localFont from "next/font/local";
const satFont = localFont({
  src: "../../Components/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});

export default function Voting() {
  const array = [
    {
      label: " All proposals",
      onclick: () => {
        console.log("text");
      },
    },
    {
      label: " Active",
      onclick: () => {
        console.log("text");
      },
    },
    {
      label: "Pending",
      onclick: () => {
        console.log("text");
      },
    },
    {
      label: "Executed",
      onclick: () => {
        console.log("text");
      },
    },
    {
      label: " All tags",
      onclick: () => {
        console.log("text");
      },
    },
  ];

  return (
    <Stack
      // justifyContent={"center"}
      // alignItems={"center"}
      bg={"blue"}
      w={{ lg: "865px" }}
      mx={"auto"}
    >
      <Stack
        alignSelf={"left"}
        h={"114px"}
        justifyContent={"space-between"}
        bg={"black"}
      >
        <Show above="md">
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
            w={{ lg: "706px" }}
            h={"42px"}
            bg={"red"}
            direction={{ base: "row" }}
            justifyContent={"space-between"}
          >
            {array.map((el, id) => (
              <Text
                {...satFont.style}
                fontWeight={"700"}
                fontSize={"24px"}
                lineHeight={"32px"}
                // onClick={el.onclick}
                borderBottom={"1px solid white"}
                key={id}
                px={"10px"}
              >
                {el.label}
              </Text>
            ))}
          </Stack>
        </Show>
      </Stack>
      <Stack>
        <PollCard />
      </Stack>
    </Stack>
  );
}
