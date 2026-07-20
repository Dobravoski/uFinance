import { Image, View } from "react-native";
import logoImage from "@/assets/unect-logo.png";
import { styles } from "./styles";
import { logoSizes } from "./sizes";
import type { AppLogoProps } from "./types";

const DEFAULT_SIZE = "lg";
const LOGO_SCALE = 0.65;

export function AppLogo({ size = DEFAULT_SIZE }: AppLogoProps) {
  const containerSize = logoSizes[size];
  const imageSize = containerSize * LOGO_SCALE;

  return (
    <View
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={logoImage}
        style={[
          styles.image,
          {
            width: imageSize,
            height: imageSize,
          },
        ]}
      />
    </View>
  );
}