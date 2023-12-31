"use client";
import React, { useEffect, useState } from "react";

import styled from "@/Components/Footer/index.module.scss";
import styles from "./index.module.scss";
import { Container } from "../Container";
import { BgDark } from "../BgDark";
import localFont from "next/font/local";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { AuthModal } from "../Account/AuthModal";
import { useAuth } from "@/Components/Account/index";
import { usePathname, useRouter } from "next/navigation";
const myFont = localFont({ src: "../../fonts/revolution/revolution-bold.otf" });
type SideBarProp = {
  src: string;
  name: string;
  valu: string;
};

export const FooterData = [
  {
    title: "The Wolves",
    link: "https://www.thewolves.io/",
    newTab: true,
  },
  {
    title: "General",
    children: [
      {
        name: "Home",
        link: "#",
        newTab: false,
      },
      {
        name: "FAQ",
        link: "/rules/faq",
        newTab: false,
      },
    ],
  },
  {
    title: "Social",
    children: [
      {
        name: "Twitter",
        link: "https://twitter.com/The____Wolves",
        newTab: true,
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/mongolnft/",
        newTab: true,
      },
      {
        name: "Discord",
        link: "https://discord.gg/scGTzn6Fcn",
        newTab: true,
      },
      {
        name: "Telegram",
        link: "https://telegram.org/",
        newTab: true,
      },
    ],
  },
];
const sideBarData: SideBarProp[] = [
  // {
  //   src: "/",
  //   name: "home",
  //   valu: "Нүүр",
  // },
  {
    src: "/rules",
    name: "rules",
    valu: "Дүрэм",
  },
  {
    src: "https://wolf.discourse.group/",
    name: "discussion",
    valu: "Хэлэлцүүлэг",
  },
  {
    src: "/voting",
    name: "voting",
    valu: "Санал хураалт",
  },
];
export const Header = () => {
  const { user, admin, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [act, setAct] = useState("home");
  const [admin1, setAdmin1] = useState(admin);
  const path = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (path === "/") {
      setAct("home");
    } else {
      sideBarData.forEach((e) => {
        if (path.includes(e.name)) {
          setAct(e.name);
        }
      });
    }
  }, [path]);
  useEffect(() => {
    document.body.classList.toggle("lock", open);
  }, [open]);
  useEffect(() => {
    setAdmin1(admin);
  }, [admin]);

  const click = () => setOpen(!open);
  return (
    <Container className={`${styles.container} `}>
      <BgDark open={open} toggle={() => setOpen(false)} />
      <div className={`content ${styles.row} `}>
        <div className={`${styles.redCircle} hideMobile`} />
        <a href="/" className={`hideMobile ${styles.logo}`}>
          <Box
            alignItems={"center"}
            h={"42.42px"}
            w={{ lg: "218px" }}
            gap={"2.42px"}
          >
            <Text
              {...myFont.style}
              fontSize={"13px"}
              color={"#DFFF24"}
              lineHeight={"12px"}
            >
              THE
            </Text>

            <Text
              {...myFont.style}
              lineHeight={"27px"}
              fontSize={"29px"}
              color={"white"}
            >
              WOLVES<span style={{ color: "#DFFF24" }}>.</span>DAO
            </Text>
          </Box>
        </a>
        <a href="/" className={`hideDesktop ${styles.logo}`}>
          <Stack h={"42.42px"} w={{ lg: "218px" }} gap={"2.42px"}>
            <Box my={"auto"} h={"22px"}>
              <Text
                {...myFont.style}
                fontSize={"6px"}
                color={"#DFFF24"}
                lineHeight={"6px"}
              >
                THE
              </Text>

              <Text
                {...myFont.style}
                lineHeight={"16px"}
                fontSize={"14px"}
                color={"white"}
              >
                WOLVES<span style={{ color: "#DFFF24" }}>.</span>DAO
              </Text>
            </Box>
          </Stack>
        </a>
        {admin1 ? (
          <Button
            bg={"#dfff24"}
            h={{ sm: "24px", lg: "43px" }}
            color="black"
            w="110px"
            pt="3px"
            ml={{ base: "10px", sm: "" }}
            fontWeight={"900"}
            onClick={() => {
              router.push("/users");
            }}
          >
            Admin
          </Button>
        ) : null}
        <div className={`hideMobile ${styles.menu}`}>
          {sideBarData.map((el, ind) => (
            <Link
              key={ind}
              href={el.src}
              target={el.name === "discussion" ? "_blank" : undefined}
            >
              <Text
                cursor="pointer"
                fontFamily={"Golos Text"}
                color={el.name === act ? "#DFFF24" : "#FCFCFC"}
                fontWeight={"700"}
                fontSize="16px"
                lineHeight={"22px"}
                p={"3px"}
                marginX={"3px"}
              >
                {el.valu.toUpperCase()}
              </Text>
            </Link>
          ))}

          {user ? (
            <Menu>
              <MenuButton
                border={"1px solid #FCFCFC"}
                borderRadius={"6px"}
                h="43px"
                bg="#010101"
              >
                {" "}
                <Text
                  {...myFont.style}
                  lineHeight={"24px"}
                  fontWeight={"700px"}
                  fontSize={"14px"}
                  color="#FCFCFC"
                  py={"auto"}
                  mx={"10px"}
                >
                  {user}
                </Text>
              </MenuButton>
              <MenuList bg="#010101">
                <MenuItem onClick={() => logout()} bg="#010101" color={"white"}>
                  Гарах
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Box w="110px">
              <AuthModal>
                <Button
                  bg={"#dfff24"}
                  h={{ sm: "24px", lg: "43px" }}
                  color="black"
                  w="110px"
                  pt="3px"
                  fontWeight={"900"}
                >
                  Нэвтрэх
                </Button>
              </AuthModal>
            </Box>
          )}
        </div>
        <Show below="991px">
          <Stack w="100%" justifyContent={"center"} alignItems={"flex-end"}>
            {user ? (
              <Menu>
                <MenuButton
                  border={"1px solid #FCFCFC"}
                  borderRadius={"6px"}
                  alignSelf={"right"}
                >
                  {" "}
                  <Text
                    {...myFont.style}
                    lineHeight={"24px"}
                    fontWeight={"700"}
                    fontSize={"14px"}
                    color="#FCFCFC"
                    py={"auto"}
                    mx={"10px"}
                  >
                    {user}
                  </Text>
                </MenuButton>
                <MenuList bg="#010101">
                  <MenuItem
                    onClick={() => logout()}
                    bg="#010101"
                    color={"white"}
                  >
                    Гарах
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Box w="110px">
                <AuthModal>
                  <Button
                    bg={"#dfff24"}
                    h={{ sm: "24px", lg: "43px" }}
                    color="black"
                    w="110px"
                    alignSelf={"right"}
                    pt="3px"
                    fontWeight={"900"}
                  >
                    Нэвтрэх
                  </Button>
                </AuthModal>
              </Box>
            )}
          </Stack>
        </Show>
        <div className={`hideDesktop ${styles.menuWrapper}`}>
          <button className={styles.btn} onClick={click}>
            <span
              className={`${styles.stroke} ${styles.stroke_one} ${
                open && styles.rotate
              }`}
            ></span>
            <span
              className={`${styles.stroke} ${styles.stroke_two} ${
                open && styles.rotate
              }`}
            ></span>
            <span
              className={`${styles.stroke} ${styles.stroke_three} ${
                open && styles.rotate
              }`}
            ></span>
          </button>
        </div>
      </div>
      <div className="hideDesktop">
        <SideBar open={open} />
      </div>
    </Container>
  );
};

const SideBar = ({ open }: { open: boolean }) => (
  <div className={`${styles.sideBar} ${open && styles.open}`}>
    {sideBarData.map((el, ind) => (
      <a
        key={ind}
        className={styles.headerClick}
        href={el.src}
        target={el.name === "discussion" ? "_blank" : undefined}
      >
        {el.valu}
      </a>
    ))}
    <div style={{ marginTop: "40px" }}>
      {FooterData.map((el, ind) => (
        <div key={ind} className={styled.colWrapper}>
          <a
            href={el?.link}
            target={el?.newTab ? "_blank" : ""}
            className={styled.link}
          >
            <h4 className={styled.title}>{el.title}</h4>
          </a>
          {el.children ? (
            <>
              {el.children.map((child, idx) => (
                <a
                  key={idx}
                  href={child.link}
                  className={styled.link}
                  target={child.newTab ? "_blank" : ""}
                >
                  {child.name}
                </a>
              ))}
            </>
          ) : null}
        </div>
      ))}
    </div>
  </div>
);
