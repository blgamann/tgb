import React from "react";

const Contact: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  const getTitle = () => {
    return language === "KO" ? "연락처" : "Contact";
  };

  return (
    <section
      id="contact"
      className="h-screen flex justify-center items-center text-4xl bg-blue-500"
    >
      <h2>{getTitle()}</h2>
    </section>
  );
};

export default Contact;
