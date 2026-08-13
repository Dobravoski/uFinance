export type AppToastType = "success" | "error";

export interface AppToastProps {
  type: AppToastType;
  message?: string;
}