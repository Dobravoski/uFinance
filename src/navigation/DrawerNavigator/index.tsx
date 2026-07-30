import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppDrawerParamList } from "../types";
import BottomTabNavigator from "../BottomTabNavigator";
import { ProfileScreen, SettingsScreen } from "@/screens/app";
import { DrawerContent } from "./DrawerContent";

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => (<DrawerContent {...props} />)}>
            <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} options={{title: "Home"}}/>
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    )
}