import { Pressable, View } from "react-native";
import { useTranslation } from "react-i18next";
import { AppDatePicker, AppText, SegmentedControl } from "@/components";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles } from "./styles";
import type { TransactionFiltersProps, TransactionTypeFilter } from "./types";

export function TransactionFilters({type, startDate, endDate, onTypeChange, onStartDateChange, onEndDateChange, onClear }: TransactionFiltersProps) {
  const styles = useThemedStyles(createStyles);
  const { t } = useTranslation();
  const hasFilters = type !== "all" || startDate !== undefined || endDate !== undefined;

  const TYPE_OPTIONS: readonly {label: string; value: TransactionTypeFilter}[] = [
    {label: t("transactions.filters.typeAll"), value: "all"},
    {label: t("common.income"), value: "income"},
    {label: t("common.expense"), value: "expense"},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.typeHeader}>
        <AppText variant="label" style={styles.typeLabel}>
          {t("transactions.filters.typeLabel")}
        </AppText>

        {hasFilters && (
          <Pressable onPress={onClear} hitSlop={8}>
            <AppText variant="body" style={styles.clearText}>
              {t("transactions.filters.clear")}
            </AppText>
          </Pressable>
        )}
      </View>

      <SegmentedControl label="" value={type} options={TYPE_OPTIONS} onValueChange={onTypeChange} />

      <View style={styles.dateRow}>
        <AppDatePicker
          label={t("transactions.filters.startDateLabel")}
          value={startDate}
          onChange={onStartDateChange}
          placeholder={t("transactions.filters.startDatePlaceholder")}
          containerStyle={styles.dateField}
        />

        <AppDatePicker
          label={t("transactions.filters.endDateLabel")}
          value={endDate}
          onChange={onEndDateChange}
          placeholder={t("transactions.filters.endDatePlaceholder")}
          containerStyle={styles.dateField}
        />
      </View>
    </View>
  );
}