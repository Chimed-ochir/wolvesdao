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
      h={{ lg: "1310px" }}
      // mx={{ base: "auto", lg: "0", xl: "0", "2xl": "0" }}
      marginY={"-162px"}
      w={"100%"}
    >
      <Flex h={{ lg: "1310px" }} w={"100vw"} zIndex={"100"}>
        <Box
          mx={"auto"}
          // w={"100%"}
          marginTop={"-162.5px"}
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
              w={{ base: "922px", sm: "1605px" }}
              h={{ base: "922px", sm: "1605px" }}
              marginX={{
                base: "-300px",
                sm: "-600px",
                md: "-600px",
                lg: "-400px",
                xl: "-200px",
                "2xl": "-82.5",
              }}
              marginBottom={{
                base: "-200px",
                sm: "-400px",
                lg: "",
              }}
              display={"fixed"}
              border={"1px solid black"}
            >
              <Box
                // bg="black"
                borderRadius={"100%"}
                w={{ base: "688.66px", sm: "1183px" }}
                h={{ base: "688.66px", sm: "1183px" }}
                display={"fixed"}
                margin={"auto"}
                border={"1px solid black"}
                bgGradient={
                  " linear-gradient(270deg, rgba(255, 23, 16, 0.2) 0%, rgba(255, 23, 16, 0) 42.87%, rgba(255, 23, 16, 0) 56.33%, rgba(255, 23, 16, 0.05) 87.83%);"
                }
              >
                <Box
                  borderRadius={"100%"}
                  w={{ base: "455.55px", sm: "782px" }}
                  h={{ base: "455.55px", sm: "782px" }}
                  display={"fixed"}
                  margin={"auto"}
                  border={"1px solid black"}
                  bgGradient={
                    " linear-gradient(270deg, rgba(255, 23, 16, 0.2) 0%, rgba(255, 23, 16, 0) 42.87%, rgba(255, 23, 16, 0) 56.33%, rgba(255, 23, 16, 0.05) 87.83%);"
                  }
                ></Box>
              </Box>
            </Box>
          </div>
          <Box
            borderRadius={"100%"}
            w={{ base: "198.21px", sm: "385px" }}
            h={{ base: "198.21px", sm: "385px" }}
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
            top={{ base: "-360px", sm: "-600px" }}
          >
            <Box w={"220px"} h={"220px"} position={"absolute"}>
              <Image src={wolf} alt="Wolves.dao"></Image>
            </Box>
            <Box
              position={"absolute"}
              alignItems={"center"}
              h={{ base: "34.78px", sm: "68px" }}
              w={{ base: "181.25px", sm: "352px" }}
              gap={"5px"}
            >
              <Text
                {...mFont.style}
                fontSize={{ base: "10.4px", sm: "20.19px" }}
                color={"#DFFF24"}
              >
                THE
              </Text>

              <Text
                {...mFont.style}
                lineHeight={{ base: "22.79px", sm: "45px" }}
                fontSize={{ base: "23.99px", sm: "46.6px" }}
                color={"white"}
              >
                WOLVES<span style={{ color: "#DFFF24" }}>.</span>DAO
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
