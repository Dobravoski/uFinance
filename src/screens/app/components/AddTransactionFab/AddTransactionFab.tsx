import { Pressable } from "react-native";
import { Plus } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles, iconProps } from "./styles";
import type { AddTransactionFabProps } from "./types";

export function AddTransactionFab({onPress}: AddTransactionFabProps) {
  const styles = useThemedStyles(createStyles);
  const { t } = useTranslation();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={t("transactions.addFab.accessibilityLabel")}
    >
      <Plus style={styles.icon} {...iconProps} />
    </Pressable>
  );
}