import { useTranslation } from "react-i18next";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import { itRecruitmentSectionTextKeys } from "../utils/constants";

const ItRecruitmentSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "itRecruitment" });

  return (
    <Section sectionName={"itRecruitment"} backgroundColor="gray">
      <Container>
        <SectionHeader>{t("benefitsOfItRecruitingForBusiness")}</SectionHeader>
        <p className="mb-4 text-xl">{t("sectionDescription")}</p>
        <div className="flex flex-wrap justify-center">
          {itRecruitmentSectionTextKeys.map((textKey) => {
            return (
              <div
                key={textKey}
                className="bg-white m-4 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 md:w-[40%] lg:w-[30%]"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{t(`${textKey}.title`)}</h3>
                <p className="text-color-text">{t(`${textKey}.description`)}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ItRecruitmentSection;
