import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '@/services/firebase/config';
import type { Transaction, ExpenseCategory, IncomeCategory } from '../domains';
import type { CreateTransaction } from '../schemas';

type BaseTransactionFirestore = Omit<Transaction, 'id' | 'date' | 'createdAt' | 'updatedAt' | 'type' | 'category'> & {
  date: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

type IncomeTransactionFirestore = BaseTransactionFirestore & {
  type: 'income';
  category: IncomeCategory;
};

type ExpenseTransactionFirestore = BaseTransactionFirestore & {
  type: 'expense';
  category: ExpenseCategory;
};

type TransactionFirestore = IncomeTransactionFirestore | ExpenseTransactionFirestore;

function toDate(value: unknown, fallback = new Date()) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }

  if (value && typeof value === 'object' && 'toDate' in value && typeof (value as { toDate: () => Date }).toDate === 'function') {
    const parsed = (value as { toDate: () => Date }).toDate();

    if (parsed instanceof Date && !Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  if (typeof value === 'string' || typeof value === 'number') {
    const parsed = new Date(value);

    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  return fallback;
}

function toAmount(value: unknown, fallback = 0) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string") {
    const parsed = Number(value.replace(",", "."));
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  return fallback;
}

function normalizeDescription(value: unknown) {
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

export class TransactionRepository {
  private transactionsCollection(userId: string) {
    return collection(db, 'users', userId, 'transactions');
  }

  private toFirestore(data: CreateTransaction, userId: string) {
    return {
      ...data,
      userId,
      description: normalizeDescription(data.description) ?? '',
      date: Timestamp.fromDate(data.date),
    };
  }

  private fromFirestore(id: string, data: TransactionFirestore): Transaction {
    const baseTransaction = {
        id,
        userId: data.userId,
        amount: toAmount(data.amount),
        description: normalizeDescription(data.description),
        date: toDate(data.date),
        createdAt: toDate(data.createdAt),
        updatedAt: toDate(data.updatedAt),
    };

    if (data.type === 'income') {
        return {
            ...baseTransaction,
            type: 'income',
            category: data.category,
        };
    }

    return {
        ...baseTransaction,
        type: 'expense',
        category: data.category,
    };
  }

  async create(userId: string, data: CreateTransaction): Promise<Transaction> {
    const now = Timestamp.now();

    const firestoreData = {
      ...this.toFirestore(data, userId),
      createdAt: now,
      updatedAt: now,
    };

    const docRef = await addDoc(this.transactionsCollection(userId), firestoreData);

    return this.fromFirestore(
      docRef.id,
      firestoreData,
    );
  }

  async getById(userId: string, transactionId: string): Promise<Transaction | null> {
    const docRef = doc(this.transactionsCollection(userId), transactionId);

    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return null;
    }

    return this.fromFirestore(snapshot.id, snapshot.data() as TransactionFirestore);
  }

  async getAll(userId: string): Promise<Transaction[]> {
    const snapshot = await getDocs(this.transactionsCollection(userId));
    return snapshot.docs.map((document) => this.fromFirestore(document.id, document.data() as TransactionFirestore));
  }

  async update(userId: string, transactionId: string, data: Partial<CreateTransaction>): Promise<Transaction> {
    const docRef = doc(this.transactionsCollection(userId), transactionId);

    const updatedData = {
      ...(data.amount !== undefined && {amount: data.amount}),
      ...(data.type && {type: data.type}),
      ...(data.category && {category: data.category}),
      ...(Object.prototype.hasOwnProperty.call(data, 'description') ? { description: normalizeDescription(data.description) ?? '' } : {}),
      ...(data.date && {date: Timestamp.fromDate(data.date)}),
      updatedAt: Timestamp.now(),
    };

    await updateDoc(docRef, updatedData);

    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      throw new Error('Transaction not found after update');
    }

    return this.fromFirestore(snapshot.id, snapshot.data() as TransactionFirestore);
  }

  async delete(userId: string, transactionId: string): Promise<void> {
    const docRef = doc(this.transactionsCollection(userId), transactionId);
    await deleteDoc(docRef);
  }
}
