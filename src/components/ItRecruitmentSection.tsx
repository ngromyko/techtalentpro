import { useTranslation } from "react-i18next";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import Card from "./common/Card";
import { itRecruitmentSectionTextKeys } from "../utils/constants";

const ItRecruitmentSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "itRecruitment" });

  return (
    <Section sectionName={"itRecruitment"} backgroundColor="gray">
      <Container>
        <SectionHeader>{t("benefitsOfItRecruitingForBusiness")}</SectionHeader>
        <p className="mb-4 text-xl">{t("sectionDescription")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {itRecruitmentSectionTextKeys.map((textKey) => {
            return (
              <Card
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
