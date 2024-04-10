import { useContext } from 'react';
import { ToastContext } from '../ToastContext';

export function useToastContext() {
  const toastCtx = useContext(ToastContext);

  if (toastCtx === null) {
    throw new Error('Toast Context is null = that should not be the case!');
  }
  return toastCtx;
}
