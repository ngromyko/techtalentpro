const DEFAULT_LANGUAGE = "en";

export type Lang = "en" | "ru";

export function setCurrentLang(lang: Lang) {
  localStorage.setItem("language", lang);
}

export function getCurrentLang(): Lang {
  return (localStorage.getItem("language") ?? DEFAULT_LANGUAGE) as Lang;
}
