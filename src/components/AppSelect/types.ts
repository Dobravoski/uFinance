import type { FormFieldProps } from "../FormField";

export interface AppSelectOption<TValue extends string> {
  label: string;
  value: TValue;
}

export interface AppSelectProps<TValue extends string> extends Omit<FormFieldProps, "children" | "label"> {
  label: string;
  value?: TValue;
  options: readonly AppSelectOption<TValue>[];
  onValueChange(value: TValue): void;
  placeholder?: string;
}
