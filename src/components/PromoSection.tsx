import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Section from "./common/Section";
import Container from "./common/Container";
import { scrollToSection } from "../utils/scroll";
import promoVideo from "../assets/promo_video.mov";

const PromoSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "promo" });

  return (
    <Section
      sectionName={"promo"}
      minHeight={734}
      className="flex items-center before:absolute before:inset-0 before:w-full before:h-full before:bg-primary before:opacity-70 before:z-2 before:content-['']"
    >
      <video autoPlay loop playsInline muted className="absolute top-0 left-0 w-full h-full object-cover z-[1]">
        <source src={promoVideo} type="video/mp4" />
      </video>
      <Container>
        <motion.div
          className="md:w-1/2 text-white relative z-3"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-24">{t("title")}</h1>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
          >
            {t("startCollaboration")}
          </button>
        </motion.div>
      </Container>
    </Section>
  );
};

export default PromoSection;
