import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";

export default function Navigation() {
    return (
        <NavigationContainer>
            <AuthNavigator/>
        </NavigationContainer>
    )
}