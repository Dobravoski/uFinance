import { Image, Pressable, View } from "react-native";
import { User } from "lucide-react-native";
import { styles, avatarSizes, iconSizes, iconProps } from "./styles";
import type { AppAvatarProps } from "./types";

export function AppAvatar({imageUri, size = "md", onPress, accessibilityLabel = "Foto de perfil"}: AppAvatarProps) {
  const avatarSize = avatarSizes[size];
  const iconSize = iconSizes[size];

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