import type { Transaction } from '../domains';

function getTransactionTime(transaction: Transaction) {
  return transaction.date instanceof Date ? transaction.date.getTime() : 0;
}

export function sortTransactions(transactions: Transaction[]): Transaction[] {
  return [...transactions].sort((a, b) => getTransactionTime(b) - getTransactionTime(a));
}
