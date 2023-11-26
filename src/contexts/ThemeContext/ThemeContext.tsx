"use client";
import { useColorModeValue } from "@chakra-ui/react";
import { createContext, PropsWithChildren, useContext } from "react";

type ContextType = {
  primaryBg: "black" | "white";
  secondaryBg: "sumi.700" | "sumi.100";
  tertiaryBg: "sumi.800" | "sumi.50";
  borderColor: "#383540" | "sumi.100";
  overlayColor: "linear-gradient(180deg, rgba(255,255,255,0) 33%, rgba(26,26,28,0.56) 66%)"; //| 'rgba(255,255,255,0.12)';
  solidColor: "white" | "black";
  newGray: "#4C505C" | "#4C505C";
  lowGray: "#383540" | "#383540";
  darkerGray: "#E8E8E8" | "#2B2B2F";
  cardGray: "#F8F8F8" | "#232323";
  hoverGray: "#EEEEEE" | "#464646";
  bannerGradient:
    | "linear(to-t, rgba(255, 255, 255, 100) 40%, rgba(255,255,255,0))"
    | "linear(to-t, rgba(0,0,0, 100) 40%, rgba(0,0,0,0))";
};

const ThemeContext = createContext<ContextType>({
  primaryBg: "white",
  secondaryBg: "sumi.100",
  tertiaryBg: "sumi.50",
  borderColor: "sumi.100",
  overlayColor:
    "linear-gradient(180deg, rgba(255,255,255,0) 33%, rgba(26,26,28,0.56) 66%)",
  solidColor: "white",
  newGray: "#4C505C",
  lowGray: "#383540",
  darkerGray: "#2B2B2F",
  cardGray: "#232323",
  hoverGray: "#EEEEEE",
  bannerGradient:
    "linear(to-t, rgba(255, 255, 255, 100) 40%, rgba(255,255,255,0))",
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const solidColor = useColorModeValue("black", "white");
  const primaryBg = useColorModeValue("white", "black");
  const secondaryBg = useColorModeValue("sumi.100", "sumi.700");
  const tertiaryBg = useColorModeValue("sumi.50", "sumi.800");
  const borderColor = useColorModeValue("sumi.100", "#383540");
  const overlayColor = useColorModeValue(
    "linear-gradient(180deg, rgba(255,255,255,0) 33%, rgba(26,26,28,0.56) 66%)",
    "linear-gradient(180deg, rgba(255,255,255,0) 33%, rgba(26,26,28,0.56) 66%)"
  );
  const newGray = useColorModeValue("#4C505C", "#4C505C");
  const lowGray = useColorModeValue("#383540", "#383540");
  const darkerGray = useColorModeValue("#E8E8E8", "#2B2B2F");
  const cardGray = useColorModeValue("#F8F8F8", "#232323");
  const hoverGray = useColorModeValue("#EEEEEE", "#464646");
  const bannerGradient = useColorModeValue(
    "linear(to-t, rgba(255, 255, 255, 100) 40%, rgba(255,255,255,0))",
    "linear(to-t, rgba(0,0,0, 100) 40%, rgba(0,0,0,0))"
  );

  return (
    <ThemeContext.Provider
      value={{
        solidColor,
        primaryBg,
        secondaryBg,
        tertiaryBg,
        borderColor,
        overlayColor,
        newGray,
        lowGray,
        darkerGray,
        cardGray,
        hoverGray,
        bannerGradient,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
