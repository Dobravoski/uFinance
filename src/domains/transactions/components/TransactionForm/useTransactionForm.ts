import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { transactionFormSchema, type TransactionFormData, type TransactionFormValues, type CreateTransaction } from '../../schemas';
import { EXPENSE_CATEGORY_OPTIONS, INCOME_CATEGORY_OPTIONS } from '../../constants';
import type { TransactionFormProps } from './types';

function getCategoryOptions(type: CreateTransaction['type']) {
  return type === 'income' ? INCOME_CATEGORY_OPTIONS : EXPENSE_CATEGORY_OPTIONS;
}

export function useTransactionForm({initialValues, onSubmit}: Pick<TransactionFormProps, 'initialValues' | 'onSubmit'>) {
  const previousTransactionType = useRef<CreateTransaction["type"]>(initialValues?.type ?? "expense");

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
  const categoryOptions = getCategoryOptions(transactionType);

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