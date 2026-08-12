import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types";
import { screenOptions } from "./options";
import { HomeScreen, StatisticsScreen } from "@/screens/app";
import TransactionStackNavigator from '../TransactionStackNavigator';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Statistics" component={StatisticsScreen}/>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Transactions" component={TransactionStackNavigator}/>
        </Tab.Navigator>
    );
}