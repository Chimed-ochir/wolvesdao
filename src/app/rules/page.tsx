import Getting from "@/Components/Getting";
import GettingStarted from "@/Components/GettingStarted";
import { Box, Show, Stack, Text } from "@chakra-ui/react";

export default function Rules() {
  return (
    <Box>
      <Getting />
      <Box ml={{ lg: "312px" }}>
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          mx={"auto"}
          mt={"-180px"}
          h={{ lg: "3399px" }}
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
              <Box w={"1px"} h={"3170px"} bg={"white"} mr={"20px"} mt={"15px"}>
                <Stack
                  w={"21px"}
                  h={"21px"}
                  bg={"black"}
                  borderRadius={"100%"}
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
                  ml={"-10px"}
                  boxShadow={"0px 0px 5px 1px   white"}
                  mt={"806px"}
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
                  ml={"-10px"}
                  boxShadow={"0px 0px 5px 1px   white"}
                  mt={"1155px"}
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
              maxW={"897px"}
              h={{ lg: "3199px" }}
              alignItems={"flex-end"}
              justifyContent={"flex-end"}
            >
              <Box w={{ xl: "897px" }} h={{ lg: "3199px" }}>
                <GettingStarted />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
