import { createContext, useState, useContext } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ES");

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (value) value = value[k];
    }
    return value || key;
  };

  const getTranslationObject = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (value) value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, getTranslationObject }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
