import { TRANSACTION_TYPES } from "../constants/transaction-types";

export type TransactionType = (typeof TRANSACTION_TYPES)[number];