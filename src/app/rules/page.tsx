import Getting from "@/Components/Getting";
import GettingStarted from "@/Components/GettingStarted";
import { Box, Show, Stack, Text } from "@chakra-ui/react";

export default function Rules() {
  return (
    <Box
    // direction={"row"}
    // justifyContent="space-between"
    // alignItems={"center"}
    >
      {/* <Text fontSize={"36px"}>Coming soon...</Text> */}
      <Getting />
      <Box ml={{ lg: "312px" }}>
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          // alignItems={"flex-start"}
          mx={"auto"}
          mt={"-180px"}
          // h={"2684px"}
          h={{ lg: "3399px" }}
          // h={{ base: "2733px", sm: "2884px", lg: "2684px" }}
          // base: "2633px", sm: "2833px",
          w={{ xl: "1010px" }}
        >
          <Box h={{ base: "160px", lg: "251px" }} id="started1"></Box>
          <Stack
            direction={"row"}
            justifyContent="space-evenly"
            alignItems={"flex-start"}
            mx={"auto"}
            w={{ base: "", xl: "1010px" }}
          >
            <Show above="lg">
              <Box w={"1px"} h={"3170px"} bg={"white"} mr={"20px"} mt={"10px"}>
                <Stack
                  w={"21px"}
                  h={"21px"}
                  bg={"black"}
                  borderRadius={"100%"}
                  // justifyContent={"center"}
                  // alignItems={"center"}
                  ml={"-11px"}
                  boxShadow={"0px 0px 5px 1px   white"}
                >
                  <Box
                    w={"10px"}
                    h={"10px"}
                    bg={"white"}
                    borderRadius={"100%"}
                    my={"auto"}
                    mx={"auto"}
                    boxShadow={"0px 0px 5px 1px   white"}
                  ></Box>
                </Stack>

                <Stack
                  w={"21px"}
                  h={"21px"}
                  bg={"black"}
                  borderRadius={"100%"}
                  // justifyContent={"center"}
                  // alignItems={"center"}
                  ml={"-10px"}
                  boxShadow={"0px 0px 5px 1px   white"}
                  mt={"780px"}
                >
                  <Box
                    w={"10px"}
                    h={"10px"}
                    bg={"white"}
                    borderRadius={"100%"}
                    my={"auto"}
                    mx={"auto"}
                    boxShadow={"0px 0px 5px 1px   white"}
                  ></Box>
                </Stack>

                <Stack
                  w={"21px"}
                  h={"21px"}
                  bg={"black"}
                  borderRadius={"100%"}
                  // justifyContent={"center"}
                  // alignItems={"center"}
                  ml={"-10px"}
                  boxShadow={"0px 0px 5px 1px   white"}
                  mt={"1175px"}
                >
                  <Box
                    w={"10px"}
                    h={"10px"}
                    bg={"white"}
                    borderRadius={"100%"}
                    my={"auto"}
                    mx={"auto"}
                    boxShadow={"0px 0px 5px 1px   white"}
                  ></Box>
                </Stack>
              </Box>
            </Show>
            <Stack
              // w={{ lg: "897px" }}
              maxW={"897px"}
              h={{ lg: "3199px" }}
              alignItems={"flex-end"}
              justifyContent={"flex-end"}
            >
              <Box
                w={{ xl: "897px" }}
                h={{ lg: "3199px" }}
                // mx={"auto"}
                // ml={{ base: "10px", xl: "" }}

                // alignSelf={"flex-end"}
              >
                <GettingStarted />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
