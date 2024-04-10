type ToastSeverity = 'error' | 'info' | 'success' | 'warn';

export interface IShowToast {
  severity: ToastSeverity;
  summary: string;
  detail: string;
  life?: number;
}

export type ToastContextValue = {
  showToast: (toast: IShowToast) => void;
};
