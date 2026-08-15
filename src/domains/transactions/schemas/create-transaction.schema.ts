import { z } from 'zod';
import type { TFunction } from 'i18next';
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from '../constants';
import { createBaseTransactionSchema } from './base-transaction.schema';

export function createCreateTransactionSchema(t: TFunction) {
  const baseTransactionSchema = createBaseTransactionSchema(t);

  const incomeTransactionSchema = baseTransactionSchema.extend({
    type: z.literal('income'),
    category: z.enum(INCOME_CATEGORIES),
  });

  const expenseTransactionSchema = baseTransactionSchema.extend({
    type: z.literal('expense'),
    category: z.enum(EXPENSE_CATEGORIES),
  });

  return z.discriminatedUnion('type', [
    incomeTransactionSchema,
    expenseTransactionSchema,
  ]);
}

export type CreateTransaction = z.output<ReturnType<typeof createCreateTransactionSchema>>;
