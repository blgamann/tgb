// pages/index.tsx
"use client";

import { useState, useEffect, useRef, FC } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import About from "@/sections/about";
import Service from "@/sections/service";
import Work from "@/sections/work";
import Contact from "@/sections/contact";

interface MenuItem {
  href: string;
  text: string;
}

const menuItems: MenuItem[] = [
  { href: "#about", text: "About" },
  { href: "#service", text: "Service" },
  { href: "#work", text: "Work" },
  { href: "#contact", text: "Contact" },
];

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<"KO" | "EN">("KO");
  const observer = useRef<IntersectionObserver | null>(null);

  // 활성화된 메뉴 항목을 확인하는 헬퍼 함수
  const isActive = (href: string) => activeSection === href.substring(1);

  // Intersection Observer를 사용하여 현재 활성 섹션 추적
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  // 메뉴 항목 클릭 시 스크롤 및 메뉴 닫기
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector<HTMLElement>(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // 로고 컴포넌트: 일관된 크기로 렌더링
  const Logo: FC = () => (
    <div className="flex-shrink-0">
      <Image src="/logo.svg" alt="Logo" width={160} height={60} />
    </div>
  );

  // 언어 선택기 컴포넌트
  const LanguageSelector: FC = () => (
    <div className="flex items-center">
      <button
        onClick={() => setLanguage("KO")}
        className={`px-2 py-1 ${
          language === "KO" ? "text-blue-400 font-bold" : "text-gray-400"
        }`}
        aria-pressed={language === "KO"}
      >
        KO
      </button>
      <span className="mx-1 text-gray-400">|</span>
      <button
        onClick={() => setLanguage("EN")}
        className={`px-2 py-1 ${
          language === "EN" ? "text-blue-400 font-bold" : "text-gray-400"
        }`}
        aria-pressed={language === "EN"}
      >
        EN
      </button>
    </div>
  );

  // 모바일 메뉴 컴포넌트
  const MobileMenu: FC = () => {
    if (!isMenuOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden">
        {/* 모바일 메뉴 상단 바 */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700 h-16">
          <Logo />
          <div className="flex items-center justify-between">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="ml-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close Menu"
            >
              <X size={26} />
            </button>
          </div>
        </div>
        {/* 모바일 메뉴 항목 */}
        <nav className="flex flex-col items-center mt-8 space-y-6">
          {menuItems.map(({ href, text }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className="text-2xl text-gray-300 hover:text-blue-400 transition-colors"
            >
              {text}
            </a>
          ))}
        </nav>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-green-500 text-white">
      <Head>
        <title>Single Page with Multiple Sections</title>
        <meta
          name="description"
          content="Next.js TypeScript Single Page with Multiple Sections"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-yellow shadow-md z-50">
        <nav className="flex justify-between items-center p-4 h-16">
          {/* 왼쪽 섹션: 로고 및 데스크탑 메뉴 */}
          <div className="flex items-center">
            <Logo />
            {/* 데스크탑 메뉴 */}
            <div className="hidden md:flex items-center space-x-6 text-white font-semibold text-lg ml-6">
              {menuItems.map(({ href, text }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive(href)
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-blue-400"
                  }`}
                  aria-current={isActive(href) ? "page" : undefined}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* 오른쪽 섹션: 언어 선택기 및 모바일 메뉴 버튼 */}
          <div className="flex items-center justify-between">
            <LanguageSelector />
            <div className="md:hidden ml-4 flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-400 hover:text-white focus:outline-none"
                aria-label="Open Menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* 모바일 메뉴 */}
      <MobileMenu />

      {/* 메인 콘텐츠 */}
      <main className="">
        <About language={language} />
        <Service language={language} />
        <Work language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
};

export default Home;
