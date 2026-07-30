import { AppButton } from "@/components";
import { useAuth } from "@/hooks/useAuth";


export function HomeScreen() {

    const { signOut } = useAuth();

    return (
        <AppButton title="Logout" onPress={signOut}/>
    )
}