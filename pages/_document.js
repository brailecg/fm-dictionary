import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>FM Dictionary</title>
      </Head>
      <body
        className={`bg-white dark:bg-fmblack-one p-6 lg:px-0 lg:py-14 md:px-10 max-w-[375px] md:max-w-[689px]  lg:max-w-[736px] mx-auto`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
