import { Modal, View } from "react-native";
import { AppButton } from "../AppButton";
import { AppText } from "../AppText";
import type { AppConfirmationModalProps } from "./types";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles } from "./styles";

export function AppConfirmationModal({visible, title, message, cancelLabel = "Cancelar", confirmLabel = "Confirmar", onCancel, onConfirm}: AppConfirmationModalProps) {
  const styles = useThemedStyles(createStyles);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <AppText variant="title" style={styles.title}>
            {title}
          </AppText>

          <AppText variant="body" style={styles.message}>
            {message}
          </AppText>

          <View style={styles.actions}>
            <AppButton title={cancelLabel} variant="secondary" style={styles.action} onPress={onCancel} />
            <AppButton title={confirmLabel} variant="primary" style={styles.action} onPress={onConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
}