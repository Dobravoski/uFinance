import { View } from "react-native";
import { useTheme } from "@/hooks";
import { AppText, ScreenContainer, SegmentedControl } from "@/components";
import type { ThemePreference } from "@/contexts/ThemeContext/types";
import { styles } from "./styles";

const THEME_OPTIONS: { label: string; value: ThemePreference }[] = [
    { label: "Sistema", value: "system" },
    { label: "Claro", value: "light" },
    { label: "Escuro", value: "dark" },
];

export function SettingsScreen() {
    const { preference, setPreference } = useTheme();

    return (
        <ScreenContainer contentContainerStyle={styles.content}>
            <View style={styles.section}>
                <AppText variant="title">Aparência</AppText>

                <SegmentedControl<ThemePreference>
                    value={preference}
                    options={THEME_OPTIONS}
                    onValueChange={setPreference}
                />
            </View>
        </ScreenContainer>
    )
}
