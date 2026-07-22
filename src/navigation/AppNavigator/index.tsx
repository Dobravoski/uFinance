import { AppButton } from "@/components";
import { useAuth } from "@/hooks/useAuth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

    const {signOut} = useAuth();

    return (
        <Stack.Navigator>
            <AppButton title="Logout" onPress={signOut}/>
        </Stack.Navigator>
    );
}