import i18n from "../i18";

export const languageKey = "autodoc-language";

export const getLanguage = () => {
  const storedLanguage = localStorage.getItem(languageKey) || "ru";
  return storedLanguage;
};

export const setLanguage = (language: string) => {
  localStorage.setItem(languageKey, language);
  i18n.changeLanguage(language);
};

export const language = getLanguage();
