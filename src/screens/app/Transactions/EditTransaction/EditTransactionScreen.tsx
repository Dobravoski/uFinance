import { ActivityIndicator, View } from "react-native";
import { useTranslation } from "react-i18next";
import { ScreenContainer } from "@/components";
import { TransactionForm, useTransactions } from "@/domains/transactions";
import { useToast } from "@/contexts/ToastContext";
import type { CreateTransaction } from "@/domains/transactions/schemas";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles } from "./styles";
import type { EditTransactionScreenProps } from "./types";

export function EditTransactionScreen({navigation, route}: EditTransactionScreenProps) {
  const styles = useThemedStyles(createStyles);
  const { t } = useTranslation();
  const {transactions, isLoading, updateTransaction} = useTransactions();
  const {showToast} = useToast();
  const transaction = transactions.find((item) => item.id === route.params.transactionId);

  async function handleSubmit(data: CreateTransaction) {
    try {
      await updateTransaction(route.params.transactionId, data);
      showToast({type: 'success', message: t('transactions.edit.toast.success')});
      navigation.goBack();
    } catch {
      showToast({type: 'error', message: t('transactions.edit.toast.error')});
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
      <TransactionForm initialValues={transaction} onSubmit={handleSubmit} submitLabel={t('common.saveChanges')} />
    </ScreenContainer>
  );
}