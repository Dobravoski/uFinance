import { View } from "react-native";
import { styles } from "./styles";
import { useAuth } from "@/hooks/useAuth";
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from "@react-navigation/drawer";
import { User, Settings, LogOut } from "lucide-react-native";

export function DrawerContent(props: DrawerContentComponentProps) {

    const { signOut } = useAuth();

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="Perfil"
                icon={({color, size}) => (<User color={color} size={size} />)}
                style={styles.drawerItem}
                labelStyle={styles.label}
                onPress={() => props.navigation.navigate("Profile")}
            />

            <DrawerItem
                label="Configurações"
                icon={({color, size}) => (<Settings color={color} size={size} />)}
                style={styles.drawerItem}
                labelStyle={styles.label}
                onPress={() => props.navigation.navigate("Settings")}
            />

            <View style={styles.divider} />

            <DrawerItem
                label="Sair"
                icon={({color, size}) => (<LogOut color={color} size={size} />)}
                style={styles.drawerItem}
                labelStyle={styles.label}
                onPress={signOut}
            />
        </DrawerContentScrollView>
    )
}
