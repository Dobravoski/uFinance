import { useMemo, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useTranslation } from "react-i18next";
import { AppConfirmationModal, AppText } from "@/components";
import { AddTransactionFab } from "../../components";
import { TransactionItem, useTransactions } from "@/domains/transactions";
import { TransactionFilters } from "../components";
import { useToast } from "@/contexts/ToastContext";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles } from "./styles";
import type { TransactionsScreenProps } from "./types";
import type { TransactionTypeFilter } from "../components";

export function TransactionsScreen({navigation}: TransactionsScreenProps) {
  const styles = useThemedStyles(createStyles);
  const { t } = useTranslation();
  const {transactions, isLoading, deleteTransaction} = useTransactions();
  const { showToast } = useToast();

  const [transactionToDelete, setTransactionToDelete] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<TransactionTypeFilter>("all");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      if (typeFilter !== "all" && transaction.type !== typeFilter) {
        return false;
      }
      if (startDate && transaction.date < getStartOfDay(startDate)) {
        return false;
      }
      if (endDate && transaction.date > getEndOfDay(endDate)) {
        return false;
      }
      return true;
    });
  }, [transactions, typeFilter, startDate, endDate]);

  function handleCreate() {
    navigation.navigate("CreateTransaction");
  }

  function handleEdit(transactionId: string) {
    navigation.navigate("EditTransaction", {transactionId});
  }

  function handleDelete(transactionId: string) {
    setTransactionToDelete(transactionId);
  }

  function handleCancelDelete() {
    setTransactionToDelete(null);
  }

  async function handleConfirmDelete() {
    if (!transactionToDelete) {
      return;
    }

    try {
      await deleteTransaction(transactionToDelete);
      showToast({type: "success", message: t("transactions.list.toast.deleteSuccess")});
      setTransactionToDelete(null);
    } catch {
      showToast({type: "error", message: t("transactions.list.toast.deleteError")});
    }
  }

  function handleClearFilters() {
    setTypeFilter("all");
    setStartDate(undefined);
    setEndDate(undefined);
  }

  function getStartOfDay(date: Date): Date {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    return startOfDay;
  }

  function getEndOfDay(date: Date): Date {
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    return endOfDay;
  }

  const hasTransactions = transactions.length > 0;
  const hasFilteredTransactions = filteredTransactions.length > 0;

  if (isLoading && !hasTransactions) {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.loading} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTransactions}
        keyExtractor={(transaction) => transaction.id}
        renderItem={({ item }) => (<TransactionItem transaction={item} onEdit={() => handleEdit(item.id)} onDelete={() => handleDelete(item.id)} />)}
        contentContainerStyle={[styles.contentContainer, hasFilteredTransactions && styles.listContent]}
        ListHeaderComponent={
          <TransactionFilters
            type={typeFilter}
            startDate={startDate}
            endDate={endDate}
            onTypeChange={setTypeFilter}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            onClear={handleClearFilters}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <AppText variant="body" style={styles.emptyText}>
              {hasTransactions ? t("transactions.list.emptyFiltered") : t("transactions.list.emptyAll")}
            </AppText>
          </View>
        }
      />

      <AddTransactionFab onPress={handleCreate} />

      <AppConfirmationModal
        visible={transactionToDelete !== null}
        title={t("transactions.list.deleteModal.title")}
        message={t("transactions.list.deleteModal.message")}
        cancelLabel={t("common.cancel")}
        confirmLabel={t("common.delete")}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
}