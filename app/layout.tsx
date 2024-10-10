import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TXGroup | IT 프로젝트컨설팅",
  description:
    "TXGroup은 진정한 온라인 플랫폼 전문가 집단으로 구성되어 있습니다. 어떤 프로젝트든 저마다 과제를 지니고 있습니다. TXGroup은 티슈다운 접근으로, 사용자 중심의 재해석을 통해 사용자의 특별한 의미를 찾고 기획기반 디자인으로 혁신을 이뤄내도록 돕습니다.",
  openGraph: {
    title: "TXGroup | IT 프로젝트컨설팅",
    description:
      "TXGroup은 진정한 온라인 플랫폼 전문가 집단으로 구성되어 있습니다. 어떤 프로젝트든 저마다 과제를 지니고 있습니다. TXGroup은 티슈다운 접근으로, 사용자 중심의 재해석을 통해 사용자의 특별한 의미를 찾고 기획기반 디자인으로 혁신을 이뤄내도록 돕습니다.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "TXGroup",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og_image.png`,
        width: 564,
        height: 564,
        alt: "TXGroup Open Graph Image",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <head>
        <Script
          id="chatway"
          strategy="afterInteractive"
          src={`https://cdn.chatway.app/widget.js?id=${process.env.NEXT_PUBLIC_CHATWAY_ID}`}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
