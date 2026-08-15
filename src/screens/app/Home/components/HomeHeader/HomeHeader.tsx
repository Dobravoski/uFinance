import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { AppText } from "@/components";
import { styles } from "./styles";
import type { HomeHeaderProps } from "./types";

export function HomeHeader({ userName }: HomeHeaderProps) {
  const { t } = useTranslation();
  const greeting = userName ? t("home.header.greetingWithName", { name: userName }) : t("home.header.greeting");

  return (
    <View style={styles.container}>
      <AppText variant="heading">
        {greeting}
      </AppText>

      <AppText variant="body" style={styles.subtitle}>
        {t("home.header.subtitle")}
      </AppText>
    </View>
  );
}