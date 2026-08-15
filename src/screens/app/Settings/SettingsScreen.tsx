import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme, useLanguage } from "@/hooks";
import { AppText, ScreenContainer, SegmentedControl } from "@/components";
import type { ThemePreference } from "@/contexts/ThemeContext/types";
import type { LanguagePreference } from "@/contexts/LanguageContext/types";
import { styles } from "./styles";

export function SettingsScreen() {
    const { t } = useTranslation();
    const { preference, setPreference } = useTheme();
    const { preference: languagePreference, setPreference: setLanguagePreference } = useLanguage();

    const THEME_OPTIONS: { label: string; value: ThemePreference }[] = [
        { label: t("settings.appearance.system"), value: "system" },
        { label: t("settings.appearance.light"), value: "light" },
        { label: t("settings.appearance.dark"), value: "dark" },
    ];

    const LANGUAGE_OPTIONS: { label: string; value: LanguagePreference }[] = [
        { label: t("settings.language.system"), value: "system" },
        { label: t("settings.language.ptBR"), value: "pt-BR" },
        { label: t("settings.language.enUS"), value: "en-US" },
    ];

    return (
        <ScreenContainer contentContainerStyle={styles.content}>
            <View style={styles.section}>
                <AppText variant="title">{t("settings.appearance.title")}</AppText>

                <SegmentedControl<ThemePreference>
                    value={preference}
                    options={THEME_OPTIONS}
                    onValueChange={setPreference}
                />
            </View>

            <View style={styles.section}>
                <AppText variant="title">{t("settings.language.title")}</AppText>

                <SegmentedControl<LanguagePreference>
                    value={languagePreference}
                    options={LANGUAGE_OPTIONS}
                    onValueChange={setLanguagePreference}
                />
            </View>
        </ScreenContainer>
    )
}
