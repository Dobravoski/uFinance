import { ActivityIndicator, View } from "react-native";
import { ScreenContainer } from "@/components";
import { TransactionForm, useTransactions } from "@/domains/transactions";
import { useToast } from "@/contexts/ToastContext";
import type { CreateTransaction } from "@/domains/transactions/schemas";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles } from "./styles";
import type { EditTransactionScreenProps } from "./types";

export function EditTransactionScreen({navigation, route}: EditTransactionScreenProps) {
  const styles = useThemedStyles(createStyles);
  const {transactions, isLoading, updateTransaction} = useTransactions();
  const {showToast} = useToast();
  const transaction = transactions.find((item) => item.id === route.params.transactionId);

  async function handleSubmit(data: CreateTransaction) {
    try {
      await updateTransaction(route.params.transactionId, data);
      showToast({type: 'success', message: 'Transação atualizada com sucesso'});
      navigation.goBack();
    } catch {
      showToast({type: 'error', message: 'Não foi possível atualizar a transação'});
    }
  }

  if (isLoading && !transaction) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!transaction) {
    return null;
  }

  return (
    <ScreenContainer>
      <TransactionForm initialValues={transaction} onSubmit={handleSubmit} submitLabel="Salvar alterações" />
    </ScreenContainer>
  );
}