import React from "react";

const Service: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  const getTitle = () => {
    return language === "KO" ? "서비스" : "Service";
  };

  return (
    <section
      id="service"
      className="h-screen flex justify-center items-center text-4xl bg-yellow-500"
    >
      <h2>{getTitle()}</h2>
    </section>
  );
};

export default Service;
