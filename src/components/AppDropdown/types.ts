import type { ReactNode } from "react";

export interface AppDropdownOption {
  label: string;
  onPress(): void;
  destructive?: boolean;
}

export interface AppDropdownProps {
  options: AppDropdownOption[];
  children: ReactNode;
}