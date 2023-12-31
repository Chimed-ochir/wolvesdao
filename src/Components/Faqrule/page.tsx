"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Array = [
  {
    title: "The Wolves DAO гэж юу вэ?",
    child: [
      {
        desc: "The Wolves NFT-ийн үнэ цэнэ, хэрэглээг нэмэгдүүлэх, чонон сүргийн нэр хүндийг нийгэмд таниулах болон гишүүдийн тоог өсгөх, идэвхжүүлэх чиглэлд хэрэгжүүлэх саналуудыг The Wolves DAO-р дамжуулан гишүүдээсээ хүлээн авч санал хураан шийдвэрлэнэ.",
        child: [],
      },
    ],
  },
  {
    title: "The Wolves DAO-д хэн санал гаргах боломжтой вэ?",
    child: [
      {
        desc: " The Wolves NFT эзэмшигч хүн бүр (багаар байж болно) санал гаргах боломжтой.",
        child: [],
      },
    ],
  },
  {
    title: "The Wolves DAO-д ямар төрлийн саналууд гаргах боломжтой вэ?",
    child: [
      {
        desc: " Та доорх төрлийн саналуудаас аль нэгийг нь сонгож гаргах боломжтой. Үүнд:",
        child: [
          "• The Wolves комюнититэй хамтран ажиллах бизнес төслийн саналууд;",
          "• The Wolves NFT эзэмшигчдэд бодит үр өгөөж бий болгох, шаардлагатай мэдээлэл авах санаачилгуудыг MongolNFT-д хүргүүлж ажил хэрэг болгож хамтран ажиллах саналууд;",
          "• The Wolves комюнити гишүүдийг хамруулсан хаалттай арга хэмжээнүүдийг зохиох саналууд;",
          "• Сайн үйлсийн аян, хандив, мод тарих зэрэг нийгэм болон байгальд тустай үйл ажиллагаа хэрэгжүүлэх саналууд;",
          "• The Wolves DAO-ийн засаглал болон үйл ажиллагааг сайжруулах саналууд;",
          "• The Wolves NFT эзэмшигчдийн хүрээг өргөжүүлэх, The Wolves NFT-ийн хэрэглээг тэлэх саналууд;",
        ],
      },
      {
        desc: "Нэг дор олон санал илгээхгүй ба нэгээс илүү санал гаргах бол тус бүрд нь явуулна.",
        child: [],
      },
    ],
  },
  {
    title: "Шаардлагад нийцсэн санал гэж ямар саналыг хэлэх вэ?",
    child: [
      {
        desc: "Санал нь гаргахдаа доорх талбаруудад байгаа мэдээллийг гүйцэт, үнэн зөв бөглөж ирүүлэх шаардлагатай. Үүнд:",
        child: [
          "• Саналын нэр;",
          "• Саналын товч танилцуулга;",
          "• Санал хэрэгжих үе шатууд болон харгалзах огноонууд;",
          "• The Wolves комюнитид өгөх өгөөж, үр нөлөө (үндэслэл бүхий тооцоололтой);",
          "• Хариуцан гүйцэтгэх эзэн болон багийн гишүүдийн товч танилцуулга Саналаас гарах бүтээгдэхүүн үйлчилгээ байгаа бол зураг болон товч танилцуулга Хүсэж буй санхүүжилтийн хэмжээ Дээрх загварын дагуу саналаа гаргаагүй эсвэл дутуу мэдээлэл ирүүлсэн бол Комюнити менежер нь шаардлагад нийцээгүй шалтгаанаар буцааж болно",
        ],
      },
    ],
  },
  {
    title: "Хаана саналаа гаргах вэ?",
    child: [
      {
        desc: "The Wolves NFT эзэмшигчид саналаа Discussion =&gt New proposal хэсгээс гаргана.",
        child: [],
      },
    ],
  },
  {
    title: "Нэг The Wolves NFT-ээ ашиглан нэгээс дээш санал гаргаж болох уу?",
    child: [
      {
        desc: "Тийм. Нэг The Wolves NFT-ээ ашиглан хэдэн ч удаа санал гаргах боломжтой.",
        child: [],
      },
    ],
  },
  {
    title: "Миний гаргасан саналыг хэн хүлээж авах вэ?",
    child: [{ desc: "Миний гаргасан саналыг хэн хүлээж авах вэ?", child: [] }],
  },
  {
    title: "Миний гаргасан санал яаж хэлэлцүүлэгт орох вэ?",
    child: [
      {
        desc: "Комюнити менежер нь шаардлагад нийцсэн гэж үзсэн саналуудаа Хяналтын зөвлөлд танилцуулна. Хяналтын зөвлөл нь The Wolves DAO-ийн зорилго болон санхүүжилтийн боломжтой уялдуулан тухайн саналуудыг хянаад нээлттэй хэлэлцүүлэг рүү оруулах эсэхийг тухай бүрд нь санал хурааж, энгийн олонхын (тогтоосон хугацаанд санал өгсөн гишүүдийн 50+1 хувь) саналаар шийдвэрлэнэ. Хяналтын зөвлөлөөр хянагдаж дэмжигдсэн саналуудыг Комюнити менежер нь Discussion хэсэг дээр Public тохиргоотой болгосноор Хэлэлцүүлэг эхэлнэ. Саналд нэмэлт эсвэл өөрчлөлт хийх шаардлагатай бол төслийн саналыг шаардлагын хамт буцааж болно.",
        child: [],
      },
    ],
  },
  {
    title: "Хэлэлцүүлэг хэдэн хоног үргэлжлэх вэ?",
    child: [
      {
        desc: "Хяналтын зөвлөлөөр шийдвэрлэгдсэн саналуудыг (Final proposal) Discussion хэсэг дээр нийт гишүүдийн буюу The Wolves NFT эзэмшигчдийн дунд нээлттэй хэлэлцүүлнэ. Хэлэлцүүлгийн үргэлжлэх хугацаа нь саналаас шалтгаалан 5 хүртэлх хоног байна.",
        child: [],
      },
    ],
  },
  {
    title: "Хэлэлцүүлгийн үед гаргасан саналдаа өөрчлөлт оруулах боломжтой юу?",
    child: [
      {
        desc: "Тийм. Хэлэлцүүлгийн үеэр The Wolves NFT эзэмшигчдийн зүгээс ирсэн хүсэлтийн дагуу өөрийн гаргасан саналдаа өөрчлөлт оруулах боломжтой. Хэрвээ өөрчлөлт оруулах бол Комюнити менежерт мэдэгдэж, саналаа Хяналтын зөвлөлөөр дахин хянуулна. Хяналтын зөвлөл хянаад уг өөрчлөлт орсон саналыг зөвшөөрсөн тохиолдолд шууд санал хураах шат руу оруулж болно.",
        child: [],
      },
    ],
  },
  {
    title: "Миний гаргасан санал хэрэгжих эсэхийг хэн шийдэх вэ?",
    child: [
      {
        desc: "Хэлэлцүүлгийн тогтоосон хугацаа дууссаны дараагаар Саналын эрхтэй гишүүдийн дунд санал хураалт явуулж, энгийн олонхын (тогтоосон хугацаанд санал өгсөн гишүүдийн 50+1 хувь) саналаар тухайн санал дэмжигдсэн эсэхийг эцэслэн тогтооно. Санал хураалт үргэлжлэх хугацаа нь саналаас шалтгаалан 3 хүртэлх хоног байна.",
        child: [],
      },
    ],
  },
  {
    title: "Миний санал дэмжигдлээ одоо яах вэ?",
    child: [
      {
        desc: "Саналд тусгагдсан шаардлагатай нөөцүүд The Wolves DAO-аас олгогдоно. Санал гаргагч нь ажлуудаа хийж гүйцэтгэн явцыг Комюнити менежерт мэдэгдэнэ. Комюнити менежер саналын хэрэгжилтэд хяналт тавьж шаардлагатай мэдээллүүдийг санал тус бүрийн Report хэсэгт оруулна.",
        child: [],
      },
    ],
  },
  {
    title: "Комюнити менежер гэж хэн бэ?",
    child: [
      {
        desc: "Комюнити менежер нь The Wolves DAO-ийн өдөр тутмын үйл ажиллагааг хариуцан сарын тогтмол цалинтайгаар ажиллана. Цалингийн хэмжээ, урамшуулал олгох талаарх асуудлыг The Wolves DAO-аар санал хурааж шийдвэрлэнэ.",
        child: [],
      },
    ],
  },
  {
    title: "Комюнити менежер ямар эрх, үүрэгтэй вэ?",
    child: [
      {
        desc: "Комюнити менежер нь The Wolves DAO-д ирж буй саналуудыг хүлээн авах, Хяналтын зөвлөлд танилцуулах, хэлэлцүүлэг болон санал хураалтыг зохион байгуулах үүрэгтэй. Үүнтэй уялдуулан шаардлагад нийцээгүй саналуудыг буцаах, санал хураалтаар дэмжигдсэн саналуудад шаардлагатай санхүүжилтийг олгох, саналын хэрэгжилтэд хяналт тавих эрхтэй байна.",
        child: [],
      },
    ],
  },
  {
    title: "Комюнити менежер хэрхэн сонгогдох вэ?",
    child: [
      {
        desc: "Комюнити менежер нь 6 сар тутамд сонгогдох ба нийт 2 удаа сонгогдон ажиллах боломжтой. Комюнити менежерт өөрийгөө эсвэл Discussion хэсгийн Trust system-ийг ашиглан идэвхтэй гишүүд дундаас нэр дэвшүүлэх боломжтой бөгөөд The Wolves DAO-аар санал хурааж шийдвэрлэнэ.",
        child: [],
      },
    ],
  },
  {
    title: "Хяналтын зөвлөл гэж юу вэ?",
    child: [
      {
        desc: "Хяналтын зөвлөл нь 15 хүний бүрэлдэхүүнтэй байх ба саналуудыг The Wolves DAO-ийн зорилго болон санхүүжилтийн боломжтой уялдуулан хянаж шийдвэрлэнэ.",
        child: [],
      },
    ],
  },
  {
    title: "Хяналтын зөвлөл ямар эрх, үүрэгтэй вэ?",
    child: [
      {
        desc: " Хяналтын зөвлөл нь Комюнити менежерээс ирүүлсэн саналуудыг тухай бүрд нь хянаад The Wolves DAO-аар хэлэлцүүлж, санал хураалтад оруулах эсэхийг дотооддоо санал хурааж шийдвэрлэх эрхтэй. Мөн Хяналтын зөвлөл нь 6 болон 12 дугаар саруудад, шаардлагатай тохиолдолд гишүүдийн 2/3-ийн саналаар ээлжит бусаар хуралдаж Комюнити менежерийн тайланг сонсох бөгөөд үргэлжлүүлэн ажиллуулах эсвэл чөлөөлөх асуудлаар The Wolves DAO-д санал оруулж шийдвэрлүүлнэ. Саналын эрхтэй 30 гишүүдийг сонгож улирал бүр саналын эрхтэй гишүүдийн жагсаалтанд өөрчлөлт оруулна.",
        child: [],
      },
    ],
  },
  {
    title: "Хяналтын зөвлөлийн гишүүд хэрхэн сонгогдох вэ?",
    child: [
      {
        desc: "Хагас жил тутмын санал хураалтаар Хяналтын зөвлөлийн 3-5 гишүүнийг ротациар сэлгэн ажиллуулна. Хяналтын зөвлөлийн гишүүнийг ротациар болон хугацаанаас нь өмнө чөлөөлөх, томилох асуудлыг The Wolves DAO-аар санал хурааж шийдвэрлэнэ. Хяналтын зөвлөлд өөрийгөө эсвэл Discussion хэсгийн Trust system-ийг ашиглан идэвхтэй гишүүд дундаас нэр дэвшүүлэх боломжтой бөгөөд The Wolves DAO-аар санал хурааж шийдвэрлэнэ.",
        child: [],
      },
    ],
  },
  {
    title: "Саналын эрхтэй гишүүд гэж хэн бэ?",
    child: [
      {
        desc: " Саналын эрхтэй гишүүд нь The Wolves DAO-ийн бүхий л санал хураалтад оролцож шийдвэр гаргах эрхтэй байна. Саналын эрхтэй нийт 100 гишүүн байх ба улирал тутамд тодорхой шалгуурын дагуу гишүүнчлэлийг шинэчилнэ.",
        child: [],
      },
    ],
  },
  {
    title: "Саналын эрхтэй гишүүн болоход ямар шалгуур тавигдах вэ?",
    child: [
      {
        desc: "Саналын эрхтэй гишүүд нь The Wolves DAO-ийн бүхий л санал хураалтад оролцож шийдвэр гаргах эрхтэй байна. Саналын эрхтэй нийт 100 гишүүн байх ба улирал тутамд тодорхой шалгуурын дагуу гишүүнчлэлийг шинэчилнэ. Санал хураах эрхтэй гишүүдийг сонгохдоо доорх шалгуурыг баримтална. Үүнд:",
        child: [
          "• 70 гишүүдийг Discussion хэсгийн Trust system-ийг ашиглан идэвх, санаачилгын түвшин (level), тэмдэг (badge) зэргийг нь харгалзан сонгоно.",
          "• 30 гишүүдийг The Wolves NFT-ийн эзэмшигчид дотроос, бусад бүтээгдэхүүн үйлчилгээг идэвхтэй хэрэглэдэг, оролцдог хүмүүсээс Хяналтын зөвлөл сонгоно. Үүнд:",
          "- The Wolves DAO-аас санаачилж буй үйл ажиллагаанд биечлэн идэвхтэй оролцдог гишүүд;",
          "- Ultra rare-1, Very rare-2, rare-3 мөн volume ихтэй чононууд;",
          "- Ховор badge-тай чононууд;",
          "- Санаачилсан төсөл нь The Wolves DAO-аас дэмжигдсэн гишүүд;",
          "- Бусад нэмэлт шалгуурууд",
        ],
      },
    ],
  },
];

