import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";
import Navigation from "@/navigation";
import { useAuth, useUser, useTheme, useLanguage } from "@/hooks";

void SplashScreen.preventAutoHideAsync();

export default function AppBootstrap() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const { isInitializing: isAuthInitializing } = useAuth();
  const { isInitializing: isUserInitializing } = useUser();
  const { isInitializing: isThemeInitializing, scheme } = useTheme();
  const { isInitializing: isLanguageInitializing } = useLanguage();

  const isAppReady =
    fontsLoaded && !isAuthInitializing && !isUserInitializing && !isThemeInitializing && !isLanguageInitializing;

  useEffect(() => {
    async function prepare() {
      if (isAppReady) {
        void SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return (
    <>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      <Navigation />
    </>
  );
}