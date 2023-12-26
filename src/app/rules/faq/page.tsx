import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Faq from "@/Components/Faqrule/page";
import localFont from "next/font/local";

const satFont = localFont({
  src: "../../../fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
});

function page() {
  return (
    <Stack
      w={{ sm: "80%", lg: "865px" }}
      mx="auto"
      marginX={{ base: "5px", sm: "auto" }}
    >
      <Text
        {...satFont.style}
        lineHeight={"32px"}
        fontSize={{ base: "24px", sm: "24px" }}
        ml={["12px", "0"]}
        fontWeight={"900"}
        color={"#F2F2F2"}
      >
        FAQ
      </Text>
      <Faq />
    </Stack>
  );
}

export default page;
