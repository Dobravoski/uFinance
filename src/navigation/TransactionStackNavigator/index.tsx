import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import type { TransactionStackParamList } from '../types';
import {TransactionsScreen, CreateTransactionScreen, EditTransactionScreen } from '@/screens/app';

const Stack = createNativeStackNavigator<TransactionStackParamList>();

export default function TransactionStackNavigator() {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionList" component={TransactionsScreen} options={{ title: t('transactions.list.headerTitle')}} />
      <Stack.Screen name="CreateTransaction" component={CreateTransactionScreen} options={{ title: t('transactions.create.headerTitle')}} />
      <Stack.Screen name="EditTransaction" component={EditTransactionScreen} options={{ title: t('transactions.edit.headerTitle')}} />
    </Stack.Navigator>
  );
}