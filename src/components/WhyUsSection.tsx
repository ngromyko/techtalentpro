import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import { commonFadeRightAnimationProps, commonFadeLeftAnimationProps } from "../utils/constants";
import { useWindowSize } from "../hooks/useWindowSize";
import { whyUsSectionKeys } from "../utils/whyUsSectionKeys";

const fadeLeftAnimationProps = {
  initial: { x: "100%", opacity: 0.1 },
  whileInView: { x: "0%", opacity: 1 },
  viewport: { once: true },
};

const fadeRightAnimationProps = {
  initial: { x: "0%", opacity: 0.1 },
  whileInView: { x: "100%", opacity: 1 },
  viewport: { once: true },
};

const WhyUsSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "whyUs" });
  const { isWideScreen } = useWindowSize();

  return (
    <Section sectionName={"why-us"}>
      <Container>
        <SectionHeader>{t("whyChooseDoIT")}</SectionHeader>
        <div className="grid md:grid-cols-1 gap-8">
          {whyUsSectionKeys.map((item, index) => {
            const isOdd = index % 2 === 0;
            const rightAnimationProps = isWideScreen ? fadeRightAnimationProps : commonFadeRightAnimationProps;
            const leftAnimationProps = isWideScreen ? fadeLeftAnimationProps : commonFadeLeftAnimationProps;
            const animationProps = isOdd ? leftAnimationProps : rightAnimationProps;

            return (
              <motion.div
                key={item.key}
                className="flex items-start space-x-4 w-full md:w-1/2"
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
