import { createContext, useCallback, useState, useMemo, type PropsWithChildren, useEffect } from 'react';
import { useAuth } from '@/hooks';
import { TransactionRepository } from '../../repositories';
import { TransactionService } from '../../services';
import { sortTransactions } from '../../utils/sort-transactions';
import type { Transaction } from '../../domains';
import type { CreateTransaction } from '../../schemas';
import type { TransactionContextValue } from './types';

const repository = new TransactionRepository();
const service = new TransactionService(repository);

export const TransactionContext = createContext<TransactionContextValue | null>(null);

export function TransactionProvider({children}: PropsWithChildren) {
  const { user } = useAuth();

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const loadTransactions = useCallback(async () => {
    if (!user) {
      setTransactions([]);
      return;
    }

    setIsInitializing(true);

    try {
      const transactions = await service.getAll(user.id);
      setTransactions(sortTransactions(transactions));
    } catch (error) {
      console.error("Failed to load transactions", error);
      setTransactions([]);
    } finally {
      setIsInitializing(false);
    }
  }, [user]);

  const createTransaction = useCallback(
    async (data: CreateTransaction) => {
      if (!user) {
        throw new Error('User not authenticated.');
      }

      setIsMutating(true);

      try {
        const transaction = await service.create(user.id, data);
        setTransactions((previous) => sortTransactions([...previous, transaction]));
      } finally {
        setIsMutating(false);
      }
    }, [user]
  );

  const updateTransaction = useCallback(
    async (transactionId: string, data: Partial<CreateTransaction>) => {
      if (!user) {
        throw new Error('User not authenticated.');
      }

      setIsMutating(true);

      try {
        const transaction = await service.update(user.id, transactionId, data);
        setTransactions((previous) => sortTransactions(previous.map((item) => item.id === transaction.id ? transaction : item)));
      } finally {
        setIsMutating(false);
      }
    }, [user]
  );

  const deleteTransaction = useCallback(
    async (transactionId: string) => {
      if (!user) {
        throw new Error('User not authenticated.');
      }

      setIsMutating(true);

      try {
        await service.delete(user.id, transactionId);
        setTransactions((previous) => previous.filter((transaction) => transaction.id !== transactionId));
      } finally {
        setIsMutating(false);
      }
    }, [user]
  );

  useEffect(() => {
    if (!user) {
      setTransactions([]);
    }
  }, [user]);

  useEffect(() => {
    void loadTransactions();
  }, [loadTransactions]);

  const value = useMemo(() => ({transactions, isInitializing, isMutating, loadTransactions, createTransaction, updateTransaction, deleteTransaction}), [transactions, isInitializing, isMutating, loadTransactions, createTransaction, updateTransaction, deleteTransaction]);

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
}