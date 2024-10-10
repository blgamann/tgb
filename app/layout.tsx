import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "TXGroup | IT 프로젝트컨설팅",
  description:
    "TXGroup은 진정한 온라인 플랫폼 전문가 집단으로 구성되어 있습니다. 어떤 프로젝트든 저마다 과제를 지니고 있습니다. TXGroup은 티슈다운 접근으로, 사용자 중심의 재해석을 통해 사용자의 특별한 의미를 찾고 기획기반 디자인으로 혁신을 이뤄내도록 돕습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          id="chatway"
          async={true}
          src={`https://cdn.chatway.app/widget.js?id=${process.env.NEXT_PUBLIC_CHATWAY_ID}`}
        ></script>
        <meta property="og:title" content="TXGroup | IT 프로젝트컨설팅" />
        <meta
          property="og:description"
          content="TXGroup은 진정한 온라인 플랫폼 전문가 집단으로 구성되어 있습니다. 어떤 프로젝트든 저마다 과제를 지니고 있습니다. TXGroup은 티슈다운 접근으로, 사용자 중심의 재해석을 통해 사용자의 특별한 의미를 찾고 기획기반 디자인으로 혁신을 이뤄내도록 돕습니다."
        />
        <meta property="og:image" content="og_image.png" />
        <meta property="og:image:width" content="564" />
        <meta property="og:image:height" content="564" />
        <meta property="og:url" content="https://www.txgroup.biz" />
        <meta property="og:site_name" content="TXGroup" />
        <meta property="og:type" content="website" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
