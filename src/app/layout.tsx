import type { Metadata } from "next";
import { Inter, Golos_Text } from "next/font/google";
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
import { AuthProvider } from "@/Components/Account";
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
          <AuthProvider>
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
            <div
              style={{
                padding: "80px 0",
                marginTop: "30px",
                overflow: "hidden",
              }}
            >
              {children}
            </div>{" "}
          </AuthProvider>
        </ChakraProvider>
        <footer style={{ position: "relative", bottom: "0px" }}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
