import React from "react";
import Image from "next/image";

const Footer: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  return (
    <footer className="bg-black flex flex-col justify-center items-center py-36 overflow-x-hidden w-full">
      <div className="w-full max-w-screen-xl px-4 mx-auto">
        {/* 첫 번째 이미지 행: 5개 */}
        <div className="flex justify-center items-center space-x-4 mb-8 animate-left-right">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt={`Image ${index + 1}`}
                width={400}
                height={400}
                className="w-full max-w-[200px] h-auto"
              />
            </div>
          ))}
        </div>

        {/* 두 번째 이미지 행: 4개 */}
        <div className="flex justify-center items-center space-x-4 animate-right-left">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index + 5} className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt={`Image ${index + 6}`}
                width={400}
                height={400}
                className="w-full max-w-[250px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 하단 정보 섹션 */}
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row items-center mt-20 space-y-12 lg:space-y-0 lg:justify-between lg:px-16 px-4">
        {/* 왼쪽 정보 */}
        <div>
          <div className="flex items-center">
            <div className="text-white font-pretendard text-[17.95px] font-normal leading-[150%]">
              Powered by
            </div>
            <Image
              src="/footer-1.png"
              alt="Powered by Image"
              width={40}
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

        {/* 오른쪽 정보 */}
        <div className="flex border-l border-white">
          <div className="pl-4">
            <div className="h-[120px]">
              <div className="text-[#0F0] font-pretendard text-[17.95px] font-normal leading-[150%]">
                Tel
              </div>
              <div className="text-white font-pretendard text-[17.95px] font-normal leading-[150%]">
                (02)-6397-7101
              </div>
              <div className="text-white font-pretendard text-[17.95px] font-normal leading-[150%]">
                010-2171-7101
              </div>
            </div>

            <div className="h-[120px] mt-4">
              <div className="text-[#0F0] font-pretendard text-[17.95px] font-normal leading-[150%]">
                Location
              </div>
              <div className="text-white font-pretendard text-[17.95px] font-normal leading-[150%]">
                Dosan-daero 53-gil 18-2
              </div>
            </div>
          </div>
          <div className="ml-6 pl-4 border-l border-white">
            <div className="h-[120px]">
              <div className="text-[#0F0] font-pretendard text-[17.95px] font-normal leading-[150%]">
                E-mail
              </div>
              <div className="text-white font-pretendard text-[17.95px] font-normal leading-[150%]">
                contact@tishoo.com
              </div>
            </div>

            <div className="h-[120px] mt-4">
              <div className="text-[#0F0] font-pretendard text-[17.95px] font-normal leading-[150%]">
                SNS
              </div>
              <div className="underline text-white font-pretendard text-[17.95px] font-normal leading-[150%]">
                instagram
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
