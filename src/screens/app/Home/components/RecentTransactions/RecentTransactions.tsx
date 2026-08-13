import { Pressable, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { AppText } from "@/components";
import { TransactionItem } from "@/domains/transactions";
import { styles } from "./styles";
import type { RecentTransactionsProps } from "./types";

const RECENT_TRANSACTIONS_LIMIT = 3;

export function RecentTransactions({transactions, onViewAll}: RecentTransactionsProps) {
  const recentTransactions = [...transactions].sort((first, second) => second.date.getTime() - first.date.getTime()).slice(0, RECENT_TRANSACTIONS_LIMIT);
  const hasTransactions = recentTransactions.length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText variant="title">
          Transações recentes
        </AppText>

        {hasTransactions && (
          <Pressable onPress={onViewAll} style={styles.viewAllButton}>
            <AppText variant="label" style={styles.viewAllText}>
              Ver todas
            </AppText>

            <ChevronRight style={styles.viewAllIcon} />
          </Pressable>
        )}
      </View>

      {hasTransactions ? (
        <View style={styles.list}>
          {recentTransactions.map((transaction) => (<TransactionItem key={transaction.id} transaction={transaction} />))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <AppText variant="label" style={styles.emptyTitle}>
            Nenhuma transação ainda
          </AppText>

          <AppText variant="body" style={styles.emptyMessage}>
            Adicione sua primeira transação para começar.
          </AppText>
        </View>
      )}
    </View>
  );
}