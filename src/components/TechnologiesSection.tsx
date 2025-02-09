import { useTranslation } from "react-i18next";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import { technologies } from "../utils/technologies";
import { businessDomains } from "../utils/businessDomains";

const TechnologiesSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "technologies" });

  return (
    <Section sectionName={"technologies"}>
      <Container className="mb-20">
        <SectionHeader>{t("businessDomains")}</SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {businessDomains.map((domain, index) => (
            <div key={index} className="flex items-center">
              <div className="text-green-500 text-4xl mr-4">{domain.icon}</div>
              <span className="text-gray-700 font-medium">{domain.name}</span>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <SectionHeader>{t("skillsAndCompetencies")}</SectionHeader>
        <div className="max-w-7xl mx-auto text-center">
          {technologies.map((technology) => (
            <div className="flex flex-col md:flex-row items-center mb-12" key={technology.title}>
              <p className="flex items-center justify-center md:justify-start  h-full text-md md:text-xl font-bold text-gray-800 mb-4 md:mb-0 mr-5 min-w-60">
                {technology.title}
              </p>
              <div className="flex items-center justify-center flex-wrap">
                {technology.stack.map((stackItem) => (
                  <div key={stackItem.name} className="flex flex-col items-center m-2">
                    {stackItem.icon}
                    <span className="mt-4 text-gray-700 text-sm font-medium">{stackItem.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TechnologiesSection;
