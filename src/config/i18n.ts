import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { ptBR, enUS } from "@/constants/locales";

i18next.use(initReactI18next).init({
  resources: {
    "pt-BR": { translation: ptBR },
    "en-US": { translation: enUS },
  },
  lng: "pt-BR",
  fallbackLng: "pt-BR",
  interpolation: { escapeValue: false },
});

export default i18next;
