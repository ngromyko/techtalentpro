import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Section from "./common/Section";
import Container from "./common/Container";
import { scrollToSection } from "../utils/scroll";
import promoImg from "../assets/promo_section_background.webp";
import promoVideo from "../assets/promo_video.mov";

const PromoSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "promo" });

  return (
    <Section sectionName={"promo"} backgroundColor="blue" backgroundImagePath={promoImg}>
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 text-white"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-24">{t("title")}</h1>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
            >
              {t("startCollaboration")}
            </button>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <video autoPlay loop playsInline muted className="w-[350px] h-[350px] rounded-full object-cover mx-auto">
              <source src={promoVideo} type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default PromoSection;
