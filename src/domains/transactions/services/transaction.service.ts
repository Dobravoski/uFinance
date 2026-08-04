import type { Transaction } from '../domains';
import type { CreateTransaction } from '../schemas';
import { TransactionRepository } from '../repositories';

export class TransactionService {
  constructor(private readonly repository: TransactionRepository) {}

  create(userId: string, data: CreateTransaction): Promise<Transaction> {
    return this.repository.create(userId, data);
  }

  getById(userId: string, transactionId: string): Promise<Transaction | null> {
    return this.repository.getById(userId, transactionId);
  }

  getAll(userId: string): Promise<Transaction[]> {
    return this.repository.getAll(userId);
  }

  update(userId: string, transactionId: string, data: Partial<CreateTransaction>): Promise<Transaction> {
    return this.repository.update(userId, transactionId, data);
  }

  delete(userId: string, transactionId: string): Promise<void> {
    return this.repository.delete(userId, transactionId);
  }
}