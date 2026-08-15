import { View } from "react-native";
import { useTranslation } from "react-i18next";
import { AppText } from "@/components";
import { useThemedStyles, useLanguage } from "@/hooks";
import { createStyles } from "./styles";
import type { BalanceCardProps } from "./types";

export function BalanceCard({ balance }: BalanceCardProps) {
  const styles = useThemedStyles(createStyles);
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const formattedBalance = balance.toLocaleString(locale, {style: "currency", currency: "BRL"});

  return (
    <View style={styles.container}>
      <AppText variant="caption" style={styles.label}>
        {t("home.balanceCard.label")}
      </AppText>

      <AppText variant="heading" style={styles.balance}>
        {formattedBalance}
      </AppText>
    </View>
  );
}