import type { FormFieldProps } from "../FormField";

export interface SegmentedControlOption<TValue extends string> {
  label: string;
  value: TValue;
}

export interface SegmentedControlProps<TValue extends string> extends Omit<FormFieldProps, "children"> {
  value: TValue;
  options: readonly SegmentedControlOption<TValue>[];
  onValueChange(value: TValue): void;
}
