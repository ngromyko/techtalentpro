import { useTranslation } from "react-i18next";
import Section from "./common/Section";
import Container from "./common/Container";
import SectionHeader from "./common/SectionHeader";
import {
  FaChartLine,
  FaShippingFast,
  FaShoppingCart,
  FaHeartbeat,
  FaCar,
  FaStore,
  FaFilm,
  FaBroadcastTower,
} from "react-icons/fa";
import { technologies } from "../utils/constants";

const businessDomains = [
  { name: "Fintech", icon: <FaChartLine /> },
  { name: "Logistics", icon: <FaShippingFast /> },
  { name: "Retail", icon: <FaShoppingCart /> },
  { name: "Healthcare", icon: <FaHeartbeat /> },
  { name: "Automotive", icon: <FaCar /> },
  { name: "Ecommerce", icon: <FaStore /> },
  { name: "Media & Entertainment", icon: <FaFilm /> },
  { name: "Telecom", icon: <FaBroadcastTower /> },
];

const TechnologiesSection = () => {
  const { t } = useTranslation("translation", { keyPrefix: "technologies" });

  return (
    <Section sectionName={"technologies"}>
      <Container className="mb-20">
        <SectionHeader>{t("businessDomains")}</SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {businessDomains.map((domain, index) => (
            <div key={index} className="flex items-center">
              <div className="text-green-500 text-4xl mr-4">{domain.icon}</div>
              <span className="text-gray-700 font-medium">{domain.name}</span>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <SectionHeader>{t("skillsAndCompetencies")}</SectionHeader>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.technology}
              className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-gray-700 font-medium">{tech.technology}</span>
              {tech.stack.map((stackItem) => (
                <span key={stackItem} className="text-gray-700 font-small">
                  {stackItem}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TechnologiesSection;
