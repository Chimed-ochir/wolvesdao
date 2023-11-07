import Image from "next/image";
import styles from "./page.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "../../public/assets/svgs/logo.svg";
import wolf from "../../public/assets/images/youngWolf.png";
import localFont from "next/font/local";
const mFont = localFont({
  src: "../Components/fonts/revolution/revolution-bold.otf",
});
export default function Home() {
  return (
    <Box
      h={"1310px"}
      // mx={{ base: "auto", lg: "0", xl: "0", "2xl": "0" }}
      marginY={"-162px"}
      w={"100%"}
    >
      <Flex h={"1310px"} w={"100vw"} zIndex={"100"}>
        <Box
          mx={"auto"}
          // w={"100%"}
          marginTop={"-162.5px"}
          top={"0px"}
          // bgGradient={
          //   " linear-gradient(270deg, rgba(255, 23, 16, 0.2) 0%, rgba(255, 23, 16, 0) 42.87%, rgba(255, 23, 16, 0) 56.33%, rgba(255, 23, 16, 0.05) 87.83%);"
          // }
        >
          <div className={styles.circle}>
            <Box
              bgGradient={
                " linear-gradient(270deg, rgba(255, 23, 16, 0.2) 0%, rgba(255, 23, 16, 0) 42.87%, rgba(255, 23, 16, 0) 56.33%, rgba(255, 23, 16, 0.05) 87.83%);"
              }
              borderRadius={"100%"}
              w={"1605px"}
              h={"1605px"}
              marginX={"-82.5"}
              display={"fixed"}
              border={"3px solid black"}
            >
              <Box
                // bg="black"
                borderRadius={"100%"}
                w={"1183px"}
                h={"1183px"}
                display={"fixed"}
                margin={"auto"}
                border={"3px solid black"}
                bgGradient={
                  " linear-gradient(270deg, rgba(255, 23, 16, 0.2) 0%, rgba(255, 23, 16, 0) 42.87%, rgba(255, 23, 16, 0) 56.33%, rgba(255, 23, 16, 0.05) 87.83%);"
                }
              >
                <Box
                  borderRadius={"100%"}
                  w={"782px"}
                  h={"782px"}
                  display={"fixed"}
                  margin={"auto"}
                  border={"1px solid black"}
                  bgGradient={
                    " linear-gradient(270deg, rgba(255, 23, 16, 0.2) 0%, rgba(255, 23, 16, 0) 42.87%, rgba(255, 23, 16, 0) 56.33%, rgba(255, 23, 16, 0.05) 87.83%);"
                  }
                >
                  {/* <Box
                    borderRadius={"100%"}
                    w={"385px"}
                    h={"385px"}
                    display={"flex"}
                    margin={"auto"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    animation={"none"}
                    bgGradient={
                      " linear-gradient(270deg, rgba(255, 23, 16, 0.2) 0%, rgba(255, 23, 16, 0) 22.87%, rgba(255, 23, 16, 0) 66.33%, rgba(255, 23, 16, 0.05) 87.83%);"
                    }
                  >
                    {/* <Box w={"220px"} h={"220px"} position={"absolute"}>
                      <Image src={wolf} alt="Wolves.dao"></Image>
                    </Box>
                    <Box
                      position={"absolute"}
                      alignItems={"center"}
                      h={"68px"}
                      w={"352px"}
                      gap={"5px"}
                    >
                      <Text
                        {...mFont.style}
                        fontSize={"20.19px"}
                        color={"#DFFF24"}
                      >
                        THE
                      </Text>

                      <Text
                        {...mFont.style}
                        lineHeight={"45px"}
                        fontSize={"46.6px"}
                      >
                        WOLVES<span style={{ color: "#DFFF24" }}>.</span>DAO
                      </Text>
                    </Box> */}
                  {/* </Box> */}
                </Box>
              </Box>
            </Box>
          </div>
          <Box
            borderRadius={"100%"}
            w={"385px"}
            h={"385px"}
            display={"flex"}
            margin={"auto"}
            justifyContent={"center"}
            alignItems={"center"}
            animation={"none"}
            // bgGradient={
            //   " linear-gradient(270deg, rgba(255, 23, 16, 0.2) 0%, rgba(255, 23, 16, 0) 22.87%, rgba(255, 23, 16, 0) 66.33%, rgba(255, 23, 16, 0.05) 87.83%);"
            // }
            bg={"black"}
            position={"relative"}
            top={"-1000px"}
          >
            <Box w={"220px"} h={"220px"} position={"absolute"}>
              <Image src={wolf} alt="Wolves.dao"></Image>
            </Box>
            <Box
              position={"absolute"}
              alignItems={"center"}
              h={"68px"}
              w={"352px"}
              gap={"5px"}
            >
              <Text {...mFont.style} fontSize={"20.19px"} color={"#DFFF24"}>
                THE
              </Text>

              <Text {...mFont.style} lineHeight={"45px"} fontSize={"46.6px"}>
                WOLVES<span style={{ color: "#DFFF24" }}>.</span>DAO
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
