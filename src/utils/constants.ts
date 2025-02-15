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

export type SectionName = "about" | "services" | "why-us" | "technologies" | "contact";

export const sections: { sectionName: SectionName; sectionTranslateKey: string }[] = [
  { sectionName: "about", sectionTranslateKey: "about" },
  { sectionName: "services", sectionTranslateKey: "services" },
  { sectionName: "technologies", sectionTranslateKey: "technologies" },
  { sectionName: "why-us", sectionTranslateKey: "whyUs" },
  { sectionName: "contact", sectionTranslateKey: "contact" },
];

export const technologies = [
  { technology: "Frontend Development", stack: ["React", "Angular", "Vue.js", "Javascript", "Typescript"] },
  { technology: "Backend Development", stack: ["Java", ".Net", "Python", "Node.js", "Golang", "PHP", "Ruby", "C++"] },
  { technology: "QA", stack: ["Manual", "Automation", "Performance"] },
  { technology: "Mobile Development", stack: ["Android", "iOS", "React Native", "Flutter"] },
  { technology: "PM", stack: ["Project Manager", "Scrum Master", "Project Coordinator"] },
  { technology: "Analysts", stack: ["Business", "System"] },
  { technology: "Designers", stack: ["UX Engineers", "UI Design", "Graphic Designers"] },
  { technology: "DevOps", stack: ["DevOps Engineers", "DevSecOps", "SRE", "Cloud Engineers"] },
  { technology: "Data Platform", stack: ["Data Analyst", "Data Engineer", "Data Scientist", "Big Data"] },
];
