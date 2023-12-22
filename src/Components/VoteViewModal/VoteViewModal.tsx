"use client";
import {
  Box,
  Stack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Image as Images,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { Modal } from "@/Components/Modal";
import { useToast } from "@/utils/toast";

import localFont from "next/font/local";
import { FaSearch } from "react-icons/fa";
const satFont = localFont({
  src: "../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});

const VoteViewForm = ({
  onClose,
  isOpen,
  data,
}: {
  onClose: () => any;
  isOpen: boolean;
  data: any;
}) => {
  const [view, setView] = useState("");

  const [result, setResult] = useState<any[]>([]); // Initialize 'result' state as an empty array
  var moment = require("moment");
  useEffect(() => {
    if (view && data) {
      const filteredData = data.filter((e: any) => {
        return e.userName.toLowerCase().includes(view.toLowerCase());
      });
      setResult(filteredData); // Update 'result' state with the filtered data
    } else if (view === "") {
      setResult(data);
    } else {
      setResult([]); // Reset 'result' state to an empty array if 'view' or 'data' is falsy
    }
  }, [view]);

  return (
    <Stack>
      <Stack spacing="lg" pb="sm">
        <Stack mt={"-20px"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Нэрээр хайх"
              onChange={(e) => {
                if (e.target.value) {
                  setView(e.target.value);
                } else {
                  setView("");
                }
              }}
            />
          </InputGroup>
        </Stack>
        <Stack h="210px" overflowY="auto" css={{ scrollBehavior: "smooth" }}>
          {result?.length !== 0 ? (
            <Stack>
              {result?.map((e: any, id: number) => (
                <Stack justifyContent={"center"} my={"10px"} key={id}>
                  <Stack
                    mx={"auto"}
                    w={{ base: "90%" }}
                    h="42px"
                    direction="row"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Stack direction="row" alignItems={"center"}>
                      <Box
                        w={{ base: "24px", sm: "32px" }}
                        h={{ base: "24px", sm: "32px" }}
                        borderRadius={"100%"}
                        overflow="hidden"
                      >
                        <Images
                          src={e?.profile}
                          alt="Profile Picture"
                          w={{ base: "24px", sm: "32px" }}
                          h={{ base: "24px", sm: "32px" }}
                          borderRadius={"100%"}
                        />
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
                      {moment.utc(e?.updatedAt).format("YYYY-MM-DD")}
                    </Text>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          ) : (
            <Stack alignItems={"center"} mt={"20px"}>
              <Text color={"white"}> Илэрц олдсонгүй</Text>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export const VoteViewModal = ({
  isOpen,
  onClose,
  data,
}: {
  isOpen: boolean;
  data: any;
  onClose: () => any;
}) => {
  return (
    <Modal
      title={"Өгсөн саналууд"}
      isOpen={isOpen}
      onClose={onClose}
      msize="md"
    >
      <VoteViewForm isOpen={isOpen} onClose={onClose} data={data} />
    </Modal>
  );
};
