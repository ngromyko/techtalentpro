import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./translations/ru.json";
import en from "./translations/en.json";
import { getCurrentLang } from "./utils/language";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  lng: getCurrentLang(),
  resources,
});

export default i18n;
