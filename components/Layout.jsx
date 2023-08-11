import React from "react";

import Head from "next/head";
import { Inter, Lora, Inconsolata } from "next/font/google";

import { useThemeContext } from "@/store/ThemeContext";
import Footer from "./Footer";
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const { typeFace } = useThemeContext();

  const usedTypeFace = () => {
    if (typeFace === "inter") return inter;
    else if (typeFace === "lora") return lora;
    else return inconsolata;
  };
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${usedTypeFace().style.fontFamily};
          }
        `}
      </style>

      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className={``}>{children}</div>
    </>
  );
};

export default Layout;
