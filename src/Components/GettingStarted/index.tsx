import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import localFont from "next/font/local";
import { BiLogoDiscourse } from "react-icons/bi";
const myFont = localFont({ src: "../fonts/revolution/revolution-bold.otf" });
function GettingStarted() {
  return (
    <Stack justifyContent={"space-between"} h={{ lg: "2433px" }}>
      <Stack h={{ sm: "292px" }} justifyContent={"space-between"}>
        <Box w={"125px"} h={"52px"}>
          <Text
            {...myFont.style}
            fontWeight={"700"}
            fontSize={"32px"}
            lineHeight={"32px"}
            color={"#DFFF24"}
          >
            001
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
              Санал гаргах
            </Text>
          </Box>
          <Button
            color={"black"}
            bg={"white"}
            w={"105px"}
            h="24px"
            gap={"8px"}
            border={"1px solid black"}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Box w={"14px"} h={"14px"}>
                <BiLogoDiscourse size="14px" />
              </Box>
              <Text fontWeight={"700"} fontSize={"15px"} lineHeight={"18px"}>
                Discourse
              </Text>
            </Stack>
          </Button>
        </Stack>
        <Stack h={{ xl: "52px" }}>
          <Box>
            <Text
              fontFamily={"Golos Text"}
              lineHeight={{
                base: "12px",
                sm: "",
                xl: "18px",
              }}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              fontWeight={"600"}
              color={"white"}
            >
              Хэн санал гаргах боломжтой вэ:
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily={"Golos Text"}
              lineHeight={{
                base: "12px",
                sm: "",
                xl: "18px",
              }}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              fontWeight={"600"}
              color={"white"}
            >
              1. The Wolves NFT эзэмшигч хүн бүр /At least 1 NFT/
            </Text>
          </Box>
        </Stack>
        <Box h={{ sm: "146px" }} id="started2">
          <Text
            fontFamily={"Rubik"}
            fontWeight={"400"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
          >
            1. Хамтран ажиллах бизнес төслийн саналууд:
          </Text>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"400"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
          >
            2. MongolNFT-д хүргүүлж ажил хэрэг болгож хамтран ажиллах саналууд:
          </Text>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"400"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
          >
            3. Хаалттай арга хэмжээнүүдийг зохиох саналууд:
          </Text>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"400"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
          >
            4. Нийгэм болон байгальд тустай үйл ажиллагаа хэрэгжүүлэх саналууд:
          </Text>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"400"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
          >
            5. The Wolves DAO-ын засаглал болон үйл ажиллагааг сайжруулах
            саналууд:
          </Text>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"400"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
          >
            6. The Wolves NFT эзэмшигчийн хүрээг өргөжүүлэх, The Wolves NFT-ийн
            хэрэглээг тэглэх саналууд
          </Text>
        </Box>
      </Stack>

      <Stack h={{ md: "460px" }} justifyContent={"space-between"}>
        <Box w={"125px"} h={{ xl: "52px" }}>
          <Text
            {...myFont.style}
            fontWeight={"700"}
            fontSize={"32px"}
            lineHeight={"32px"}
            color={"#DFFF24"}
          >
            002
          </Text>
        </Box>
        <Stack
          direction={"row"}
          w={{ sm: "327px" }}
          justifyContent={"space-between"}
        >
          <Box w={{ sm: "205px" }} h={"24px"}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Саналыг шалгах
            </Text>
          </Box>
          <Button
            color={"black"}
            bg={"white"}
            w={"105px"}
            h="24px"
            gap={"8px"}
            border={"1px solid black"}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Box w={"14px"} h={"14px"}>
                <BiLogoDiscourse size="14px" />
              </Box>
              <Text fontWeight={"700"} fontSize={"15px"} lineHeight={"18px"}>
                Discourse
              </Text>
            </Stack>
          </Button>
        </Stack>
        <Stack h={{ xl: "52px" }}>
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
              Коммюнити хариуцсан менежер нь The Wolves DAO-д ирж буй бүхий л
              саналуудыг хүлээн авч, нийцлийг хянаж, эцэслээд шаардлага хангасан
              саналыг тухай бүрд нь (ASAP горимоор) Хяналтын зөвлөлд оруулна.
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily={"Golos Text"}
              lineHeight={"18px"}
              fontSize={"15px"}
              fontWeight={"600"}
              color={"white"}
            ></Text>
          </Box>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "314px" }}>
          <Box w={{ xl: "826px" }} h={{ xl: "314px" }} pl={"10px"} mx={"auto"}>
            <Text
              fontFamily={"Rubik"}
              fontWeight={"700"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
            >
              Коммюнити хариуцсан менежер (Community manager):
            </Text>
            <Text
              fontFamily={"Rubik"}
              fontWeight={"400"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
            >
              1. Коммюнити хариуцсан менежер нь The Wolves DAO-д ирж буй бүхий д
              саналуудыг хүлээн авч, нийцлийг хангуулж Хяналтын зөвлөлд
              шилжүүлнэ.
            </Text>
            <Text
              fontFamily={"Rubik"}
              fontWeight={"400"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
            >
              2. Коммюнити хариуцсан менежер нь Хяналтын зөвлөлийн гишүүдийн
              ротацыг хариуцан 3 болон 9 дүгээр саруудад The Wolves DAO-д санал
              оруулж шийдвэрлүүлнэ.
            </Text>
            <Text
              fontFamily={"Rubik"}
              fontWeight={"400"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
            >
              3. Коммюнити хариуцсан менежер нь Саналын эрхтэй гишүүдийн ротацыг
              хариуцан улирал тутамд Discourse программын (Trust system)
              түвшингээр нь эрэмбэлж шинэчлэл хийнэ.
            </Text>

            <Text
              fontFamily={"Rubik"}
              fontWeight={"400"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
            >
              4. Коммюнити хариуцсан менежерийг хагас жил тутмын санал
              хураалтаар сонгож ажиллуулах бөгөөд нийт 2 удаа (term) сонгогдож
              ажиллах боломжтой. Хугацаанаас нь өмнө ажлаас чөлөөлөх асуудлыг
              The Wolves DAO-аар санал хурааж шийдвэрлэнэ.
            </Text>

            <Box id="started3">
              <Text
                fontFamily={"Rubik"}
                fontWeight={"400"}
                fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                lineHeight={{ base: "13.8px", sm: "20.7px" }}
                color={"#E0E0E0"}
              >
                5. Коммюнити хариуцсан менежер нь сарын ..... цалинтайгаар
                ажиллана. Цалингийн хэмжээ, урамшуулал олгох талаарх асуудлыг
                The Wolves DAO-аар санал хурааж шийдвэрлэнэ.
              </Text>{" "}
            </Box>
            <Text
              fontFamily={"Rubik"}
              fontWeight={"400"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
            >
              6. The Wolves NFT эзэмшигчийн хүрээг өргөжүүлэх, The Wolves
              NFT-ийн хэрэглээг тэглэх саналууд
            </Text>
            <Text
              fontFamily={"Rubik"}
              fontWeight={"400"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
            >
              7. Discourse программын Trust system-ийг ашиглан идэвхтэй гишүүд
              нэр дэвших болон дэвшүүлэх эрхтэй бөгөөд санал хурааж томилно.
            </Text>
          </Box>
        </Box>
      </Stack>

      <Stack h={{ md: "459px" }} justifyContent={"space-between"}>
        <Box w={"125px"} h={"52px"}>
          <Text
            {...myFont.style}
            fontWeight={"700"}
            fontSize={"32px"}
            lineHeight={"32px"}
            color={"#DFFF24"}
          >
            003
          </Text>
        </Box>
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
              Хянах, зөвшөөрөх
            </Text>
          </Box>
          <Button
            color={"black"}
            bg={"white"}
            w={"105px"}
            h="24px"
            gap={"8px"}
            border={"1px solid black"}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Box w={"14px"} h={"14px"}>
                <BiLogoDiscourse size="14px" />
              </Box>
              <Text fontWeight={"700"} fontSize={"15px"} lineHeight={"18px"}>
                Discourse
              </Text>
            </Stack>
          </Button>
        </Stack>
        <Stack
          h={{ xl: "93px" }}
          alignItems={"center"}
          justifyContent={"center"}
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
              Хяналтын зөвлөл нь Коммюнити менежерээс эцэслэгдэн ирсэн
              саналуудыг The Wolves DAO-ийн зорилго болон санхүүжилтийн
              боломжтой уялдуулан хянаад нээлттэй хэлэлцүүлэг рүү оруулах
              эсэхийг тухай бүрд нь (ASAP горимоор) санал хурааж, энгийн олонхын
              (тогтоосон хугацаанд санал өгсөн гишүүдийн 50+1 хувь) саналаар
              шийдвэрлэнэ. Нэмэлт өөрчлөлт хийх шаардлагатай бол төслийн саналыг
              төсөл гаргагчид буцаана.
            </Text>
          </Box>
        </Stack>
        <Stack
          w={{ xl: "846px" }}
          h={{ xl: "314px" }}
          justifyContent={"center"}
        >
          <Box
            w={{ xl: "826px" }}
            h={{ xl: "314px" }}
            pl={"10px"}
            mx={"auto"}
            py={"auto"}
          >
            <Text
              fontFamily={"Rubik"}
              fontWeight={"700"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              mt={"20px"}
              ml={"-3px"}
            >
              Хяналтын зөвлөл (Monitoring council):
            </Text>
            <Text
              fontFamily={"Rubik"}
              fontWeight={"400"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
            >
              1. Хяналтын зөвлөл нь Коммюнити хариуцсан менежерээс ирүүлсэн
              төслүүдийг тухай бүрд нь (ASAP горимоор) хянаад The Wolves DAO-аар
              хэлэлцүүлж, санал хураалтад оруулах эсэхийг дотооддоо санал хурааж
              шийдвэрлэнэ.
            </Text>
            <Text
              fontFamily={"Rubik"}
              fontWeight={"400"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
            >
              2. Хяналтын зөвлөл нь 6 болон 12 дугаар саруудад, онцгой
              шаардлагатай тохиолдолд гишүүдийн 3-ны 2-ийн саналаар ээлжит
              бусаар чуулж Коммюнити хариуцсан менежерийн тайланг сонсох бөгөөд
              үргэлжлүүлэн ажиллуулах эсвэл чөлөөлөх асуудлаар The Wolves DAO-д
              санал оруулж шийдвэрлүүлнэ.
            </Text>
            <Box id="started4">
              <Text
                fontFamily={"Rubik"}
                fontWeight={"400"}
                fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                lineHeight={{ base: "13.8px", sm: "20.7px" }}
                color={"#E0E0E0"}
              >
                3. Хяналтын зөвлөл нь 15 хүний бүрэлдэхүүнтэй байх бөгөөд хагас
                жил тутмын санал хураалтаар 3-5 гишүүнийг ротациар сэлгэн
                ажиллуулна. Хяналтын зөвлөлийн гишүүнийг ротациар болон
                хугацаанаас нь өмнө чөлөөлөх, томилох асуудлыг The Wolves
                DAO-аар санал хурааж шийдвэрлэнэ.
              </Text>
            </Box>
            <Text
              fontFamily={"Rubik"}
              fontWeight={"400"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
            >
              4. Discourse программын Trust system-ийг ашиглан DAO-ийн идэвхтэй
              гишүүд хэлэлцүүлгийн явцад өөрөө нэр дэвших болон бусдыг нэр
              дэвшүүлэх эрхтэй бөгөөд санал хураалтад оруулна.
            </Text>
          </Box>
        </Stack>
      </Stack>
      <Stack h={{ md: "121px" }} alignItems={"space-around"} id="started5">
        <Box w={"125px"} h={"52px"}>
          <Text
            {...myFont.style}
            fontWeight={"700"}
            fontSize={"32px"}
            lineHeight={"32px"}
            color={"#DFFF24"}
          >
            004
          </Text>
        </Box>
        <Stack
          direction={"row"}
          w={{ sm: "300px" }}
          justifyContent={"space-between"}
        >
          <Box w={{ sm: "180px" }} h={"24px"}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Final Proposal
            </Text>
          </Box>
          <Button
            color={"black"}
            bg={"white"}
            w={"105px"}
            h="24px"
            gap={"8px"}
            border={"1px solid black"}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Box w={"14px"} h={"14px"}>
                <BiLogoDiscourse size="14px" />
              </Box>
              <Text fontWeight={"700"} fontSize={"15px"} lineHeight={"18px"}>
                Discourse
              </Text>
            </Stack>
          </Button>
        </Stack>
        <Box w={{ xl: "846px" }} h={{ xl: "272px" }}>
          <Text
            fontFamily={"Rubik"}
            fontWeight={"700"}
            fontSize={{ base: "10px", sm: "13px", md: "15px" }}
            lineHeight={{ base: "13.8px", sm: "20.7px" }}
            color={"#E0E0E0"}
            mt={"20px"}
          >
            Хяналтын зөвлөлөөр шийдэгдсэн саналуудыг Community Manager нь Public
            тохиргоотой болгоно.
          </Text>
        </Box>
      </Stack>

      <Stack h={{ sm: "193px" }} justifyContent={"space-between"}>
        <Box w={{ sm: "125px" }} h={"52px"}>
          <Text
            {...myFont.style}
            fontWeight={"700"}
            fontSize={"32px"}
            lineHeight={"32px"}
            color={"#DFFF24"}
          >
            005
          </Text>
        </Box>
        <Stack
          direction={"row"}
          w={{ sm: "412px" }}
          justifyContent={"space-between"}
        >
          <Box w={{ sm: "300px" }} h={{ sm: "24px" }} id="started6">
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Хэлэлцүүлэг (1-5 хоног)
            </Text>
          </Box>
          <Button
            color={"black"}
            bg={"white"}
            w={"105px"}
            h="24px"
            gap={"8px"}
            border={"1px solid black"}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Box w={"14px"} h={"14px"}>
                <BiLogoDiscourse size="14px" />
              </Box>
              <Text fontWeight={"700"} fontSize={"15px"} lineHeight={"18px"}>
                Discourse
              </Text>
            </Stack>
          </Button>
        </Stack>
        <Stack w={{ xl: "890px" }} h={{ xl: "90px" }}>
          <Box>
            <Text
              fontFamily={"Golos Text"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"600"}
            >
              Хяналтын зөвлөлөөс зөвшөөрөгдсөн саналыг (proposal) Discourse
              программ дээр нийт гишүүдийн дунд нээлттэй хэлэлцүүлэг явуулна.
              Хэлэлцүүлгээс гарсан зохих үр ашигтай саналыг тусгасан төслийн
              санал (proposal) дээр санал хураах ажиллагааг явуулна.
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily={"Golos Text"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"600"}
            >
              Хэлэлцүүлэгт оролцож байгаа бүх хүмүүс чонотой байх ёстой.
            </Text>
          </Box>
        </Stack>
      </Stack>

      <Stack h={{ md: "547px" }}>
        <Box w={"125px"} h={"52px"}>
          <Text
            {...myFont.style}
            fontWeight={"700"}
            fontSize={"32px"}
            lineHeight={"32px"}
            color={"#DFFF24"}
          >
            006
          </Text>
        </Box>
        <Stack
          direction={"row"}
          w={{ xl: "432px" }}
          justifyContent={"space-between"}
          h={{ sm: "24px" }}
        >
          <Box w={{ sm: "320px" }} h={{ sm: "24px" }}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Санал хураалт (1-3 хоног)
            </Text>
          </Box>
          <Button
            color={"black"}
            bg={"white"}
            w={"105px"}
            h="24px"
            gap={"8px"}
            border={"1px solid black"}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Text fontWeight={"700"} fontSize={"15px"} lineHeight={"18px"}>
                Voting Page
              </Text>
            </Stack>
          </Button>
        </Stack>

        <Stack w={{ xl: "897px" }} h={{ xl: "62px" }} justifyContent={"center"}>
          <Box>
            <Text
              fontFamily={"Golos Text"}
              fontSize={{ base: "10px", sm: "13px", md: "15px" }}
              lineHeight={{ base: "13.8px", sm: "20.7px" }}
              color={"#E0E0E0"}
              fontWeight={"600"}
            >
              Саналын эрхтэй гишүүдийн дунд санал хураалт явуулж, энгийн олонхын
              (тогтоосон хугацаанд санал өгсөн гишүүдийн 50+1 хувь) саналаар
              тухайн санал дэмжигдсэн эсэхийг эцэслэн тогтооно.
            </Text>
          </Box>
        </Stack>
        <Stack h={{ xl: "391px" }} justifyContent={"space-between"}>
          <Stack w={{ xl: "846px" }} h={{ xl: "293px" }}>
            <Box w={{ xl: "826px" }}>
              <Text
                fontFamily={"Rubik"}
                fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                lineHeight={{ base: "13.8px", sm: "20.7px" }}
                color={"#E0E0E0"}
              >
                Саналын эрхтэй гишүүд (Voting members)
              </Text>
            </Box>
            <Box pl={"5px"} w={{ xl: "826px" }}>
              <Stack direction={"row"}>
                <Box>
                  <Text>1.</Text>
                </Box>
                <Box>
                  <Text
                    fontFamily={"Rubik"}
                    fontWeight={"400"}
                    fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                    lineHeight={{ base: "13.8px", sm: "20.7px" }}
                    color={"#E0E0E0"}
                  >
                    Саналын эрхтэй гишүүд нь The Wolves DAO-ийн бүхий л үйл
                    ажиллагаанд шаардлагатай санал хураалтад оролцоно.
                  </Text>
                </Box>
              </Stack>
              <Text
                fontFamily={"Rubik"}
                fontWeight={"700"}
                fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                lineHeight={{ base: "13.8px", sm: "20.7px" }}
                color={"#E0E0E0"}
              >
                2. Саналын эрхтэй нийт 100 гишүүн байна. Квотыг дараах байдлаар
                хуваарилна. Үүнд:
              </Text>
            </Box>

            <Stack w={{ xl: "783px" }} h={{ xl: "203px" }} pl={"15px"}>
              <Box h={{ xl: "84px" }} w={{ xl: "783px" }}>
                <Text
                  fontFamily={"Rubik"}
                  fontWeight={"400"}
                  fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                  lineHeight={{ base: "13.8px", sm: "20.7px" }}
                  color={"#E0E0E0"}
                >
                  a. 70 гишүүдийг Discourse программын Trust system-ийг ашиглан
                  идэвх, санаачилгын түвшин (level), тэмдэг (badge) зэргийг нь
                  харгалзан сонгоно.
                </Text>
                <Text
                  fontWeight={"400"}
                  fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                  lineHeight={{ base: "13.8px", sm: "20.7px" }}
                  color={"#E0E0E0"}
                  fontFamily={"Rubik"}
                >
                  b. 30 гишүүдийг The Wolves NFT-ийн эзэмшигчид дотроос, бусад
                  бүтээгдэхүүн үйлчилгээг идэвхтэй хэрэглэдэг, оролцдог
                  хүмүүсээс сонгоно. Үүнд:{" "}
                </Text>
              </Box>
              <Box h={"105px"} ml={"10px"}>
                <Text
                  fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                  lineHeight={{ base: "13.8px", sm: "20.7px" }}
                  color={"#E0E0E0"}
                  fontWeight={"400"}
                  fontFamily={"Rubik"}
                >
                  • Мини тоглоомд түрүүлсэн гишүүн;{" "}
                </Text>
                <Text
                  fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                  lineHeight={{ base: "13.8px", sm: "20.7px" }}
                  color={"#E0E0E0"}
                  fontWeight={"400"}
                  fontFamily={"Rubik"}
                >
                  {" "}
                  • The Wolves DAO-аас санаачилж буй үйл ажиллагаанд биечлэн
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
                  • Ultra rare-1,Very rare-2, rare-3 мөн volume ихтэй чононууд;{" "}
                </Text>
                <Text
                  fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                  lineHeight={{ base: "13.8px", sm: "20.7px" }}
                  color={"#E0E0E0"}
                  fontWeight={"400"}
                  fontFamily={"Rubik"}
                >
                  {" "}
                  • Цаашдаа Ховор badge-тай чононууд;{" "}
                </Text>
                <Text
                  fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                  lineHeight={{ base: "13.8px", sm: "20.7px" }}
                  color={"#E0E0E0"}
                  fontWeight={"400"}
                  fontFamily={"Rubik"}
                >
                  {" "}
                  • Санаачилсан төсөл нь The Wolves DAO-аас дэмжигдсэн гишүүд;
                </Text>
              </Box>
            </Stack>
          </Stack>
          <Box h={{ lg: "84px" }} pl={"5px"}>
            <Stack direction={"row"}>
              <Box>
                <Text> 3.</Text>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "10px", sm: "13px", md: "15px" }}
                  lineHeight={{ base: "13.8px", sm: "20.7px" }}
                  fontWeight={"400"}
                  fontFamily={"Rubik"}
                  color={"#E0E0E0"}
                >
                  Саналын эрхтэй нийт 100 гишүүд нь нээлттэй хэлэлцүүлэгт
                  оролцож байгаа идэвх, санаачилга, санал хураалтад оролцож буй
                  оролцооны түвшин (level) зэргээсээ шалтгаалж итгэлцлийн
                  тогтолцоонд (Trust system) түвшингээр нь эрэмбэлж, улирал
                  тутамд 90-ээс 100-ын хооронд (relegation zone 90-100) байрлаж
                  буй гишүүдийг чөлөөлж өөр саналын эрхгүй The Wolves DAO-ийн
                  гишүүдээс нөхнө.
                </Text>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>

      <Stack h={"145px"} id="started7">
        <Box w={"125px"} h={"52px"}>
          <Text
            {...myFont.style}
            fontWeight={"700"}
            fontSize={"32px"}
            lineHeight={"32px"}
            color={"#DFFF24"}
          >
            007
          </Text>
        </Box>
        <Stack
          direction={"row"}
          w={{ sm: "360px" }}
          justifyContent={"space-between"}
        >
          <Box w={{ sm: "300px" }} h={{ sm: "24px" }}>
            <Text
              fontFamily={"Golos Text"}
              fontWeight={"700"}
              fontSize={{ sm: "24px" }}
              lineHeight={{ sm: "24px" }}
              color={"#DFFF24"}
            >
              Саналын хэрэгжилт
            </Text>
          </Box>
          <Button
            color={"black"}
            bg={"white"}
            w={"105px"}
            h="24px"
            gap={"8px"}
            border={"1px solid black"}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Text fontWeight={"700"} fontSize={"15px"} lineHeight={"18px"}>
                Voting Page
              </Text>
            </Stack>
          </Button>
        </Stack>
        <Stack w={{ xl: "749px" }} h={"62px"} justifyContent={"center"}>
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
              DAO-р дэмжигдсэн саналуудын хэрэгжилтийн репортыг Community
              manager санал тус бүрийн доор статус оруулж өгнө.
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default GettingStarted;
