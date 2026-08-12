export type ToastType = 'success' | 'error';

export interface ShowToastParams {
  type: ToastType;
  message: string;
}

export interface ToastContextData {
  showToast(params: ShowToastParams): void;
}