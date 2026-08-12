export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AppDrawerParamList = {
  HomeTabs: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Transactions: undefined;
  Statistics: undefined;
};

export type TransactionStackParamList = {
  TransactionList: undefined;
  CreateTransaction: undefined;
  EditTransaction: {transactionId: string};
};