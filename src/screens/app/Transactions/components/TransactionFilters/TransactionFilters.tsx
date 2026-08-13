import { Pressable, View } from "react-native";
import { AppDatePicker, AppText, SegmentedControl } from "@/components";
import { styles } from "./styles";
import type { TransactionFiltersProps, TransactionTypeFilter } from "./types";

const TYPE_OPTIONS: readonly {label: string; value: TransactionTypeFilter}[] = [
  {label: "Todas", value: "all"},
  {label: "Receitas", value: "income"},
  {label: "Despesas", value: "expense"},
];

export function TransactionFilters({type, startDate, endDate, onTypeChange, onStartDateChange, onEndDateChange, onClear }: TransactionFiltersProps) {
  const hasFilters = type !== "all" || startDate !== undefined || endDate !== undefined;

  return (
    <View style={styles.container}>
      <View style={styles.typeHeader}>
        <AppText variant="label" style={styles.typeLabel}>
          Tipo
        </AppText>

        {hasFilters && (
          <Pressable onPress={onClear} hitSlop={8}>
            <AppText variant="body" style={styles.clearText}>
              Limpar
            </AppText>
          </Pressable>
        )}
      </View>

      <SegmentedControl label="" value={type} options={TYPE_OPTIONS} onValueChange={onTypeChange} />

      <View style={styles.dateRow}>
        <AppDatePicker
          label="Data inicial"
          value={startDate}
          onChange={onStartDateChange}
          placeholder="Data inicial"
          containerStyle={styles.dateField}
        />

        <AppDatePicker
          label="Data final"
          value={endDate}
          onChange={onEndDateChange}
          placeholder="Data final"
          containerStyle={styles.dateField}
        />
      </View>
    </View>
  );
}