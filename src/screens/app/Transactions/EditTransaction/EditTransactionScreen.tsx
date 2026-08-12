import { ActivityIndicator, View } from "react-native";
import { ScreenContainer } from "@/components";
import { TransactionForm, useTransactions } from "@/domains/transactions";
import type { CreateTransaction } from "@/domains/transactions/schemas";
import { styles } from "./styles";
import type { EditTransactionScreenProps } from "./types";

export function EditTransactionScreen({navigation, route}: EditTransactionScreenProps) {
  const {transactions, isLoading, updateTransaction} = useTransactions();
  const transaction = transactions.find((item) => item.id === route.params.transactionId);

  async function handleSubmit(data: CreateTransaction) {
    await updateTransaction(route.params.transactionId, data);
    navigation.goBack();
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