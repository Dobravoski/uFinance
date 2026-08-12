import { ScreenContainer } from '@/components';
import { TransactionForm, useTransactions } from '@/domains/transactions';
import type { CreateTransaction } from '@/domains/transactions/schemas';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { TransactionStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<TransactionStackParamList, 'CreateTransaction'>;

export function CreateTransactionScreen({ navigation }: Props) {
  const { createTransaction } = useTransactions();

const handleSubmit = async (data: CreateTransaction) => {
  await createTransaction(data);
  navigation.goBack();
};

  return (
    <ScreenContainer>
      <TransactionForm onSubmit={handleSubmit} submitLabel="Criar transação"/>
    </ScreenContainer>
  );
}