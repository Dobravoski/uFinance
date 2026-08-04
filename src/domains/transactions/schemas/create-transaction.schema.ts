import { z } from 'zod';
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES } from '../constants';

const MAX_DESCRIPTION_LENGTH = 200;

const baseTransactionSchema = z.object({
  amount: z.number({error: 'O valor deve ser um número.',}).positive('O valor deve ser maior que zero.'),
  description: z.string().trim().max(MAX_DESCRIPTION_LENGTH,`A descrição deve ter no máximo ${MAX_DESCRIPTION_LENGTH} caracteres.`).optional(),
  date: z.date({error: 'Data inválida.'}),
});

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

export type CreateTransaction = z.infer<typeof createTransactionSchema>;