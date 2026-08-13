import type { CompositeScreenProps } from "@react-navigation/native";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppDrawerParamList, RootStackParamList } from "@/navigation/types";

export type HomeScreenProps = CompositeScreenProps<DrawerScreenProps<AppDrawerParamList, "Home">, NativeStackScreenProps<RootStackParamList>>;