import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { TransactionStackParamList } from '../types';
import {TransactionsScreen, CreateTransactionScreen, EditTransactionScreen } from '@/screens/app';

const Stack = createNativeStackNavigator<TransactionStackParamList>();

export default function TransactionStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionList" component={TransactionsScreen} />
      <Stack.Screen name="CreateTransaction" component={CreateTransactionScreen} />
      <Stack.Screen name="EditTransaction" component={EditTransactionScreen} />
    </Stack.Navigator>
  );
}