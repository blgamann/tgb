import React from "react";
import Image from "next/image";

const Work: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  const getTitle = () => {
    return language === "KO" ? "작업" : "Work";
  };

  const WorkCard: React.FC<{
    image: string;
    title: string;
    task: string;
    imageWidth: number;
  }> = ({ image, title, task, imageWidth }) => {
    return (
      <div className="px-8">
        <div className="w-[300px] h-[460px] flex flex-col justify-between bg-black pt-11 pb-8 px-7 border-[0.25px] border-[#0F0] shadow-[1.77px_1.77px_8.852px_0px_rgba(0,255,0,0.15)]">
          <Image src={image} alt={title} width={imageWidth} height={300} />
          <p>{task}</p>
        </div>
      </div>
    );
  };

  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center min-h-screen bg-black gap-16"
    >
      <div className="text-[48px] font-normal text-[#00ff02] pt-20 lg:pt-0">
        Our Experiences
      </div>
      <div className="overflow-x-auto w-full">
        <div className="flex items-center text-4xl mx-20 space-x-8 pb-4">
          <WorkCard
            image="/01-gs-retail.png"
            title="Work1"
            task="UX/UI Design"
            imageWidth={200}
          />
          <WorkCard
            image="/02-tourvis.png"
            title="Work1"
            task="UX/UI Design"
            imageWidth={180}
          />
          <WorkCard
            image="/03-cp-travel.png"
            title="Work1"
            task="UX/UI Design"
            imageWidth={250}
          />
          <WorkCard
            image="/04-tishoo.png"
            title="Work1"
            task="UX/UI Design"
            imageWidth={120}
          />
          <WorkCard
            image="/05-txg-edu.png"
            title="Work1"
            task="UX/UI Design"
            imageWidth={130}
          />
          <WorkCard
            image="/06-a-living-creature.png"
            title="Work1"
            task="UX/UI Design"
            imageWidth={140}
          />
          <WorkCard
            image="/07-the-black-label.png"
            title="Work1"
            task="UX/UI Design"
            imageWidth={300}
          />
          <WorkCard
            image="/08-aia.png"
            title="Work1"
            task="UX/UI Design"
            imageWidth={80}
          />
          <WorkCard
            image="/09-hd-music.png"
            title="Work1"
            task="UX/UI Design"
            imageWidth={300}
          />
          <WorkCard
            image="/10-hd-construction-equipment.png"
            title="Work1"
            task="UX/UI Design"
            imageWidth={250}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
