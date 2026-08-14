import { createDrawerNavigator } from "@react-navigation/drawer";
import type { AppDrawerParamList } from "../types";
import { HomeScreen, ProfileScreen, SettingsScreen } from "@/screens/app";
import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{drawerStyle: {width: 280}}}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }}/>
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: "Configurações" }} />
    </Drawer.Navigator>
  );
}