import { z } from 'zod';
import {EXPENSE_CATEGORIES, INCOME_CATEGORIES } from '../constants';
import type { CreateTransaction } from './create-transaction.schema';
import { baseTransactionSchema } from './base-transaction.schema';

export const transactionFormSchema = baseTransactionSchema
  .extend({type: z.enum(['income', 'expense']), category: z.string().optional()})
  .superRefine((data, ctx) => {
    if (!data.category) {
      ctx.addIssue({
        code: 'custom',
        path: ['category'],
        message: 'Selecione uma categoria.',
      });
      return;
    }

    if (data.type === 'income' && !INCOME_CATEGORIES.includes(data.category as (typeof INCOME_CATEGORIES)[number])) {
      ctx.addIssue({
        code: 'custom',
        path: ['category'],
        message: 'Categoria inválida para uma receita.',
      });
      return;
    }

    if (data.type === 'expense' && !EXPENSE_CATEGORIES.includes(data.category as (typeof EXPENSE_CATEGORIES)[number])) {
      ctx.addIssue({
        code: 'custom',
        path: ['category'],
        message: 'Categoria inválida para uma despesa.',
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

export type TransactionFormData = z.input<typeof transactionFormSchema>;
export type TransactionFormValues = z.output<typeof transactionFormSchema>;