import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { commonFadeRightAnimationProps, commonFadeLeftAnimationProps } from "../utils/constants";

const WhyUsSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "whyUs" });

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t("whyChooseDoIT")}</h2>
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
              <p className="text-gray-600">{t("doITSolutionOffers")}</p>
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
              <p className="text-gray-600">{t("softwareStaffAugmentationInvolvesIntegrating")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
