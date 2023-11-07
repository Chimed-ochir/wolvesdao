import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/Components/Header";
import "@/styles/colors.scss";
import "@/styles/globals.scss";

import { ChakraProvider, Box } from "@chakra-ui/react";
import { Footer } from "@/Components/Footer";
const inter = Inter({ subsets: ["latin"] });
// const globalFont = localFont({
//   src: "@/Components/fonts/mortend/mortend-bolf.ttf",
// });
import localFont from "next/font/local";
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
      </head>
      <body
        style={{
          background: "black",
          fontFamily: `"Mortend",sans-serif`,
        }}
      >
        <div
          style={{
            height: "88px",
            background: "black",
            position: "fixed",
            zIndex: 10,
          }}
        >
          {/* <Box my={"auto"}> */}

          <Header />

          {/* </Box> */}
        </div>
        <div style={{ padding: "80px 0", marginTop: "30px" }}>
          <ChakraProvider>{children} </ChakraProvider>
        </div>

        <footer
          style={{ position: "relative", bottom: "0px", background: "black" }}
        >
          <Footer />
        </footer>
      </body>
    </html>
  );
}
