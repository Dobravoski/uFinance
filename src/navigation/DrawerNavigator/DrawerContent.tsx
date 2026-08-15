import { View } from "react-native";
import { createStyles } from "./styles";
import { useAuth } from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from "@react-navigation/drawer";
import { User, Settings, LogOut, Home } from "lucide-react-native";
import { AppAvatar, AppText } from "@/components";

export function DrawerContent(props: DrawerContentComponentProps) {
  const { signOut } = useAuth();
  const { user } = useUser();
  const styles = useThemedStyles(createStyles);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <AppAvatar imageUri={user?.photoURL} size="md" accessibilityLabel="Foto de perfil" />
        <View style={styles.userInfo}>
          <AppText variant="label">{user?.name}</AppText>
        </View>
      </View>

      <DrawerItem
        label="Home"
        icon={({ color, size }) => <Home color={color} size={size} />}
        style={styles.drawerItem}
        labelStyle={styles.label}
        onPress={() => props.navigation.navigate("Home")}
      />

      <DrawerItem
        label="Perfil"
        icon={({ color, size }) => <User color={color} size={size} />}
        style={styles.drawerItem}
        labelStyle={styles.label}
        onPress={() => props.navigation.navigate("Profile")}
      />

      <DrawerItem
        label="Configurações"
        icon={({ color, size }) => <Settings color={color} size={size} />}
        style={styles.drawerItem}
        labelStyle={styles.label}
        onPress={() => props.navigation.navigate("Settings")}
      />

      <View style={styles.divider} />

      <DrawerItem
        label="Sair"
        icon={({ color, size }) => <LogOut color={color} size={size} />}
        style={styles.drawerItem}
        labelStyle={styles.label}
        onPress={signOut}
      />
    </DrawerContentScrollView>
  );
}