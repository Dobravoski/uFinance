import type { Transaction } from '../domains';

export function sortTransactions(transactions: Transaction[]): Transaction[] {
  return [...transactions].sort((a, b) => b.date.getTime() - a.date.getTime());
}