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
      <div>
        <div className="border-l-2 border-[#00ff02] pl-4 pb-7">
          <h2 className="text-[#00ff02] font-bold text-[44.4px] mb-4">
            {service}
          </h2>
          <p className="font-normal text-white text-lg leading-[27px]">
            {serviceDescription}
          </p>
        </div>

        <button className="my-10 rounded-[50px] border border-[#0F0] bg-black inline-flex p-[8px_30px] justify-center items-center gap-[10px] text-[20px]">
          <span>{buttonText}</span>
        </button>

        <div className="border-l-2 border-[#00ff02] pl-4 pb-7">
          {items?.map((item) => (
            <p
              key={item}
              className="font-normal text-white text-lg leading-[27px] mb-4"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="service"
      className="h-screen flex justify-center items-center text-4xl bg-black"
    >
      <Item
        service={"Consulting"}
        serviceDescription={
          "Each project has its own tasks. We analyze your business model through market and industry trend research and provide the foundation for new business through user research and validated technology-based consulting."
        }
        buttonText={"Contact Us"}
        items={[
          "PMO Consulting",
          "Market Research",
          "Stakeholder Interview Analysis",
          "Key feature & IA for dev",
          "Fast Prototyping",
        ]}
      />
      <Item
        service={"Design"}
        serviceDescription={
          "We provide user-centered design-driven innovation where top-level planning and strategy are integrated into each layer, allowing functionality and aesthetics to work together harmoniously, rather than merely pursuing aesthetically pleasing designs."
        }
        buttonText={"Portfolio"}
        items={["CX Design", "BX Design", "UI/UX Design", "Design Systems"]}
      />
      <Item
        service={"Education"}
        serviceDescription={
          "We help develop insights that can be applied to real-world problems, moving away from traditional education focused solely on conventional theories and methodologies. We provide guidelines that can be directly applied in enabling individuals to cultivate practical insights."
        }
        buttonText={"Curriculum Download"}
        items={[
          "Regular Course: Service Planning Job Training",
          "Seminar: Understanding the Product Owner",
          "1:1 Coaching: For Service Planning Team Leaders",
        ]}
      />
    </section>
  );
};

export default Service;
