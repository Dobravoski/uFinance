import { useState } from "react";
import { Pressable, View } from "react-native";
import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react-native";
import { AppDropdown, AppText } from "@/components";
import { EXPENSE_CATEGORY_LABELS, INCOME_CATEGORY_LABELS } from "@/domains/transactions/constants";
import { styles, iconProps } from "./styles";
import type { TransactionItemProps } from "./types";

export function TransactionItem({ transaction, onEdit, onDelete }: TransactionItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryLabel = transaction.type === "income" ? INCOME_CATEGORY_LABELS[transaction.category] ?? transaction.category : EXPENSE_CATEGORY_LABELS[transaction.category] ?? transaction.category;
  const formattedDate = transaction.date instanceof Date ? transaction.date.toLocaleDateString("pt-BR") : "--/--/----";
  const amount = typeof transaction.amount === "number" && Number.isFinite(transaction.amount) ? transaction.amount : Number(transaction.amount) || 0;
  const formattedAmount = amount.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

  const hasDescription = Boolean(transaction.description);
  const hasActions = Boolean(onEdit || onDelete);
  const isIncome = transaction.type === "income";

  function handleToggleExpanded() {
    if (!hasDescription) {
      return;
    }
    setIsExpanded((previous) => !previous);
  }

  function handleEdit() {
    onEdit?.();
  }

  function handleDelete() {
    onDelete?.();
  }

  return (
    <View style={styles.container}>
      <View style={[styles.accent, isIncome ? styles.incomeAccent : styles.expenseAccent]} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.mainContent}>
            <AppText variant="label" style={styles.category}>
              {categoryLabel}
            </AppText>

            <AppText variant="caption" style={styles.date}>
              {formattedDate}
            </AppText>
          </View>

          <View style={styles.rightContent}>
            <AppText variant="label" style={isIncome ? styles.incomeAmount : styles.expenseAmount}>
              {isIncome ? `+ ${formattedAmount}` : `- ${formattedAmount}`}
            </AppText>

            {hasActions && (
              <AppDropdown options={[...(onEdit ? [{label: "Editar", onPress: handleEdit}] : []), ...(onDelete ? [{label: "Excluir", onPress: handleDelete, destructive: true}] : [])]}>
                <MoreVertical style={styles.icon} {...iconProps} />
              </AppDropdown>
            )}

            {hasDescription && (
              <Pressable onPress={handleToggleExpanded} style={styles.iconButton} hitSlop={8}>
                {isExpanded ? (<ChevronUp style={styles.icon} {...iconProps} />) : (<ChevronDown style={styles.icon} {...iconProps} />)}
              </Pressable>
            )}
          </View>
        </View>

        {isExpanded && transaction.description && (
          <View style={styles.descriptionContainer}>
            <AppText variant="body" style={styles.description}>
              {transaction.description}
            </AppText>
          </View>
        )}
      </View>
    </View>
  );
}