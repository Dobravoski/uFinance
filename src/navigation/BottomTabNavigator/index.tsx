import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";
import { screenOptions } from "./options";
import { HomeScreen, TransactionsScreen, StatisticsScreen } from "@/screens/app";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Transactions" component={TransactionsScreen}/>
            <Tab.Screen name="Statistics" component={StatisticsScreen}/>
        </Tab.Navigator>
    );
}