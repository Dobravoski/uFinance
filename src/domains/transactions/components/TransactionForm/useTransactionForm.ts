import { useEffect, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTransactionFormSchema, type TransactionFormData, type TransactionFormValues, type CreateTransaction } from '../../schemas';
import { getExpenseCategoryOptions, getIncomeCategoryOptions } from '../../constants';
import type { TransactionFormProps } from './types';
import type { TFunction } from 'i18next';

function getCategoryOptions(type: CreateTransaction['type'], t: TFunction) {
  return type === 'income' ? getIncomeCategoryOptions(t) : getExpenseCategoryOptions(t);
}

export function useTransactionForm({initialValues, onSubmit}: Pick<TransactionFormProps, 'initialValues' | 'onSubmit'>) {
  const { t } = useTranslation();
  const previousTransactionType = useRef<CreateTransaction["type"]>(initialValues?.type ?? "expense");
  const transactionFormSchema = useMemo(() => createTransactionFormSchema(t), [t]);

  const {control, watch, setValue, reset, handleSubmit} = useForm<TransactionFormData, undefined, TransactionFormValues>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues: {
      type: initialValues?.type ?? 'expense',
      amount: initialValues?.amount?.toString() ?? '',
      category: initialValues?.category,
      date: initialValues?.date ?? new Date(),
      description: initialValues?.description ?? '',
    },
  });

  const transactionType = watch('type');
  const categoryOptions = getCategoryOptions(transactionType, t);

  useEffect(() => {
    if (!initialValues) {
      return;
    }

    previousTransactionType.current =
      initialValues.type ?? "expense";

    reset({
      type: initialValues.type ?? "expense",
      amount: initialValues.amount?.toString() ?? "",
      category: initialValues.category,
      date: initialValues.date ?? new Date(),
      description: initialValues.description ?? "",
    });
  }, [initialValues, reset]);

  useEffect(() => {
    if (previousTransactionType.current === transactionType) {
      return;
    }

    previousTransactionType.current = transactionType;

    setValue("category", undefined, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  }, [transactionType, setValue]);

  const submit = handleSubmit((data) => {
    onSubmit(data);
  });

  return {control, categoryOptions, submit};
}