export type AppAvatarSize = "sm" | "md" | "lg" | "xl";

export interface AppAvatarProps {
  imageUri?: string | null;
  size?: AppAvatarSize;
  onPress?: () => void;
  accessibilityLabel?: string;
}