import { Box, Show, Stack, Text } from "@chakra-ui/react";
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
import { isDate } from "moment";
import { useRouter } from "next/navigation";
function PollCard(el: any) {
  const data = el.el;
  var moment = require("moment");
  const router = useRouter();
  const currentDate = new Date();
  const futureDate = new Date(moment.utc(data.endDate).format("MM-DD-YYYY"));
  const timeDifference = futureDate.getTime() - currentDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  const hoursDifference = Math.floor(
    (timeDifference % (1000 * 3600 * 24)) / (1000 * 3600)
  );
  const minutesDifference = Math.floor(
    (timeDifference % (1000 * 3600)) / (1000 * 60)
  );
  return (
    <Stack
      w="100%"
      bg={"#101010"}
      borderRadius={"6px"}
      border={"1px solid #282828"}
      mt={{ sm: "20px" }}
      cursor={"pointer"}
      onClick={() => {
        router.push(`voting/${data._id}`);
      }}
    >
      <Stack ml={{ base: "10px", sm: "33px" }} mt={"20px"} mb={"20px"}>
        <Stack>
          <Stack
            w={{ base: "93%", md: "93%", lg: "800px" }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* <Stack direction={"row"} alignItems={"center"}>
              <Box w={"32px"} h={"32px"} borderRadius={"50%"} bg={"red"}></Box>
              <Text>
                <span>by</span> Monopoly
              </Text>
              <Text>•</Text>

              <Text>ID 53536475</Text>
              <Text>•</Text>
              <Text>Proposed on: 2023-09-22</Text>
            </Stack> */}
            <Stack
              direction={"row"}
              alignItems={"center"}
              my={"10px"}
              //   ml={{ base: "10px", sm: "28px" }}
              w={"80%"}
              overflow={"none"}
            >
              <Box>
                <Box
                  w={{ base: "24px", sm: "32px" }}
                  h={{ base: "24px", sm: "32px" }}
                  my={"auto"}
                  borderRadius={"50%"}
                  bg={"red"}
                ></Box>
              </Box>
              <Text
                {...satFont.style}
                fontWeight={"700"}
                lineHeight={{ base: "12px", sm: "18px" }}
                // fontSize={{ base: "10px", lg: "12px" }}
                fontSize={{ base: "8px", sm: "12px" }}
              >
                <span style={{ color: "#95999D", fontWeight: "500" }}>by</span>{" "}
                {data.userName}
              </Text>
              <Show above="sm">
                <Text>•</Text>

                <Text
                  {...satFont.style}
                  fontWeight={"500"}
                  lineHeight={{ base: "12px", sm: "18px" }}
                  fontSize={{ base: "8px", sm: "12px" }}
                >
                  ID {data._id}
                </Text>
              </Show>
              <Text>•</Text>
              <Text
                {...satFont.style}
                fontWeight={"500"}
                lineHeight={{ base: "12px", sm: "18px" }}
                fontSize={{ base: "8px", sm: "12px" }}
              >
                Proposed on: {moment.utc(data.startDate).format("MM-DD-YYYY")}
              </Text>
            </Stack>
            <Text
              {...satFont.style}
              fontWeight={"700"}
              lineHeight={"18px"}
              fontSize={{ base: "10px", sm: "12px" }}
              py={{ base: "2px" }}
              px={{ base: "auto", lg: "2px" }}
              bg={
                data.status === "active"
                  ? "#228200"
                  : data.status === "pending"
                  ? "#DFFF24"
                  : data.status === "executed"
                  ? "#4916FF"
                  : "#95120A"
              }
              borderRadius={"4px"}
              w={{ base: "55px", sm: "70px" }}
              //   ml={{ base: "10px", sm: "28px" }}
              textAlign={"center"}
              color={data.status === "pending" ? "black" : "white"}
            >
              {(data.status as string).toUpperCase()}
            </Text>
          </Stack>
          <Text
            {...satFont.style}
            fontWeight={"700"}
            lineHeight={{ base: "27px", lg: "42px" }}
            fontSize={{ base: "20px", lg: "32px" }}
            py={"2px"}
            px={{ base: "auto", lg: "6px" }}
            // ml={{ base: "4px", sm: "20px" }}
            color={"#F2F2F2"}
          >
            {data.description}
          </Text>
        </Stack>
        <div dangerouslySetInnerHTML={{ __html: `${data.content}` }} />
        {/* <Text
          fontWeight={"500"}
          {...satFont.style}
          lineHeight={{ base: "23px", lg: "30px" }}
          fontSize={{ base: "12px", lg: "18px" }}
          w={{ base: "93%", lg: "794px" }}
          dangerouslySetInnerHTML={{ __html: `${data.content}` }}
        >
          There are a total of 4 phases that your proposal will go through from
          its submission: After a proposal is submitted, the moderator will
          review the proposals and provide feedback within 7 calendar days.
        </Text> */}
        {data.status === "active" ? (
          <Stack>
            <Box
              w={{ base: "93%", lg: "798px" }}
              bg={"#1C1C1C"}
              borderRadius={"6px"}
            >
              <Stack
                w={"45%"}
                bg={"#303030"}
                borderRadius={"6px"}
                justifyContent={"center"}
                h={"42px"}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  w={{ base: "210px", lg: "700px" }}
                  mx={"auto"}
                  ml={{ base: "5px", sm: "20px" }}
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
            </Box>
            <Box
              w={{ base: "93%", lg: "798px" }}
              bg={"#1C1C1C"}
              borderRadius={"6px"}
            >
              <Stack
                w={"40%"}
                bg={"#303030"}
                borderRadius={"6px"}
                justifyContent={"center"}
                h={"42px"}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  w={{ base: "210px", lg: "700px" }}
                  mx={"auto"}
                  ml={{ base: "5px", sm: "20px" }}
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
            </Box>
            <Box w={{ base: "93%", lg: "798px" }} bg={"#1C1C1C"}>
              <Stack
                w={"70%"}
                bg={"#303030"}
                borderRadius={"6px"}
                justifyContent={"center"}
                h={"42px"}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  w={{ base: "210px", lg: "700px" }}
                  mx={"auto"}
                  ml={{ base: "5px", sm: "20px" }}
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
            </Box>
          </Stack>
        ) : null}

        <Text
          {...satFont.style}
          color={"#95999D"}
          fontSize="12px"
          lineHeight={"18px"}
          fontWeight="500"
        >
          Ends in {daysDifference < 0 ? 0 : daysDifference} days{" "}
          {hoursDifference < 0 ? 0 : hoursDifference} hours{" "}
          {minutesDifference < 0 ? 0 : minutesDifference} minutes
        </Text>
      </Stack>
    </Stack>
  );
}

export default PollCard;