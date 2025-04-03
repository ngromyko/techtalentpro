import { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
  color?: string;
}

const SectionHeader = ({ color, children }: SectionHeaderProps) => (
  <h2 className={`text-4xl font-bold text-center mb-12 text-${color || "primary"}`}>{children}</h2>
);

export default SectionHeader;
