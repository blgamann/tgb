import React from "react";
import Image from "next/image";

const Footer: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  return (
    <footer className="bg-black py-8 flex flex-col justify-center items-center py-36">
      <div className="container px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <Image src="/logo.svg" alt="Image 1" width={500} height={500} />
          <Image src="/logo.svg" alt="Image 2" width={500} height={500} />
          <Image src="/logo.svg" alt="Image 3" width={500} height={500} />
          <Image src="/logo.svg" alt="Image 4" width={500} height={500} />
          <Image src="/logo.svg" alt="Image 5" width={500} height={500} />
        </div>
        <div className="flex justify-center space-x-4">
          <Image src="/logo.svg" alt="Image 6" width={500} height={500} />
          <Image src="/logo.svg" alt="Image 7" width={500} height={500} />
          <Image src="/logo.svg" alt="Image 8" width={500} height={500} />
          <Image src="/logo.svg" alt="Image 9" width={500} height={500} />
        </div>
      </div>

      <div className="w-[1200px] flex flex-col lg:flex-row items-center mt-20 space-y-12 lg:flex lg:justify-between lg:px-16">
        <div>
          <div className="flex items-center">
            <div className="text-white font-pretendard text-[17.95px] font-normal leading-[150%]">
              Powered by
            </div>
            <Image src="/footer-1.png" alt="Image 10" width={40} height={40} />
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

            <div className="h-[120px]">
              <div className="mt-4 text-[#0F0] font-pretendard text-[17.95px] font-normal leading-[150%]">
                Location
              </div>
              <div className="text-white font-pretendard text-[17.95px] font-normal leading-[150%]">
                Dosan-daero 53-gil 18-2
              </div>
              <div className="text-white font-pretendard text-[17.95px] font-normal leading-[150%]">
                010-2171-7101
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

            <div className="h-[120px]">
              <div className="mt-4 text-[#0F0] font-pretendard text-[17.95px] font-normal leading-[150%]">
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
