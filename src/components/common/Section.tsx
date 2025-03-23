import { ReactNode } from "react";

interface SectionProps {
  sectionName: string;
  children: ReactNode;
  backgroundColor?: "blue" | "gray";
  backgroundImagePath?: string;
}

const Section = ({ sectionName, backgroundColor, backgroundImagePath, children }: SectionProps) => {
  const getBackgroundColor = () => {
    switch (backgroundColor) {
      case "blue":
        return "bg-gradient-to-r from-blue-500 to-blue-700";
      case "gray":
        return "bg-gray-50";
      default:
        return "bg-white";
    }
  };

  return (
    <section
      id={sectionName}
      className={`py-20 ${getBackgroundColor()} ${backgroundImagePath ? `bg-cover bg-center` : ""}`}
      style={backgroundImagePath ? { backgroundImage: `url(${backgroundImagePath})` } : {}}
    >
      {children}
    </section>
  );
};

export default Section;
