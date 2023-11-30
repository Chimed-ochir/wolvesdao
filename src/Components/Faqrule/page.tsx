"use client";

import { Box, Button, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
// import localFont from "next/font/local";
// const satFont = localFont({
//   src: "../Components/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf",
// });
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";

function Faq() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);
  const [state7, setState7] = useState(false);
  const [state8, setState8] = useState(false);
  const [state9, setState9] = useState(false);
  const [state10, setState10] = useState(false);
  const [state11, setState11] = useState(false);
  const [state12, setState12] = useState(false);
  const [state13, setState13] = useState(false);
  const [state14, setState14] = useState(false);
  const [state15, setState15] = useState(false);
  const [state16, setState16] = useState(false);
  const [state17, setState17] = useState(false);
  const [state18, setState18] = useState(false);
  const [state19, setState19] = useState(false);
  const [state20, setState20] = useState(false);

  return (
    <Box>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state1 ? undefined : "1px solid #949494"}
        mb={state1 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState1(!state1);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state1 ? "24px" : "16px"}
            fontWeight={state1 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            The Wolves DAO гэж юу вэ?
          </Text>
          {state1 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state1 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            The Wolves NFT-ийн үнэ цэнэ, хэрэглээг нэмэгдүүлэх, чонон сүргийн
            нэр хүндийг нийгэмд таниулах болон гишүүдийн тоог өсгөх, идэвхжүүлэх
            чиглэлд хэрэгжүүлэх саналуудыг The Wolves DAO-р дамжуулан
            гишүүдээсээ хүлээн авч санал хураан шийдвэрлэнэ.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state2 ? undefined : "1px solid #949494"}
        mb={state2 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState2(!state2);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state2 ? "24px" : "16px"}
            fontWeight={state2 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            The Wolves DAO-д хэн санал гаргах боломжтой вэ?
          </Text>
          {state2 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state2 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            The Wolves NFT эзэмшигч хүн бүр (багаар байж болно) санал гаргах
            боломжтой.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state3 ? undefined : "1px solid #949494"}
        mb={state3 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState3(!state3);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state3 ? "24px" : "16px"}
            fontWeight={state3 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            The Wolves DAO-д ямар төрлийн саналууд гаргах боломжтой вэ?
          </Text>
          {state3 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state3 ? (
          <Box>
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              Та доорх төрлийн саналуудаас аль нэгийг нь сонгож гаргах
              боломжтой. Үүнд:
            </Text>
            <Box ml={"8px"}>
              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • The Wolves комюнититэй хамтран ажиллах бизнес төслийн
                саналууд;
              </Text>
              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • The Wolves NFT эзэмшигчдэд бодит үр өгөөж бий болгох,
                шаардлагатай мэдээлэл авах санаачилгуудыг MongolNFT-д хүргүүлж
                ажил хэрэг болгож хамтран ажиллах саналууд;
              </Text>
              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • The Wolves комюнити гишүүдийг хамруулсан хаалттай арга
                хэмжээнүүдийг зохиох саналууд;
              </Text>
              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • Сайн үйлсийн аян, хандив, мод тарих зэрэг нийгэм болон
                байгальд тустай үйл ажиллагаа хэрэгжүүлэх саналууд;
              </Text>

              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • The Wolves DAO-ийн засаглал болон үйл ажиллагааг сайжруулах
                саналууд;
              </Text>
              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • The Wolves NFT эзэмшигчдийн хүрээг өргөжүүлэх, The Wolves
                NFT-ийн хэрэглээг тэлэх саналууд;
              </Text>
            </Box>
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              Нэг дор олон санал илгээхгүй ба нэгээс илүү санал гаргах бол тус
              бүрд нь явуулна.
            </Text>
          </Box>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state4 ? undefined : "1px solid #949494"}
        mb={state4 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState4(!state4);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state4 ? "24px" : "16px"}
            fontWeight={state4 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Шаардлагад нийцсэн санал гэж ямар саналыг хэлэх вэ?
          </Text>
          {state4 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state4 ? (
          <Box>
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              Санал нь гаргахдаа доорх талбаруудад байгаа мэдээллийг гүйцэт,
              үнэн зөв бөглөж ирүүлэх шаардлагатай. Үүнд:
            </Text>
            <Box ml="8px">
              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • Саналын нэр;
              </Text>
              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • Саналын товч танилцуулга;
              </Text>
              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • Санал хэрэгжих үе шатууд болон харгалзах огноонууд;
              </Text>
              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • The Wolves комюнитид өгөх өгөөж, үр нөлөө (үндэслэл бүхий
                тооцоололтой);
              </Text>
              <Text
                w="95%"
                mx="auto"
                fontFamily={"Rubik"}
                lineHeight={"24px"}
                fontSize={{ base: "16px" }}
                fontWeight={"400"}
                color={"#FCFCFC"}
              >
                • Хариуцан гүйцэтгэх эзэн болон багийн гишүүдийн товч
                танилцуулга Саналаас гарах бүтээгдэхүүн үйлчилгээ байгаа бол
                зураг болон товч танилцуулга Хүсэж буй санхүүжилтийн хэмжээ
                Дээрх загварын дагуу саналаа гаргаагүй эсвэл дутуу мэдээлэл
                ирүүлсэн бол Комюнити менежер нь шаардлагад нийцээгүй
                шалтгаанаар буцааж болно
              </Text>
            </Box>
          </Box>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state5 ? undefined : "1px solid #949494"}
        mb={state5 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState5(!state5);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state5 ? "24px" : "16px"}
            fontWeight={state5 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Хаана саналаа гаргах вэ?
          </Text>
          {state5 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state5 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            The Wolves NFT эзэмшигчид саналаа Discussion =&gt New proposal
            хэсгээс гаргана.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state6 ? undefined : "1px solid #949494"}
        mb={state6 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState6(!state6);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state6 ? "24px" : "16px"}
            fontWeight={state6 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Нэг The Wolves NFT-ээ ашиглан нэгээс дээш санал гаргаж болох уу?
          </Text>
          {state6 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state6 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Тийм. Нэг The Wolves NFT-ээ ашиглан хэдэн ч удаа санал гаргах
            боломжтой.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state7 ? undefined : "1px solid #949494"}
        mb={state7 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState7(!state7);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state7 ? "24px" : "16px"}
            fontWeight={state7 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Миний гаргасан саналыг хэн хүлээж авах вэ?
          </Text>
          {state7 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state7 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Миний гаргасан саналыг хэн хүлээж авах вэ?
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state8 ? undefined : "1px solid #949494"}
        mb={state8 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState8(!state8);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state8 ? "24px" : "16px"}
            fontWeight={state8 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Миний гаргасан санал яаж хэлэлцүүлэгт орох вэ?
          </Text>
          {state8 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state8 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Комюнити менежер нь шаардлагад нийцсэн гэж үзсэн саналуудаа Хяналтын
            зөвлөлд танилцуулна. Хяналтын зөвлөл нь The Wolves DAO-ийн зорилго
            болон санхүүжилтийн боломжтой уялдуулан тухайн саналуудыг хянаад
            нээлттэй хэлэлцүүлэг рүү оруулах эсэхийг тухай бүрд нь санал хурааж,
            энгийн олонхын (тогтоосон хугацаанд санал өгсөн гишүүдийн 50+1 хувь)
            саналаар шийдвэрлэнэ. Хяналтын зөвлөлөөр хянагдаж дэмжигдсэн
            саналуудыг Комюнити менежер нь Discussion хэсэг дээр Public
            тохиргоотой болгосноор Хэлэлцүүлэг эхэлнэ. Саналд нэмэлт эсвэл
            өөрчлөлт хийх шаардлагатай бол төслийн саналыг шаардлагын хамт
            буцааж болно.
          </Text>
        ) : null}
      </Stack>

      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state9 ? undefined : "1px solid #949494"}
        mb={state9 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState9(!state9);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state9 ? "24px" : "16px"}
            fontWeight={state9 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Хэлэлцүүлэг хэдэн хоног үргэлжлэх вэ?
          </Text>
          {state9 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state9 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Хяналтын зөвлөлөөр шийдвэрлэгдсэн саналуудыг (Final proposal)
            Discussion хэсэг дээр нийт гишүүдийн буюу The Wolves NFT
            эзэмшигчдийн дунд нээлттэй хэлэлцүүлнэ. Хэлэлцүүлгийн үргэлжлэх
            хугацаа нь саналаас шалтгаалан 5 хүртэлх хоног байна.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state10 ? undefined : "1px solid #949494"}
        mb={state10 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState10(!state10);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state10 ? "24px" : "16px"}
            fontWeight={state10 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Хэлэлцүүлгийн үед гаргасан саналдаа өөрчлөлт оруулах боломжтой юу?
          </Text>
          {state10 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state10 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Тийм. Хэлэлцүүлгийн үеэр The Wolves NFT эзэмшигчдийн зүгээс ирсэн
            хүсэлтийн дагуу өөрийн гаргасан саналдаа өөрчлөлт оруулах боломжтой.
            Хэрвээ өөрчлөлт оруулах бол Комюнити менежерт мэдэгдэж, саналаа
            Хяналтын зөвлөлөөр дахин хянуулна. Хяналтын зөвлөл хянаад уг
            өөрчлөлт орсон саналыг зөвшөөрсөн тохиолдолд шууд санал хураах шат
            руу оруулж болно.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state11 ? undefined : "1px solid #949494"}
        mb={state11 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState11(!state11);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state11 ? "24px" : "16px"}
            fontWeight={state11 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Миний гаргасан санал хэрэгжих эсэхийг хэн шийдэх вэ?
          </Text>
          {state11 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state11 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Хэлэлцүүлгийн тогтоосон хугацаа дууссаны дараагаар Саналын эрхтэй
            гишүүдийн дунд санал хураалт явуулж, энгийн олонхын (тогтоосон
            хугацаанд санал өгсөн гишүүдийн 50+1 хувь) саналаар тухайн санал
            дэмжигдсэн эсэхийг эцэслэн тогтооно. Санал хураалт үргэлжлэх хугацаа
            нь саналаас шалтгаалан 3 хүртэлх хоног байна.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state12 ? undefined : "1px solid #949494"}
        mb={state12 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState12(!state12);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state12 ? "24px" : "16px"}
            fontWeight={state12 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Миний санал дэмжигдлээ одоо яах вэ?
          </Text>
          {state12 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state12 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Саналд тусгагдсан шаардлагатай нөөцүүд The Wolves DAO-аас олгогдоно.
            Санал гаргагч нь ажлуудаа хийж гүйцэтгэн явцыг Комюнити менежерт
            мэдэгдэнэ. Комюнити менежер саналын хэрэгжилтэд хяналт тавьж
            шаардлагатай мэдээллүүдийг санал тус бүрийн Report хэсэгт оруулна.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state13 ? undefined : "1px solid #949494"}
        mb={state13 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState13(!state13);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state13 ? "24px" : "16px"}
            fontWeight={state13 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Комюнити менежер гэж хэн бэ?
          </Text>
          {state13 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state13 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Комюнити менежер нь The Wolves DAO-ийн өдөр тутмын үйл ажиллагааг
            хариуцан сарын тогтмол цалинтайгаар ажиллана. Цалингийн хэмжээ,
            урамшуулал олгох талаарх асуудлыг The Wolves DAO-аар санал хурааж
            шийдвэрлэнэ.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state14 ? undefined : "1px solid #949494"}
        mb={state14 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState14(!state14);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state14 ? "24px" : "16px"}
            fontWeight={state14 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Комюнити менежер ямар эрх, үүрэгтэй вэ?
          </Text>
          {state14 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state14 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Комюнити менежер нь The Wolves DAO-д ирж буй саналуудыг хүлээн авах,
            Хяналтын зөвлөлд танилцуулах, хэлэлцүүлэг болон санал хураалтыг
            зохион байгуулах үүрэгтэй. Үүнтэй уялдуулан шаардлагад нийцээгүй
            саналуудыг буцаах, санал хураалтаар дэмжигдсэн саналуудад
            шаардлагатай санхүүжилтийг олгох, саналын хэрэгжилтэд хяналт тавих
            эрхтэй байна.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state15 ? undefined : "1px solid #949494"}
        mb={state15 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState15(!state15);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state15 ? "24px" : "16px"}
            fontWeight={state15 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Комюнити менежер хэрхэн сонгогдох вэ?
          </Text>
          {state15 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state15 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Комюнити менежер нь 6 сар тутамд сонгогдох ба нийт 2 удаа сонгогдон
            ажиллах боломжтой. Комюнити менежерт өөрийгөө эсвэл Discussion
            хэсгийн Trust system-ийг ашиглан идэвхтэй гишүүд дундаас нэр
            дэвшүүлэх боломжтой бөгөөд The Wolves DAO-аар санал хурааж
            шийдвэрлэнэ.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state16 ? undefined : "1px solid #949494"}
        mb={state16 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState16(!state16);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state16 ? "24px" : "16px"}
            fontWeight={state16 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Хяналтын зөвлөл гэж юу вэ?
          </Text>
          {state16 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state16 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Хяналтын зөвлөл нь 15 хүний бүрэлдэхүүнтэй байх ба саналуудыг The
            Wolves DAO-ийн зорилго болон санхүүжилтийн боломжтой уялдуулан хянаж
            шийдвэрлэнэ.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state17 ? undefined : "1px solid #949494"}
        mb={state17 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState17(!state17);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state17 ? "24px" : "16px"}
            fontWeight={state17 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Хяналтын зөвлөл ямар эрх, үүрэгтэй вэ?
          </Text>
          {state17 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state17 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Хяналтын зөвлөл нь Комюнити менежерээс ирүүлсэн саналуудыг тухай
            бүрд нь хянаад The Wolves DAO-аар хэлэлцүүлж, санал хураалтад
            оруулах эсэхийг дотооддоо санал хурааж шийдвэрлэх эрхтэй. Мөн
            Хяналтын зөвлөл нь 6 болон 12 дугаар саруудад, шаардлагатай
            тохиолдолд гишүүдийн 2/3-ийн саналаар ээлжит бусаар хуралдаж
            Комюнити менежерийн тайланг сонсох бөгөөд үргэлжлүүлэн ажиллуулах
            эсвэл чөлөөлөх асуудлаар The Wolves DAO-д санал оруулж
            шийдвэрлүүлнэ. Саналын эрхтэй 30 гишүүдийг сонгож улирал бүр саналын
            эрхтэй гишүүдийн жагсаалтанд өөрчлөлт оруулна.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state18 ? undefined : "1px solid #949494"}
        mb={state18 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState18(!state18);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state18 ? "24px" : "16px"}
            fontWeight={state18 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Хяналтын зөвлөлийн гишүүд хэрхэн сонгогдох вэ?
          </Text>
          {state18 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state18 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Хагас жил тутмын санал хураалтаар Хяналтын зөвлөлийн 3-5 гишүүнийг
            ротациар сэлгэн ажиллуулна. Хяналтын зөвлөлийн гишүүнийг ротациар
            болон хугацаанаас нь өмнө чөлөөлөх, томилох асуудлыг The Wolves
            DAO-аар санал хурааж шийдвэрлэнэ. Хяналтын зөвлөлд өөрийгөө эсвэл
            Discussion хэсгийн Trust system-ийг ашиглан идэвхтэй гишүүд дундаас
            нэр дэвшүүлэх боломжтой бөгөөд The Wolves DAO-аар санал хурааж
            шийдвэрлэнэ.
          </Text>
        ) : null}
      </Stack>
      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state19 ? undefined : "1px solid #949494"}
        mb={state19 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState19(!state19);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state19 ? "24px" : "16px"}
            fontWeight={state19 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Саналын эрхтэй гишүүд гэж хэн бэ?
          </Text>
          {state19 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state19 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Саналын эрхтэй гишүүд нь The Wolves DAO-ийн бүхий л санал хураалтад
            оролцож шийдвэр гаргах эрхтэй байна. Саналын эрхтэй нийт 100 гишүүн
            байх ба улирал тутамд тодорхой шалгуурын дагуу гишүүнчлэлийг
            шинэчилнэ.
          </Text>
        ) : null}
      </Stack>

      <Stack
        py="20px"
        bg={"#090909"}
        borderBottom={state20 ? undefined : "1px solid #949494"}
        mb={state20 ? "10px" : undefined}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          w={{ base: "95%", lg: "841px" }}
          mx="auto"
          onClick={() => {
            setState20(!state20);
          }}
          cursor="pointer"
        >
          <Text
            fontFamily={"Golos Text"}
            lineHeight={"24px"}
            fontSize={state20 ? "24px" : "16px"}
            fontWeight={state20 ? "700" : "900"}
            color={"#FCFCFC"}
          >
            Саналын эрхтэй гишүүн болоход ямар шалгуур тавигдах вэ?
          </Text>
          {state20 ? (
            <MdOutlineExpandMore size={32} />
          ) : (
            <MdExpandLess size={32} />
          )}
        </Stack>
        {state20 ? (
          <Text
            w="95%"
            mx="auto"
            fontFamily={"Rubik"}
            lineHeight={"24px"}
            fontSize={{ base: "16px" }}
            fontWeight={"400"}
            color={"#FCFCFC"}
          >
            Саналын эрхтэй гишүүд нь The Wolves DAO-ийн бүхий л санал хураалтад
            оролцож шийдвэр гаргах эрхтэй байна. Саналын эрхтэй нийт 100 гишүүн
            байх ба улирал тутамд тодорхой шалгуурын дагуу гишүүнчлэлийг
            шинэчилнэ. Санал хураах эрхтэй гишүүдийг сонгохдоо доорх шалгуурыг
            баримтална. Үүнд:
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              • 70 гишүүдийг Discussion хэсгийн Trust system-ийг ашиглан идэвх,
              санаачилгын түвшин (level), тэмдэг (badge) зэргийг нь харгалзан
              сонгоно.{" "}
            </Text>
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              • 30 гишүүдийг The Wolves NFT-ийн эзэмшигчид дотроос, бусад
              бүтээгдэхүүн үйлчилгээг идэвхтэй хэрэглэдэг, оролцдог хүмүүсээс
              Хяналтын зөвлөл сонгоно. Үүнд:
            </Text>
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              {" "}
              - The Wolves DAO-ийн санаачилсан мини тоглоомд түрүүлсэн гишүүн;{" "}
            </Text>
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              {" "}
              - The Wolves DAO-аас санаачилж буй үйл ажиллагаанд биечлэн
              идэвхтэй оролцдог гишүүд;{" "}
            </Text>
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              {" "}
              - Ultra rare-1, Very rare-2, rare-3 мөн volume ихтэй чононууд;{" "}
            </Text>
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              {" "}
              - Ховор badge-тай чононууд;
            </Text>
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              - Санаачилсан төсөл нь The Wolves DAO-аас дэмжигдсэн гишүүд;
            </Text>
            <Text
              w="95%"
              mx="auto"
              fontFamily={"Rubik"}
              lineHeight={"24px"}
              fontSize={{ base: "16px" }}
              fontWeight={"400"}
              color={"#FCFCFC"}
            >
              - Бусад нэмэлт шалгуурууд
            </Text>
          </Text>
        ) : null}
      </Stack>
    </Box>
  );
}

export default Faq;
