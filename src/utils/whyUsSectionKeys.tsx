import {
  FaClock,
  FaMoneyBillWave,
  FaUserTie,
  FaExpand,
  FaRocket,
  FaBalanceScale,
  FaTools,
  FaChartLine,
  FaBusinessTime,
  FaCheckCircle,
} from "react-icons/fa";

export const whyUsSectionKeys: { key: string; icon: React.ReactNode }[] = [
  { key: "savingTimeAndResources", icon: <FaClock /> },
  { key: "reducingPersonnelCosts", icon: <FaMoneyBillWave /> },
  { key: "accessToHighlyQualifiedSpecialists", icon: <FaUserTie /> },
  { key: "flexibilityAndScalability", icon: <FaExpand /> },
  { key: "fastProjectLaunch", icon: <FaRocket /> },
  { key: "reducedLegalAndTaxRisks", icon: <FaBalanceScale /> },
  { key: "modernTechnologiesAndTools", icon: <FaTools /> },
  { key: "increasedBusinessProcessEfficiency", icon: <FaChartLine /> },
  { key: "focusOnCoreBusiness", icon: <FaBusinessTime /> },
  { key: "qualityAssuranceAndResponsibility", icon: <FaCheckCircle /> },
];
