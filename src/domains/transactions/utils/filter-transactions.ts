import type { Transaction } from '../domains';

export interface TransactionFilters {
  type?: 'all' | 'income' | 'expense';
  startDate?: Date;
  endDate?: Date;
}

function getStartOfDay(date: Date): Date {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  return startOfDay;
}

function getEndOfDay(date: Date): Date {
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);
  return endOfDay;
}

export function filterTransactions(transactions: Transaction[], filters: TransactionFilters): Transaction[] {
  return transactions.filter((transaction) => {
    if (filters.type && filters.type !== 'all' && transaction.type !== filters.type) {
      return false;
    }
    if (filters.startDate && transaction.date < getStartOfDay(filters.startDate)) {
      return false;
    }
    if (filters.endDate && transaction.date > getEndOfDay(filters.endDate)) {
      return false;
    }
    return true;
  });
}
