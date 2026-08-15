import { useState } from "react";
import { Pressable, View } from "react-native";
import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import { AppDropdown, AppText } from "@/components";
import { getExpenseCategoryLabels, getIncomeCategoryLabels } from "@/domains/transactions/constants";
import { useThemedStyles, useLanguage } from "@/hooks";
import { createStyles, iconProps } from "./styles";
import type { TransactionItemProps } from "./types";

export function TransactionItem({ transaction, onEdit, onDelete }: TransactionItemProps) {
  const styles = useThemedStyles(createStyles);
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const incomeCategoryLabels = getIncomeCategoryLabels(t);
  const expenseCategoryLabels = getExpenseCategoryLabels(t);
  const categoryLabel = transaction.type === "income" ? incomeCategoryLabels[transaction.category] ?? transaction.category : expenseCategoryLabels[transaction.category] ?? transaction.category;
  const formattedDate = transaction.date instanceof Date ? transaction.date.toLocaleDateString(locale) : "--/--/----";
  const amount = typeof transaction.amount === "number" && Number.isFinite(transaction.amount) ? transaction.amount : Number(transaction.amount) || 0;
  const formattedAmount = amount.toLocaleString(locale, {style: "currency", currency: "BRL"});

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
              <AppDropdown options={[...(onEdit ? [{label: t("common.edit"), onPress: handleEdit}] : []), ...(onDelete ? [{label: t("common.delete"), onPress: handleDelete, destructive: true}] : [])]}>
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