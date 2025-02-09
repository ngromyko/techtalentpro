import { ReactNode } from "react";

const SectionHeader = ({ children }: { children: ReactNode }) => (
  <h2 className="text-3xl font-bold text-center mb-12">{children}</h2>
);

export default SectionHeader;
