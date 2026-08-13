import { Pressable } from "react-native";
import { Plus } from "lucide-react-native";
import { styles, iconProps } from "./styles";
import type { AddTransactionFabProps } from "./types";

export function AddTransactionFab({onPress}: AddTransactionFabProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel="Adicionar transação"
    >
      <Plus style={styles.icon} {...iconProps} />
    </Pressable>
  );
}