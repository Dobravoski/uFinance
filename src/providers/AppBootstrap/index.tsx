import { useEffect } from "react";
import { View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold} from "@expo-google-fonts/inter";
import Navigation from "@/navigation";

void SplashScreen.preventAutoHideAsync();

export default function AppBootstrap() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      if(fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded])

  if(!fontsLoaded) {
    return null;
  }

  return (
    <Navigation/>
  )
}