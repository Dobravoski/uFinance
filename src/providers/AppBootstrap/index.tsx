import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold} from "@expo-google-fonts/inter";
import Navigation from "@/navigation";
import { useAuth } from "@/hooks/useAuth";

void SplashScreen.preventAutoHideAsync();

export default function AppBootstrap() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const { isInitializing } = useAuth();

  const isAppReady = fontsLoaded && !isInitializing;

  useEffect(() => {
    async function prepare() {
      if(isAppReady) {
        void SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [isAppReady])

  if(!isAppReady) {
    return null;
  }

  return (
    <Navigation/>
  )
}