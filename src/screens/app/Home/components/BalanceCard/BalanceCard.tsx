import { View } from "react-native";
import { AppText } from "@/components";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles } from "./styles";
import type { BalanceCardProps } from "./types";

export function BalanceCard({ balance }: BalanceCardProps) {
  const styles = useThemedStyles(createStyles);
  const formattedBalance = balance.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

  return (
    <View style={styles.container}>
      <AppText variant="caption" style={styles.label}>
        Saldo atual
      </AppText>

      <AppText variant="heading" style={styles.balance}>
        {formattedBalance}
      </AppText>
    </View>
  );
}