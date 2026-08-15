import { View } from "react-native";
import { CheckCircle, CircleAlert } from "lucide-react-native";
import { AppText } from "@/components/AppText";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles, iconProps } from "./styles";
import type { AppToastProps } from "./types";

export function AppToast({ type, message }: AppToastProps) {
  const styles = useThemedStyles(createStyles);
  const isSuccess = type === "success";

  const Icon = isSuccess ? CheckCircle : CircleAlert;

  return (
    <View style={[styles.container, isSuccess ? styles.success : styles.error]}>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} {...iconProps} />
      </View>

      <AppText variant="body" style={styles.message}>
        {message}
      </AppText>
    </View>
  );
}