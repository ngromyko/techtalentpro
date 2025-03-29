import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import { commonFadeUpAnimationProps } from "../utils/constants";

const AboutUsSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "about" });

  return (
    <Section sectionName={"about"}>
      <Container>
        <SectionHeader>{t("aboutOurCompany")}</SectionHeader>
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            className="text-center"
            transition={{ ease: "easeOut", duration: 1 }}
            {...commonFadeUpAnimationProps}
          >
            <div className="text-4xl text-primary-blue mb-4">5+</div>
            <p className="text-color-text">{t("yearsInIt")}</p>
          </motion.div>
          <motion.div
            className="text-center"
            transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
            {...commonFadeUpAnimationProps}
          >
            <div className="text-4xl text-primary-blue mb-4">50+</div>
            <p className="text-color-text">{t("fullTimeProfessionals")}</p>
          </motion.div>
          <motion.div
            className="text-center"
            transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
            {...commonFadeUpAnimationProps}
          >
            <div className="text-4xl text-primary-blue mb-4">10%</div>
            <p className="text-color-text">{t("staffTurnoverRate")}</p>
          </motion.div>
          <motion.div
            className="text-center"
            transition={{ ease: "easeOut", duration: 1, delay: 0.6 }}
            {...commonFadeUpAnimationProps}
          >
            <div className="text-4xl text-primary-blue mb-4">20%</div>
            <p className="text-color-text">{t("customerSavings")}</p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUsSection;
