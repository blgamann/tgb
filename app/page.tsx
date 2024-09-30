"use client";

import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Menu, X } from "lucide-react";

import Logo from "@/sections/logo";
import About from "@/sections/about";
import Service from "@/sections/service";
import Work from "@/sections/work";
import Contact from "@/sections/contact";

const menuItems = [
  { href: "#logo", text: "Logo" },
  { href: "#about", text: "About" },
  { href: "#service", text: "Service" },
  { href: "#work", text: "Work" },
  { href: "#contact", text: "Contact" },
];

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState("logo");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Single Page with Multiple Sections</title>
        <meta
          name="description"
          content="Next.js TypeScript Single Page with Multiple Sections"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="flex justify-around p-4">
          {menuItems.map(({ href, text }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`px-4 py-2 hover:bg-gray-100 transition-all ${
                activeSection === href.slice(1)
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
            >
              {text}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <Logo />
        <About />
        <Service />
        <Work />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
