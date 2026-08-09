import { z } from 'zod';

export const MAX_DESCRIPTION_LENGTH = 200;

export const baseTransactionSchema = z.object({
  amount: z.string().trim().min(1, 'Informe um valor.').transform((value) => Number(value.replace(',', '.'))).refine((value) => Number.isFinite(value), 'O valor deve ser um número.').refine((value) => value > 0, 'O valor deve ser maior que zero.'),
  description: z.string().trim().max(MAX_DESCRIPTION_LENGTH, `A descrição deve ter no máximo ${MAX_DESCRIPTION_LENGTH} caracteres.`).transform((value) => value || undefined).optional(),
  date: z.date({error: 'Data inválida.'}),
});