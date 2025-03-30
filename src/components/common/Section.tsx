import { ReactNode, CSSProperties } from "react";

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

  const getStyles = () => {
    const styles: CSSProperties = {};
    if (backgroundImagePath) {
      styles.backgroundImage = `url(${backgroundImagePath})`;
    }

    styles.minHeight = minHeight || 0;

    return styles;
  };

  return (
    <section
      id={sectionName}
      className={`py-20 
        ${getBackgroundColor()} ${backgroundImagePath ? `bg-cover bg-center` : ""} 
        ${className ? className : ""}`}
      style={getStyles()}
    >
      {children}
    </section>
  );
};

export default Section;
