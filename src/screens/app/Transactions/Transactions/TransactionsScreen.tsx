import { useState } from "react";
import {ActivityIndicator, FlatList, View } from "react-native";
import { AppButton, AppConfirmationModal, AppText } from "@/components";
import { TransactionItem, useTransactions } from "@/domains/transactions";
import { useToast } from "@/contexts/ToastContext";
import { styles } from "./styles";
import type { TransactionsScreenProps } from "./types";

export function TransactionsScreen({navigation}: TransactionsScreenProps) {
  const {transactions, isLoading, deleteTransaction } = useTransactions();
  const { showToast } = useToast();
  const [transactionToDelete, setTransactionToDelete] = useState<string | null>(null);

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
      showToast({type: 'success', message: 'Transação excluída com sucesso'});
      setTransactionToDelete(null);
    } catch {
      showToast({type: 'error', message: 'Não foi possível excluir a transação'});
    }
  }

  if (isLoading && transactions.length === 0) {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.loading} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(transaction) => transaction.id}
        renderItem={({ item }) => (<TransactionItem transaction={item} onEdit={() => handleEdit(item.id)} onDelete={() => handleDelete(item.id)} />)}
        contentContainerStyle={[styles.contentContainer, transactions.length > 0 && styles.listContent]}
        ListHeaderComponent={<AppButton title="Nova transação" onPress={handleCreate} style={styles.addButton} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <AppText variant="body" style={styles.emptyText}>
              Você ainda não possui transações.
            </AppText>
          </View>
        }
      />

      <AppConfirmationModal
        visible={transactionToDelete !== null}
        title="Excluir transação"
        message="Tem certeza que deseja excluir esta transação?"
        cancelLabel="Cancelar"
        confirmLabel="Excluir"
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
}