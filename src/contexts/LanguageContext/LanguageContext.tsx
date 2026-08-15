import { createContext, useState, useEffect, type PropsWithChildren } from "react";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "@/config/i18n";
import type { LanguageContextData, LanguagePreference, SupportedLocale } from "./types";

const STORAGE_KEY = "@ufinance:language-preference";

function resolveSystemLocale(): SupportedLocale {
  const deviceLocale = Localization.getLocales()[0]?.languageTag ?? "";
  return deviceLocale.toLowerCase().startsWith("en") ? "en-US" : "pt-BR";
}

export const LanguageContext = createContext<LanguageContextData | undefined>(undefined);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [preference, setPreferenceState] = useState<LanguagePreference>("system");
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored === "pt-BR" || stored === "en-US" || stored === "system") {
        setPreferenceState(stored);
      }
      setIsInitializing(false);
    });
  }, []);

  const locale = preference === "system" ? resolveSystemLocale() : preference;

  useEffect(() => {
    void i18n.changeLanguage(locale);
  }, [locale]);

  function setPreference(next: LanguagePreference) {
    setPreferenceState(next);
    void AsyncStorage.setItem(STORAGE_KEY, next);
  }

  const value: LanguageContextData = { preference, locale, isInitializing, setPreference };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
