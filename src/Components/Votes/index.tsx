"use client";
import { useQuery } from "@/utils";
import { Box, Stack, Text, Image as Images } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { VoteViewModal } from "../VoteViewModal";
import { useAuth } from "../Account";
const satFont = localFont({
  src: "../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});
function Votes(idx: any) {
  const { user } = useAuth();
  const { data, loading, fetchData } = useQuery<{
    map(arg0: (e: any, id: number) => React.JSX.Element): React.ReactNode;
    data: any;
  }>({
    uri: `/option/poll/${idx?.idx}`,
    manual: true,
  });
  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  var moment = require("moment");
  const [view, setView] = useState(false);
  return (
    <Box borderRadius={"6px"} border={"1px solid #282828"} bg={"#101010"}>
      <Stack borderBottom={"1px solid  #282828"} w={"100%"}>
        <Stack
          justifyContent={"space-between"}
          alignItems="center"
          direction={"row"}
          w={{ base: "170px", sm: "190px" }}
          h="50px"
          ml="10px"
        >
          <Text
            {...satFont.style}
            fontWeight={"700"}
            lineHeight={{ base: "18px" }}
            my="8px"
            fontSize={{ base: "16px" }}
            py={"2px"}
            px={"6px"}
            color={"#F2F2F2"}
          >
            Өгсөн саналууд{" "}
          </Text>

          {Array.isArray(data) ? (
            <Text
              {...satFont.style}
              fontWeight="700"
              lineHeight="18px"
              fontSize="12px"
              py="2px"
              px="6px"
              bg="#228200"
              borderRadius="4px"
              color="#F2F2F2"
            >
              {data.length}
            </Text>
          ) : null}
        </Stack>
      </Stack>

      {(Array.isArray(data) ? data.slice(0, 3) : []).map(
        (e: any, id: number) => (
          <Stack justifyContent={"center"} my={"10px"} key={id}>
            <Stack
              mx={"auto"}
              w={{ base: "90%", sm: "448px", md: "492px" }}
              h="42px"
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction="row" alignItems={"center"}>
                <Box
                  w={{ base: "24px", sm: "32px" }}
                  h={{ base: "24px", sm: "32px" }}
                >
                  <Images
                    src={e?.profile}
                    alt="Profile Picture"
                    w={{ base: "24px", sm: "32px" }}
                    minH={{ base: "24px", sm: "32px" }}
                    minW={{ base: "24px", sm: "32px" }}
                    h={{ base: "24px", sm: "32px" }}
                    my={"auto"}
                    borderRadius={"100%"}
                  ></Images>
                </Box>
                <Text
                  {...satFont.style}
                  fontWeight={"400"}
                  lineHeight={"18px"}
                  fontSize={"12px"}
                  color={"#95999D"}
                >
                  {e?.userName}
                </Text>
              </Stack>
              <Text
                {...satFont.style}
                fontWeight={"400"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#95999D"}
              >
                {e?.optionName}
              </Text>
              <Text
                {...satFont.style}
                fontWeight={"400"}
                lineHeight={"18px"}
                fontSize={"12px"}
                color={"#95999D"}
              >
                {moment(e?.updatedAt).format("YYYY-MM-DD")}
              </Text>
            </Stack>
          </Stack>
        )
      )}

      <Stack
        mx={"auto"}
        w="100%"
        h="44px"
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
        borderTop={"1px solid #282828"}
        cursor={"pointer"}
        onClick={() => {
          setView(!view);
        }}
      >
        <Text
          {...satFont.style}
          fontWeight={"400"}
          lineHeight={"18px"}
          fontSize={"15px"}
          color={"#FBFBFB"}
        >
          Бүгдийг харуулах
        </Text>
      </Stack>
      <VoteViewModal
        isOpen={view}
        data={data}
        onClose={() => {
          setView(false);
        }}
      ></VoteViewModal>
    </Box>
  );
}

export default Votes;
