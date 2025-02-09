import { useState } from "react";
import { useTranslation } from "react-i18next";
import MenuButton from "./MenuButton";
import { scrollToSection } from "../utils/scroll";
import { sections } from "../utils/constants";

const BurgerMenu = () => {
  const { t } = useTranslation("translation", { keyPrefix: "nav" });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <MenuButton isOpen={isOpen} width={24} height={24} onClick={() => setIsOpen((prev) => !prev)} />
      <div
        className={`fixed w-full h-full top-0 bg-white p-5 left-full transition-transform duration-300 ease-in-out ${
          isOpen ? "-translate-x-full" : ""
        }`}
      >
        <ul className="pt-16 text-white text-lg">
          {sections.map((sections) => (
            <li key={sections.sectionName}>
              <a
                className="text-gray-700 hover:text-blue-600 py-2 block border-b border-blue-600"
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(sections.sectionName);
                }}
              >
                {t(sections.sectionTranslateKey)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
