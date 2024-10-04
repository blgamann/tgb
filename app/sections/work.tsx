import React, { useCallback } from "react";
import Image from "next/image";

// Types
type Language = "KO" | "EN";

interface WorkProps {
  language: Language;
}

interface WorkCardProps {
  image: string;
  title: string;
  task: string;
  imageWidth: number;
  pdfUrl: string;
  onClick: () => void;
}

// Constants
const WORK_CARDS_DATA: Omit<WorkCardProps, "onClick">[] = [
  {
    image: "/01-gs-retail.png",
    title: "Work1",
    task: "UX/UI Design",
    imageWidth: 200,
    pdfUrl: "/pdfs/work1.pdf",
  },
  {
    image: "/02-tourvis.png",
    title: "Work2",
    task: "UX/UI Design",
    imageWidth: 180,
    pdfUrl: "/pdfs/work2.pdf",
  },
  {
    image: "/03-cp-travel.png",
    title: "Work3",
    task: "UX/UI Design",
    imageWidth: 250,
    pdfUrl: "/pdfs/work3.pdf",
  },
  {
    image: "/04-tishoo.png",
    title: "Work4",
    task: "UX/UI Design",
    imageWidth: 120,
    pdfUrl: "/pdfs/work4.pdf",
  },
  {
    image: "/05-txg-edu.png",
    title: "Work5",
    task: "UX/UI Design",
    imageWidth: 130,
    pdfUrl: "/pdfs/work5.pdf",
  },
  {
    image: "/06-a-living-creature.png",
    title: "Work6",
    task: "UX/UI Design",
    imageWidth: 140,
    pdfUrl: "/pdfs/work6.pdf",
  },
  {
    image: "/07-the-black-label.png",
    title: "Work7",
    task: "UX/UI Design",
    imageWidth: 300,
    pdfUrl: "/pdfs/work7.pdf",
  },
  {
    image: "/08-aia.png",
    title: "Work8",
    task: "UX/UI Design",
    imageWidth: 60,
    pdfUrl: "/pdfs/work8.pdf",
  },
  {
    image: "/09-hd-music.png",
    title: "Work9",
    task: "UX/UI Design",
    imageWidth: 300,
    pdfUrl: "/pdfs/work9.pdf",
  },
  {
    image: "/10-hd-construction-equipment.png",
    title: "Work10",
    task: "UX/UI Design",
    imageWidth: 250,
    pdfUrl: "/pdfs/work10.pdf",
  },
];

// WorkCard Component
const WorkCard: React.FC<WorkCardProps> = ({
  image,
  title,
  task,
  imageWidth,
  onClick,
}) => {
  return (
    <div className="px-4 flex-shrink-0" onClick={onClick}>
      <div className="w-[200px] h-[300px] lg:w-[300px] lg:h-[460px] flex flex-col justify-between bg-black pt-11 pb-8 px-4 lg:px-7 border border-[#0F0] shadow-lg cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={200}
          className="object-contain"
          loading="lazy"
        />
        <p className="text-[#00ff02] text-lg lg:text-xl">{task}</p>
      </div>
    </div>
  );
};

// Main Work Component
const Work: React.FC<WorkProps> = ({ language }) => {
  const getTitle = () =>
    language === "KO" ? "Our Experience" : "Our Experience";

  const handleCardClick = useCallback((pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  }, []);

  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center min-h-screen bg-black gap-16"
    >
      <div className="text-[48px] font-normal text-[#00ff02] pt-20 lg:pt-0">
        {getTitle()}
      </div>
      <div className="overflow-x-auto w-full scrollbar-hide px-4 lg:px-20">
        <div className="flex items-center space-x-8 pb-4 scroll-smooth">
          {WORK_CARDS_DATA.map((card, index) => (
            <WorkCard
              key={index}
              {...card}
              onClick={() => handleCardClick(card.pdfUrl)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;