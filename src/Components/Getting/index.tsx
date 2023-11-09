"use client";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
function Getting() {
  const [idx, setIdx] = useState(0);
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

        if (scrollY >= 2013) {
          newIdx = 1;
        } else if (scrollY >= 1722) {
          newIdx = 2;
        } else if (scrollY >= 1500) {
          newIdx = 3;
        } else if (scrollY >= 1301) {
          newIdx = 4;
        } else if (scrollY >= 861) {
          newIdx = 5;
        } else if (scrollY >= 330) {
          newIdx = 6;
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

  return (
    <div
      className={`hideMobile ${style.getting}`}
      // h={"461px"}
      // w={"256px"}
      // zIndex={100}
      // position="fixed"
      // left={{ base: "0", "2xl": "10%" }}
      // top={"108px"}

      // hidden={{ base: true, lg: false }}
    >
      <Stack pt={"32px"}>
        <Stack h={pathname === "/rules" ? "198px" : "32px"}>
          <Flex h={"32px"} alignItems={"center"}>
            <Link href="/rules">
              <Box h={"18px"} ml={"28px"}>
                <Text
                  fontFamily={"Golos Text"}
                  fontWeight={"700"}
                  fontSize={"16px"}
                  lineHeight={"18px"}
                  color={pathname === "/rules" ? "#FFFFFF" : "#949494"}
                >
                  Getting started
                </Text>
              </Box>
            </Link>
          </Flex>
          <Flex
            h={"160px"}
            direction={"column"}
            pl={"12px"}
            mt={"-5px"}
            hidden={pathname === "/rules" ? false : true}
          >
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 0 ? "#FBFBFB" : "#949494"}
              ></Box>

              <Link href="#started1">
                <Box h={"18px"} w={"172px"}>
                  <Box h={"18px"} w={"172px"} ml={"-4px"}>
                    <Text
                      fontFamily={"Golos Text"}
                      color={idx === 0 ? "#FBFBFB" : "#949494"}
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
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 6 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#started2">
                <Box h={"18px"} w={"172px"}>
                  <Box h={"18px"} w={"172px"} ml={"-4px"}>
                    <Text
                      fontFamily={"Golos Text"}
                      color={idx == 6 ? "#FBFBFB" : "#949494"}
                      fontSize={"15px"}
                      fontWeight={"700"}
                      lineHeight={"18px"}
                    >
                       Саналыг шалгах
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 5 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#started3">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 5 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Хянах,зөвшөөрөх
                  </Text>
                </Box>
              </Link>
            </Flex>

            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 4 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#started4">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 4 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Final proposal
                  </Text>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              ml={"10px"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 3 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#started5">
                <Box h={"18px"} w={"200px"}>
                  <Box h={"18px"} w={"200px"} ml={"8px"}>
                    <Text
                      fontFamily={"Golos Text"}
                      color={idx == 3 ? "#FBFBFB" : "#949494"}
                      fontSize={"15px"}
                      fontWeight={"700"}
                      lineHeight={"18px"}
                    >
                      Хэлэлцүүлэг (1-5 хоног)
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              ml={"10px"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 2 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#started6">
                <Box h={"18px"} w={"200px"}>
                  <Box h={"18px"} w={"200px"} ml={"8px"}>
                    <Text
                      fontFamily={"Golos Text"}
                      color={idx == 2 ? "#FBFBFB" : "#949494"}
                      fontSize={"15px"}
                      fontWeight={"700"}
                      lineHeight={"18px"}
                    >
                      Санал хураалт (1-3 хоног)
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Flex>
            <Flex
              h={"32px"}
              w={"224px"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              <Box
                h={"32px"}
                w={"2px"}
                bg={idx == 1 ? "#FBFBFB" : "#949494"}
              ></Box>
              <Link href="#started7">
                <Box h={"18px"} w={"172px"}>
                  <Text
                    fontFamily={"Golos Text"}
                    color={idx == 1 ? "#FBFBFB" : "#949494"}
                    fontSize={"15px"}
                    fontWeight={"700"}
                    lineHeight={"18px"}
                  >
                    Санал хэрэгжилт
                  </Text>
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </Stack>
    </div>
  );
}

export default Getting;
