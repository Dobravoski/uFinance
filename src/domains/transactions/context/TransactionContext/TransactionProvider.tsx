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
  const [isLoading, setIsLoading] = useState(false);

  const loadTransactions = useCallback(async () => {
    if (!user) {
      setTransactions([]);
      return;
    }

    setIsLoading(true);

    try {
      const transactions = await service.getAll(user.id);
      setTransactions(sortTransactions(transactions));
    } catch (error) {
      console.error("Failed to load transactions", error);
      setTransactions([]);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const createTransaction = useCallback(
    async (data: CreateTransaction) => {
      if (!user) {
        throw new Error('User not authenticated.');
      }

      setIsLoading(true);

      try {
        const transaction = await service.create(user.id, data);
        setTransactions((previous) => sortTransactions([...previous, transaction]));
      } finally {
        setIsLoading(false);
      }
    }, [user]
  );

  const updateTransaction = useCallback(
    async (transactionId: string, data: Partial<CreateTransaction>) => {
      if (!user) {
        throw new Error('User not authenticated.');
      }

      setIsLoading(true);

      try {
        const transaction = await service.update(user.id, transactionId, data);
        setTransactions((previous) => sortTransactions(previous.map((item) => item.id === transaction.id ? transaction : item)));
      } finally {
        setIsLoading(false);
      }
    }, [user]
  );

  const deleteTransaction = useCallback(
    async (transactionId: string) => {
      if (!user) {
        throw new Error('User not authenticated.');
      }

      setIsLoading(true);

      try {
        await service.delete(user.id, transactionId);
        setTransactions((previous) => previous.filter((transaction) => transaction.id !== transactionId));
      } finally {
        setIsLoading(false);
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

  const value = useMemo(() => ({transactions, isLoading, loadTransactions, createTransaction, updateTransaction, deleteTransaction}), [transactions, isLoading, loadTransactions, createTransaction, updateTransaction, deleteTransaction]);

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
}