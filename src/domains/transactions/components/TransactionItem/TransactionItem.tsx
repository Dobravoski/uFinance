import { useState } from "react";
import { Pressable, View } from "react-native";
import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react-native";
import { AppText } from "@/components";
import { EXPENSE_CATEGORY_LABELS, INCOME_CATEGORY_LABELS } from "@/domains/transactions/constants";
import { styles } from "./styles";
import type { TransactionItemProps } from "./types";

export function TransactionItem({transaction, onEdit, onDelete}: TransactionItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const categoryLabel = transaction.type === "income" ? INCOME_CATEGORY_LABELS[transaction.category] : EXPENSE_CATEGORY_LABELS[transaction.category];
  const formattedDate = transaction.date instanceof Date ? transaction.date.toLocaleDateString("pt-BR") : "--/--/----";

  const formattedAmount = transaction.amount.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

  const hasDescription = Boolean(transaction.description);
  const hasActions = Boolean(onEdit || onDelete);

  function handleToggleExpanded() {
    if (!hasDescription) {
      return;
    }
    setIsExpanded((previous) => !previous);
  }

  function handleToggleActions() {
    setShowActions((previous) => !previous);
    setIsExpanded(false);
  }

  function handleEdit() {
    setShowActions(false);
    onEdit?.();
  }

  function handleDelete() {
    setShowActions(false);
    onDelete?.();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.mainContent}>
          <AppText variant="label">
            {categoryLabel}
          </AppText>

          <AppText variant="caption">
            {formattedDate}
          </AppText>
        </View>

        <View style={styles.rightContent}>
          <AppText variant="label" style={transaction.type === "income" ? styles.incomeAmount : styles.expenseAmount}>
            {transaction.type === "income" ? `+ ${formattedAmount}` : `- ${formattedAmount}`}
          </AppText>

          {hasActions && (
            <Pressable onPress={handleToggleActions} style={styles.iconButton}>
              <MoreVertical style={styles.icon} />
            </Pressable>
          )}

          {hasDescription && (
            <Pressable onPress={handleToggleExpanded} style={styles.iconButton}>
              {isExpanded ? (<ChevronUp style={styles.icon} />) : (<ChevronDown style={styles.icon} />)}
            </Pressable>
          )}
        </View>
      </View>

      {showActions && hasActions && (
        <View style={styles.actions}>
          {onEdit && (
            <Pressable onPress={handleEdit} style={styles.actionButton}>
              <AppText variant="label">
                Editar
              </AppText>
            </Pressable>
          )}

          {onDelete && (
            <Pressable onPress={handleDelete} style={styles.actionButton}>
              <AppText variant="label" style={styles.deleteAction}>
                Excluir
              </AppText>
            </Pressable>
          )}
        </View>
      )}

      {isExpanded && transaction.description && (
        <View style={styles.descriptionContainer}>
          <AppText variant="body">
            {transaction.description}
          </AppText>
        </View>)}
    </View>
  );
}
