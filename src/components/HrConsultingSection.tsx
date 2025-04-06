import { useTranslation } from "react-i18next";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import Card from "./common/Card";
import { hrConsultingSectionTextKeys } from "../utils/constants";

const HrConsultingSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "hrConsulting" });

  return (
    <Section sectionName={"hrConsulting"}>
      <Container>
        <SectionHeader>{t("benefitsOfHrConsulting")}</SectionHeader>
        <p className="mb-4 text-xl text-center">{t("sectionDescription")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {hrConsultingSectionTextKeys.map((textKey) => {
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

export default HrConsultingSection;
