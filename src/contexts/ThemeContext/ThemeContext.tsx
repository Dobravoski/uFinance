import { createContext, useState, useEffect, useMemo, type PropsWithChildren } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { light, dark } from "@/theme/colors";
import type { ThemeContextData, ThemePreference } from "./types";

const STORAGE_KEY = "@ufinance:theme-preference";

export const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useColorScheme();
  const [preference, setPreferenceState] = useState<ThemePreference>("system");
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored === "light" || stored === "dark" || stored === "system") {
        setPreferenceState(stored);
      }
      setIsInitializing(false);
    });
  }, []);

  const scheme = preference === "system" ? (systemScheme === "dark" ? "dark" : "light") : preference;

  function setPreference(next: ThemePreference) {
    setPreferenceState(next);
    void AsyncStorage.setItem(STORAGE_KEY, next);
  }

  const colors = useMemo(() => (scheme === "dark" ? dark : light), [scheme]);

  const value: ThemeContextData = { preference, scheme, colors, isInitializing, setPreference };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
