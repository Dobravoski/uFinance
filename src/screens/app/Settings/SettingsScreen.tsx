import { useAuth } from "@/hooks/useAuth";
import { AppButton } from "@/components";

export function SettingsScreen() {
    const { signOut } = useAuth();

    return (
        <AppButton title="Logout" onPress={signOut}/>
    )
}