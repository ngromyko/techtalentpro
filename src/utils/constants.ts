export const commonFadeUpAnimationProps = {
  initial: { y: 100, opacity: 0.1 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
};

export const commonFadeLeftAnimationProps = {
  initial: { x: -20, opacity: 0.1 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
};

export const commonFadeRightAnimationProps = {
  initial: { x: 20, opacity: 0.1 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
};

export type SectionName = "about" | "services" | "why-us" | "contact";

export const sections: { sectionName: SectionName; sectionTranslateKey: string }[] = [
  { sectionName: "about", sectionTranslateKey: "about" },
  { sectionName: "services", sectionTranslateKey: "services" },
  { sectionName: "why-us", sectionTranslateKey: "whyUs" },
  { sectionName: "contact", sectionTranslateKey: "contact" },
];
