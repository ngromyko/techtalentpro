import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import { commonFadeRightAnimationProps, commonFadeLeftAnimationProps } from "../utils/constants";

const WhyUsSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "whyUs" });

  return (
    <Section sectionName={"why-us"} backgroundColor="gray">
      <Container>
        <SectionHeader>{t("whyChooseDoIT")}</SectionHeader>
        <div className="grid md:grid-cols-1 gap-8">
          <motion.div
            className="flex items-start space-x-4"
            transition={{ ease: "easeOut", duration: 1 }}
            {...commonFadeRightAnimationProps}
          >
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("deepItUnderstandingAndComplexApproach")}</h3>
              <p className="text-gray-600 whitespace-pre-wrap text-xl">{t("doITSolutionOffers")}</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-start space-x-4"
            transition={{ ease: "easeOut", duration: 1 }}
            {...commonFadeLeftAnimationProps}
          >
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t("benefitsOfItStaffAugmentation")}</h3>
              <p className="text-gray-600 whitespace-pre-wrap text-xl">
                {t("softwareStaffAugmentationInvolvesIntegrating")}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyUsSection;
