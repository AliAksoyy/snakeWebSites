import { createContext, useContext, useState } from "react";

const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const value = { lang, setLang };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLang = () => {
  return useContext(LocalizationContext);
};
