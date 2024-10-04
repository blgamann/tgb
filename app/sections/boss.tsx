import Image from "next/image";
import React from "react";

const Boss: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  return (
    <section
      id="boss"
      className="flex flex-col justify-center items-center py-12 bg-red min-h-screen"
    >
      <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-24 w-full px-4 lg:px-44">
        <div className="text-3xl lg:text-4xl font-normal text-[#00ff02] text-center">
          {language === "EN" ? `CEO's message` : `CEO's message`}
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-20 w-full">
          <div className="w-full lg:w-2/5 flex justify-center">
            <Image
              src="/boss.png"
              alt="boss"
              width={400}
              height={400}
              className="w-48 h-auto lg:w-full"
            />
          </div>
          <div className="w-full lg:w-3/5">
            <p className="mb-4 text-base lg:text-xl font-light">
              {language === "EN" ? (
                <>
                  Greetings,
                  <br />
                  <br />I am Mina Choi, the driving force behind Tishoo LLC. In
                  today&apos;s global business landscape, the necessity for
                  design-driven and user-centric innovations has unequivocally
                  become a cornerstone for achieving success.
                </>
              ) : (
                <>
                  Greetings,
                  <br />
                  <br />I am Mina Choi, the driving force behind Tishoo LLC. In
                  today&apos;s global business landscape, the necessity for
                  design-driven and user-centric innovations has unequivocally
                  become a cornerstone for achieving success.
                </>
              )}
            </p>
            <p className="mb-4 text-base lg:text-xl font-light">
              {language === "EN" ? (
                <>
                  Drawing upon my profound experience as a Product Owner within
                  South Korea&apos;s elite technology companies, I have
                  meticulously cultivated a distinctive and creative workflow
                  process exclusive to Tishoo LLC. This methodology is not only
                  rooted in rich, practical experience but also extends beyond
                  the realm of conventional consulting to encompass actionable
                  execution. Our commitment lies in empowering your enterprise
                  to realize unparalleled value innovation. As your dedicated
                  pacemaker, I pledge to accompany you every step of the way,
                  ensuring your online platform not only comes to fruition but
                  also experiences transformative business value innovation.
                </>
              ) : (
                <>
                  Drawing upon my profound experience as a Product Owner within
                  South Korea&apos;s elite technology companies, I have
                  meticulously cultivated a distinctive and creative workflow
                  process exclusive to Tishoo LLC. This methodology is not only
                  rooted in rich, practical experience but also extends beyond
                  the realm of conventional consulting to encompass actionable
                  execution. Our commitment lies in empowering your enterprise
                  to realize unparalleled value innovation. As your dedicated
                  pacemaker, I pledge to accompany you every step of the way,
                  ensuring your online platform not only comes to fruition but
                  also experiences transformative business value innovation.
                </>
              )}
            </p>
            <p className="mb-4 text-base lg:text-xl font-light">
              {language === "EN" ? (
                <>
                  Warm regards,
                  <br />
                  Mina Choi
                </>
              ) : (
                <>
                  Warm regards,
                  <br />
                  Mina Choi
                </>
              )}
            </p>
            <div className="mt-4">
              <Image
                src="/boss-signature.png"
                alt="CEO Signature"
                width={200}
                height={100}
                className="w-40 h-auto lg:w-52"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boss;