function Faq() {
  return (
    <Box>
      <Accordion allowToggle>
        {Array.map((el, ind) => (
          <AccordionItem key={ind} borderColor={"#382c2d"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text
                    padding={"20px 0"}
                    fontFamily={"Golos Text"}
                    lineHeight={"24px"}
                    color={"#FCFCFC"}
                    fontSize={["16px", "18px"]}
                  >
                    {el.title}
                  </Text>
                </Box>
                <AccordionIcon boxSize={"32px"} color={"white"} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {el.child.map((ch) => (
                <Box key={ch.desc}>
                  <Text
                    key={ind}
                    w="95%"
                    mx="auto"
                    fontFamily={"Rubik"}
                    lineHeight={"24px"}
                    fontSize={{ base: "16px" }}
                    fontWeight={"400"}
                    color={"#FCFCFC"}
                  >
                    {ch.desc}
                  </Text>
                  {ch.child.map((chi) => (
                    <Text
                      key={chi}
                      w="95%"
                      mx="auto"
                      fontFamily={"Rubik"}
                      lineHeight={"24px"}
                      fontSize={{ base: "16px" }}
                      fontWeight={"400"}
                      color={"#FCFCFC"}
                    >
                      {chi}
                    </Text>
                  ))}
                </Box>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
        <AccordionItem borderColor={"#382c2d"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text
                  padding={"20px 0"}
                  fontFamily={"Golos Text"}
                  lineHeight={"24px"}
                  color={"#FCFCFC"}
                >
                  Саналын эрхтэй гишүүдийн жагсаалт харах
                </Text>
              </Box>
              <AccordionIcon boxSize={"32px"} color={"white"} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
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
                The Wolves DAO-ийн саналын эрхтэй эхний 100 гишүүд нь анх DAO-г
                санаачилж, хөгжүүлэлтэнд идэвхтэй оролцсон комюнити гишүүд,
                MongolNFT платформ дээр 2023 онд арилжааны идэвх өндөртэй байсан
                болон хамгийн олон NFT эзэмшдэг хэрэглэгчдээс бүрдүүлсэн.
                Саналын эрхтэй гишүүдийн жагсаалтыг
                <Link
                  textDecoration={"underline !important"}
                  href="/doc/THE_WOLVES_DAO_List_final.pdf"
                  target="_blank"
                >
                  {" "}
                  линкээр орж харах боломжтой.
                </Link>
              </Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default Faq;
