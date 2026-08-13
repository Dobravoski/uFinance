import type { Transaction } from "../domains";

export interface MonthlyTransactionSummary {
  income: number;
  expense: number;
}

export function calculateBalance(transactions: Transaction[]): number {
  return transactions.reduce((balance, transaction) => {
    if (transaction.type === "income") {
      return balance + transaction.amount;
    }
    return balance - transaction.amount;
  }, 0);
}

export function calculateMonthlySummary(transactions: Transaction[], referenceDate: Date = new Date()): MonthlyTransactionSummary {
  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth();

  return transactions.reduce((summary, transaction) => {
      const transactionDate = transaction.date;

      if (transactionDate.getFullYear() !== year || transactionDate.getMonth() !== month) {
        return summary;
      }

      if (transaction.type === "income") {
        summary.income += transaction.amount;
      } else {
        summary.expense += transaction.amount;
      }

      return summary;
    }, {income: 0, expense: 0}
  );
}