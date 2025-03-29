import { ReactNode } from "react";

interface SectionProps {
  sectionName: string;
  children: ReactNode;
  backgroundColor?: "blue" | "gray";
  backgroundImagePath?: string;
  minHeight?: number;
  className?: string;
}

const Section = ({
  sectionName,
  backgroundColor,
  backgroundImagePath,
  minHeight,
  className,
  children,
}: SectionProps) => {
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

  const getMinHeight = () => {
    return minHeight ? minHeight : 0;
  };

  return (
    <section
      id={sectionName}
      className={`py-20 
        ${getBackgroundColor()} ${backgroundImagePath ? `bg-cover bg-center` : ""} 
        min-h-[${getMinHeight()}px] 
        ${className ? className : ""}`}
      style={backgroundImagePath ? { backgroundImage: `url(${backgroundImagePath})` } : {}}
    >
      {children}
    </section>
  );
};

export default Section;
