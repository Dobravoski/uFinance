import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator"
import { useAuth } from "@/hooks/useAuth"

export default function Navigation() {

    const { user } = useAuth();

    return (
        <NavigationContainer>
            {user ? (<AppNavigator/>) : (<AuthNavigator/>)}
        </NavigationContainer>
    )
}