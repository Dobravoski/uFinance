export interface AppConfirmationModalProps {
  visible: boolean;
  title: string;
  message: string;

  cancelLabel?: string;
  confirmLabel?: string;

  onCancel: () => void;
  onConfirm: () => void;
}