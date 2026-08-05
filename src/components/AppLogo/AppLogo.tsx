import { Image, View } from "react-native";
import logoImage from "@/assets/unect-logo.png";
import { metrics } from "@/theme";
import { logoSizes } from "./sizes";
import type { AppLogoProps } from "./types";
import { styles } from "./styles";

const DEFAULT_SIZE = "lg";

export function AppLogo({ size = DEFAULT_SIZE }: AppLogoProps) {
  const containerSize = logoSizes[size];
  const imageSize = containerSize * metrics.logoScale;

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
