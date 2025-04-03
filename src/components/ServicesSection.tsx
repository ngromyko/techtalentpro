import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import Card from "./common/Card";
import { commonFadeUpAnimationProps } from "../utils/constants";
import aboutUsImage from "../assets/about_us_section_background.webp";

const MotionCard = motion(Card);

const ServicesSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "services" });

  return (
    <Section
      sectionName={"services"}
      backgroundColor="gray"
      backgroundImagePath={aboutUsImage}
      minHeight={867}
      className="flex h-full flex-col justify-end"
    >
      <Container>
        <SectionHeader color="white">{t("ourServices")}</SectionHeader>
        <div className="grid md:grid-cols-3 gap-8">
          <MotionCard
            key={t("staffAugmentation")}
            heading={t("staffAugmentation")}
            description={t("providingItSpecialists")}
            transition={{ ease: "easeOut", duration: 1 }}
            {...commonFadeUpAnimationProps}
          />
          <MotionCard
            key={t("itRecruitment")}
            heading={t("itRecruitment")}
            description={t("sourcingDevelopers")}
            transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
            {...commonFadeUpAnimationProps}
          />
          <MotionCard
            key={t("hrConsulting")}
            heading={t("hrConsulting")}
            description={t("helpWithHr")}
            transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
            {...commonFadeUpAnimationProps}
          />
        </div>
      </Container>
    </Section>
  );
};

export default ServicesSection;
