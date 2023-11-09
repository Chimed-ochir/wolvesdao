"use client";
import React, { useEffect, useState } from "react";

// import { BgDark } from '@/components/BgDark';
// import { Container } from '@/components/Container';
import styled from "@/Components/Footer/index.module.scss";
// import { FooterData, ScrollListener } from '@/utils';
import styles from "./index.module.scss";
import { Container } from "../Container";
import { BgDark } from "../BgDark";
import localFont from "next/font/local";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
const myFont = localFont({ src: "../fonts/revolution/revolution-bold.otf" });
type SideBarProp = {
  src: string;
  name: string;
};

export const FooterData = [
  {
    title: "The Wolves",
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
        link: "https://feast.thewolves.io/#faq",
        newTab: true,
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
  {
    src: "/",
    name: "Home",
  },
  {
    src: "/rules",
    name: "RULES",
  },
  {
    src: "/discussion",
    name: "DISCUSSION",
  },
  {
    src: "/voting",
    name: "VOTING",
  },
];
export const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("lock", open);
  }, [open]);

  const click = () => setOpen(!open);
  return (
    <Container className={`${styles.container} `}>
      <BgDark open={open} toggle={() => setOpen(false)} />
      <div className={`content ${styles.row} `}>
        <div className={`${styles.redCircle} hideMobile`} />
        <a href="/" className={`hideMobile ${styles.logo}`}>
          <Box
            // position={"absolute"}
            alignItems={"center"}
            h={"42.42px"}
            w={"218px"}
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
          <Stack
            // position={"absolute"}
            // alignItems={"center"}
            h={"42.42px"}
            w={{ sm: "218px" }}
            gap={"2.42px"}
          >
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
        <div className={`hideMobile ${styles.menu}`}>
          {sideBarData.map((el, ind) => (
            <a key={ind} className={styles.headerClick} href={el.src}>
              {el.name}
            </a>
          ))}
          <a
            href="#"
            // href="https://opensea.io/collection/the-wolves-of-crypto-street"
            className={styles.jumpButton}
            style={{ ...myFont.style, color: "black" }}
            target=""
          >
            LOG IN
          </a>
        </div>
        <div className={`hideDesktop ${styles.menuWrapper}`}>
          <a
            href="#"
            className={styles.jumpButton}
            style={{ ...myFont.style, color: "black" }}
            target=""
          >
            LOG IN
          </a>
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
      <a key={ind} className={styles.headerClick} href={el.src}>
        {el.name}
      </a>
    ))}
    <div style={{ marginTop: "40px" }}>
      {FooterData.map((el, ind) => (
        <div key={ind} className={styled.colWrapper}>
          <h4 className={styled.title}>{el.title}</h4>
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
