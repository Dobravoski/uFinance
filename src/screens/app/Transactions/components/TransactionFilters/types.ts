export type TransactionTypeFilter = "all" | "income" | "expense";

export interface TransactionDateFilter {
  startDate?: Date;
  endDate?: Date;
}

export interface TransactionFiltersProps {
  type: TransactionTypeFilter;
  startDate?: Date;
  endDate?: Date;
  onTypeChange(type: TransactionTypeFilter): void;
  onStartDateChange(date?: Date): void;
  onEndDateChange(date?: Date): void;
  onClear(): void;
}