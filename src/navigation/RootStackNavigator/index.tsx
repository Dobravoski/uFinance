import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';
import DrawerNavigator from '../DrawerNavigator';
import TransactionStackNavigator from '../TransactionStackNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppDrawer" component={DrawerNavigator} />
      <Stack.Screen name="Transactions" component={TransactionStackNavigator} />
    </Stack.Navigator>
  );
}