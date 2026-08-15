import { View } from "react-native";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { AppText } from "@/components";
import { useThemedStyles, useLanguage } from "@/hooks";
import { createStyles } from "./styles";
import type { MonthlySummaryProps } from "./types";

export function MonthlySummary({income, expense}: MonthlySummaryProps) {
  const styles = useThemedStyles(createStyles);
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const formattedIncome = income.toLocaleString(locale, {style: "currency", currency: "BRL"});
  const formattedExpense = expense.toLocaleString(locale, {style: "currency", currency: "BRL"});

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <ArrowUpRight style={styles.incomeIcon} />

          <AppText variant="caption">
            {t("common.income")}
          </AppText>
        </View>

        <AppText variant="label" style={styles.incomeValue}>
          {formattedIncome}
        </AppText>
      </View>

      <View style={styles.card}>
        <View style={styles.header}>
          <ArrowDownLeft style={styles.expenseIcon} />

          <AppText variant="caption">
            {t("common.expense")}
          </AppText>
        </View>

        <AppText variant="label" style={styles.expenseValue}>
          {formattedExpense}
        </AppText>
      </View>
    </View>
  );
}