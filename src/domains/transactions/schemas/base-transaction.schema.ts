import { z } from 'zod';
import type { TFunction } from 'i18next';

export const MAX_DESCRIPTION_LENGTH = 200;

export function createBaseTransactionSchema(t: TFunction) {
  return z.object({
    amount: z.string().trim().min(1, t('validation.transaction.amountRequired')).transform((value) => Number(value.replace(',', '.'))).refine((value) => Number.isFinite(value), t('validation.transaction.amountInvalid')).refine((value) => value > 0, t('validation.transaction.amountPositive')),
    description: z.preprocess((value) => {
      if (typeof value === 'string' && value.trim() === '') {
        return undefined;
      }
      return value;
    }, z.string().trim().max(MAX_DESCRIPTION_LENGTH, t('validation.transaction.descriptionMaxLength', { max: MAX_DESCRIPTION_LENGTH })).optional()),
    date: z.date({ error: t('validation.transaction.dateInvalid') }),
  });
}
