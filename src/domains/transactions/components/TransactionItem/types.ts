import type { Transaction } from "@/domains/transactions/domains";

export interface TransactionItemProps {
  transaction: Transaction;
  onEdit: () => void;
  onDelete: () => void;
}