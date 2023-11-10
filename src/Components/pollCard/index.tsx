import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import localFont from "next/font/local";
const satFont = localFont({
  src: "../../Components/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
import {
  BsCheckSquareFill,
  BsFillXSquareFill,
  BsDashSquareFill,
} from "react-icons/bs";

function PollCard() {
  return (
    <Stack
      w="100%"
      bg={"#101010"}
      borderRadius={"6px"}
      border={"1px solid #282828"}
    >
      <Stack ml={"33px"} mt={"20px"}>
        <Stack>
          <Stack
            w={{ lg: "800px" }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Box w={"32px"} h={"32px"} borderRadius={"50%"} bg={"red"}></Box>
              <Text>
                <span>by</span> Monopoly
              </Text>
              <Text>•</Text>

              <Text>ID 53536475</Text>
              <Text>•</Text>
              <Text>Proposed on: 2023-09-22</Text>
            </Stack>
            <Text
              {...satFont.style}
              fontWeight={"700"}
              lineHeight={"18px"}
              fontSize={"12px"}
              py={"2px"}
              px={"6px"}
              bg={"#228200"}
              borderRadius={"4px"}
            >
              ACTIVE
            </Text>
          </Stack>
          <Text
            {...satFont.style}
            fontWeight={"700"}
            lineHeight={"42px"}
            fontSize={"32px"}
            w={{ lg: "794px" }}
          >
            Building Future of NFTs:
          </Text>
        </Stack>
        <Text
          fontWeight={"500"}
          {...satFont.style}
          lineHeight={"30px"}
          fontSize={"18px"}
          w={{ lg: "794px" }}
        >
          There are a total of 4 phases that your proposal will go through from
          its submission: After a proposal is submitted, the moderator will
          review the proposals and provide feedback within 7 calendar days.
        </Text>
        <Stack>
          <Stack
            w={"798px"}
            bg={"#1C1C1C"}
            height={"42px"}
            borderRadius={"6px"}
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              w={"700px"}
              mx={"auto"}
            >
              <Stack direction={"row"}>
                {" "}
                <Box bg="white" w="18px" h="18px" borderRadius={"4px"}>
                  <BsCheckSquareFill color="#228200" size="18px" />
                </Box>
                <Text>Yes: </Text>
                <Text>1123 Wolves</Text>
              </Stack>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"15px"}
              >
                98.75%
              </Text>
            </Stack>
          </Stack>
          <Stack
            w={"798px"}
            bg={"#1C1C1C"}
            height={"42px"}
            borderRadius={"6px"}
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              w={"700px"}
              mx={"auto"}
            >
              <Stack direction={"row"}>
                {" "}
                <Box bg="white" w="18px" h="18px" borderRadius={"4px"}>
                  <BsFillXSquareFill color="red" size="18px" />
                </Box>
                <Text>No: </Text>
                <Text>12 Wolves</Text>
              </Stack>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"15px"}
              >
                98.75%
              </Text>
            </Stack>
          </Stack>
          <Stack
            w={"798px"}
            bg={"#1C1C1C"}
            height={"42px"}
            borderRadius={"6px"}
            justifyContent={"center"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              w={"700px"}
              mx={"auto"}
            >
              <Stack direction={"row"}>
                {" "}
                <Box bg="white" w="18px" h="18px" borderRadius={"4px"}>
                  <BsDashSquareFill color="#303030" size="18px" />
                </Box>
                <Text>Abstain: </Text>
                <Text>1</Text>
              </Stack>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={"18px"}
                fontSize={"15px"}
              >
                28.75%
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Text>Ends in 6 days</Text>
      </Stack>
    </Stack>
  );
}

export default PollCard;
