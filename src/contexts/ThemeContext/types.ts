import type { ThemeColors } from "@/theme/colors";

export type ThemePreference = "system" | "light" | "dark";
export type ThemeScheme = "light" | "dark";

export interface ThemeContextData {
  preference: ThemePreference;
  scheme: ThemeScheme;
  colors: ThemeColors;
  isInitializing: boolean;
  setPreference(preference: ThemePreference): void;
}
