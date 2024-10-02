import React from "react";

const About: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  const getTitle = () => {
    return language === "KO" ? "소개" : "About";
  };

  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center items-center text-4xl bg-red-500"
    >
      <h2>{getTitle()}</h2>
      <p className="mt-4 text-2xl">
        {language === "KO"
          ? "여기에 소개 내용이 들어갑니다."
          : "Content about the section goes here."}
      </p>
    </section>
  );
};

export default About;
