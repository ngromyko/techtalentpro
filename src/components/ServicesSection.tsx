import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { commonFadeUpAnimationProps } from "../utils/constants";

const ServicesSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "services" });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t("ourServices")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            transition={{ ease: "easeOut", duration: 1 }}
            {...commonFadeUpAnimationProps}
          >
            <h3 className="text-xl font-bold mb-4">{t("staffAugmentation")}</h3>
            <p className="text-gray-600">{t("providingItSpecialists")}</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
            {...commonFadeUpAnimationProps}
          >
            <h3 className="text-xl font-bold mb-4">{t("itRecruitment")}</h3>
            <p className="text-gray-600">{t("sourcingDevelopers")}</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
            {...commonFadeUpAnimationProps}
          >
            <h3 className="text-xl font-bold mb-4">{t("hrConsulting")}</h3>
            <p className="text-gray-600">{t("helpWithHr")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
