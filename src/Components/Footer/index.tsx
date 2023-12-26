"use client";
import { usePathname } from "next/navigation";

import { Container } from "@/Components/Container";
import styled from "./index.module.scss";
import { Box } from "@chakra-ui/react";
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
        link: "/#",
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

export const Footer = () => {
  const pathname = usePathname();
  return (
    <Box>
      <Container className={styled.wrapper}>
        <div className={`content ${styled.container}`}>
          <Box
            className={`hideMobile ${styled.gridWrapper}`}
            w={pathname === "/rules" ? "793px" : "100%"}
            ml={pathname === "/rules" ? "332px" : ""}
          >
            {FooterData.map((el: any, ind: any) => (
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
                    {el.children.map((child: any, idx: any) => (
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
          </Box>
          <Box w={"100%"} className={`hideDesktop`}>
            <div className={styled.bottom}>
              <div className={styled.rowWrapper2}>
                <p className={styled.companyName}>The Wolves Community</p>
                <p style={{ paddingLeft: "5px" }}> </p>
                <p className={styled.poweredBy}> © 2023 All rights reserved</p>
              </div>
              <div className={styled.rowWrapper2}>
                <p className={styled.poweredBy}>Privacy Policy</p>
                <p style={{ margin: "0 8px", color: "white" }}>•</p>
                <p className={styled.poweredBy}>Terms of Service</p>
              </div>
            </div>
          </Box>
          <Box
            ml={pathname === "/rules" ? "332px" : "0"}
            w={pathname === "/rules" ? "793px" : "90%"}
            className={`hideMobile`}
          >
            <div className={styled.bottom}>
              <div className={styled.rowWrapper2}>
                <p className={styled.companyName}>The Wolves Community</p>
                <p style={{ paddingLeft: "5px" }}> </p>
                <p className={styled.poweredBy}> © 2023 All rights reserved</p>
              </div>
              <div className={styled.rowWrapper2}>
                <p className={styled.poweredBy}>Privacy Policy</p>
                <p style={{ margin: "0 8px", color: "white" }}>•</p>
                <p className={styled.poweredBy}>Terms of Service</p>
              </div>
            </div>
          </Box>
        </div>
      </Container>
    </Box>
  );
};
