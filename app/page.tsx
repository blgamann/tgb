// pages/index.tsx
"use client";

import { useState, useEffect, useRef, FC } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Menu, X } from "lucide-react";

import About from "@/sections/about";
import Service from "@/sections/service";
import Work from "@/sections/work";
import Contact from "@/sections/contact";
import Boss from "@/sections/boss";
import Footer from "@/sections/footer";

import Logo from "@/components/logo";

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

  const isActive = (href: string) => activeSection === href.substring(1);

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

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector<HTMLElement>(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const LanguageSelector: FC = () => (
    <div className="flex items-center">
      <button
        onClick={() => setLanguage("KO")}
        className={`px-2 py-1 ${
          language === "KO" ? "text-[#03ff00] font-bold" : "text-white-400"
        }`}
        aria-pressed={language === "KO"}
      >
        KO
      </button>
      <span className="mx-1 text-white-400">|</span>
      <button
        onClick={() => setLanguage("EN")}
        className={`px-2 py-1 ${
          language === "EN" ? "text-[#03ff00] font-bold" : "text-white-400"
        }`}
        aria-pressed={language === "EN"}
      >
        EN
      </button>
    </div>
  );

  const MobileMenu: FC = () => {
    if (!isMenuOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden mt-16">
        <nav className="flex flex-col items-center mt-8 space-y-6">
          {menuItems.map(({ href, text }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className="text-2xl text-white hover:text-gray-400 transition-colors"
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

      <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-black pt-2">
        <nav className="flex justify-between items-center p-4 h-16">
          <div className="flex items-center">
            <a
              href="#about"
              onClick={(e) => handleClick(e, "#about")}
              className="flex items-center h-full max-h-full"
            >
              <Logo width={140} />
            </a>
            <div className="hidden md:flex items-center space-x-8 text-white font-semibold text-lg ml-20">
              {menuItems.map(({ href, text }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive(href)
                      ? "text-white-400"
                      : "text-white-400 hover:text-gray-200"
                  }`}
                  aria-current={isActive(href) ? "page" : undefined}
                >
                  {text}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mr-4">
            <LanguageSelector />
            <div className="md:hidden ml-4 flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-200 focus:outline-none"
                aria-label="Open Menu"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu />

      <main className="">
        <About language={language} />
        <Service language={language} />
        <Work language={language} />
        <Boss language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </main>
    </div>
  );
};

export default Home;
