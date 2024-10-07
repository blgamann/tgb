import React from "react";

const About: React.FC<{ language: "KO" | "EN" }> = ({}) => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center text-4xl bg-black px-4 sm:px-8 md:px-20"
    >
      <div className="flex flex-col justify-center w-full">
        <div
          className="mx-auto sm:mx-0 bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 rounded-lg bg-[url('/about-background.png')] bg-contain bg-center bg-no-repeat w-full"
          style={{ paddingTop: "56%", position: "relative" }}
        >
          <div className="absolute inset-0 flex flex-col justify-center">
            <p className="font-normal text-white text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="block mb-3 sm:mb-5">Empowering Innovation</span>
              <span className="font-medium text-2xl sm:text-3xl md:text-4xl">
                Leading Platform Service Experts
              </span>
            </p>
            <p className="font-light text-white text-lg sm:text-xl md:text-2xl leading-relaxed sm:text-left">
              At TXGroup, our ethos is rooted in User-Centered Experience
              Design,
              <br />
              focusing on creating products that resonate meaningfully with
              users.
            </p>
            <button className="w-[280px] mt-12 sm:mt-16 flex items-center justify-center text-lg sm:text-xl px-6 sm:px-8 py-2.5 font-semibold rounded-full bg-[#ffffff33] hover:bg-[#ffffff55] transition-colors duration-300">
              Download TXG Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
