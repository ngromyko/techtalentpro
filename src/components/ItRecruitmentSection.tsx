import { useTranslation } from "react-i18next";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import Card from "./common/Card";
import itRecruitmentSectionBackground from "../assets/it_recruitment_section_background.webp";
import { itRecruitmentSectionTextKeys } from "../utils/constants";

const ItRecruitmentSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "itRecruitment" });

  return (
    <Section
      sectionName={"itRecruitment"}
      backgroundColor="gray"
      backgroundImagePath={itRecruitmentSectionBackground}
      className="before:absolute before:inset-0 before:w-full before:h-full before:bg-white before:opacity-70 before:z-1 before:content-['']"
    >
      <Container className="relative z-1">
        <SectionHeader>{t("benefitsOfItRecruitingForBusiness")}</SectionHeader>
        <p className="mb-4 text-xl">{t("sectionDescription")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {itRecruitmentSectionTextKeys.map((textKey) => {
            return (
              <Card
                key={t(`${textKey}.title`) + t(`${textKey}.description`)}
                heading={t(`${textKey}.title`)}
                description={t(`${textKey}.description`)}
                className="flex-0 min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1rem)]"
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ItRecruitmentSection;
