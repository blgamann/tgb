import React from "react";

const Work: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  const getTitle = () => {
    return language === "KO" ? "작업" : "Work";
  };

  return (
    <section
      id="work"
      className="h-screen flex justify-center items-center text-4xl bg-green-500"
    >
      <h2>{getTitle()}</h2>
    </section>
  );
};

export default Work;
