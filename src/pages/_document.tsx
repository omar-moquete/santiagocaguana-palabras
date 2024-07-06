import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-pink-700 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
