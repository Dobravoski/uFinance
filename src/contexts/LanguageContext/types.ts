export type LanguagePreference = "system" | "pt-BR" | "en-US";
export type SupportedLocale = "pt-BR" | "en-US";

export interface LanguageContextData {
  preference: LanguagePreference;
  locale: SupportedLocale;
  isInitializing: boolean;
  setPreference(preference: LanguagePreference): void;
}
