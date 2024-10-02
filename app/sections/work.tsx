import React, { useState, useRef, useCallback, useEffect } from "react";
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
    imageWidth: 80,
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

// Custom Hook
const useSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  const handleDragStart = useCallback((clientX: number) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = clientX;
    if (sliderRef.current) {
      scrollLeftRef.current = sliderRef.current.scrollLeft;
    }
    cancelAnimationFrame(animationRef.current);
  }, []);

  const handleDragEnd = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - startXRef.current;
    const newScrollLeft = scrollLeftRef.current - dx;

    const animateScroll = () => {
      if (sliderRef.current) {
        const currentScrollLeft = sliderRef.current.scrollLeft;
        const diff = newScrollLeft - currentScrollLeft;
        if (Math.abs(diff) > 0.5) {
          sliderRef.current.scrollLeft += diff * 0.15;
          animationRef.current = requestAnimationFrame(animateScroll);
        } else {
          sliderRef.current.scrollLeft = newScrollLeft;
        }
      }
    };

    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animateScroll);
  }, []);

  useEffect(() => {
    const handleMouseUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    document.addEventListener("touchcancel", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
      document.removeEventListener("touchcancel", handleMouseUp);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return {
    sliderRef,
    isDragging,
    isDraggingRef,
    handleDragStart,
    handleDragEnd,
    handleDragMove,
  };
};

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
      <div className="w-[200px] h-[300px] lg:w-[300px] lg:h-[460px] flex flex-col justify-between bg-black pt-11 pb-8 px-7 border border-[#0F0] shadow-lg cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={200}
          className="object-contain"
        />
        <p className="text-[#00ff02] text-lg lg:text-xl">{task}</p>
      </div>
    </div>
  );
};

// Main Work Component
const Work: React.FC<WorkProps> = ({ language }) => {
  const {
    sliderRef,
    isDragging,
    isDraggingRef,
    handleDragStart,
    handleDragEnd,
    handleDragMove,
  } = useSlider();

  const getTitle = () =>
    language === "KO" ? "Our Experience" : "Our Experience";

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // handleDragStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    // handleDragEnd();
  };

  const handleCardClick = useCallback(
    (pdfUrl: string) => {
      if (!isDraggingRef.current) {
        window.open(pdfUrl, "_blank");
      }
    },
    [isDraggingRef]
  );

  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center min-h-screen bg-black gap-16"
    >
      <div className="text-[48px] font-normal text-[#00ff02] pt-20 lg:pt-0">
        {getTitle()}
      </div>
      <div className="overflow-x-hidden w-full scrollbar-hide">
        <div
          className={`flex items-center ml-20 text-4xl space-x-8 pb-4 overflow-x-auto ${
            isDragging ? "" : ""
          }`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleDragEnd}
          onMouseUp={handleMouseUp}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          ref={sliderRef}
        >
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
