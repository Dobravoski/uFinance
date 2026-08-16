import type { Transaction } from '../../domains';
import type { CreateTransaction } from '../../schemas';

export interface TransactionContextValue {
  transactions: Transaction[];
  isInitializing: boolean;
  isMutating: boolean;

  loadTransactions(): Promise<void>;

  createTransaction(data: CreateTransaction): Promise<void>;

  updateTransaction(transactionId: string, data: Partial<CreateTransaction>): Promise<void>;

  deleteTransaction(transactionId: string): Promise<void>;
}