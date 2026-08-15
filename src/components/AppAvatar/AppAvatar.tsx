import { Image, Pressable, View } from "react-native";
import { User } from "lucide-react-native";
import { useTheme } from "@/hooks/useTheme";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles, avatarSizes, iconSizes, createIconProps } from "./styles";
import type { AppAvatarProps } from "./types";

export function AppAvatar({imageUri, size = "md", onPress, accessibilityLabel = "Foto de perfil"}: AppAvatarProps) {
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const avatarSize = avatarSizes[size];
  const iconSize = iconSizes[size];
  const iconProps = createIconProps(colors);

  const content = imageUri ? (
    <Image
      source={{ uri: imageUri }}
      style={styles.image}
      resizeMode="cover"
      accessibilityLabel={accessibilityLabel}
    />
  ) : (<User size={iconSize} {...iconProps} />);

  const containerStyle = [styles.container, {width: avatarSize, height: avatarSize}];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [containerStyle, pressed && styles.pressed]}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View
      style={containerStyle}
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel}
    >
      {content}
    </View>
  );
}