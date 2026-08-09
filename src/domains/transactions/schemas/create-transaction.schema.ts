import { z } from 'zod';
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from '../constants';
import { baseTransactionSchema } from './base-transaction.schema';

const incomeTransactionSchema = baseTransactionSchema.extend({
  type: z.literal('income'),
  category: z.enum(INCOME_CATEGORIES),
});

const expenseTransactionSchema = baseTransactionSchema.extend({
  type: z.literal('expense'),
  category: z.enum(EXPENSE_CATEGORIES),
});

export const createTransactionSchema = z.discriminatedUnion('type', [
  incomeTransactionSchema,
  expenseTransactionSchema,
]);

export type CreateTransaction = z.output<typeof createTransactionSchema>;