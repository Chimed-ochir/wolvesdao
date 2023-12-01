"use client";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
function Getting() {
  const [idx, setIdx] = useState(0);
  const [side, setSide] = useState(false);
  const [fragmentIdentifier, setFragmentIdentifier] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    // Function to handle changes in the URL hash

    const handleHashChange = () => {
      const fragment = window.location.hash;
      const newFragmentIdentifier = fragment.substring(1);
      // Update the state with the new fragment identifier
      setFragmentIdentifier(newFragmentIdentifier);
    };

    // Add an event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Initial call to set the fragment on the first render
    handleHashChange();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  const host = () => {
    if (pathname === "/rules") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        let newIdx = 0;

        if (scrollY >= 2809) {
          newIdx = 1;
        } else if (scrollY >= 2394) {
          newIdx = 2;
        } else if (scrollY >= 2227) {
          newIdx = 3;
        } else if (scrollY >= 2025) {
          newIdx = 4;
        } else if (scrollY >= 1817) {
          newIdx = 5;
        } else if (scrollY >= 1629) {
          newIdx = 6;
        } else if (scrollY >= 1415) {
          newIdx = 7;
        } else if (scrollY >= 1214) {
          newIdx = 8;
        } else if (scrollY >= 1031) {
          newIdx = 9;
        } else if (scrollY >= 793) {
          newIdx = 10;
        } else if (scrollY >= 524) {
          newIdx = 11;
        } else if (scrollY >= 246) {
          newIdx = 12;
        } else {
          newIdx = 13;
        }
        if (scrollY >= 2672) {
          setSide(true);
        } else {
          setSide(false);
        }
        if (newIdx !== idx) {
          setIdx(newIdx);
        }
      };

      // Attach the event listener
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  };
  useEffect(() => {
    host();
  }, [idx]);
  console.log("idx", idx);
  return (
    <Box
      className={`hideMobile `}
      h={"678px"}
      w={"312px"}
      zIndex={100}
      // position="sticky"
      position="fixed"
      left={{ base: "0", "2xl": "10%" }}
      // top={side ? "0px" : "108px"}
      top={"130px"}
      // bottom="50px"
      // hidden={{ base: true, lg: false }}
    >
      {/* <Stack> */}
      <Stack
        h={pathname === "/rules" ? "678px" : "32px"}
        justifyContent={"flex-start"}
      >
        <Flex h={"32px"} alignItems={"center"}>
          <Link href="/rules">
            <Box h={"18px"} ml={"28px"}>
              <Text
                fontFamily={"Golos Text"}
                fontWeight={"700"}
                fontSize={"16px"}
                lineHeight={"18px"}
                color={idx >= 11 ? "#FBFBFB" : "#949494"}
              >
                THE WOLVES DAO
              </Text>
            </Box>
          </Link>
        </Flex>
        <Flex
          h={"122px"}
          direction={"column"}
          pl={"12px"}
          mt={"-5px"}
          hidden={pathname === "/rules" ? false : true}
          alignItems={"flex-end"}
        >
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 13 ? "#FBFBFB" : "#949494"}
              // ml={"-4px"}
            ></Box>

            <Link href="#started1">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx === 13 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Зорилго
                  </Text>
                </Box>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={"5px"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 12 ? "#FBFBFB" : "#949494"}
            ></Box>
            <Link href="#started12">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 12 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Хүлээн авах саналын төрлүүд
                  </Text>
                </Box>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={"5px"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 11 ? "#FBFBFB" : "#949494"}
            ></Box>
            <Link href="#started13">
              <Box h={"18px"} w={"250px"}>
                <Text
                  fontFamily={"Golos Text"}
                  color={idx == 11 ? "#FBFBFB" : "#949494"}
                  fontSize={"15px"}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                >
                  Саналын загвар
                </Text>
              </Box>
            </Link>
          </Flex>
        </Flex>
        <Flex h={"32px"} alignItems={"center"}>
          <Link href="#started2">
            <Box h={"18px"} ml={"28px"}>
              <Text
                fontFamily={"Golos Text"}
                fontWeight={"700"}
                fontSize={"16px"}
                lineHeight={"18px"}
                color={idx >= 5 && idx < 11 ? "#FBFBFB" : "#949494"}
              >
                САНАЛЫН ПРОЦЕСС
              </Text>
            </Box>
          </Link>
        </Flex>
        <Flex
          h={"248px"}
          direction={"column"}
          pl={"12px"}
          mt={"-5px"}
          hidden={pathname === "/rules" ? false : true}
          alignItems={"flex-end"}
        >
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 10 ? "#FBFBFB" : "#949494"}
              // ml={"-4px"}
            ></Box>

            <Link href="#started2">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx === 10 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Санал гаргах
                  </Text>
                </Box>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={"5px"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 9 ? "#FBFBFB" : "#949494"}
            ></Box>
            <Link href="#started22">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 9 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Санал шалгах
                  </Text>
                </Box>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={"5px"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 8 ? "#FBFBFB" : "#949494"}
            ></Box>
            <Link href="#started23">
              <Box h={"18px"} w={"250px"}>
                <Text
                  fontFamily={"Golos Text"}
                  color={idx == 8 ? "#FBFBFB" : "#949494"}
                  fontSize={"15px"}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                >
                  Санал хянах
                </Text>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={"5px"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 7 ? "#FBFBFB" : "#949494"}
              // ml={"-4px"}
            ></Box>

            <Link href="#started24">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx === 7 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Хэлэлцүүлэг хийх
                  </Text>
                </Box>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={"5px"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 6 ? "#FBFBFB" : "#949494"}
            ></Box>
            <Link href="#started25">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 6 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Санал хураах
                  </Text>
                </Box>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={"5px"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 5 ? "#FBFBFB" : "#949494"}
            ></Box>
            <Link href="#started26">
              <Box h={"18px"} w={"250px"}>
                <Text
                  fontFamily={"Golos Text"}
                  color={idx == 5 ? "#FBFBFB" : "#949494"}
                  fontSize={"15px"}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                >
                  Саналын хэрэгжилт
                </Text>
              </Box>
            </Link>
          </Flex>
        </Flex>
        <Flex h={"32px"} alignItems={"center"}>
          <Link href="#started3">
            <Box h={"18px"} ml={"28px"}>
              <Text
                fontFamily={"Golos Text"}
                fontWeight={"700"}
                fontSize={"16px"}
                lineHeight={"18px"}
                color={idx <= 4 && idx >= 1 ? "#FBFBFB" : "#949494"}
              >
                THE WOLVES DAO GOVERNANCE
              </Text>
            </Box>
          </Link>
        </Flex>
        <Flex
          h={"164px"}
          direction={"column"}
          pl={"12px"}
          mt={"-5px"}
          hidden={pathname === "/rules" ? false : true}
          alignItems={"flex-end"}
        >
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 4 ? "#FBFBFB" : "#949494"}
              // ml={"-4px"}
            ></Box>

            <Link href="#started3">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx === 4 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    The Wolves NFT эзэмшигчид
                  </Text>
                </Box>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={"5px"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 3 ? "#FBFBFB" : "#949494"}
            ></Box>
            <Link href="#started32">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 3 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Комюнити менежер
                  </Text>
                </Box>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={"5px"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 2 ? "#FBFBFB" : "#949494"}
            ></Box>
            <Link href="#started33">
              <Box h={"18px"} w={"250px"}>
                <Text
                  fontFamily={"Golos Text"}
                  color={idx == 2 ? "#FBFBFB" : "#949494"}
                  fontSize={"15px"}
                  fontWeight={"700"}
                  lineHeight={"18px"}
                >
                  Хяналтын зөвлөл
                </Text>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"32px"}
            w={"280px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={"5px"}
          >
            <Box
              h={"32px"}
              w={"2px"}
              bg={idx == 1 ? "#FBFBFB" : "#949494"}
              // ml={"-4px"}
            ></Box>

            <Link href="#started34">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx === 1 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Саналын эрхтэй гишүүд
                  </Text>
                </Box>
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Stack>
      {/* </Stack> */}
    </Box>
  );
}

export default Getting;
