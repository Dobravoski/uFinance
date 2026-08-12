import { EXPENSE_CATEGORIES } from "./expense-categories";
import { INCOME_CATEGORIES } from "./income-categories";
import { TRANSACTION_TYPES } from "./transaction-types";

function createOptions<T extends string>(values: readonly T[], labels: Readonly<Record<T, string>>): ReadonlyArray<{ label: string; value: T }> {
  return values.map((value) => ({
    label: labels[value],
    value,
  }));
}

export const TRANSACTION_TYPE_LABELS: Readonly<Record<(typeof TRANSACTION_TYPES)[number], string>> = {
  income: 'Receita',
  expense: 'Despesa',
};

export const INCOME_CATEGORY_LABELS: Readonly<Record<(typeof INCOME_CATEGORIES)[number], string>> = {
  salary: 'Salário',
  freelance: 'Freelance',
  investment: 'Investimento',
  gift: 'Presente',
  other: 'Outros',
};

export const EXPENSE_CATEGORY_LABELS: Readonly<Record<(typeof EXPENSE_CATEGORIES)[number], string>> = {
  food: 'Alimentação',
  transport: 'Transporte',
  housing: 'Moradia',
  health: 'Saúde',
  education: 'Educação',
  leisure: 'Lazer',
  shopping: 'Compras',
  bills: 'Contas',
  other: 'Outros',
};

export const TRANSACTION_TYPE_OPTIONS = createOptions(
  TRANSACTION_TYPES,
  TRANSACTION_TYPE_LABELS,
);

export const INCOME_CATEGORY_OPTIONS = createOptions(
  INCOME_CATEGORIES,
  INCOME_CATEGORY_LABELS,
);

export const EXPENSE_CATEGORY_OPTIONS = createOptions(
  EXPENSE_CATEGORIES,
  EXPENSE_CATEGORY_LABELS,
);