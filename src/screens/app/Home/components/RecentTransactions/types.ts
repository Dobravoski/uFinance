import type { Transaction } from "@/domains/transactions/domains";

export interface RecentTransactionsProps {
  transactions: Transaction[];
  onViewAll(): void;
}