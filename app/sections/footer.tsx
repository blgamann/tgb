import React from "react";
import Image from "next/image";

type FooterProps = {
  language: "KO" | "EN";
};

const ImageRow: React.FC<{
  src: string;
  count: number;
  startIndex: number;
  animate: "animate-left-right" | "animate-right-left";
}> = ({ src, count, startIndex, animate }) => (
  <div className={`flex justify-center items-center space-x-4 mb-8 ${animate}`}>
    {Array.from({ length: count }).map((_, index) => (
      <div key={startIndex + index} className="flex-shrink-0">
        <Image
          src={`${src}${index + 1}.png`}
          alt={`Image ${index + 1}`}
          width={200}
          height={200}
          className="w-[105px] h-[45px] md:w-[210px] md:h-[90px]"
        />
      </div>
    ))}
  </div>
);

const InfoSection: React.FC = () => (
  <div className="w-full max-w-screen-xl flex flex-col lg:flex-row mt-20 space-y-12 lg:space-y-0 lg:justify-between items-center lg:items-start lg:px-16 px-4">
    <div>
      <div className="flex items-center">
        <div className="text-white font-pretendard text-[17.95px] font-normal leading-[150%]">
          Powered by
        </div>
        <Image
          src="/tishoo.svg"
          alt="Powered by Image"
          width={100}
          height={40}
          className="ml-2"
        />
      </div>
      <div className="mt-3 text-white text-[17.95px] font-pretendard font-normal leading-[150%] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
        <div>We will create sustainable and scalable</div>
        <div>growth-value through our unique creative design process.</div>
      </div>
      <div className="text-white font-pretendard text-[12.565px] font-light leading-normal mt-2">
        Copyright 2023. tishoo.LLC. all rights reserved.
      </div>
    </div>

    <div className="flex border-l border-white">
      <ContactInfo />
    </div>
  </div>
);

const ContactInfo: React.FC = () => (
  <>
    <div className="pl-4">
      <InfoItem title="Tel" details={["(02)-6397-7101", "010-2171-7101"]} />
      <InfoItem
        title="Location"
        details={["Dosan-daero 53-gil 18-2"]}
        className="mt-4"
      />
    </div>
    <div className="ml-6 pl-4 border-l border-white">
      <InfoItem title="E-mail" details={["contact@tishoo.com"]} />
      <InfoItem title="SNS" details={["instagram"]} className="mt-4" />
    </div>
  </>
);

const InfoItem: React.FC<{
  title: string;
  details: string[];
  className?: string;
}> = ({ title, details, className }) => (
  <div className={`h-[120px] ${className || ""}`}>
    <div
      className={`text-[#0F0] font-pretendard text-[15px] sm:text-[17.95px] font-normal leading-[150%]`}
    >
      {title}
    </div>
    {details.map((detail, index) => (
      <div
        key={index}
        className={`text-white font-pretendard text-[15px] sm:text-[17.95px] font-normal leading-[150%] ${
          title === "SNS" ? "underline" : ""
        }`}
      >
        {detail}
      </div>
    ))}
  </div>
);

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-black flex flex-col justify-center items-center py-36 overflow-x-hidden w-full">
      <div className="w-full max-w-screen-xl px-4 mx-auto">
        <ImageRow
          src="/footer-1-"
          count={5}
          startIndex={0}
          animate="animate-left-right"
        />

        {/* 두 번째 이미지 행: 4개 */}
        <ImageRow
          src="/footer-2-"
          count={5}
          startIndex={5}
          animate="animate-right-left"
        />
      </div>

      {/* 하단 정보 섹션 */}
      <InfoSection />
    </footer>
  );
};

export default Footer;
