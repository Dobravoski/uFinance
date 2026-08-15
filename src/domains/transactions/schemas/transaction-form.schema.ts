import { z } from 'zod';
import type { TFunction } from 'i18next';
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from '../constants';
import type { CreateTransaction } from './create-transaction.schema';
import { createBaseTransactionSchema } from './base-transaction.schema';

export function createTransactionFormSchema(t: TFunction) {
  return createBaseTransactionSchema(t)
    .extend({type: z.enum(['income', 'expense']), category: z.string().optional()})
    .superRefine((data, ctx) => {
      if (!data.category) {
        ctx.addIssue({
          code: 'custom',
          path: ['category'],
          message: t('validation.transaction.categoryRequired'),
        });
        return;
      }

      if (data.type === 'income' && !INCOME_CATEGORIES.includes(data.category as (typeof INCOME_CATEGORIES)[number])) {
        ctx.addIssue({
          code: 'custom',
          path: ['category'],
          message: t('validation.transaction.categoryInvalidIncome'),
        });
        return;
      }

      if (data.type === 'expense' && !EXPENSE_CATEGORIES.includes(data.category as (typeof EXPENSE_CATEGORIES)[number])) {
        ctx.addIssue({
          code: 'custom',
          path: ['category'],
          message: t('validation.transaction.categoryInvalidExpense'),
        });
      }
    })
    .transform((data): CreateTransaction => {
      if (data.type === 'income') {
        return {
          ...data,
          type: 'income',
          category: data.category as Extract<CreateTransaction, { type: 'income' }>['category'],
        };
      }

      return {
        ...data,
        type: 'expense',
        category: data.category as Extract<CreateTransaction, { type: 'expense' }>['category'],
      };
    });
}

export type TransactionFormData = z.input<ReturnType<typeof createTransactionFormSchema>>;
export type TransactionFormValues = z.output<ReturnType<typeof createTransactionFormSchema>>;
