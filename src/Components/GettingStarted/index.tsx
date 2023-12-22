import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/navigation";
const myFont = localFont({ src: "../../fonts/revolution/revolution-bold.otf" });
function GettingStarted() {
  return (
    <Stack
      justifyContent={"space-between"}
      // h={{ lg: "3199px" }}
      mx={"5px"}
    >
      <Stack h={{ sm: "190px" }} justifyContent={"space-evenly"} id="started1">
        <Box h={{ sm: "52px" }}>
          <Text
            {...myFont.style}
            fontWeight={"700"}
            fontSize={{ base: "24px", sm: "32px" }}
            lineHeight={{ base: "24px", sm: "32px" }}
            color={"#DFFF24"}
          >
            001 <span style={{ fontFamily: "sans-serif" }}>The Wolves DAO</span>
          </Text>
        </Box>
        <Stack
          direction={"row"}
          w={{ sm: "290px" }}
          justifyContent={"space-between"}
        >
          <Box w={{ sm: "158px" }} h={"24px"}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Зорилго
            </Text>
          </Box>
        </Stack>
        <Stack w={{ xl: "800px" }}>
          <Box>
            <Text
              fontFamily={"Golos Text"}
              lineHeight={{
                base: "15px",
                sm: "",
                xl: "22px",
              }}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              fontWeight={"600"}
              color={"white"}
              id="started12"
              textAlign={"justify"}
            >
              The Wolves NFT-ийн үнэ цэнэ, хэрэглээг нэмэгдүүлэх, чонон сүргийн
              нэр хүндийг нийгэмд таниулах болон гишүүдийн тоог өсгөх,
              идэвхжүүлэх чиглэлд хэрэгжүүлэх саналуудыг The Wolves DAO-р
              дамжуулан гишүүдээсээ хүлээн авна.
            </Text>
          </Box>
        </Stack>
      </Stack>
      <Stack justifyContent={"space-between"}>
        <Stack
          direction={"row"}
          w={{ md: "500px" }}
          maxW={"500px"}
          justifyContent={"space-between"}
          h="48px"
          alignItems={"center"}
        >
          <Box w={{ md: "355px" }} h={"24px"}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Хүлээн авах саналын төрлүүд
            </Text>
          </Box>
        </Stack>

        <Box w={{ xl: "826px" }}>
          <Box ml={"10px"}>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              • The Wolves комюнититэй хамтран ажиллах бизнес төслийн саналууд
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              • The Wolves комюнити гишүүдийг хамруулсан хаалттай арга
              хэмжээнүүдийг зохиох саналууд
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              • Сайн үйлсийн аян, хандив, мод тарих зэрэг нийгэм болон байгальд
              тустай үйл ажиллагаа хэрэгжүүлэх саналууд;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
              id="started13"
            >
              {" "}
              • The Wolves NFT эзэмшигчдийн хүрээг тэлэх, The Wolves NFT-ийн
              хэрэглээг нэмэгдүүлэх саналууд;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              • The Wolves NFT эзэмшигчдэд бодит үр өгөөж бий болгох
              санаачилгуудыг MongolNFT-д хүргүүлэн ажил хэрэг болгож хамтран
              ажиллах саналууд;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              • The Wolves DAO-ийн засаглал болон үйл ажиллагааг сайжруулах
              саналууд.
            </Text>
          </Box>
        </Box>
      </Stack>
      <Stack h={{ md: "218px" }} justifyContent={"space-between"}>
        <Stack
          direction={"row"}
          w={{ sm: "351px" }}
          justifyContent={"space-between"}
        >
          <Box w={{ sm: "229px" }} h={{ sm: "24px" }}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Саналын загвар
            </Text>
          </Box>
        </Stack>
        <Stack
          h={{ xl: "93px" }}
          alignItems={"start"}
          justifyContent={"center"}
          w={"100%"}
        >
          <Box>
            <Text
              fontFamily={"Golos Text"}
              lineHeight={{
                base: "12px",
                sm: "15px",
                xl: "18px",
              }}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              fontWeight={"600"}
              color={"white"}
            >
              Санал гаргахдаа доорх загварын дагуу мэдээллээ үнэн зөв, гүйцэт
              бөглөж ирүүлэх шаардлагатай. Үүнд:
            </Text>
          </Box>
        </Stack>
        <Box w={{ xl: "826px" }} h={{ xl: "220px" }}>
          <Box h={{ lg: "220px" }} ml={"10px"}>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              • Саналын нэр;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              • Саналын товч танилцуулга;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              • Санал хэрэгжих үе шатууд болон харгалзах огноонууд;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              • The Wolves комюнитид өгөх өгөөж, үр нөлөө (үндэслэл бүхий
              тооцоололтой);
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
              id="started2"
            >
              {" "}
              • Хариуцан гүйцэтгэх эзэн болон багийн гишүүдийн товч танилцуулга
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              • Саналаас гарах бүтээгдэхүүн үйлчилгээ байгаа бол зураг болон
              товч танилцуулга:
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              • Хүсэж буй санхүүжилтийн хэмжээ (шаардлагатай бол)
            </Text>
          </Box>
        </Box>
      </Stack>
      <Stack h={{ md: "159px" }} alignItems={"space-around"}>
        <Box h={{ sm: "52px" }}>
          <Text
            {...myFont.style}
            fontWeight={"700"}
            fontSize={{ base: "24px", sm: "32px" }}
            lineHeight={{ base: "24px", sm: "32px" }}
            color={"#DFFF24"}
          >
            002{" "}
            <span style={{ fontFamily: "sans-serif" }}>Саналын процесс</span>
          </Text>
        </Box>
        <Stack
          direction={"row"}
          w={{ sm: "300px" }}
          justifyContent={"space-between"}
        >
          <Link href={"/voting"}>
            <Box w={{ sm: "180px" }} h={"24px"}>
              <Text
                fontFamily={"Golos Text"}
                fontWeight={"700"}
                fontSize={{ sm: "24px" }}
                lineHeight={{ sm: "24px" }}
                color={"#DFFF24"}
                id="started22"
              >
                Санал гаргах
              </Text>
            </Box>
          </Link>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "272px" }}>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"700"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
            mt={"20px"}
            textAlign={"justify"}
          >
            The Wolves NFT эзэмшигч хүн бүр (багаар байж болно) нээлттэйгээр The
            Wolves DAO-д санал гаргах боломжтой. The Wolves NFT эзэмшигчид
            саналаа Discussion-ий New proposal хэсгээс гаргана.
          </Text>
        </Box>
      </Stack>
      <Stack h={{ md: "135px" }} alignItems={"space-around"}>
        <Stack
          direction={"row"}
          w={{ sm: "300px" }}
          justifyContent={"space-between"}
        >
          {" "}
          <Link href={"/voting"}>
            <Box w={{ sm: "180px" }} h={"24px"}>
              <Text
                fontFamily={"Golos Text"}
                fontWeight={"700"}
                fontSize={{ sm: "24px" }}
                lineHeight={{ sm: "24px" }}
                color={"#DFFF24"}
              >
                Санал шалгах
              </Text>
            </Box>
          </Link>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "272px" }}>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"700"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
            mt={"20px"}
            id="started23"
            textAlign={"justify"}
          >
            Комюнити менежер нь The Wolves DAO-д ирж буй бүхий л саналуудыг
            хүлээн авч, шаардлагад нийцсэн эсэхийг шалгаж эцэслээд тухай бүрд нь
            Хяналтын зөвлөлд танилцуулна. Загварын дагуу саналаа гаргаагүй эсвэл
            дутуу мэдээлэл ирүүлсэн бол Комюнити менежер нь шаардлагад нийцээгүй
            шалтгаанаар буцааж болно.
          </Text>
        </Box>
      </Stack>
      <Stack h={{ md: "148px" }} alignItems={"space-around"}>
        <Stack
          direction={"row"}
          w={{ sm: "300px" }}
          justifyContent={"space-between"}
        >
          <Link href={"/voting"}>
            <Box w={{ sm: "180px" }} h={"24px"}>
              <Text
                fontFamily={"Golos Text"}
                fontWeight={"700"}
                fontSize={{ sm: "24px" }}
                lineHeight={{ sm: "24px" }}
                color={"#DFFF24"}
              >
                Санал хянах
              </Text>
            </Box>
          </Link>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "272px" }}>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"700"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
            mt={"20px"}
            id="started24"
            textAlign={"justify"}
          >
            Хяналтын зөвлөл нь Комюнити менежерээс эцэслэгдэн ирсэн саналуудыг
            The Wolves DAO-ийн зорилго болон санхүүжилтийн боломжтой уялдуулан
            хянаад нээлттэй хэлэлцүүлэг рүү оруулах эсэхийг тухай бүрд нь санал
            хурааж, энгийн олонхын (тогтоосон хугацаанд санал өгсөн гишүүдийн
            50+1 хувь) саналаар шийдвэрлэнэ. Саналд нэмэлт эсвэл өөрчлөлт хийх
            шаардлагатай бол төслийн саналыг буцааж болно.
          </Text>
        </Box>
      </Stack>{" "}
      <Stack h={{ md: "122px" }} alignItems={"space-around"}>
        <Stack
          direction={"row"}
          w={{ sm: "300px" }}
          justifyContent={"space-between"}
        >
          {" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_DISCUSSION_URL}`}
            target="_blank"
          >
            <Box w={{ sm: "230px" }} h={"24px"}>
              <Text
                fontFamily={"Golos Text"}
                fontWeight={"700"}
                fontSize={{ sm: "24px" }}
                lineHeight={{ sm: "24px" }}
                color={"#DFFF24"}
                id="started25"
              >
                Хэлэлцүүлэг хийх
              </Text>
            </Box>
          </Link>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "272px" }}>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"700"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
            mt={"20px"}
            textAlign={"justify"}
          >
            Хяналтын зөвлөлөөр шийдвэрлэгдсэн саналуудыг Discussion хэсэг дээр
            нийт гишүүдийн буюу The Wolves NFT эзэмшигчдийн дунд нээлттэй
            хэлэлцүүлнэ. Хэлэлцүүлгийн үргэлжлэх хугацаа нь саналаас шалтгаалан
            5 хүртэлх хоног байна.
          </Text>
        </Box>
      </Stack>
      <Stack h={{ md: "142px" }} alignItems={"space-around"}>
        <Stack
          direction={"row"}
          w={{ sm: "300px" }}
          justifyContent={"space-between"}
        >
          <Link href={"/voting"}>
            <Box w={{ sm: "180px" }} h={"24px"}>
              <Text
                fontFamily={"Golos Text"}
                fontWeight={"700"}
                fontSize={{ sm: "24px" }}
                lineHeight={{ sm: "24px" }}
                color={"#DFFF24"}
              >
                Санал хураах
              </Text>
            </Box>
          </Link>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "272px" }}>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"700"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
            mt={"20px"}
            id="started26"
            textAlign={"justify"}
          >
            Хэлэлцүүлгийн тогтоосон хугацаа дууссаны дараа Саналын эрхтэй
            гишүүдийн дунд санал хураалт явуулж, энгийн олонхын (тогтоосон
            хугацаанд санал өгсөн гишүүдийн 50+1 хувь) саналаар тухайн санал
            дэмжигдсэн эсэхийг эцэслэн тогтооно. Санал хураалт үргэлжлэх хугацаа
            нь саналаас шалтгаалан 3 хүртэлх хоног байна.
          </Text>
        </Box>
      </Stack>
      <Stack h={{ md: "96px" }} alignItems={"space-around"}>
        <Stack
          direction={"row"}
          w={{ sm: "300px" }}
          justifyContent={"space-between"}
        >
          <Link href={"/voting"}>
            <Box w={{ sm: "220px" }} h={"24px"}>
              <Text
                fontFamily={"Golos Text"}
                fontWeight={"700"}
                fontSize={{ sm: "24px" }}
                lineHeight={{ sm: "24px" }}
                color={"#DFFF24"}
                id="started3"
              >
                Санал хэрэгжилт
              </Text>
            </Box>
          </Link>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "272px" }}>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"700"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
            mt={"20px"}
            textAlign={"justify"}
          >
            Комюнити менежер нь батлагдсан саналуудын хэрэгжилтэд хяналт тавьж
            шаардлагатай мэдээллүүдийг санал тус бүрийн Report хэсэгт оруулна.
          </Text>
        </Box>
      </Stack>
      <Stack h={{ md: "161px" }}>
        <Box h={{ sm: "52px" }}>
          <Text
            {...myFont.style}
            fontWeight={"700"}
            fontSize={{ base: "24px", sm: "32px" }}
            lineHeight={{ base: "24px", sm: "32px" }}
            color={"#DFFF24"}
          >
            003{" "}
            <span style={{ fontFamily: "sans-serif" }}>
              The Wolves DAO Governance
            </span>
          </Text>
        </Box>
        <Stack
          direction={"row"}
          w={{ xl: "450px" }}
          justifyContent={"space-between"}
          h={{ sm: "24px" }}
        >
          <Box w={{ sm: "374px" }} h={{ sm: "24px" }}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
              id="started32"
            >
              The Wolves NFT эзэмшигчид
            </Text>
          </Box>
        </Stack>

        <Stack w={{ xl: "897px" }} h={{ xl: "62px" }} justifyContent={"center"}>
          <Box>
            <Text
              fontFamily={"Golos Text"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"600"}
              textAlign={"justify"}
            >
              The Wolves NFT эзэмшигч хүн бүр The Wolves DAO санал гаргах,
              Хэлэлцүүлэгт нээлттэй оролцох, комюнити менежер, хяналтын зөвлөл
              болон саналын эрхтэй гишүүнээр сонгогдох эрхтэй байна.
            </Text>
          </Box>
        </Stack>
      </Stack>
      <Stack
        h={{ md: "215px" }}
        alignItems={"space-around"}
        mb={{ lg: "40px", xl: "0" }}
      >
        <Stack
          direction={"row"}
          w={{ sm: "300px" }}
          justifyContent={"space-between"}
        >
          <Box w={{ sm: "300px" }} h={"24px"}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Комюнити менежер
            </Text>
          </Box>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "272px" }} pb="10px">
          <Text
            fontFamily={"Golos Text"}
            lineHeight={{
              base: "15px",
              sm: "22px",
              xl: "22px",
            }}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            fontWeight={"400"}
            color={"white"}
            textAlign={"justify"}
          >
            Комюнити менежер нь The Wolves DAO-ийн өдөр тутмын үйл ажиллагааг
            хариуцан сарын тогтмол цалинтайгаар ажиллана. Цалингийн хэмжээ,
            урамшуулал олгох талаарх асуудлыг The Wolves DAO-аар санал хурааж
            шийдвэрлэнэ. Комюнити менежер нь The Wolves DAO-д ирж буй саналуудыг
            хүлээн авах, Хяналтын зөвлөлд танилцуулах, хэлэлцүүлэг болон санал
            хураалтыг зохион байгуулах үүрэгтэй. Үүнтэй уялдуулан шаардлагад
            нийцээгүй саналуудыг буцаах, санал хураалтаар дэмжигдсэн саналуудад
            шаардлагатай санхүүжилтийг олгох, саналын хэрэгжилтэд хяналт тавих
            эрхтэй байна. Комюнити менежер нь 6 сар тутамд сонгогдох ба
            <span id="started33"> нийт</span> 2 удаа сонгогдон ажиллах
            боломжтой. Комюнити менежерт өөрийгөө эсвэл Discussion хэсгийн Trust
            system-ийг ашиглан идэвхтэй гишүүд дундаас нэр дэвшүүлэх боломжтой
            бөгөөд The Wolves DAO-аар санал хурааж шийдвэрлэнэ.
          </Text>
        </Box>
      </Stack>
      <Stack
        h={{ md: "265px", lg: "" }}
        alignItems={"space-around"}
        mb={{ base: "10px", lg: "30px", xl: "0" }}
        mt={{ md: "15px" }}
      >
        <Stack
          direction={"row"}
          w={{ sm: "300px" }}
          justifyContent={"space-between"}
        >
          <Box w={{ sm: "300px" }} h={"24px"}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Хяналтын зөвлөл
            </Text>
          </Box>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "272px" }} pb="10px">
          <Text
            fontFamily={"Golos Text"}
            lineHeight={{
              base: "15px",
              sm: "22px",
              xl: "22px",
            }}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            fontWeight={"400"}
            color={"white"}
            textAlign={"justify"}
          >
            Хяналтын зөвлөл нь 15 хүний бүрэлдэхүүнтэй байх ба саналуудыг The
            Wolves DAO-ийн зорилго болон санхүүжилтийн боломжтой уялдуулан хянаж
            шийдвэрлэнэ. Хяналтын зөвлөл нь Комюнити менежерээс ирүүлсэн
            саналуудыг тухай бүрд нь хянаад The Wolves DAO-аар хэлэлцүүлж, санал
            хураалтад оруулах эсэхийг дотооддоо санал хурааж шийдвэрлэх эрхтэй.
            Мөн Хяналтын зөвлөл нь 6 болон 12 дугаар саруудад, шаардлагатай
            тохиолдолд гишүүдийн 2/3-ийн саналаар ээлжит бусаар хуралдаж
            Комюнити менежерийн тайланг сонсох бөгөөд үргэлжлүүлэн ажиллуулах
            эсвэл чөлөөлөх асуудлаар The Wolves DAO-д санал оруулж
            шийдвэрлүүлнэ. Хагас жил тутмын санал хураалтаар Хяналтын зөвлөлийн
            3-5 гишүүнийг ротациар сэлгэн ажиллуулна.
            <span id="started34">Хяналтын </span> зөвлөлийн гишүүнийг ротациар
            болон хугацаанаас нь өмнө чөлөөлөх, томилох асуудлыг The Wolves
            DAO-аар санал хурааж шийдвэрлэнэ. Хяналтын зөвлөлд өөрийгөө эсвэл
            Discussion хэсгийн Trust system-ийг ашиглан идэвхтэй гишүүд дундаас
            нэр дэвшүүлэх боломжтой бөгөөд The Wolves DAO-аар санал хурааж
            шийдвэрлэнэ.
          </Text>
        </Box>
      </Stack>
      <Stack
        h={{ md: "344px" }}
        alignItems={"space-around"}
        mt={{ md: "10px", lg: "40px", xl: "0" }}
      >
        <Stack
          direction={"row"}
          w={{ sm: "300px" }}
          justifyContent={"space-between"}
        >
          <Box w={{ sm: "300px" }} h={"24px"}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Саналын эрхтэй гишүүд
            </Text>
          </Box>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "294px" }}>
          <Text
            fontFamily={"Golos Text"}
            lineHeight={{
              base: "15px",
              sm: "22px",
              xl: "22px",
            }}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            fontWeight={"600"}
            color={"white"}
            textAlign={"justify"}
          >
            Саналын эрхтэй гишүүд нь The Wolves DAO-ийн бүхий л санал хураалтад
            оролцож шийдвэр гаргах эрхтэй байна. Саналын эрхтэй нийт 100 гишүүн
            байх ба улирал тутамд тодорхой шалгуурын дагуу гишүүнчлэлийг
            шинэчилнэ. Санал хураах эрхтэй гишүүдийг сонгохдоо доорх шалгуурыг
            баримтална. Үүнд:
          </Text>
        </Box>
        <Box h={{ sm: "294px" }} ml={"10px"}>
          <Text
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
            fontWeight={"400"}
            fontFamily={"Rubik"}
            textAlign={"justify"}
          >
            •70 гишүүдийг Discussion хэсгийн Trust system-ийг ашиглан идэвх,
            санаачилгын түвшин (level), тэмдэг (badge) зэргийг нь харгалзан
            сонгоно.
          </Text>
          <Text
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
            fontWeight={"400"}
            fontFamily={"Rubik"}
            textAlign={"justify"}
          >
            {" "}
            • 30 гишүүдийг The Wolves NFT-ийн эзэмшигчид дотроос, бусад
            бүтээгдэхүүн үйлчилгээг идэвхтэй хэрэглэдэг, оролцдог хүмүүсээс
            Хяналтын зөвлөл сонгоно. Үүнд:
          </Text>
          <Text
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
            fontWeight={"400"}
            fontFamily={"Rubik"}
            textAlign={"justify"}
          >
            {" "}
            • Сайн үйлсийн аян, хандив, мод тарих зэрэг нийгэм болон байгальд
            тустай үйл ажиллагаа хэрэгжүүлэх саналууд;
          </Text>
          <Box h="160px">
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              - The Wolves DAO-ийн санаачилсан мини тоглоомд түрүүлсэн гишүүн;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
              textAlign={"justify"}
            >
              {" "}
              - The Wolves DAO-аас санаачилж буй үйл ажиллагаанд биечлэн
              идэвхтэй оролцдог гишүүд;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              - Ultra rare-1, Very rare-2, rare-3 мөн volume ихтэй чононууд;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              - Ховор badge-тай чононууд;
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              - Санаачилсан төсөл нь The Wolves DAO-аас дэмжигдсэн гишүүд;
            </Text>

            <Text
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"400"}
              fontFamily={"Rubik"}
            >
              {" "}
              - Бусад нэмэлт шалгуурууд
            </Text>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}

export default GettingStarted;
