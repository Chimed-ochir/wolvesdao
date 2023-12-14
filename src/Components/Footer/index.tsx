"use client";
import { usePathname } from "next/navigation";

import { Container } from "@/Components/Container";
import styled from "./index.module.scss";
import { Box } from "@chakra-ui/react";
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
                <h4 className={styled.title}>{el.title}</h4>
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
        </div>
      </Container>
      <div className={styled.redCircle} />
    </Box>
  );
};

const ContactMail = () => (
  <div className={styled.banner}>
    <h5 className={styled.bannerTitle}>
      WANT TO PARTNER WITH US? CONTACT US{" "}
      <a className={styled.linkedMail} href="mailto:info@thewolves.io">
        HERE
      </a>
    </h5>
  </div>
);
