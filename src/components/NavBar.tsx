import { useTranslation } from "react-i18next";
import BurgerMenu from "./BurgerMenu";
import { setCurrentLang } from "../utils/language";
import { scrollToSection } from "../utils/scroll";
import { sections } from "../utils/constants";

const NavBar = () => {
  const { t, i18n } = useTranslation("translation", { keyPrefix: "nav" });

  const isShowLanguageSwitch = navigator.languages.some((lang) => lang.startsWith("ru"));

  return (
    <nav className="fixed left-0 right-0 bg-white bg-opacity-90 shadow-md z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">DoIT Solution</div>
          <div className="flex items-center justify-end">
            {isShowLanguageSwitch && (
              <button
                className="mr-5 px-4 py-2 text-blue-600 rounded"
                onClick={() => {
                  const languageToSet = i18n.language === "en" ? "ru" : "en";
                  setCurrentLang(languageToSet);
                  i18n.changeLanguage(languageToSet);
                }}
              >
                {i18n.language.startsWith("ru") ? "ru" : "en"}
              </button>
            )}
            <BurgerMenu />
            <div className="hidden md:flex space-x-8">
              {sections.map((sections) => (
                <a
                  key={sections.sectionName}
                  onClick={() => scrollToSection(sections.sectionName)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {t(sections.sectionTranslateKey)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
