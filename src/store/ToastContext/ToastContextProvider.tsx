import { type ReactNode, useRef, useMemo } from 'react';

import { Toast } from 'primereact/toast';
import { IShowToast, ToastContextValue } from 'types';
import { ToastContext } from './ToastContext';

type ToastContextProviderProps = {
  children: ReactNode;
};

export default function ToastContextProvider({
  children,
}: ToastContextProviderProps) {
  const toast = useRef<Toast>(null);

  const ctx: ToastContextValue = useMemo(
    () => ({
      showToast(newToast: IShowToast) {
        if (toast.current !== null)
          toast.current.show({
            severity: newToast.severity,
            summary: newToast.summary,
            detail: newToast.detail,
            life: newToast.life || 3000,
          });
      },
    }),
    []
  );

  return (
    <ToastContext.Provider value={ctx}>
      <Toast ref={toast} />
      {children}
    </ToastContext.Provider>
  );
}
