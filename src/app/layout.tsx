import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/Components/Header";
import "@/styles/colors.scss";
import "@/styles/globals.scss";
import styled from "@/Components/Header/index.module.scss";

import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "@/Components/Footer";
import { AuthProvider } from "@/Components/Account";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
export const metadata: Metadata = {
  title: "Wolves DAO",
  description: "Wolves DAO description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Golos+Text&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <body
        style={{
          background:
            " linear-gradient(270deg, rgba(255, 23, 16, 0.2) 0%, rgba(255, 23, 16, 0) 22.87%, rgba(255, 23, 16, 0) 66.33%, rgba(255, 23, 16, 0.05) 87.83%)",
          fontFamily: `"Mortend",sans-serif`,
          overflow: "hidden",
        }}
      >
        {" "}
        <ChakraProvider>
          <ThemeContextProvider>
            <AuthProvider>
              <div
                style={{
                  height: "88px",
                  background: "black",
                  position: "fixed",
                  zIndex: 10,
                }}
              >
                <div className={`${styled.redCircle} hideMobile`} />
                <Header />
              </div>
              <div className="mybody"> {children}</div>{" "}
            </AuthProvider>
          </ThemeContextProvider>
        </ChakraProvider>
        <div style={{ position: "relative", bottom: "0px", marginTop: "10px" }}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
