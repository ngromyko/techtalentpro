import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const PromoSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "promo" });

  return (
    <section className="pt-28 pb-20 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 text-white"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("providingTopItTalent")}</h1>
            <p className="text-xl mb-8">{t("professionalItRecruitment")}</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
              {t("startCollaboration")}
            </button>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <svg viewBox="0 0 800 600" className="w-full h-auto">
              <circle cx="400" cy="300" r="250" fill="#f8fafc" />
              <circle cx="400" cy="300" r="200" fill="#f1f5f9" />
              <rect x="300" y="250" width="200" height="140" rx="10" fill="#659DBD" />
              <rect x="290" y="380" width="220" height="20" rx="5" fill="#557d97" />
              <text x="320" y="300" fill="white" fontFamily="monospace" fontSize="14">
                <tspan x="320" y="300">
                  &lt;code&gt;
                </tspan>
                <tspan x="320" y="320">
                  {"{data}"}
                </tspan>
                <tspan x="320" y="340">
                  &lt;/code&gt;
                </tspan>
              </text>
              <circle cx="200" cy="200" r="20" fill="#659DBD" />
              <circle cx="600" cy="200" r="20" fill="#659DBD" />
              <circle cx="400" cy="150" r="20" fill="#659DBD" />
              <line x1="200" y1="200" x2="400" y2="150" stroke="#659DBD" strokeWidth="3" />
              <line x1="400" y1="150" x2="600" y2="200" stroke="#659DBD" strokeWidth="3" />
              <line x1="200" y1="200" x2="600" y2="200" stroke="#659DBD" strokeWidth="3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
