import Image from "next/image";
import React from "react";

const comment = `
Greetings,

I am Mina Choi, the driving force behind Tishoo LLC. In today’s global business landscape, 
the necessity for design-driven and user-centric innovations has unequivocally become 
a cornerstone for achieving success.
Drawing upon my profound experience as a Product Owner within South Korea’s elite 
technology companies, I have meticulously cultivated a distinctive and creative workflow
process exclusive to Tishoo LLC. This methodology is not only rooted in rich, practical 
experience but also extends beyond the realm of conventional consulting to encompass
actionable execution. Our commitment lies in empowering your enterprise to realize
unparalleled value innovation. As your dedicated pacemaker, I pledge to accompany you 
every step of the way, ensuring your online platform not only comes to fruition but also 
experiences transformative business value innovation.

Warm regards,
Mina Choi
`;

const Boss: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  return (
    <section
      id="boss"
      className="h-screen flex justify-center items-center text-4xl bg-blue-500"
    >
      <div className="flex flex-col items-center justify-center lg:gap-24">
        <div className="text-[48px] font-normal text-[#00ff02]">
          {`CEO's message`}
        </div>
        <div className="flex px-24">
          <div className="flex gap-10">
            <div className="flex-grow w-1/3">
              <Image
                src="/boss.png"
                alt="boss"
                width={400}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-grow w-2/3">
              <p className="mb-4 text-lg font-light">Greetings,</p>
              <p className="mb-4 text-lg font-light">
                I am Mina Choi, the driving force behind Tishoo LLC. In
                today&apos;s global business landscape, the necessity for
                design-driven and user-centric innovations has unequivocally
                become a cornerstone for achieving success.
              </p>
              <p className="mb-4 text-lg font-light">
                Drawing upon my profound experience as a Product Owner within
                South Korea&apos;s elite technology companies, I have
                meticulously cultivated a distinctive and creative workflow
                process exclusive to Tishoo LLC. This methodology is not only
                rooted in rich, practical experience but also extends beyond the
                realm of conventional consulting to encompass actionable
                execution. Our commitment lies in empowering your enterprise to
                realize unparalleled value innovation. As your dedicated
                pacemaker, I pledge to accompany you every step of the way,
                ensuring your online platform not only comes to fruition but
                also experiences transformative business value innovation.
              </p>
              <p className="mb-4 text-lg font-light">
                Warm regards,
                <br />
                Mina Choi
              </p>
              <Image
                src="/boss-signature.png"
                alt="CEO Signature"
                width={200}
                height={100}
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boss;
