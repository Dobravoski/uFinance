import type { ExpenseCategory } from './expense-category';
import type { IncomeCategory } from './income-category';

export interface BaseTransaction {
  id: string;
  userId: string;
  amount: number;
  description?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IncomeTransaction extends BaseTransaction {
  type: 'income';
  category: IncomeCategory;
}

export interface ExpenseTransaction extends BaseTransaction {
  type: 'expense';
  category: ExpenseCategory;
}

export type Transaction = IncomeTransaction | ExpenseTransaction;