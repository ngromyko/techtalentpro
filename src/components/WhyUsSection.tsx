import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import { commonFadeRightAnimationProps, commonFadeLeftAnimationProps } from "../utils/constants";
import { whyUsSectionKeys } from "../utils/whyUsSectionKeys";

const WhyUsSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "whyUs" });

  return (
    <Section sectionName={"why-us"}>
      <Container>
        <SectionHeader>{t("whyChooseDoIT")}</SectionHeader>
        <div className="grid md:grid-cols-1 gap-8">
          {whyUsSectionKeys.map((item, index) => {
            const isOdd = index % 2 === 0;
            const animationProps = isOdd ? commonFadeRightAnimationProps : commonFadeLeftAnimationProps;

            return (
              <motion.div
                className="flex items-start space-x-4"
                transition={{ ease: "easeOut", duration: 1 }}
                {...animationProps}
              >
                <div className="bg-blue-100 p-3 rounded-full">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t(`${item.key}.title`)}</h3>
                  <p className="text-color-text">{t(`${item.key}.description`)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default WhyUsSection;
