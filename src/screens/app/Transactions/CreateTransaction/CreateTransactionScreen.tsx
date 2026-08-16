import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScreenContainer } from '@/components';
import { TransactionForm, useTransactions } from '@/domains/transactions';
import { useToast } from '@/contexts/ToastContext';
import type { CreateTransaction } from '@/domains/transactions/schemas';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TransactionStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<TransactionStackParamList, 'CreateTransaction'>;

export function CreateTransactionScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const { createTransaction } = useTransactions();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (data: CreateTransaction) => {
  setIsSubmitting(true);

  try {
    await createTransaction(data);
    showToast({type: 'success', message: t('transactions.create.toast.success')});
    navigation.goBack();
  } catch {
    showToast({type: 'error', message: t('transactions.create.toast.error')});
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <ScreenContainer>
      <TransactionForm onSubmit={handleSubmit} submitLabel={t('transactions.create.submitButton')} loading={isSubmitting}/>
    </ScreenContainer>
  );
}