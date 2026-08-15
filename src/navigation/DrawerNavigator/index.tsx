import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTranslation } from "react-i18next";
import type { AppDrawerParamList } from "../types";
import { HomeScreen, ProfileScreen, SettingsScreen } from "@/screens/app";
import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function DrawerNavigator() {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{drawerStyle: {width: 280}}}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: t("nav.drawer.home") }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: t("nav.drawer.profile")}} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: t("nav.drawer.settings") }} />
    </Drawer.Navigator>
  );
}