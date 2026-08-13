import type { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type RootStackParamList = {
  AppDrawer: undefined;
  Transactions: NavigatorScreenParams<TransactionStackParamList>;
};

export type AppDrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type TransactionStackParamList = {
  TransactionList: undefined;
  CreateTransaction: undefined;
  EditTransaction: {transactionId: string};
};