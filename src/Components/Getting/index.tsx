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
    const handleHashChange = () => {
      const fragment = window.location.hash;
      const newFragmentIdentifier = fragment.substring(1);
      setFragmentIdentifier(newFragmentIdentifier);
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  const host = () => {
    if (pathname === "/rules") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        let newIdx = 0;

        if (scrollY >= 1785) {
          newIdx = 1;
        } else if (scrollY >= 1711) {
          newIdx = 2;
        } else if (scrollY >= 1467) {
          newIdx = 3;
        } else if (scrollY >= 1283) {
          newIdx = 4;
        } else if (scrollY >= 1240) {
          newIdx = 5;
        } else if (scrollY >= 1108) {
          newIdx = 6;
        } else if (scrollY >= 1000) {
          newIdx = 7;
        } else if (scrollY >= 877) {
          newIdx = 8;
        } else if (scrollY >= 729) {
          newIdx = 9;
        } else if (scrollY >= 602) {
          newIdx = 10;
        } else if (scrollY >= 371) {
          newIdx = 11;
        } else if (scrollY >= 171) {
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

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  };
  useEffect(() => {
    host();
  }, [idx]);
  return (
    <Box
      className={`hideMobile`}
      minH="678px"
      w={"312px"}
      zIndex={100}
      position="fixed"
      left={{ base: "0", "2xl": "8%" }}
      top={"100px"}
    >
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
                color={idx >= 11 ? "#DFFF24" : "#949494"}
              >
                THE WOLVES DAO
              </Text>
            </Box>
          </Link>
        </Flex>
        <Flex
          h={"102px"}
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
              bg={idx == 13 ? "#DFFF24" : "#949494"}
            ></Box>

            <Link href="#started1">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx === 13 ? "#DFFF24" : "#949494"}
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
              bg={idx == 12 ? "#DFFF24" : "#949494"}
            ></Box>
            <Link href="#started12">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 12 ? "#DFFF24" : "#949494"}
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
              bg={idx == 11 ? "#DFFF24" : "#949494"}
            ></Box>
            <Link href="#started13">
              <Box h={"18px"} w={"250px"}>
                <Text
                  fontFamily={"Golos Text"}
                  color={idx == 11 ? "#DFFF24" : "#949494"}
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
                color={idx >= 5 && idx < 11 ? "#DFFF24" : "#949494"}
              >
                САНАЛЫН ПРОЦЕСС
              </Text>
            </Box>
          </Link>
        </Flex>
        <Flex
          h={"208px"}
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
              bg={idx == 10 ? "#DFFF24" : "#949494"}
            ></Box>

            <Link href="#started2">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx === 10 ? "#DFFF24" : "#949494"}
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
              bg={idx == 9 ? "#DFFF24" : "#949494"}
            ></Box>
            <Link href="#started22">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 9 ? "#DFFF24" : "#949494"}
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
              bg={idx == 8 ? "#DFFF24" : "#949494"}
            ></Box>
            <Link href="#started23">
              <Box h={"18px"} w={"250px"}>
                <Text
                  fontFamily={"Golos Text"}
                  color={idx == 8 ? "#DFFF24" : "#949494"}
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
              bg={idx == 7 ? "#DFFF24" : "#949494"}
            ></Box>

            <Link href="#started24">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx === 7 ? "#DFFF24" : "#949494"}
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
              bg={idx == 6 ? "#DFFF24" : "#949494"}
            ></Box>
            <Link href="#started25">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 6 ? "#DFFF24" : "#949494"}
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
              bg={idx == 5 ? "#DFFF24" : "#949494"}
            ></Box>
            <Link href="#started26">
              <Box h={"18px"} w={"250px"}>
                <Text
                  fontFamily={"Golos Text"}
                  color={idx == 5 ? "#DFFF24" : "#949494"}
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
                color={idx <= 4 && idx >= 1 ? "#DFFF24" : "#949494"}
              >
                THE WOLVES DAO GOVERNANCE
              </Text>
            </Box>
          </Link>
        </Flex>
        <Flex
          h={"144px"}
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
              bg={idx == 4 ? "#DFFF24" : "#949494"}
            ></Box>

            <Link href="#started3">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx === 4 ? "#DFFF24" : "#949494"}
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
              bg={idx == 3 ? "#DFFF24" : "#949494"}
            ></Box>
            <Link href="#started32">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 3 ? "#DFFF24" : "#949494"}
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
              bg={idx == 2 ? "#DFFF24" : "#949494"}
            ></Box>
            <Link href="#started33">
              <Box h={"18px"} w={"250px"}>
                <Text
                  fontFamily={"Golos Text"}
                  color={idx == 2 ? "#DFFF24" : "#949494"}
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
              bg={idx == 1 ? "#DFFF24" : "#949494"}
            ></Box>

            <Link href="#started34">
              <Box h={"18px"} w={"250px"}>
                <Box h={"18px"} w={"250px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx === 1 ? "#DFFF24" : "#949494"}
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
