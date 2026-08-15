import type { TFunction } from "i18next";
import { EXPENSE_CATEGORIES } from "./expense-categories";
import { INCOME_CATEGORIES } from "./income-categories";
import { TRANSACTION_TYPES } from "./transaction-types";

function createOptions<T extends string>(values: readonly T[], labels: Readonly<Record<T, string>>): ReadonlyArray<{ label: string; value: T }> {
  return values.map((value) => ({
    label: labels[value],
    value,
  }));
}

export function getTransactionTypeLabels(t: TFunction): Readonly<Record<(typeof TRANSACTION_TYPES)[number], string>> {
  return {
    income: t("transactions.types.income"),
    expense: t("transactions.types.expense"),
  };
}

export function getIncomeCategoryLabels(t: TFunction): Readonly<Record<(typeof INCOME_CATEGORIES)[number], string>> {
  return {
    salary: t("transactions.categories.income.salary"),
    freelance: t("transactions.categories.income.freelance"),
    investment: t("transactions.categories.income.investment"),
    gift: t("transactions.categories.income.gift"),
    other: t("common.other"),
  };
}

export function getExpenseCategoryLabels(t: TFunction): Readonly<Record<(typeof EXPENSE_CATEGORIES)[number], string>> {
  return {
    food: t("transactions.categories.expense.food"),
    transport: t("transactions.categories.expense.transport"),
    housing: t("transactions.categories.expense.housing"),
    health: t("transactions.categories.expense.health"),
    education: t("transactions.categories.expense.education"),
    leisure: t("transactions.categories.expense.leisure"),
    shopping: t("transactions.categories.expense.shopping"),
    bills: t("transactions.categories.expense.bills"),
    other: t("common.other"),
  };
}

export function getTransactionTypeOptions(t: TFunction) {
  return createOptions(TRANSACTION_TYPES, getTransactionTypeLabels(t));
}

export function getIncomeCategoryOptions(t: TFunction) {
  return createOptions(INCOME_CATEGORIES, getIncomeCategoryLabels(t));
}

export function getExpenseCategoryOptions(t: TFunction) {
  return createOptions(EXPENSE_CATEGORIES, getExpenseCategoryLabels(t));
}
