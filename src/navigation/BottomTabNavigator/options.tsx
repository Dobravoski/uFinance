import type { RouteProp } from "@react-navigation/native";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { House, ArrowLeftRight, ChartColumn, type LucideIcon } from "lucide-react-native";
import { colors, spacing, shadows, metrics, textVariants } from "@/theme";
import type { BottomTabParamList } from "../types";

type ScreenOptionsProps = {
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>;
};

const TAB_ICONS: Record<keyof BottomTabParamList, LucideIcon> = {
  Home: House,
  Transactions: ArrowLeftRight,
  Statistics: ChartColumn,
};

export function screenOptions({route}: ScreenOptionsProps): BottomTabNavigationOptions {
  const Icon = TAB_ICONS[route.name];

  return {
    headerShown: false,

    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.textSecondary,

    tabBarShowLabel: true,

    tabBarStyle: {
      backgroundColor: colors.surface,

      borderTopColor: colors.border,
      borderTopWidth: 1,

      height: metrics.tabBarHeight,

      paddingTop: spacing.xs,
      paddingBottom: spacing.sm,

      ...shadows.sm,
    },

    tabBarLabelStyle: {
      ...textVariants.labelSmall,
    },

    tabBarIcon: ({ color, size }) => (
      <Icon color={color} size={size} />
    ),
  };
}