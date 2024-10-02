import React from "react";

const Boss: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  const getTitle = () => {
    return language === "KO" ? "Boss" : "Boss";
  };

  return (
    <section
      id="boss"
      className="h-screen flex justify-center items-center text-4xl bg-blue-500"
    >
      <h2>{getTitle()}</h2>
    </section>
  );
};

export default Boss;
