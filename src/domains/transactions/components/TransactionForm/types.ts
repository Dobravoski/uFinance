import type { CreateTransaction } from '../../schemas';

export interface TransactionFormData {
  type: CreateTransaction['type'];
  amount: string;
  category?: CreateTransaction['category'];
  date: Date;
  description: string;
}

export interface TransactionFormProps {
  submitLabel: string;
  loading?: boolean;
  initialValues?: Partial<CreateTransaction>;
  onSubmit(data: CreateTransaction): void;
}