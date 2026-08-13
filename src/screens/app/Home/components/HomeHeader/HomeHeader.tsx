import { View } from "react-native";
import { AppText } from "@/components";
import { styles } from "./styles";
import type { HomeHeaderProps } from "./types";

export function HomeHeader({ userName }: HomeHeaderProps) {
  const greeting = userName ? `Olá, ${userName}! 👋`: "Olá! 👋";

  return (
    <View style={styles.container}>
      <AppText variant="heading">
        {greeting}
      </AppText>

      <AppText variant="body" style={styles.subtitle}>
        Confira como estão suas finanças hoje.
      </AppText>
    </View>
  );
}