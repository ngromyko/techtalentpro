import { type SectionName } from "./constants";

export const scrollToSection = (sectionId: SectionName) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
