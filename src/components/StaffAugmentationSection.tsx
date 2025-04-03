import { useTranslation } from "react-i18next";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import Card from "./common/Card";
import { staffAugmentationSectionTextKeys } from "../utils/constants";

const StaffAugmentationSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "staffAugmentation" });

  return (
    <Section sectionName={"staffAugmentation"}>
      <Container>
        <SectionHeader>{t("advantagesOfTheStaffAugmentationModel")}</SectionHeader>
        <p className="mb-4 text-xl">{t("sectionDescription")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {staffAugmentationSectionTextKeys.map((textKey) => {
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

export default StaffAugmentationSection;
