import { View } from "react-native";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react-native";
import { AppText } from "@/components";
import { styles } from "./styles";
import type { MonthlySummaryProps } from "./types";

export function MonthlySummary({income, expense}: MonthlySummaryProps) {
  const formattedIncome = income.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
  const formattedExpense = expense.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <ArrowUpRight style={styles.incomeIcon} />

          <AppText variant="caption">
            Receitas
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
            Despesas
          </AppText>
        </View>

        <AppText variant="label" style={styles.expenseValue}>
          {formattedExpense}
        </AppText>
      </View>
    </View>
  );
}