import React from "react";

const About: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center text-4xl bg-red-500 px-4 sm:px-8 md:px-20"
    >
      <div className="flex flex-col justify-center h-full">
        <div className="mx-auto sm:mx-0">
          <p className="font-normal text-white text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="block mb-3 sm:mb-5">Empowering Innovation</span>
            <span className="font-medium text-2xl sm:text-3xl md:text-4xl">
              Leading Platform Service Experts
            </span>
          </p>
          <p className="font-light text-white text-lg sm:text-xl md:text-2xl leading-relaxed sm:text-left">
            At TXGroup, our ethos is rooted in User-Centered Experience Design,
            <br />
            focusing on creating products that resonate meaningfully with users.
          </p>
          <button className="mt-12 sm:mt-16 flex items-center justify-center text-lg sm:text-xl px-6 sm:px-8 py-2.5 font-semibold rounded-full bg-[#ffffff33]">
            Download TXG Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
