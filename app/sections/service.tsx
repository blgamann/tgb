import React from "react";

const Service: React.FC<{ language: "KO" | "EN" }> = ({ language }) => {
  const getTitle = () => {
    return language === "KO" ? "서비스" : "Service";
  };

  const Item = ({
    service,
    serviceDescription,
    buttonText,
    items,
  }: {
    service: string;
    serviceDescription: string;
    buttonText: string;
    items: string[];
  }) => {
    return (
      <div className="w-full lg:w-[310px] overflow-y-auto py-6 lg:py-0">
        <div className="border-l-2 border-[#00ff02] pl-4 pb-6 h-auto lg:h-[250px]">
          <h2 className="text-[#00ff02] font-bold text-[38px] mb-3">
            {service}
          </h2>
          <p className="font-normal text-white text-base leading-[24px]">
            {serviceDescription}
          </p>
        </div>

        <button className="my-8 rounded-[40px] border border-[#0F0] bg-black inline-flex p-[6px_24px] justify-center items-center gap-[8px] text-[18px]">
          <span>{buttonText}</span>
        </button>

        <div className="border-l-2 border-[#00ff02] pl-4 pb-1">
          {items?.map((item) => (
            <p
              key={item}
              className="font-normal text-white text-base leading-[24px] mb-3"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="service">
      <div className="min-h-screen flex flex-col items-center justify-center text-3xl bg-black py-8 lg:gap-32">
        <div className="text-[48px] font-normal text-[#00ff02] pt-20 lg:pt-0">
          Our Service
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-6xl mx-auto px-4">
          {[
            {
              service: "Consulting",
              serviceDescription:
                "Each project has its own tasks. We analyze your business model through market and industry trend research and provide the foundation for new business through user research and validated technology-based consulting.",
              buttonText: "Contact Us",
              items: [
                "PMO Consulting",
                "Market Research",
                "Stakeholder Interview Analysis",
                "Key feature & IA for dev",
                "Fast Prototyping",
              ],
            },
            {
              service: "Design",
              serviceDescription:
                "We provide user-centered design-driven innovation where top-level planning and strategy are integrated into each layer, allowing functionality and aesthetics to work together harmoniously, rather than merely pursuing aesthetically pleasing designs.",
              buttonText: "Portfolio",
              items: [
                "CX Design",
                "BX Design",
                "UI/UX Design",
                "Design Systems",
              ],
            },
            {
              service: "Education",
              serviceDescription:
                "We help develop insights that can be applied to real-world problems, moving away from traditional education focused solely on conventional theories and methodologies. We provide guidelines that can be directly applied in enabling individuals to cultivate practical insights.",
              buttonText: "Curriculum Download",
              items: [
                "Regular Course: Service Planning Job Training",
                "Seminar: Understanding the Product Owner",
                "1:1 Coaching: For Service Planning Team Leaders",
              ],
            },
          ].map((item, index) => (
            <div key={index} className="w-full px-3 mt-12 lg:mt-0">
              <Item
                service={item.service}
                serviceDescription={item.serviceDescription}
                buttonText={item.buttonText}
                items={item.items}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
