import { ScreenContainer } from '@/components';
import { TransactionForm, useTransactions } from '@/domains/transactions';
import { useToast } from '@/contexts/ToastContext';
import type { CreateTransaction } from '@/domains/transactions/schemas';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TransactionStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<TransactionStackParamList, 'CreateTransaction'>;

export function CreateTransactionScreen({ navigation }: Props) {
  const { createTransaction } = useTransactions();
  const { showToast } = useToast();

const handleSubmit = async (data: CreateTransaction) => {
  try {
    await createTransaction(data);
    showToast({type: 'success', message: 'Transação criada com sucesso'});
    navigation.goBack();
  } catch {
    showToast({type: 'error', message: 'Não foi possível criar a transação'});
  }
};

  return (
    <ScreenContainer>
      <TransactionForm onSubmit={handleSubmit} submitLabel="Criar transação"/>
    </ScreenContainer>
  );
}